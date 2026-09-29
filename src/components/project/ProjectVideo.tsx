import React from 'react';

interface ProjectVideoProps {
  src: string;
  /** Optional accessible label describing the video content */
  label?: string;
  className?: string;
}

/**
 * Renders a looping, autoplaying project video inside a
 * rounded, shadowed "frame" — used on project detail pages.
 */
const ProjectVideo: React.FC<ProjectVideoProps> = ({ src, label, className = '' }) => {
  return (
    <div className={`my-8 overflow-hidden rounded-3xl shadow-xl ${className}`}>
      <video
        className="block w-full h-auto"
        src={src}
        aria-label={label}
        autoPlay
        loop
        muted
        playsInline
        controls
      />
    </div>
  );
};

export default ProjectVideo;
