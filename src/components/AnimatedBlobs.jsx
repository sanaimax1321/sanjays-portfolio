import React from "react";

export default function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] 
        bg-pink-500/50 rounded-full blur-[120px] animate-blob"
      ></div>

      {/* Blob 2 */}
      <div
        className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] 
        bg-purple-500/50 rounded-full blur-[120px] animate-blob animation-delay-2000"
      ></div>

      {/* Blob 3 */}
      <div
        className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] 
        bg-blue-500/50 rounded-full blur-[130px] animate-blob animation-delay-4000"
      ></div>
    </div>
  );
}
