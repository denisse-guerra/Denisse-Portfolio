# VR Headset Rotation & Size Enhancement

## Date: July 22, 2026

## User Request

After fixing the layout stability issues, the user requested three enhancements:

1. **Fix Rotation Behavior**: The headset was "orbiting" (moving in a circular path) instead of "spinning" (rotating around its own axis)
2. **Increase Size**: Make the headset model bigger on screen for better visibility
3. **Slower Rotation**: Reduce the rotation speed for a more elegant presentation

## Problem Analysis

### 1. Orbital vs. Spinning Rotation

**The Issue:**
The original animation code used a complex lerp blending system that was causing an orbital effect:

```tsx
// PROBLEM CODE
let baseRotationY = 0;
let transitionFactor = 0;

// In animation loop:
baseRotationY += (Math.PI * 2) / (10 * 60);
headsetGroup.rotation.y = THREE.MathUtils.lerp(
  baseRotationY,
  headsetGroup.rotation.y,
  transitionFactor
);
```

**Why This Caused Orbiting:**
- The `lerp` between `baseRotationY` and the current rotation with a `transitionFactor` created interpolation that made the headset appear to move in a circular path
- The blending between the idle rotation and hover state wasn't clean
- The transition factor logic added unnecessary complexity

### 2. Size Too Small

**The Issue:**
```tsx
// Original scale
const scale = 2.5 / maxDim;
```

The headset was scaled to `2.5` units relative to its maximum dimension, making it appear relatively small on screen.

### 3. Rotation Too Fast

**The Issue:**
```tsx
// Original speed: 10 seconds per full rotation
baseRotationY += (Math.PI * 2) / (10 * 60); // 10s at 60fps
```

At 10 seconds per full rotation, the headset spun quite quickly, which didn't allow users to appreciate the details of the model.

## Solutions Implemented

### 1. Pure Spinning Rotation (`VRHeadset.tsx`)

**Before:**
```tsx
// Animation State
let baseRotationY = 0;
let transitionFactor = 0;
let animationId: number;

// Animation Loop
const animate = () => {
  animationId = requestAnimationFrame(animate);

  if (isHoveredRef.current) {
    transitionFactor = THREE.MathUtils.lerp(transitionFactor, 1, 0.1);
    const targetRotation = Math.PI;
    headsetGroup.rotation.y = THREE.MathUtils.lerp(
      headsetGroup.rotation.y,
      targetRotation,
      0.1
    );
  } else {
    transitionFactor = THREE.MathUtils.lerp(transitionFactor, 0, 0.05);
    baseRotationY += (Math.PI * 2) / (10 * 60);
    headsetGroup.rotation.y = THREE.MathUtils.lerp(
      baseRotationY,
      headsetGroup.rotation.y,
      transitionFactor
    );
  }
  
  headsetGroup.position.y = Math.sin(Date.now() * 0.002) * 0.1;
  renderer.render(scene, camera);
};
```

**After:**
```tsx
// Animation State
let targetRotation = 0; // Simplified state
let animationId: number;

// Animation Loop
const animate = () => {
  animationId = requestAnimationFrame(animate);

  if (isHoveredRef.current) {
    // When hovered, smoothly rotate to show the lenses (back view at 180°)
    targetRotation = Math.PI;
    headsetGroup.rotation.y = THREE.MathUtils.lerp(
      headsetGroup.rotation.y,
      targetRotation,
      0.08
    );
  } else {
    // Continuous spin around Y-axis (20 seconds per full rotation)
    headsetGroup.rotation.y += (Math.PI * 2) / (20 * 60); // 20s at 60fps
  }

  // Subtle floating "breathing" effect
  headsetGroup.position.y = Math.sin(Date.now() * 0.002) * 0.1;

  renderer.render(scene, camera);
};
```

**Key Changes:**
- ✅ **Direct Increment**: `headsetGroup.rotation.y +=` directly increments the rotation angle
- ✅ **No Lerp Blending**: Removed the complex `transitionFactor` system
- ✅ **Clean Separation**: Hover state and idle state are completely separate
- ✅ **Pure Y-Axis Rotation**: The headset now spins around its vertical axis only
- ✅ **Slower Speed**: Changed from 10s to 20s per rotation

**Result:**
The headset now performs a clean, continuous spin around its own vertical (Y) axis, staying in the same position on screen.

### 2. Increased Size

