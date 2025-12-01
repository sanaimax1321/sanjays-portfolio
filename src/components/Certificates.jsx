import React from "react";

export default function Certificates() {
  const certs = [
    { name: "Deep Learning Specialization", issuer: "Coursera" },
    { name: "Computer Vision", issuer: "Udacity" },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Certificates</h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {certs.map((c) => (
          <div
            key={c.name}
            className="p-4 rounded-lg card-glow flex justify-between items-center"
          >
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-xs text-slate-400">{c.issuer}</div>
            </div>

            <div className="text-xs text-slate-300">Issued: 2024</div>
          </div>
        ))}
      </div>
    </section>
  );
}
