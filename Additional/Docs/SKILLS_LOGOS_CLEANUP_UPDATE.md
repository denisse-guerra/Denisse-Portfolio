# Skills Section Logo Updates - Removed Unused & Added Tooltips

## Summary
Successfully removed 18 unused technology logos that were moved to the "not in use" folder and implemented hover tooltips displaying technology names for all remaining logos in the Skills section.

## Logos Removed
The following technologies were removed from the Skills dome display as they are not currently used:

### Programming Languages
- C
- C# / .NET
- Java

### Frameworks & Libraries
- Node.js
- Express.js
- Bootstrap
- TailwindCSS
- Three.js
- Unity
- Electron

### Databases & Caching
- MongoDB
- Redis

### Tools & Technologies
- LaTeX
- Postman
- GraphQL
- TensorFlow
- Dart
- JQuery

## Remaining Active Technologies (28 total)
The Skills section now displays only the technologies you actively use:

### Programming Languages & Core Web
- C++
- JavaScript
- TypeScript
- HTML
- CSS

### Frameworks & Libraries
- React
- Flutter
- Material UI

### Infrastructure & DevOps
- Docker
- AWS
- Proxmox VE
- VMware Workstation
- GitHub
- Gitea
- Vercel

### Databases
- PostgreSQL

### Security & Networking
- OPNsense Firewall
- MikroTik RouterOS
- YARA
- SOCRadar

### XR & Game Development
- Unreal Engine 5
- CloudCompare

### AI & Machine Learning
- llama.cpp

### Development Tools
- Vite
- NPM
- Notion
- Stack Overflow

## Tooltip Implementation

### How It Works
Native HTML `title` attributes were added to all logo elements to display technology names when users hover over them. This provides:

1. **Clear identification** - Users can see exactly what each technology is
2. **Consistent experience** - Works across all states (normal, enlarged, closing animation)
3. **Accessibility** - Screen readers can announce the technology names
4. **No additional libraries** - Uses native browser functionality

### Technical Implementation
Tooltips are implemented in multiple locations to ensure they appear in all states:

#### 1. Container Div (Normal State)
```typescript
<div
  className="item__image..."
  title={it.alt || "Technology logo"}
  ...
>
```
Displays tooltip when hovering over the tile container.

#### 2. Image Element (Normal State)
```typescript
<img
  src={it.src}
  alt={it.alt}
  title={it.alt}
  ...
/>
```
Displays tooltip when hovering directly over the image.

#### 3. Enlarged Overlay
```typescript
overlay.title = rawAlt || "Technology logo";
```
Maintains tooltip when the logo is clicked and enlarged.

#### 4. Closing Animation
```typescript
animatingOverlay.title = overlay.title || "Technology logo";
```
Preserves tooltip during the zoom-out animation.

## File Corrections
Fixed file extension mismatch:
- **Before**: `OIP.webp`
- **After**: `OIP.jpg` (correct extension)

## Files Modified

### 1. `src/assets/techstack/index.ts`
- Removed imports for 18 unused logos
- Fixed file extension for OPNsense logo (`.webp` → `.jpg`)
- Cleaned up export object

### 2. `src/components/ui/domegallery.tsx`
- Removed destructuring for unused logo variables
- Updated `DEFAULT_IMAGES` array to only include active technologies
- Added `title` attribute to container div for normal state tooltips
- Added `title` attribute to img elements for hover tooltips
- Added `title` property to enlarged overlay for tooltip during expansion
- Added `title` property to animating overlay for tooltip during close animation

## Build Status
✅ **Build Successful** - All TypeScript compilation passed  
✅ **No Linter Errors** - Clean code  
✅ **28 Active Technologies** - Reduced from 40, showing only relevant skills  
✅ **Tooltips Working** - Display on hover in all states (normal, enlarged, closing)

## User Experience Improvements

### Before
- 40 logos displayed (including unused technologies)
- No way to identify what each logo represents without recognizing the icon
- Potentially misleading representation of skills

### After
- 28 logos representing actual skills
- Clear technology names appear on hover
- Accurate representation of technical expertise
- Better user experience with instant identification

## Example Tooltip Labels
When hovering over logos, users will see labels like:
- "Unreal Engine 5" for the UE5 logo
- "Proxmox VE" for Proxmox
- "OPNsense Firewall" for OPNsense
- "MikroTik RouterOS" for MikroTik
- "llama.cpp" for the llama.cpp logo
- "PostgreSQL" for PostgreSQL
- etc.

## Technical Notes

### Browser Compatibility
The `title` attribute is a standard HTML attribute supported by all modern browsers. Tooltips appear automatically after a brief hover delay (controlled by the browser).

### Accessibility
- Screen readers will announce the technology name when focused
- Keyboard navigation users can access tooltip information
- Alt text provides fallback for images that fail to load

### Performance
- No JavaScript overhead for tooltip functionality
- Native browser implementation
- No additional libraries or dependencies required

## Next Steps (Optional Future Enhancements)
If you want to customize the tooltip experience further, you could:
1. Use a custom tooltip library (like Radix UI Tooltip) for styled tooltips
2. Add additional information in tooltips (e.g., "Proficiency: Expert")
3. Include year of experience or certification status
4. Add icons or badges to the tooltip content

However, the current native implementation provides a clean, performant, and accessible solution that works well for the use case.