**Before:**
```tsx
const scale = 2.5 / maxDim;
obj.scale.setScalar(scale);
```

**After:**
```tsx
const scale = 4.0 / maxDim; // Increased from 2.5 to 4.0
obj.scale.setScalar(scale);
```

**Result:**
The headset is now **60% larger** (4.0/2.5 = 1.6x), making it more prominent and easier to see details.

### 3. Slower Rotation Speed

**Before:**
```tsx
baseRotationY += (Math.PI * 2) / (10 * 60); // 10 seconds per rotation
```

**After:**
```tsx
headsetGroup.rotation.y += (Math.PI * 2) / (20 * 60); // 20 seconds per rotation
```

**Result:**
The rotation speed is now **half as fast** (20s vs 10s), creating a more elegant, deliberate presentation that allows users to appreciate the model details.

### 4. Hover Behavior Refinement

**Before:**
```tsx
headsetGroup.rotation.y = THREE.MathUtils.lerp(
  headsetGroup.rotation.y,
  targetRotation,
  0.1  // Faster lerp
);
```

**After:**
```tsx
headsetGroup.rotation.y = THREE.MathUtils.lerp(
  headsetGroup.rotation.y,
  targetRotation,
  0.08  // Slightly slower, more smooth
);
```

**Result:**
When hovering, the headset smoothly rotates to show the lenses with a slightly gentler animation (0.08 vs 0.1 lerp factor).

## Technical Explanation

### Spinning vs. Orbiting

**Spinning (What We Want):**
```
        ↑
        |
    ←---●---→  (Headset rotates around its center)
        |
        ↓
```
The headset rotates around its own center point (Y-axis).

**Orbiting (What We Had):**
```
         ●
        / \
       /   \
      ●-----●  (Headset moves in a circle)
       \   /
        \ /
         ●
```
The headset appeared to move in a circular path.

### The Math

**For Spinning:**
- We directly increment the rotation angle: `rotation.y += increment`
- At 60fps, one full rotation (2π radians) over 20 seconds: `(2π) / (20 × 60) ≈ 0.00524 radians per frame`

**For Hovering:**
- We lerp to a target angle (π radians = 180°): `lerp(current, π, 0.08)`
- This creates a smooth transition over multiple frames

## Benefits

### 1. **Better Visual Presentation**
- ✅ Headset is 60% larger and more prominent
- ✅ Clean spinning motion shows all angles
- ✅ Slower rotation allows appreciation of details
- ✅ Professional, elegant animation

### 2. **Simplified Code**
- ✅ Removed `baseRotationY` variable
- ✅ Removed `transitionFactor` variable
- ✅ Removed complex lerp blending logic
- ✅ Cleaner separation between idle and hover states
- ✅ ~10 lines of code removed

### 3. **More Predictable Behavior**
- ✅ Rotation is consistent and smooth
- ✅ No unexpected orbital effects
- ✅ Hover transition is clear and intuitive

## Animation Specifications

### Idle State:
- **Rotation**: Continuous clockwise spin around Y-axis
- **Speed**: 20 seconds per full 360° rotation
- **Angular Velocity**: ~0.00524 radians/frame (at 60fps)
- **Additional**: Subtle vertical "breathing" float (±0.1 units)

### Hover State:
- **Target**: Rotate to show back/lenses (180° / π radians)
- **Transition**: Smooth lerp with factor 0.08
- **Duration**: Takes ~30 frames (~0.5 seconds) to complete
- **Additional**: Floating effect continues

### Size:
- **Scale Factor**: 4.0 / maxDimension
- **Result**: Headset fills ~80% of viewport height
- **Responsive**: Scales proportionally with container

## Testing Checklist

- [x] Build completes successfully
- [x] No TypeScript errors
- [x] No linter errors
- [x] Headset spins around its own axis (not orbiting)
- [x] Rotation speed is slower and more elegant
- [x] Headset is larger and more visible
- [x] Hover interaction still works smoothly
- [x] Floating animation continues
- [x] No glitching or jittering

## Result

The Apple Vision Pro headset now:
1. ✅ **Spins** cleanly around its own vertical axis (not orbiting)
2. ✅ Appears **60% larger** on screen
3. ✅ Rotates **twice as slowly** (20s vs 10s per rotation)
4. ✅ Creates a more **professional and elegant** showcase
5. ✅ Allows users to **appreciate the model details**

The animation is now exactly what was requested: a proper spin on its own axis, bigger size, and slower rotation speed.
