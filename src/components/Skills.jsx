import React, { useState } from "react";
import FloatingSkill from "./FloatingSkill";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  // Skill list with icons
  const skills = [
    { id: 1, label: "Python", pct: 85, icon: "/src/assets/skills/python.jpeg" },
    { id: 2, label: "PyTorch", pct: 50, icon: "/src/assets/skills/pytorch.png" },
    { id: 3, label: "C", pct: 75, icon: "/src/assets/skills/C.png" },
    { id: 4, label: "MongoDB", pct: 70, icon: "/src/assets/skills/mongodb.png" },
    { id: 5, label: "SQL", pct: 80, icon: "/src/assets/skills/SQL.png" },
    { id: 6, label: "Computer Vision", pct: 75, icon: "/src/assets/skills/cv.png" },
    { id: 7, label: "FastAPI", pct: 78, icon: "/src/assets/skills/Fastapi.png" },
    { id: 8, label: "HTML", pct: 65, icon: "/src/assets/skills/html.png" },
    { id: 9, label: "Jupyter", pct: 65, icon: "/src/assets/skills/jupyter.png" },
    { id: 10, label: "NumPy", pct: 65, icon: "/src/assets/skills/Numpy.png" },
    { id: 11, label: "Streamlit", pct: 65, icon: "/src/assets/skills/streamlit.png" },
    { id: 12, label: "VS Code", pct: 65, icon: "/src/assets/skills/vs.jpeg" },
    { id: 13, label: "Pandas", pct: 65, icon: "/src/assets/skills/pandas.png" },
    { id: 14, label: "Machine Learning", pct: 80, icon: "/src/assets/skills/ML.jpeg" },
    { id: 15, label: "Matplotlib", pct: 65, icon: "/src/assets/skills/matplot.png" },
  ];

  // Spread icons in 3 rows
  const positions = [
    { x: 10, y: 15 }, { x: 30, y: 15 }, { x: 50, y: 15 }, { x: 70, y: 15 }, { x: 90, y: 15 },

    { x: 15, y: 50 }, { x: 35, y: 50 }, { x: 55, y: 50 }, { x: 75, y: 50 }, { x: 95, y: 50 },

    { x: 10, y: 85 }, { x: 30, y: 85 }, { x: 50, y: 85 }, { x: 70, y: 85 }, { x: 90, y: 85 },
  ];

  const [openSkill, setOpenSkill] = useState(null);

  return (
    <section id="skills" className="mt-20 max-w-6xl mx-auto px-4">
      
      {/* Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold text-white">Skills</h2>
        <p className="text-slate-400">
          Hover and click a skill bubble to see proficiency.
        </p>
      </div>

      {/* Floating Skill Box */}
      <div className="mt-10 relative">
        <div
          className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-xl"
        >
          {/* Fixed height container */}
          <div className="relative w-full h-[480px]">
            {skills.map((skill, i) => {
              const pos = positions[i % positions.length];

              return (
                <div
                  key={skill.id}
                  className="absolute"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <FloatingSkill skill={skill} onClick={setOpenSkill} />
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mt-3">
          Floating icons are interactive — click to see details.
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpenSkill(null)}
            />

            {/* Modal box */}
            <motion.div
              className="relative z-10 w-11/12 max-w-md rounded-2xl p-6 bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={openSkill.icon}
                  alt={openSkill.label}
                  className="w-14 h-14 object-contain p-2 rounded-full bg-white/10 border border-white/20"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{openSkill.label}</h3>
                  <p className="text-sm text-slate-300">{openSkill.pct}% Proficiency</p>
                </div>
              </div>

              <div className="mt-4 text-slate-300 text-sm">
                {getSkillDescription(openSkill.label)}
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setOpenSkill(null)}
                  className="px-4 py-2 rounded-md bg-indigo-500/80 hover:bg-indigo-500 text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* Descriptions */
function getSkillDescription(label) {
  const map = {
    Python: "Python for ML, CV, data processing, automation, and deep learning workflows.",
    PyTorch: "Deep learning model development, training loops, optimizers, and model deployment.",
    C: "C for embedded, system programming, and performance-sensitive logic.",
    MongoDB: "Used for NoSQL applications, flexible document storage.",
    SQL: "Proficient in database design, queries, joins, indexing, optimization.",
    "Computer Vision": "OpenCV, YOLO, VGG, ResNet, segmentation, detection, preprocessing.",
    FastAPI: "Building ML APIs, high-speed backend services, and model serving.",
    HTML: "Frontend basics, dashboards, and UI for ML apps.",
    Jupyter: "Research, visualizations, training logs, prototyping.",
    NumPy: "Numerical computing, tensors, arrays, efficient vectorized operations.",
    Streamlit: "ML dashboards, UI for models, rapid prototyping.",
    "VS Code": "Primary IDE for development and debugging.",
    Pandas: "Data cleaning, preprocessing, feature engineering.",
    "Machine Learning": "Regression, classification, clustering, pipelines using sklearn.",
    Matplotlib: "Visualizing training curves, data distributions, and results.",
  };

  return map[label] || "Experience working with this technology in AI/ML workflows.";
}
