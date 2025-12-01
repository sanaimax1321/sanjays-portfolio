import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "AutoAfixx — AI-Powered Automated Affiliate Marketing System",
      desc:
        "An autonomous system that discovers trending products, generates AI-enhanced posts, and publishes automatically across social platforms. Includes multi-agent workflows, automated content creation, caption/hashtag generation, and scheduling.",
      tech: ["Python", "LangChain", "OpenAI API", "Agents", "FastAPI"],
    },
    {
      title: "SAR Image Colorization",
      desc:
        "Colorized SAR satellite images using a UNet + PatchGAN deep learning pipeline. Created custom SAR-optical dataset with preprocessing (alignment, denoising), significantly improving terrain interpretability.",
      tech: ["PyTorch", "UNet", "PatchGAN", "OpenCV"],
    },
    {
      title: "PCB Defect Detection",
      desc:
        "AI-based defect detection for PCB manufacturing using an ensemble of VGG16, ResNet101, and InceptionV3 with fuzzy Choquet integration. Detects scratches, misprints, mouse bites, and open circuits with 98.6% accuracy.",
      tech: ["Python", "TensorFlow", "CNN", "OpenCV", "Gemini API"],
    },
    {
      title: "Resume Parser (R-Parser)",
      desc:
        "NLP system that extracts key fields such as skills, education, work experience, and contact details from PDF/DOCX resumes and outputs structured JSON/CSV for ATS automation.",
      tech: ["Python", "SpaCy", "Regex", "NER"],
    },
    {
      title: "Sentiment Analysis — Amazon Laptop Reviews",
      desc:
        "A sentiment classifier using TF-IDF with SVM & Logistic Regression to predict positive or negative reviews. Achieved 89% accuracy after full NLP preprocessing.",
      tech: ["Scikit-Learn", "TF-IDF", "spaCy", "NLTK"],
    },
    {
      title: "Fake News Detection System",
      desc:
        "NLP-driven model to classify news as real or fake using SVM, Logistic Regression, and Random Forest. Includes a modular preprocessing pipeline and achieves 92% accuracy.",
      tech: ["TF-IDF", "Scikit-Learn", "NLP Pipeline"],
    },
  ];

  return (
    <section id="projects" className="mt-20 max-w-5xl mx-auto px-4">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl font-extrabold text-white">Projects</h2>
        <p className="text-slate-400 text-sm">
          My AI, ML, NLP, and Computer Vision Work
        </p>
      </div>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-3 top-0 w-[2px] h-full bg-white/10"></div>

        {/* All projects in timeline */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}
