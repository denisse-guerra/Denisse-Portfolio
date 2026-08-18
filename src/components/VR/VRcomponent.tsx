import * as THREE from 'three';

class VRHeadsetComponent {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private headsetGroup: THREE.Group;
    private container: HTMLElement;
    private overlay: HTMLElement;

    // States
    private isHovered: boolean = false;
    private isClicked: boolean = false;
    private baseRotationY: number = 0;
    private transitionFactor: number = 0; // 0 = idle, 1 = focused on lenses

    constructor(containerId: string) {
        this.container = document.getElementById(containerId)!;
        this.overlay = document.getElementById('overlay')!;
        
        // 1. Scene Setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // 2. Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        this.scene.add(light);
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        // 3. Create VR Headset Model (White Toned)
        this.headsetGroup = this.createHeadset();
        this.scene.add(this.headsetGroup);

        // 4. Events
        this.container.addEventListener('mouseenter', () => this.isHovered = true);
        this.container.addEventListener('mouseleave', () => this.isHovered = false);
        this.container.addEventListener('click', () => this.putOnHeadset());

        this.animate();
    }

    private createHeadset(): THREE.Group {
        const group = new THREE.Group();

        // Main Body (Front)
        const bodyGeo = new THREE.BoxGeometry(3, 1.8, 1.2);
        const whiteMat = new THREE.MeshPhongMaterial({ color: 0xfffffe });
        const body = new THREE.Mesh(bodyGeo, whiteMat);
        group.add(body);

        // Face Cushion (Back part - where lenses are)
        const cushionGeo = new THREE.BoxGeometry(2.9, 1.7, 0.5);
        const darkMat = new THREE.MeshPhongMaterial({ color: 0x333333 });
        const cushion = new THREE.Mesh(cushionGeo, darkMat);
        cushion.position.z = -0.7;
        group.add(cushion);

        // Lenses
        const lensGeo = new THREE.CircleGeometry(0.4, 32);
        const lensMat = new THREE.MeshPhongMaterial({ color: 0x111111, shininess: 100 });
        
        const leftLens = new THREE.Mesh(lensGeo, lensMat);
        leftLens.position.set(-0.6, 0, -0.96);
        leftLens.rotation.y = Math.PI; // Face inward
        
        const rightLens = new THREE.Mesh(lensGeo, lensMat);
        rightLens.position.set(0.6, 0, -0.96);
        rightLens.rotation.y = Math.PI; // Face inward

        group.add(leftLens, rightLens);

        // Headstrap (Simplified)
        const strapGeo = new THREE.BoxGeometry(0.1, 0.5, 2);
        const strap = new THREE.Mesh(strapGeo, whiteMat);
        strap.position.z = -1.5;
        group.add(strap);

        return group;
    }

    private putOnHeadset() {
        if (this.isClicked) return;
        this.isClicked = true;
        this.overlay.style.opacity = '1';
        
        // Optional: Trigger a custom event for the parent app
        setTimeout(() => {
            console.log("Headset is on! Load VR Experience.");
        }, 800);
    }

    private animate = () => {
        requestAnimationFrame(this.animate);

        if (!this.isClicked) {
            if (this.isHovered) {
                // Smoothly transition to face the lenses (rotation PI)
                this.transitionFactor = THREE.MathUtils.lerp(this.transitionFactor, 1, 0.1);
                
                // When hovered, we target Math.PI (180 degrees) to show the back/lenses
                const targetRotation = Math.PI;
                this.headsetGroup.rotation.y = THREE.MathUtils.lerp(
                    this.headsetGroup.rotation.y, 
                    targetRotation, 
                    0.1
                );
            } else {
                // Resume idle rotation
                this.transitionFactor = THREE.MathUtils.lerp(this.transitionFactor, 0, 0.05);
                this.baseRotationY += (Math.PI * 2) / (10 * 60); // Full spin 10s at 60fps
                
                // Blend between the idle rotation and the hover state
                this.headsetGroup.rotation.y = THREE.MathUtils.lerp(
                    this.baseRotationY,
                    this.headsetGroup.rotation.y,
                    this.transitionFactor
                );
            }
            
            // Subtle floating "breathing" effect
            this.headsetGroup.position.y = Math.sin(Date.now() * 0.002) * 0.1;
        } else {
            // "Putting it on" animation: Move camera into the lenses
            this.headsetGroup.scale.addScalar(0.15);
            this.headsetGroup.position.z += 0.2;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize
new VRHeadsetComponent('vr-container');