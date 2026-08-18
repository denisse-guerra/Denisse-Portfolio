# New Tech Stack Logos Integration

## Summary
Successfully integrated 12 new logo images (PNG, WEBP, JPG formats) into the Skills section dome gallery, with special handling to prevent white backgrounds from showing on the dark background.

## New Logos Added

### Infrastructure & Virtualization
1. **Proxmox VE** (`proxmox-logo-color-stacked.png`)
2. **VMware** (`243-2432376_vmware-workstation-pro-15.png`)

### Security & Networking
3. **SOCRadar** (`socradar-extended-threat-intelligence.webp`)
4. **OPNsense** (`OIP.webp`)
5. **MikroTik** (`OIP (1).webp`)
6. **YARA** (`OIP (2).webp`)

### Game Engines & 3D Tools
7. **Unreal Engine** (`SDDw7CnuoUGax6x9mTo7dd.jpg`)
8. **CloudCompare** (`1200x630bb.png`)

### Databases & Development Tools
9. **PostgreSQL** (`103606-603c53167495b.jpg`)
10. **Gitea** (`Gitea-Logo-2048x1365.png`)
11. **llama.cpp** (`Logo_oqLlxdo.webp`)
12. **GitHub Mark** (`github-mark-57519b92ca4e.png`)

## Technical Implementation

### 1. Asset Index Update (`src/assets/techstack/index.ts`)
- Added imports for all 12 new logo files
- Organized imports into SVG and PNG/WEBP/JPG sections for clarity
- Updated the `techStackIcons` export to include all new logos with descriptive names

### 2. Dome Gallery Integration (`src/components/ui/domegallery.tsx`)
- **Import Integration**: Added destructuring for all new logos from `techStackIcons`
- **Display Array Update**: Expanded `DEFAULT_IMAGES` array to include all new logos with appropriate alt text
- **Categorization**: Organized logos into logical sections:
  - Infrastructure & DevOps (Proxmox, VMware, Gitea)
  - Security & Networking (OPNsense, MikroTik, YARA, SOCRadar)
  - XR & Game Development (Unreal Engine, CloudCompare)
  - Databases (PostgreSQL)
  - AI & Machine Learning (llama.cpp)

### 3. White Background Removal
Implemented intelligent blend mode handling to prevent white backgrounds on PNG/JPG/WEBP images:

#### Background Transparency
- Removed default gray background (`bg-gray-200` class)
- Set container `backgroundColor` to `transparent`

#### Conditional Blend Mode Application
Applied `mix-blend-mode: darken` only to raster images (PNG, JPG, WEBP):
```typescript
mixBlendMode: it.src.endsWith('.png') || it.src.endsWith('.jpg') || it.src.endsWith('.webp') ? "darken" : "normal"
```

**How it works:**
- **SVG files**: Use `normal` blend mode (standard display)
- **PNG/JPG/WEBP files**: Use `darken` blend mode
  - The `darken` blend mode only affects pixels lighter than the background
  - White backgrounds become transparent/invisible against dark backgrounds
  - Colored logo elements are preserved and displayed correctly
  - More visually appealing than `multiply` which would darken all colors

#### Implementation Locations
1. **Main tile display**: Applied to `<img>` elements in the dome gallery tiles
2. **Enlarged overlay**: Applied when clicking to expand a logo
3. **Closing animation**: Applied during the zoom-out transition

## Benefits

### Visual Consistency
- All logos now display cleanly without jarring white backgrounds
- Maintains color integrity of logo designs
- Seamless integration with the dark Skills section background

### Technical Robustness
- Conditional logic ensures SVGs aren't affected by unnecessary blend modes
- Blend mode is applied consistently across all display states (normal, enlarged, animating)
- No performance impact as blend modes are GPU-accelerated CSS properties

### Comprehensive Coverage
- Your tech stack now includes:
  - **27 SVG icons** (existing high-quality vector graphics)
  - **12 PNG/JPG/WEBP icons** (newly added with white background handling)
  - **Total: 39 technology logos** displayed in the Skills dome

## Build Status
✅ **Build Successful** - All TypeScript compilation passed  
✅ **No Linter Errors** - Clean code  
✅ **Asset Loading Verified** - All 12 new images included in build output  

## Files Modified
1. `src/assets/techstack/index.ts` - Added imports and exports for 12 new logos
2. `src/components/ui/domegallery.tsx` - Integrated logos into display and applied blend mode handling

## Next Steps (Optional Enhancements)
If needed in the future, you could:
- Add more logos by following the same pattern
- Adjust blend mode intensity if needed
- Convert PNG logos to SVG for even better quality (if original vectors are available)
- Group logos by category in the dome display
