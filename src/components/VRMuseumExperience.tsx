import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import portraitCenter from '../assets/multimedia/portrait-1.png';
import portraitRight from '../assets/multimedia/portrait-2.jpg';
import portraitLeft from '../assets/multimedia/portrait-3.jpg';
import portraitEntranceLeft from '../assets/multimedia/portrait-3-1.png';
import portraitEntranceRight from '../assets/multimedia/portrait-2-1.jpg';
import portraitCenterAlt from '../assets/multimedia/portrait-1-1.webp';

interface VRMuseumExperienceProps {
  onExit: () => void;
}

interface ExhibitData {
  position: [number, number, number];
  rotationY: number;
  title: string;
  description: string;
  colorA: string;
  colorB: string;
  imageUrl?: string;
  secondaryImageUrl?: string;
}

const ROOM_WIDTH = 14;
const ROOM_DEPTH = 20;
const ROOM_HEIGHT = 5.5;
const WALL_MARGIN = 0.6;
const EYE_HEIGHT = 1.7;

const EXHIBITS: ExhibitData[] = [
  {
    position: [-ROOM_WIDTH / 2 + 0.05, 2, 3],
    rotationY: Math.PI / 2,
    title: 'My Life These Days',
    description: 'Hungers for personal realization and collaboration. I ve been working around the globe througout 2026 and Im definetely ready for my nest relocation.',
    colorA: '#3a1f2b',
    colorB: '#C88B95',
    imageUrl: portraitEntranceLeft,
  },
  {
    position: [-ROOM_WIDTH / 2 + 0.05, 2, -4],
    rotationY: Math.PI / 2,
    title: 'Beyond Extended Reality',
    description: 'I design immersive XR simulations and digital twins, translating complex physical systems into interactive 3D dopplegangers.I also quite enjoy strict, defensive cybersecurity.',
    colorA: '#1f2a3a',
    colorB: '#8badc8',
    imageUrl: portraitLeft,
  },
  {
    position: [0, 2, -ROOM_DEPTH / 2 + 0.05],
    rotationY: 0,
    title: 'Hi Again, Pleased to Find You Here',
    description: 'The Web VR museum is the most unique way to experience the work of Denisse, which by the way, is already unique :).',
    colorA: '#241f3a',
    colorB: '#b58bc8',
    imageUrl: portraitCenter,
    secondaryImageUrl: portraitCenterAlt,
  },
  {
    position: [ROOM_WIDTH / 2 - 0.05, 2, -4],
    rotationY: -Math.PI / 2,
    title: 'Omnipresence is becoming the Norm',
    description: 'Ever since my high school days, Real Life has been Foundationally Adapting to Occur withing the Same Sq. Feet; when I became an intern at AI Core, I started building Digital Twins to seal the full experience',
    //Coursework, then Paperwork, then Training, then Main Events, then Society.
    colorA: '#1f3a2a',
    colorB: '#8bc8a8',
    imageUrl: portraitRight,
  },
  {
    position: [ROOM_WIDTH / 2 - 0.05, 2, 3],
    rotationY: -Math.PI / 2,
    title: 'Speeches are not my Strength',
    description: 'Being Relatable Works Best For Me. I seek to find my Audience Where it Matters to Them	Most, and Talk to them in a Way that is Easy for them to Understand, Igniting New Ideas Around It. ',
    colorA: '#3a2f1f',
    colorB: '#c8b58b',
    imageUrl: portraitEntranceRight,
  },
];

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(' ');
  let line = '';
  let curY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = `${line}${words[n]} `;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line, x, curY);
      line = `${words[n]} `;
      curY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, curY);
}

