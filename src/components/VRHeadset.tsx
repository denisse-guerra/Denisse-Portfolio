import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

interface VRHeadsetProps {
  onHeadsetActivated?: () => void;
}

const VRHeadset: React.FC<VRHeadsetProps> = ({ onHeadsetActivated }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Use refs to track state for animation loop without causing re-renders
  const isHoveredRef = useRef(false);
  const isClickedRef = useRef(false);
  const onActivatedRef = useRef(onHeadsetActivated);

  // Update refs when state changes
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    isClickedRef.current = isClicked;
  }, [isClicked]);

  useEffect(() => {
    onActivatedRef.current = onHeadsetActivated;
  }, [onHeadsetActivated]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Ensure container has dimensions
    if (container.clientWidth === 0 || container.clientHeight === 0) {
      console.warn('VR container has no dimensions yet');
      return;
    }

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Safely append canvas
    try {
      container.appendChild(renderer.domElement);
    } catch (error) {
      console.error('Error appending canvas:', error);
      return;
    }

    // Lighting - Enhanced for better model visibility
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(-5, -3, -5);
    scene.add(directionalLight2);
    
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    // Create VR Headset Model Group
    const headsetGroup = new THREE.Group();
    scene.add(headsetGroup);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    
    // Configure texture encoding for proper color representation
    const configureTexture = (texture: THREE.Texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    // Load textures for different parts of the Vision Pro
    // Main glass (front dark glass/lenses) - Keep as is, looks good
    const glassMap = {
      baseColor: configureTexture(textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainGlass_BaseColor.1001.jpg')),
      metallic: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainGlass_Metallic.1001.jpg'),
      normal: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainGlass_Normal.1001.jpg'),
      roughness: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainGlass_Roughness.1001.jpg'),
    };

    // Main mesh/body parts - Use normals/roughness but override color to white
    const meshMaps = {
      normal: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainMesh_Normal.1001.jpg'),
      roughness: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainMesh_Roughness.1001.jpg'),
    };

    // Aluminum parts (frame/body) - Keep aluminum look but cleaner
    const aluminumMaps = {
      metallic: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainAluminum_Metallic.1001.jpg'),
      normal: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainAluminum_Normal.1001.jpg'),
      roughness: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainAluminum_Roughness.1001.jpg'),
    };

    // Underside - Keep detail maps
    const underMaps = {
      normal: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainUnder_Normal.1001.jpg'),
      roughness: textureLoader.load('/Apple-VisionPro-Textures/Textures/AppleVisionPro_MainUnder_Roughness.1001.jpg'),
    };

    // Headband fabric - Use the nice Heading_Alpha texture for cushion
    const headingMaps = {
      baseColor: configureTexture(textureLoader.load('/Apple-VisionPro-Textures/Textures/Heading_Alpha.1001.jpg')),
      metallic: textureLoader.load('/Apple-VisionPro-Textures/Textures/Heading_Metallic.1001.jpg'),
      normal: textureLoader.load('/Apple-VisionPro-Textures/Textures/Heading_Normal.1001.jpg'),
      roughness: textureLoader.load('/Apple-VisionPro-Textures/Textures/Heading_Roughness.1001.jpg'),
    };

    // Plastic parts - Clean white with detail maps
    const plasticMaps = {
      normal: textureLoader.load('/Apple-VisionPro-Textures/Textures/Add_Plastick_Normal.1001.jpg'),
      roughness: textureLoader.load('/Apple-VisionPro-Textures/Textures/Add_Plastick_Roughness.1001.jpg'),
    };

    // Load Apple Vision Pro Model
    const loader = new OBJLoader();
    loader.load(
      '/APPLE-VisionPro-VR.obj',
      (obj) => {
        // Apply materials with textures based on mesh/material names
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const name = child.name.toLowerCase();
            const materialName = child.material ? (child.material as any).name?.toLowerCase() : '';
            
            let materialConfig: any = {
              color: 0xf5f5f7, // Default clean white
              metalness: 0.5,
              roughness: 0.4,
            };
            
            // Assign textures and properties based on part name
            if (name.includes('glass') || materialName.includes('glass')) {
              // Keep glass dark and glossy
              materialConfig = {
                map: glassMap.baseColor,
                metalnessMap: glassMap.metallic,
                normalMap: glassMap.normal,
                roughnessMap: glassMap.roughness,
                metalness: 0.05,
                roughness: 0.05,
              };
            } else if (name.includes('mesh') || materialName.includes('mesh')) {
              // White body with detail
              materialConfig = {
                color: 0xffffff, // Pure white
                normalMap: meshMaps.normal,
                roughnessMap: meshMaps.roughness,
                metalness: 0.3,
                roughness: 0.4,
              };
            } else if (name.includes('aluminum') || name.includes('aluminium') || 
                       materialName.includes('aluminum') || materialName.includes('aluminium')) {
              // Light aluminum/silver frame
              materialConfig = {
                color: 0xe8e8e8, // Very light gray
                metalnessMap: aluminumMaps.metallic,
                normalMap: aluminumMaps.normal,
                roughnessMap: aluminumMaps.roughness,
                metalness: 0.85,
                roughness: 0.25,
              };
            } else if (name.includes('under') || name.includes('bottom') ||
                       materialName.includes('under') || materialName.includes('bottom')) {
              // Light cushion underside
              materialConfig = {
                color: 0xf0f0f0, // Very light gray
                normalMap: underMaps.normal,
                roughnessMap: underMaps.roughness,
                metalness: 0.1,
                roughness: 0.8,
              };
            } else if (name.includes('head') || name.includes('band') || name.includes('fabric') ||
                       materialName.includes('head') || materialName.includes('band')) {
              // Headband with texture pattern (light gray)
              materialConfig = {
                map: headingMaps.baseColor,
                metalnessMap: headingMaps.metallic,
                normalMap: headingMaps.normal,
                roughnessMap: headingMaps.roughness,
                color: 0xf9f2ff, // Lila
                metalness: 0.0,
                roughness: 0.95,
              };
            } else if (name.includes('plastic') || name.includes('plastick') ||
                       materialName.includes('plastic') || materialName.includes('plastick')) {
              // Clean white plastic connectors
              materialConfig = {
                color: 0xf9f2ff, // Lila
                normalMap: plasticMaps.normal,
                roughnessMap: plasticMaps.roughness,
                metalness: 0.15,
                roughness: 0.5,
              };
            }
            
            // Log mesh name for debugging
            console.log(`Applying minimalist texture to: ${child.name} -> ${name.includes('glass') ? 'glass' : name.includes('mesh') ? 'white mesh' : name.includes('aluminum') ? 'light aluminum' : name.includes('head') ? 'textured headband' : 'white default'}`);
            
            child.material = new THREE.MeshStandardMaterial(materialConfig);
          }
        });

        // Step 1: Get initial bounding box to determine scale
        const initialBox = new THREE.Box3().setFromObject(obj);
        const initialSize = initialBox.getSize(new THREE.Vector3());
        const maxDim = Math.max(initialSize.x, initialSize.y, initialSize.z);
        const targetScale = 4.0 / maxDim;
        
        // Step 2: Apply scale first
        obj.scale.setScalar(targetScale);
        
        // Step 3: Recalculate bounding box after scaling
        obj.updateMatrixWorld(true);
        const scaledBox = new THREE.Box3().setFromObject(obj);
        const scaledCenter = scaledBox.getCenter(new THREE.Vector3());
        
        // Step 4: Move object so its center is at (0,0,0)
        obj.position.x = -scaledCenter.x;
        obj.position.y = -scaledCenter.y;
        obj.position.z = -scaledCenter.z;
        
        // Step 5: Add to group (group stays at origin)
        headsetGroup.add(obj);
        
        setIsLoading(false);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('Error loading Vision Pro model:', error);
        setIsLoading(false);
      }
    );

    // Animation State
    let currentRotation = 0; // Track current rotation angle
    let currentPositionX = 0; // Track current X position for smooth movement
    let currentPositionY = 0; // Track Y position for elevation
    let currentCameraZ = 4; // Track camera zoom
    let hasActivatedMuseum = false; // Prevent firing callback multiple times per click cycle
    let animationId: number;

    // Animation Loop - Pure spinning with smooth position shift and click zoom
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Handle click animation (zoom in + elevate)
      if (isClickedRef.current) {
        const targetCameraZ = 1.5; // Zoom in closer
        const targetPositionY = 0.2; // Slight elevation
        
        currentCameraZ = THREE.MathUtils.lerp(currentCameraZ, targetCameraZ, 0.05);
        currentPositionY = THREE.MathUtils.lerp(currentPositionY, targetPositionY, 0.05);
        
        camera.position.z = currentCameraZ;
        headsetGroup.position.y = currentPositionY;
        
        // Fade overlay
        const progress = (3 - currentCameraZ) / (3 - 1.5);
        const clampedProgress = Math.min(progress, 1);
        if (overlayRef.current) {
          overlayRef.current.style.opacity = clampedProgress.toString();
        }

        // Once the overlay is fully black, hand off to the museum experience
        if (clampedProgress >= 0.97 && !hasActivatedMuseum) {
          hasActivatedMuseum = true;
          onActivatedRef.current?.();
        }
      } else {
        // Reset camera and position when not clicked
        const targetCameraZ = 3;
        const targetPositionY = 0;
        
        currentCameraZ = THREE.MathUtils.lerp(currentCameraZ, targetCameraZ, 0.05);
        currentPositionY = THREE.MathUtils.lerp(currentPositionY, targetPositionY, 0.05);
        
        camera.position.z = currentCameraZ;
        headsetGroup.position.y = currentPositionY;
        
        // Fade out overlay
        if (overlayRef.current) {
          overlayRef.current.style.opacity = '0';
        }

        hasActivatedMuseum = false;
      }

      // Determine target position based on hover state (only if not clicked)
      const targetPositionX = (isHoveredRef.current && !isClickedRef.current) ? -1.0 : 0; // Shift left when hovered
      
      // Smoothly interpolate X position
      currentPositionX = THREE.MathUtils.lerp(currentPositionX, targetPositionX, 0.08);
      
      // Apply X position, lock Z
      headsetGroup.position.x = currentPositionX;
      headsetGroup.position.z = 0;
      
      // Lock all rotations except Y
      headsetGroup.rotation.x = 0;
      headsetGroup.rotation.z = 0;

      if (isClickedRef.current) {
        // When clicked, rotate to show inside lenses (180°)
        const targetRotation = Math.PI;
        currentRotation = THREE.MathUtils.lerp(currentRotation, targetRotation, 0.08);
        headsetGroup.rotation.y = currentRotation;
      } else if (isHoveredRef.current && !isClickedRef.current) {
        // When hovered (but not clicked), smoothly rotate to show the front face (0° or 360°)
        const targetRotation = 0;
        currentRotation = THREE.MathUtils.lerp(currentRotation, targetRotation, 0.08);
        headsetGroup.rotation.y = currentRotation;
      } else if (!isClickedRef.current) {
        // Idle state: continuous slow spin
        // Increment rotation by a fixed amount each frame (20 seconds per full rotation at 60fps)
        const rotationSpeed = (Math.PI * 2) / (20 * 60);
        currentRotation += rotationSpeed;
        
        // Keep rotation in [0, 2π] range to prevent floating point drift
        if (currentRotation > Math.PI * 2) {
          currentRotation -= Math.PI * 2;
        }
        
        headsetGroup.rotation.y = currentRotation;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      
      // Safely remove canvas
      if (renderer.domElement && renderer.domElement.parentNode === container) {
        try {
          container.removeChild(renderer.domElement);
        } catch (error) {
          console.error('Error removing canvas:', error);
        }
      }
    };
  }, []); // Empty dependency array - only run once on mount

  return (
    <div className="vr-headset-wrapper">
      {isLoading && (
        <div className="vr-loading">Loading Apple Vision Pro...</div>
      )}
      
      {/* Hover Text */}
      {isHovered && !isClicked && (
        <div className="vr-hover-text">
          <span>About myself,</span>
          <br />
          <span>but is XR</span>
        </div>
      )}
      
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="vr-headset-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
      />
      
      {/* Overlay for zoom effect */}
      <div ref={overlayRef} className="vr-overlay" />
    </div>
  );
};

export default VRHeadset;
