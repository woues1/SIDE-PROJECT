import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
}

export function SkeletonBox({ className = '' }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-gray-300 dark:bg-gray-700 rounded ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function ProjectSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <SkeletonBox className="h-48 mb-4" />
      <SkeletonBox className="h-6 w-3/4 mb-2" />
      <SkeletonBox className="h-4 w-full mb-2" />
      <SkeletonBox className="h-4 w-5/6" />
    </div>
  );
}

export function SkillSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <SkeletonBox className="h-12 w-12 rounded-full" />
          <SkeletonBox className="h-4 w-32" />
        </div>
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <SkeletonBox className="h-32 mb-4" />
      <SkeletonBox className="h-6 w-3/4 mb-3" />
      <SkeletonBox className="h-4 w-full mb-2" />
      <SkeletonBox className="h-4 w-4/5" />
    </div>
  );
}
