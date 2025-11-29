import React from "react";
import { motion } from "framer-motion";

export default function AICard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 160 }}
      className="w-full max-w-md card-3d rounded-2xl p-4 card-glow"
    >
      <div className="rounded-xl p-4 bg-gradient-to-b from-white/5 to-transparent">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xs text-slate-300">AI • Vision</div>

            <div className="text-lg font-semibold mt-2">
              Transformer-Based 
            </div>

            <div className="text-sm text-slate-400 mt-2">
              Multiscale attention for small defect detection — optimized for
              precision & speed.
            </div>
          </div>

          <div className="text-sm text-slate-300">v1.0</div>
        </div>

        <div className="mt-4 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"></div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
          <span className="px-3 py-1 rounded bg-white/5">PyTorch</span>
          <span className="px-3 py-1 rounded bg-white/5">UNet</span>
          <span className="px-3 py-1 rounded bg-white/5">ResNet</span>
        </div>
      </div>
    </motion.div>
  );
}
