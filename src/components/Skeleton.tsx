import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse bg-neutral-100 rounded ${className}`}
      aria-busy="true"
      aria-label="Carregando..."
    />
  );
};

export default Skeleton;
