import React, { Suspense, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei/core/Gltf.js';
import { useProgress } from '@react-three/drei/core/Progress.js';
import * as THREE from 'three';

function webGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!context) return false;
    context.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

function CampusModel({ onReady }) {
  const { scene } = useGLTF('/models/collegemodel.glb', false, false);
  const model = useMemo(() => scene.clone(true), [scene]);
  const { camera, size, invalidate } = useThree();

  const framing = useMemo(() => {
    model.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(model);
    const dimensions = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const scale = 6.4 / Math.max(dimensions.x, dimensions.y, dimensions.z);
    const height = dimensions.y * scale;
    return {
      scale,
      height,
      dimensions: dimensions.multiplyScalar(scale),
      position: [-center.x * scale, -bounds.min.y * scale, -center.z * scale],
    };
  }, [model]);

  useLayoutEffect(() => {
    const target = new THREE.Vector3(0, framing.height * 0.46, 0);
    const halfFov = THREE.MathUtils.degToRad(camera.fov ?? 34) / 2;
    const aspect = size.width / Math.max(size.height, 1);
    const direction = new THREE.Vector3(0, 0.28, 1).normalize();
    const horizontal = new THREE.Vector2(direction.x, direction.z).normalize();
    const elevation = Math.asin(direction.y);
    const halfWidth = (Math.abs(horizontal.y) * framing.dimensions.x + Math.abs(horizontal.x) * framing.dimensions.z) * 0.5;
    const halfHeight = (Math.cos(elevation) * framing.dimensions.y + Math.sin(elevation) * (Math.abs(horizontal.x) * framing.dimensions.x + Math.abs(horizontal.y) * framing.dimensions.z)) * 0.5;
    const distanceForHeight = halfHeight / Math.tan(halfFov);
    const halfHorizontalFov = Math.atan(Math.tan(halfFov) * aspect);
    const distanceForWidth = halfWidth / Math.tan(halfHorizontalFov);
    const distance = Math.max(distanceForHeight, distanceForWidth, 4) * 1.28;

    camera.position.copy(target).addScaledVector(direction, distance);
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    invalidate();
    onReady();
  }, [camera, framing, invalidate, onReady, size.height, size.width]);

  return <group position={framing.position} scale={framing.scale}>
    <primitive object={model} dispose={null} />
  </group>;
}

function ViewerLoading({ progress }) {
  const rounded = Math.round(progress);
  return <div className="building-loading" role="status" aria-live="polite">
    <span className="loading-arc" aria-hidden="true" />
    <span>Loading the MEC campus</span>
    <span className="loading-percent">{rounded}%</span>
  </div>;
}

function ViewerFallback() {
  return <div className="building-fallback" role="status">
    <p className="fallback-eyebrow">THE MEC CAMPUS</p>
    <h2>3D viewing isn’t available in this browser.</h2>
    <p>The building model is still here to explore in a compatible 3D viewer.</p>
    <a href="/models/collegemodel.glb" download>Download the GLB model <span aria-hidden="true">↗</span></a>
  </div>;
}

class ViewerErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <ViewerFallback /> : this.props.children;
  }
}

export default function CollegeBuildingViewer() {
  const [webGL, setWebGL] = useState(null);
  const [ready, setReady] = useState(false);
  const { active, progress } = useProgress();
  const markReady = React.useCallback(() => setReady(true), []);

  useEffect(() => setWebGL(webGLAvailable()), []);

  if (webGL === false) return <ViewerFallback />;

  return <div className="building-viewer" aria-label="View of the MEC main academic building">
    <div className="building-ground-shadow" aria-hidden="true" />
    <ViewerErrorBoundary>
      <Canvas
        className="building-canvas"
        frameloop="demand"
        dpr={[1, 1.5]}
        camera={{ position: [0, 4, 12], fov: 34, near: 0.1, far: 500 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        aria-label="Static 3D view of Government Model Engineering College"
      >
        <hemisphereLight args={['#fff1d1', '#17251d', 1.5]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[7, 10, 8]} intensity={2.1} color="#fff3d7" />
        <directionalLight position={[-7, 5, -5]} intensity={0.8} color="#89a991" />
        <Suspense fallback={null}>
          <CampusModel onReady={markReady} />
        </Suspense>
      </Canvas>
      {(!ready || active) && <ViewerLoading progress={progress} />}
    </ViewerErrorBoundary>
  </div>;
}