function createArtworkTexture(colorA: string, colorB: string): THREE.CanvasTexture {
  const width = 512;
  const height = 384;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, colorA);
  gradient.addColorStop(1, colorB);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 2;
  for (let i = -height; i < width; i += 24) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + height, height);
    ctx.stroke();
  }

  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '600 22px "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ARTWORK COMING SOON', width / 2, height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function loadCoverImageTexture(url: string, aspect: number): Promise<THREE.CanvasTexture> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const width = 512;
      const height = Math.round(width / aspect);
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d')!;

      // "Cover" fit: scale the source image to fill the frame without distortion, cropping overflow
      const scale = Math.max(width / img.width, height / img.height);
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      const dx = (width - drawWidth) / 2;
      const dy = (height - drawHeight) / 2;
      ctx.drawImage(img, dx, dy, drawWidth, drawHeight);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      resolve(texture);
    };
    img.onerror = reject;
    img.src = url;
  });
}

function createPlaqueTexture(title: string, description: string): THREE.CanvasTexture {
  const width = 640;
  const height = 260;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#f5f0e8';
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = '#c9a227';
  ctx.lineWidth = 6;
  ctx.strokeRect(3, 3, width - 6, height - 6);

  ctx.fillStyle = '#2b2320';
  ctx.font = '600 32px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(title, width / 2, 56);

  ctx.font = '22px Georgia, serif';
  ctx.fillStyle = '#4a423c';
  wrapText(ctx, description, width / 2, 100, width - 80, 30);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

interface ExhibitBuildResult {
  group: THREE.Group;
  plaqueMesh: THREE.Mesh;
  artMaterial: THREE.MeshStandardMaterial;
  textures: { primary: THREE.Texture | null; secondary: THREE.Texture | null };
}

const FRAME_SCALE = 1.5;
const BASE_FRAME_HEIGHT = 1.8;

function createExhibit(data: ExhibitData): ExhibitBuildResult {
  const group = new THREE.Group();

  const frameWidth = 2.4 * FRAME_SCALE;
  const frameHeight = BASE_FRAME_HEIGHT * FRAME_SCALE;
  const frameDepth = 0.08 * FRAME_SCALE;

  const borderGeo = new THREE.BoxGeometry(frameWidth, frameHeight, frameDepth);
  const borderMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    metalness: 0.4,
    roughness: 0.5,
  });
  const border = new THREE.Mesh(borderGeo, borderMat);
  border.castShadow = true;
  border.receiveShadow = true;
  group.add(border);

  const artWidth = frameWidth - 0.25;
  const artHeight = frameHeight - 0.25;
  const artTexture = createArtworkTexture(data.colorA, data.colorB);
  const artGeo = new THREE.PlaneGeometry(artWidth, artHeight);
  const artMat = new THREE.MeshStandardMaterial({ map: artTexture, roughness: 0.9 });
  const art = new THREE.Mesh(artGeo, artMat);
  art.position.z = frameDepth / 2 + 0.01;
  art.receiveShadow = true;
  group.add(art);

  const textures: { primary: THREE.Texture | null; secondary: THREE.Texture | null } = {
    primary: null,
    secondary: null,
  };

  if (data.imageUrl) {
    loadCoverImageTexture(data.imageUrl, artWidth / artHeight)
      .then((tex) => {
        textures.primary = tex;
        artMat.map = tex;
        artMat.needsUpdate = true;
      })
      .catch(() => {
        // Keep the placeholder gradient if the portrait fails to load
      });
  }

  if (data.secondaryImageUrl) {
    // Preload only - the transition logic decides when to swap this in
    loadCoverImageTexture(data.secondaryImageUrl, artWidth / artHeight)
      .then((tex) => {
        textures.secondary = tex;
      })
      .catch(() => {
        // No secondary image available; transition simply won't occur
      });
  }

  const plaqueTexture = createPlaqueTexture(data.title, data.description);
  const plaqueGeo = new THREE.PlaneGeometry(1.5, 0.62);
  const plaqueMat = new THREE.MeshStandardMaterial({ map: plaqueTexture, roughness: 0.8 });
  const plaque = new THREE.Mesh(plaqueGeo, plaqueMat);
  plaque.position.set(0, -frameHeight / 2 - 0.55, frameDepth / 2 + 0.03);
  plaque.userData = { isPlaque: true, title: data.title };
  group.add(plaque);

  const spotlight = new THREE.SpotLight(0xfff2d8, 12, 7, Math.PI / 6, 0.5, 1.4);
  spotlight.position.set(0, frameHeight / 2 + 1.4, frameDepth + 1.6);
  spotlight.castShadow = true;
  spotlight.target = art;
  group.add(spotlight);
  group.add(spotlight.target);

  // Raise the exhibit so the enlarged frame grows upward, keeping the plaque
  // (and its clearance above the floor) exactly where it was before scaling.
  const heightOffset = frameHeight / 2 - BASE_FRAME_HEIGHT / 2;
  group.position.set(data.position[0], data.position[1] + heightOffset, data.position[2]);
  group.rotation.y = data.rotationY;

  return { group, plaqueMesh: plaque, artMaterial: artMat, textures };
}

