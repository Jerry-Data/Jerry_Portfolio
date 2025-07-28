import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Jerry Nwachukwu</h1>
        <h2 className="text-xl text-gray-600">Mechanical Engineer & Data Scientist</h2>
        <p className="mt-2">Email: <a href="mailto:nwachukwujerry.jn.jc@gmail.com" className="text-blue-600">nwachukwujerry.jn.jc@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jerry-nwachukwu" className="text-blue-600" target="_blank">Jerry Nwachukwu</a></p>
      </header>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p>
          I’m a Mechanical Engineer and Data Scientist with a passion for renewable energy, sustainability,
          and solving Africa’s unemployment crisis through innovation and data-driven solutions. With hands-on
          experience in engineering roles and technical specialization in data tools like Python, Power BI, and
          Tableau, I blend practical knowledge with analytical thinking. I aim to create solutions that empower
          businesses and improve lives.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Portfolio Projects</h3>
        <ul className="list-disc list-inside">
          <li><strong>Digital Twin Dashboard at OFFIS</strong> – Built an intuitive dashboard for real-time data visualization using front-end technologies.</li>
          <li><strong>Green Energy Calibration</strong> – Calibrated turbine meters to optimize energy accuracy at Otakikpo Field.</li>
          <li><strong>Job Creation Data Model (Prototype)</strong> – Analyzing youth unemployment data with predictive modeling.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <ul className="grid grid-cols-2 gap-4">
          <li>Python</li><li>Power BI</li><li>Tableau</li><li>AutoCAD</li>
          <li>Matlab / Simulink</li><li>Data Visualization</li>
          <li>Excel & PowerPoint</li><li>Communication</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <ul className="list-disc list-inside">
          <li>MEng, SURE – Carl Von Ossietzky Universität Oldenburg (Ongoing)</li>
          <li>B.Eng, Mechanical Engineering – Imo State University</li>
          <li>B.Eng, Mechanical Engineering – Federal Polytechnic, Nekede</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Resume</h3>
        <p><a href="/JERRY_NWACHUKWU_CV.pdf" target="_blank" className="text-blue-600 underline">Download My Resume</a></p>
      </section>

      <footer className="text-center mt-10 text-gray-500">
        &copy; {new Date().getFullYear()} Jerry Nwachukwu. All rights reserved.
      </footer>
    </main>
  );
}