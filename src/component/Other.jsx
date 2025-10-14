import React, { useState } from "react";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Customer Service & Banking Codes and Standards",
  },
  {
    id: 2,
    title: "Certificate Course in Digital Banking",
  },
  {
    id: 3,
    title: "Certified Associate of IIBF (C.A.I.I.B)",
  },
  {
    id: 4,
    title: "Anti-money Laundering & Know your Customer (IIBF)",
  },
  {
    id: 5,
    title: "Prevention of Cyber Crime and Fraud Management (IIBF)",
  },
  {
    id: 6,
    title: "Junior Associate of IIBF (J.A.I.I.B)",
  },
];

export default function CertificationsGrid() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="p-4 max-w-3xl mx-auto">
      <header className="mb-4">
        <h2 className="text-2xl font-semibold text-center mb-2">Certifications & Courses</h2>
        <p className="text-sm text-slate-500 text-center">A list of customer service and banking-related courses and certifications.</p>
      </header>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {CERTIFICATIONS.map((course) => (
          <article
            key={course.id}
            onClick={() => setSelectedId(course.id === selectedId ? null : course.id)}
            className={`group cursor-pointer rounded-2xl p-4 border transition-shadow hover:shadow-md focus-within:shadow-md ${
              course.id === selectedId ? "border-slate-300 bg-slate-50" : "border-transparent bg-white"
            }`}
          >
            <header className="mb-2">
              <h3 className="text-sm font-semibold leading-snug">{course.title}</h3>
            </header>

            {course.id === selectedId ? (
              <div className="text-sm text-slate-600 mt-2">
                <p className="mb-2">This course covers key areas related to <strong>{course.title}</strong>. You can expand this section with additional details such as syllabus or duration.</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-md text-sm border">View syllabus</button>
                  <button className="px-3 py-1 rounded-md text-sm border">Register</button>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500">Click to view more details.</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}