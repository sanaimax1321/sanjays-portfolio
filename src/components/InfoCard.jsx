import React from "react";

export default function InfoCard({ title, body }) {
  return (
    <div className="p-4 rounded-xl card-glow">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3">{body}</div>
    </div>
  );
}
