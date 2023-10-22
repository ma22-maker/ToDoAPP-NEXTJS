"use client"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const FluidSimulationScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;

      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      const animate = () => {
        // You can add dynamic transformations here to simulate a changing shape
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      // Call the animate function to start the animation loop
      animate();

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return <div ref={containerRef} />;
};

export default FluidSimulationScene;
