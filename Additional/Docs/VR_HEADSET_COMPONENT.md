# VR Headset Component

A 3D interactive VR headset component built with Three.js and React.

## Features

- **Auto-rotating**: Headset rotates 360° every 10 seconds when idle
- **Interactive hover**: On mouse hover, the headset quickly spins to show the lenses facing the user
- **Click animation**: Clicking the headset triggers a zoom-in effect with a fade-to-black overlay
- **Floating effect**: Subtle "breathing" animation for a dynamic look
- **Fully responsive**: Adapts to container size with proper cleanup

## Installation

Three.js is already installed in this project. The component is ready to use.

## Usage

### Basic Usage

```tsx
import VRHeadset from './components/VRHeadset';

function App() {
  return (
    <div className="container">
      <VRHeadset />
    </div>
  );
}
```

### With Callback

```tsx
import VRHeadset from './components/VRHeadset';

function App() {
  const handleHeadsetActivated = () => {
    console.log('VR Experience Started!');
    // Navigate to VR experience, show content, etc.
  };

  return (
    <div className="container">
      <VRHeadset onHeadsetActivated={handleHeadsetActivated} />
    </div>
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onHeadsetActivated` | `() => void` | No | Callback function triggered after the click animation completes (800ms delay) |

## Styling

The component includes default styles in `src/index.css`:

- `.vr-headset-wrapper`: Container wrapper (relative positioning)
- `.vr-headset-container`: Canvas container (600px height by default, cursor: pointer)
- `.vr-overlay`: Full-screen black overlay that fades in on click

### Customizing Size

You can customize the height by wrapping the component and applying custom styles:

```tsx
<div style={{ height: '400px' }}>
  <VRHeadset />
</div>
```

Or create a custom CSS class:

```css
.my-vr-container .vr-headset-container {
  height: 800px;
}
```

```tsx
<div className="my-vr-container">
  <VRHeadset />
</div>
```

## Technical Details

### 3D Model Composition

The VR headset model consists of:
- **Main body**: White-toned box (3 x 1.8 x 1.2 units)
- **Face cushion**: Dark gray padding at the back
- **Lenses**: Two circular black lenses positioned for eyes
- **Headstrap**: Simplified strap extending from the back

### Animation States

1. **Idle**: Rotates continuously (360° every 10 seconds)
2. **Hover**: Transitions smoothly to show lenses (180° rotation)
3. **Clicked**: Scales up and moves toward camera with fade overlay

### Performance

- Uses `requestAnimationFrame` for smooth 60fps animation
- Proper cleanup on unmount (cancels animations, disposes Three.js resources)
- Responds to window resize events
- Optimized with lerp (linear interpolation) for smooth transitions

## Example Integration

Here's a complete example showing the VR headset in a section:

```tsx
import VRHeadset from './components/VRHeadset';

function VRSection() {
  const [showVRExperience, setShowVRExperience] = useState(false);

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-8">
        Try Our VR Experience
      </h2>
      <p className="text-center mb-12">
        Hover to see the headset, click to put it on!
      </p>
      
      <div className="max-w-2xl mx-auto">
        <VRHeadset 
          onHeadsetActivated={() => setShowVRExperience(true)} 
        />
      </div>

      {showVRExperience && (
        <div className="vr-experience-content">
          {/* Your VR experience content here */}
        </div>
      )}
    </section>
  );
}
```

## Browser Support

Works in all modern browsers that support:
- WebGL
- ES6+
- CSS3 transitions

## Troubleshooting

### Canvas not showing
- Ensure the container has a defined height
- Check that Three.js is properly installed: `npm install three @types/three`

### Performance issues
- Reduce the polygon count by adjusting geometry segments
- Lower the pixel ratio: `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`

### Animation stuttering
- Check if other heavy processes are running
- Monitor FPS using browser DevTools

## Credits

Based on vanilla Three.js implementation from `src/components/VR/VRcomponent.tsx`, adapted to React with proper lifecycle management and cleanup.
