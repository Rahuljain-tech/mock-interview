export default function About() {
  const skills = [
    "HTML", "CSS", "JavaScript", "ReactJS", "NextJS", 
    "Django", "GIT"
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-600 mb-12">
          I'm currently pursuing B.Tech in Computer Science Engineering.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get to know me!</h3>
            <p className="text-gray-600 mb-6">
              Hey! It's <strong>Rahul Jain</strong> and I'm a <strong>Full Stack Web Developer</strong> located in
              Jaipur, Rajasthan, India. I'm a Results-driven and highly motivated B.Tech student in Computer Science Engineering
              with a strong foundation in C++, Java, and Python. Experienced in developing web and mobile applications, including an
              online food ordering website and an Android journal app.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Contact
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="bg-white px-4 py-2 rounded shadow-sm text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 