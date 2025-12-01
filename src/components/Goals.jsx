import React from "react";

export default function Goals() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Future Goals</h2>

      <ul className="list-disc ml-5 text-slate-300 space-y-2 mt-4">
        <li>Publish a paper on multiscale attention for small defect detection.</li>
        <li>Open-source a clean, modular SAR → Optical translation pipeline.</li>
        <li>Build a portfolio of reproducible ML demos with live notebooks.</li>
      </ul>
    </section>
  );
}
