import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface Model3DProps {
  className?: string;
  modelType?: 'building' | 'house' | 'interior';
}

const Model3D = ({ className, modelType = 'building' }: Model3DProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#f5f5f5');
    if (document.documentElement.classList.contains('dark')) {
      scene.background = new THREE.Color('#121212');
    }
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(15, 10, 15);
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 25;
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Grid Helper
    const gridHelper = new THREE.GridHelper(30, 30, 0x555555, 0x555555);
    scene.add(gridHelper);
    
    // Create model based on type
    let geometry: THREE.BufferGeometry;
    let material: THREE.Material;
    
    switch(modelType) {
      case 'house':
        // Base/Foundation
        createBox(0, 0, 0, 10, 0.5, 8, 0xd2d2d2);
        
        // Main structure
        createBox(0, 3, 0, 10, 5, 8, 0xffffff);
        
        // Roof
        createRoof(0, 6.5, 0, 12, 3, 10, 0x8b4513);
        
        // Windows
        createBox(3, 3, 4.01, 2, 2, 0.1, 0x87ceeb);
        createBox(-3, 3, 4.01, 2, 2, 0.1, 0x87ceeb);
        createBox(3, 3, -4.01, 2, 2, 0.1, 0x87ceeb);
        createBox(-3, 3, -4.01, 2, 2, 0.1, 0x87ceeb);
        
        // Door
        createBox(0, 1.5, 4.01, 2, 3, 0.1, 0x8b4513);
        break;
        
      case 'interior':
        // Floor
        createBox(0, 0, 0, 10, 0.1, 10, 0xd2d2d2);
        
        // Walls
        createBox(-5, 2.5, 0, 0.1, 5, 10, 0xffffff);
        createBox(5, 2.5, 0, 0.1, 5, 10, 0xffffff);
        createBox(0, 2.5, -5, 10, 5, 0.1, 0xffffff);
        
        // Furniture
        createBox(-3, 0.4, -3, 3, 0.6, 2, 0x8b4513); // Table
        createBox(-3, 0.1, -1, 1, 0.2, 1, 0x8b4513); // Chair
        createBox(3, 1, -4, 3, 2, 1, 0x87ceeb); // Bookshelf
        createBox(0, 0.5, 3, 6, 1, 3, 0x505050); // Sofa
        break;
        
      default: // building
        // Base
        createBox(0, 0, 0, 15, 0.5, 15, 0x505050);
        
        // Main tower
        createBox(0, 10, 0, 8, 20, 8, 0xffffff);
        
        // Secondary structures
        createBox(-6, 5, 0, 5, 10, 8, 0xe0e0e0);
        createBox(6, 7, 0, 5, 14, 8, 0xececec);
        createBox(0, 5, 6, 8, 10, 5, 0xf5f5f5);
        
        // Windows
        for (let floor = 1; floor <= 9; floor++) {
          for (let i = -2; i <= 2; i += 2) {
            createBox(i, floor * 2, 4.01, 1, 1, 0.1, 0x87ceeb);
            createBox(i, floor * 2, -4.01, 1, 1, 0.1, 0x87ceeb);
            createBox(4.01, floor * 2, i, 0.1, 1, 1, 0x87ceeb);
            createBox(-4.01, floor * 2, i, 0.1, 1, 1, 0x87ceeb);
          }
        }
        
        // Roof features
        createBox(0, 20.5, 0, 6, 1, 6, 0x505050);
        createBox(0, 22, 0, 2, 3, 2, 0x303030);
        break;
    }
    
    function createBox(x: number, y: number, z: number, width: number, height: number, depth: number, color: number) {
      const geometry = new THREE.BoxGeometry(width, height, depth);
      const material = new THREE.MeshStandardMaterial({ color });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    }
    
    function createRoof(x: number, y: number, z: number, width: number, height: number, depth: number, color: number) {
      // Create a triangular prism for the roof
      const shape = new THREE.Shape();
      shape.moveTo(-width / 2, -height / 2);
      shape.lineTo(0, height / 2);
      shape.lineTo(width / 2, -height / 2);
      shape.lineTo(-width / 2, -height / 2);
      
      const extrudeSettings = {
        steps: 1,
        depth: depth,
        bevelEnabled: false
      };
      
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const material = new THREE.MeshStandardMaterial({ color });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z - depth / 2);
      mesh.rotation.x = Math.PI / 2;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Theme change detection
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' && sceneRef.current) {
          const isDark = document.documentElement.classList.contains('dark');
          sceneRef.current.background = new THREE.Color(isDark ? '#121212' : '#f5f5f5');
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Cleanup
    return () => {
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [modelType]);

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full min-h-[300px] ${className}`}
      style={{ touchAction: 'none' }}
    ></div>
  );
};

export default Model3D;