const VRMuseumExperience: React.FC<VRMuseumExperienceProps> = ({ onExit }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const isPausedRef = useRef(true);
  const resumeRef = useRef<() => void>(() => {});

  useEffect(() => {
    const revealTimer = setTimeout(() => setIsVisible(true), 60);
    return () => clearTimeout(revealTimer);
  }, []);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      onExit();
    }, 450);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const scene = new THREE.Scene();
    const fogColor = 0x0d0b10;
    scene.background = new THREE.Color(fogColor);
    scene.fog = new THREE.Fog(fogColor, 8, 24);

    const camera = new THREE.PerspectiveCamera(
      70,
      container.clientWidth / container.clientHeight,
      0.1,
      60
    );
    camera.position.set(0, EYE_HEIGHT, ROOM_DEPTH / 2 - 3);
    camera.rotation.order = 'YXZ';

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    try {
      container.appendChild(renderer.domElement);
    } catch (error) {
      console.error('Error appending museum canvas:', error);
      return;
    }

    // Ambient fill light
    scene.add(new THREE.HemisphereLight(0x8899aa, 0x1a1410, 0.55));
    const fillLight = new THREE.PointLight(0xffe9c8, 0.4, 20, 2);
    fillLight.position.set(0, ROOM_HEIGHT - 0.5, 0);
    scene.add(fillLight);

    // Room materials
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x2a1f1a, roughness: 0.85, metalness: 0.05 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xe7e1d8, roughness: 0.95, side: THREE.DoubleSide });
    const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x1c1a1f, roughness: 0.9, side: THREE.DoubleSide });

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(ROOM_WIDTH, ROOM_DEPTH), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(ROOM_WIDTH, ROOM_DEPTH), ceilingMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = ROOM_HEIGHT;
    scene.add(ceiling);

    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(ROOM_WIDTH, ROOM_HEIGHT), wallMat);
    backWall.position.set(0, ROOM_HEIGHT / 2, -ROOM_DEPTH / 2);
    backWall.receiveShadow = true;
    scene.add(backWall);

    const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(ROOM_WIDTH, ROOM_HEIGHT), wallMat);
    frontWall.position.set(0, ROOM_HEIGHT / 2, ROOM_DEPTH / 2);
    frontWall.rotation.y = Math.PI;
    scene.add(frontWall);

    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(ROOM_DEPTH, ROOM_HEIGHT), wallMat);
    leftWall.position.set(-ROOM_WIDTH / 2, ROOM_HEIGHT / 2, 0);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(ROOM_DEPTH, ROOM_HEIGHT), wallMat);
    rightWall.position.set(ROOM_WIDTH / 2, ROOM_HEIGHT / 2, 0);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.receiveShadow = true;
    scene.add(rightWall);

    // Exhibits
    const plaqueMeshes: THREE.Mesh[] = [];
    let centralExhibit: ExhibitBuildResult | null = null;
    EXHIBITS.forEach((data) => {
      const result = createExhibit(data);
      scene.add(result.group);
      plaqueMeshes.push(result.plaqueMesh);
      if (data.secondaryImageUrl) {
        centralExhibit = result;
      }
    });

    // ----- Central frame image transition (triggered purely by walking close to the frame) -----
    const CENTRAL_PROXIMITY_DISTANCE = 5;
    let isNearCentralFrame = false;
    let centralSwapTimeout: number | null = null;
    let centralRevertTimeout: number | null = null;

    const clearCentralTransitionTimers = () => {
      if (centralSwapTimeout !== null) {
        window.clearTimeout(centralSwapTimeout);
        centralSwapTimeout = null;
      }
      if (centralRevertTimeout !== null) {
        window.clearTimeout(centralRevertTimeout);
        centralRevertTimeout = null;
      }
    };

    const resetCentralArtwork = () => {
      if (centralExhibit && centralExhibit.textures.primary) {
        centralExhibit.artMaterial.map = centralExhibit.textures.primary;
        centralExhibit.artMaterial.needsUpdate = true;
      }
    };

    const startCentralTransition = () => {
      if (!centralExhibit) return;
      clearCentralTransitionTimers();
      centralSwapTimeout = window.setTimeout(() => {
        if (centralExhibit && centralExhibit.textures.secondary) {
          centralExhibit.artMaterial.map = centralExhibit.textures.secondary;
          centralExhibit.artMaterial.needsUpdate = true;
        }
        centralRevertTimeout = window.setTimeout(() => {
          resetCentralArtwork();
        }, 5000);
      }, 2000);
    };

    // ----- WASD movement state -----
    const pressedKeys = new Set<string>();
    const moveSpeed = 3.6; // units per second
    const isWasdActive = () =>
      pressedKeys.has('w') || pressedKeys.has('a') || pressedKeys.has('s') || pressedKeys.has('d');

    const onKeyDown = (e: KeyboardEvent) => {
      pressedKeys.add(e.key.toLowerCase());
    };
    const onKeyUp = (e: KeyboardEvent) => {
      pressedKeys.delete(e.key.toLowerCase());
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // ----- Plaque zoom interaction -----
    const raycaster = new THREE.Raycaster();
    raycaster.far = 6.5;
    const screenCenter = new THREE.Vector2(0, 0);

    type ControlMode = 'free' | 'zooming-in' | 'zoomed' | 'zooming-out' | 'paused';
    // The experience starts paused so the user sees the controls/pause menu first
    let controlMode: ControlMode = 'paused';
    let hoveredPlaque: THREE.Mesh | null = null;

    const storedPosition = new THREE.Vector3();
    const storedQuaternion = new THREE.Quaternion();
    const targetPosition = new THREE.Vector3();
    const targetQuaternion = new THREE.Quaternion();
    const lookAtMatrix = new THREE.Matrix4();
    const plaqueWorldPos = new THREE.Vector3();
    const facingDir = new THREE.Vector3();

    const beginZoom = (plaqueMesh: THREE.Mesh) => {
      storedPosition.copy(camera.position);
      storedQuaternion.copy(camera.quaternion);

      plaqueMesh.getWorldPosition(plaqueWorldPos);
      // Plaque's local +z is its outward-facing normal (see createExhibit)
      facingDir.set(0, 0, 1).transformDirection(plaqueMesh.matrixWorld);

      targetPosition.copy(plaqueWorldPos).addScaledVector(facingDir, 1.15);
      lookAtMatrix.lookAt(targetPosition, plaqueWorldPos, new THREE.Vector3(0, 1, 0));
      targetQuaternion.setFromRotationMatrix(lookAtMatrix);

      controlMode = 'zooming-in';
      if (hintRef.current) {
        hintRef.current.textContent = 'Click again to step back';
        hintRef.current.style.opacity = '1';
      }
    };

    const endZoom = () => {
      controlMode = 'zooming-out';
      if (hintRef.current) {
        hintRef.current.style.opacity = '0';
      }
    };

    const handlePointerClick = () => {
      if (controlMode === 'zoomed') {
        endZoom();
        return;
      }

      if (controlMode !== 'free') return;

      raycaster.setFromCamera(screenCenter, camera);
      const intersects = raycaster.intersectObjects(plaqueMeshes, false);
      if (intersects.length > 0) {
        beginZoom(intersects[0].object as THREE.Mesh);
      }
    };

    // ----- Pointer / look controls -----
    // Hover-look (no button held) rotates the view at all times while idle.
    // Once WASD is active, hover-look is suspended and the user must actively
    // drag (any mouse button, touchpad, or touch) to steer their orientation.
    let yaw = 0;
    let pitch = 0;
    let isDragging = false;
    let dragDistance = 0;
    const rotateSensitivity = 0.0032;
    const clickDistanceThreshold = 8;
    const maxPitch = Math.PI / 2.5;

    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    const onPointerDown = () => {
      isDragging = true;
      dragDistance = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        dragDistance += Math.abs(e.movementX) + Math.abs(e.movementY);
      }

      const canRotate = !isWasdActive() || isDragging;
      if (!canRotate || controlMode !== 'free') return;

      yaw -= e.movementX * rotateSensitivity;
      pitch -= e.movementY * rotateSensitivity;
      pitch = Math.max(-maxPitch, Math.min(maxPitch, pitch));
    };

    const onPointerUp = (e: PointerEvent) => {
      const wasClick = isDragging && dragDistance < clickDistanceThreshold;
      isDragging = false;

      if (wasClick && e.button === 0) {
        handlePointerClick();
      }
    };

    // The center reticle is the true interaction point, so the native OS
    // cursor is hidden entirely rather than showing a mismatched crosshair.
    container.style.cursor = 'none';
    container.style.touchAction = 'none';
    container.addEventListener('contextmenu', onContextMenu);
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    const openPause = () => {
      controlMode = 'paused';
      isPausedRef.current = true;
      setIsPaused(true);
      if (reticleRef.current) reticleRef.current.style.display = 'none';
      if (hintRef.current) hintRef.current.style.opacity = '0';
    };

    const closePause = () => {
      controlMode = 'free';
      isPausedRef.current = false;
      setIsPaused(false);
      if (reticleRef.current) reticleRef.current.style.display = '';
      // Force the hover/hint state to re-evaluate fresh on the next frame
      hoveredPlaque = null;
    };
    resumeRef.current = closePause;

    const onGlobalKeyDown = (e: KeyboardEvent) => {
      if (isPausedRef.current) {
        // Any key press resumes the experience right where it was left off
        closePause();
        return;
      }

      if (e.key === 'Escape') {
        if (controlMode === 'zoomed') {
          endZoom();
        } else if (controlMode === 'free') {
          openPause();
        }
      }
    };
    window.addEventListener('keydown', onGlobalKeyDown);

    let animationId: number;
    let lastTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Central frame image transition is purely proximity-based - no aiming/clicking required
      if (centralExhibit) {
        const distance = camera.position.distanceTo(centralExhibit.group.position);
        const isNear = distance < CENTRAL_PROXIMITY_DISTANCE;
        if (isNear !== isNearCentralFrame) {
          isNearCentralFrame = isNear;
          if (isNear) {
            startCentralTransition();
          } else {
            clearCentralTransitionTimers();
            resetCentralArtwork();
          }
        }
      }

      if (controlMode === 'free') {
        camera.rotation.y = yaw;
        camera.rotation.x = pitch;

        // Movement relative to look direction (horizontal only)
        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
        const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);

        const move = new THREE.Vector3();
        if (pressedKeys.has('w')) move.add(forward);
        if (pressedKeys.has('s')) move.sub(forward);
        if (pressedKeys.has('d')) move.add(right);
        if (pressedKeys.has('a')) move.sub(right);

        if (move.lengthSq() > 0) {
          move.normalize().multiplyScalar(moveSpeed * dt);
          camera.position.add(move);

          const halfW = ROOM_WIDTH / 2 - WALL_MARGIN;
          const halfD = ROOM_DEPTH / 2 - WALL_MARGIN;
          camera.position.x = Math.max(-halfW, Math.min(halfW, camera.position.x));
          camera.position.z = Math.max(-halfD, Math.min(halfD, camera.position.z));
          camera.position.y = EYE_HEIGHT;
        }

        // Continuous raycast to detect plaque hover for the reticle + cursor feedback
        raycaster.setFromCamera(screenCenter, camera);
        const intersects = raycaster.intersectObjects(plaqueMeshes, false);
        const hit = intersects.length > 0 ? (intersects[0].object as THREE.Mesh) : null;

        if (hit !== hoveredPlaque) {
          hoveredPlaque = hit;
          if (reticleRef.current) {
            reticleRef.current.classList.toggle('vr-reticle--active', !!hit);
          }
          if (hintRef.current) {
            if (hit) {
              hintRef.current.textContent = 'Click to read';
              hintRef.current.style.opacity = '1';
            } else {
              hintRef.current.style.opacity = '0';
            }
          }
        }
      } else if (controlMode === 'zooming-in') {
        camera.position.lerp(targetPosition, 0.08);
        camera.quaternion.slerp(targetQuaternion, 0.08);
        if (camera.position.distanceTo(targetPosition) < 0.02) {
          camera.position.copy(targetPosition);
          camera.quaternion.copy(targetQuaternion);
          controlMode = 'zoomed';
        }
      } else if (controlMode === 'zooming-out') {
        camera.position.lerp(storedPosition, 0.08);
        camera.quaternion.slerp(storedQuaternion, 0.08);
        if (camera.position.distanceTo(storedPosition) < 0.02) {
          camera.position.copy(storedPosition);
          camera.quaternion.copy(storedQuaternion);
          yaw = camera.rotation.y;
          pitch = camera.rotation.x;
          controlMode = 'free';
        }
      }
      // 'zoomed': camera stays put, waiting for click/Escape to exit

      renderer.render(scene, camera);
    };
    animate();

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

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('keydown', onGlobalKeyDown);
      container.removeEventListener('contextmenu', onContextMenu);
      container.removeEventListener('pointerdown', onPointerDown);
      clearCentralTransitionTimers();
      cancelAnimationFrame(animationId);
      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode === container) {
        try {
          container.removeChild(renderer.domElement);
        } catch (error) {
          console.error('Error removing museum canvas:', error);
        }
      }
    };
  }, []);

  return (
    <div
      className="vr-museum-overlay"
      style={{ opacity: isExiting ? 0 : isVisible ? 1 : 0 }}
    >
      <div ref={containerRef} className="vr-museum-canvas-container" />

      {/* Center reticle / pointer */}
      <div ref={reticleRef} className="vr-reticle" style={{ display: 'none' }} />
      <div ref={hintRef} className="vr-reticle-hint" style={{ opacity: 0 }} />

      <div className="vr-museum-ui">
        <div className="vr-museum-header">
          <span className="vr-museum-title">XR Gallery — About Denisse</span>
          <button className="vr-museum-exit-btn" onClick={handleExit}>
            ✕ Take Off Headset
          </button>
        </div>
        <div className="vr-museum-instructions">
          Move mouse to look &nbsp;•&nbsp; WASD to move &nbsp;•&nbsp; Drag while moving to steer &nbsp;•&nbsp; Click a plaque to read
        </div>
      </div>

      {/* Pause menu - triggered by ESC */}
      {isPaused && (
        <div className="vr-pause-overlay">
          <div className="vr-pause-panel">
            <h2 className="vr-pause-title">Meet Denisse</h2>
            <p className="vr-pause-hint">
              Move mouse to look &nbsp;•&nbsp; WASD to move &nbsp;•&nbsp; Drag while moving to steer &nbsp;•&nbsp; Click a plaque to read
            </p>
            <div className="vr-pause-actions">
              <button className="vr-pause-continue-btn" onClick={() => resumeRef.current()}>
                Press any key to continue!
              </button>
              <p className="vr-pause-tip">Press ESC to pause the experience</p>
              <button className="vr-pause-exit-btn" onClick={handleExit}>
                Take off the Headset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VRMuseumExperience;
