import React, { useState } from "react";
import FloatingSkill from "./FloatingSkill";
import { motion, AnimatePresence } from "framer-motion";

// Correct imports
import pythonIcon from "../assets/skills/python.jpeg";
import pytorchIcon from "../assets/skills/pytorch.png";
import cIcon from "../assets/skills/C.png";
import mongodbIcon from "../assets/skills/mongodb.png";
import sqlIcon from "../assets/skills/SQL.png";
import cvIcon from "../assets/skills/cv.png";
import fastapiIcon from "../assets/skills/Fastapi.png";
import htmlIcon from "../assets/skills/html.png";
import jupyterIcon from "../assets/skills/jupyter.png";
import numpyIcon from "../assets/skills/Numpy.png";
import streamlitIcon from "../assets/skills/streamlit.png";
import vscodeIcon from "../assets/skills/vs.jpeg";
import pandasIcon from "../assets/skills/pandas.png";
import mlIcon from "../assets/skills/ml.jpeg";
import matplotlibIcon from "../assets/skills/Matplot.png";

export default function Skills() {
  const skills = [
    { id: 1, label: "Python", pct: 85, icon: pythonIcon },
    { id: 2, label: "PyTorch", pct: 50, icon: pytorchIcon },
    { id: 3, label: "C", pct: 75, icon: cIcon },
    { id: 4, label: "MongoDB", pct: 70, icon: mongodbIcon },
    { id: 5, label: "SQL", pct: 80, icon: sqlIcon },
    { id: 6, label: "Computer Vision", pct: 75, icon: cvIcon },
    { id: 7, label: "FastAPI", pct: 78, icon: fastapiIcon },
    { id: 8, label: "HTML", pct: 65, icon: htmlIcon },
    { id: 9, label: "Jupyter", pct: 65, icon: jupyterIcon },
    { id: 10, label: "NumPy", pct: 65, icon: numpyIcon },
    { id: 11, label: "Streamlit", pct: 65, icon: streamlitIcon },
    { id: 12, label: "VS Code", pct: 65, icon: vscodeIcon },
    { id: 13, label: "Pandas", pct: 65, icon: pandasIcon },
    { id: 14, label: "Machine Learning", pct: 80, icon: mlIcon },
    { id: 15, label: "Matplotlib", pct: 65, icon: matplotlibIcon },
  ];

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
        <p className="text-slate-400">Hover and click a skill bubble to see proficiency.</p>
      </div>

      {/* Floating Skill Box */}
      <div className="mt-10 relative">
        <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-xl">
          <div className="relative w-full h-[480px]">
            {skills.map((skill, i) => {
              const pos = positions[i];
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
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpenSkill(null)} />

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

/* Skill Descriptions */
function getSkillDescription(label) {
  const map = {
    Python: "Python for ML, CV, data processing, automation, and deep learning workflows.",
    PyTorch: "Deep learning model development, training loops, optimizers, and model deployment.",
    C: "C for embedded, system programming, and performance-sensitive logic.",
    MongoDB: "NoSQL document-based database for scalable apps.",
    SQL: "Database design, queries, joins, indexing, optimization.",
    "Computer Vision": "OpenCV, YOLO, segmentation, preprocessing, feature extraction.",
    FastAPI: "High-speed backend, ML model serving, API development.",
    HTML: "Web structure, dashboards, UI for ML tools.",
    Jupyter: "Research workflows, visualizations, experimental logs.",
    NumPy: "Numerical computing, arrays, matrix operations.",
    Streamlit: "Real-time ML dashboards, interactive UIs.",
    "VS Code": "Primary development IDE.",
    Pandas: "Data cleaning, analysis, manipulation.",
    "Machine Learning": "Regression, classification, clustering, feature engineering.",
    Matplotlib: "Visualizations, plots, data exploration.",
  };

  return map[label] || "Experience working with this technology in AI/ML workflows.";
}
