export const Clients = () => {
  return (
    <section id="education" className="py-20">
      <h1 className="heading">
        Education & <span className="text-purple">Achievements</span>
      </h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-black-200 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white">Education</h2>

          <p className="mt-2 text-sm text-gray-300">
            Bachelor of Engineering in Computer Engineering
          </p>

          <p className="mt-2 text-sm text-purple">
            2022 - 2026
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Pursuing Computer Engineering while actively building modern web
            development projects and improving full stack development skills.
          </p>

          <p className="mt-6 text-sm text-gray-300">
            BS in Data Science & Applications — IIT Madras
          </p>

          <p className="mt-2 text-sm text-purple">
            Online Degree Program
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Learning data science, programming, analytics and problem-solving
            alongside engineering studies.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black-200 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white">
            Internship Experience
          </h2>

          <p className="mt-2 text-sm text-gray-300">
            Web Content Uploading Intern — GAOTek
          </p>

          <p className="mt-2 text-sm text-purple">
            9 Months Internship
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Worked on website content management, product uploads,
            SEO-friendly formatting and digital content handling.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black-200 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white">
            Skills & Technologies
          </h2>

          <p className="mt-4 text-sm text-gray-400">
            WordPress, Figma, React.js, Tailwind CSS, JavaScript,
            Node.js, MongoDB, HTML, CSS, DSA, OOP, GitHub and modern frontend tools.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black-200 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white">
            Leadership & Achievements
          </h2>

          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-gray-400">
            <li>Platoon Leader at GAOTek Inc.</li>
            <li>Treasurer of College Club</li>
            <li>Captain of College Football Team</li>
            <li>Built multiple modern frontend and full stack projects</li>
            <li>Actively learning React.js, Next.js and backend development</li>
          </ul>
        </div>

      </div>
    </section>
  );
};