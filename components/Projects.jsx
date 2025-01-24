import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Criczzac",
      image: "/assets/jpeg/cricczac.jpg",
      description: "Built with React.js, this cricket score board app offers user registration and login. It provides real-time score tracking and correction with an undo feature, including support for bye and leg bye runs. A standout feature is the timeline, showing the last ten balls played and their corresponding scores.",
      repo: "https://github.com/Rahuljain-tech/Cricket_Scoreboard"
    },
    {
      title: "Employee Management System",
      image: "/assets/jpeg/ems.jpg",
      description: "Our Employee Management System is a robust solution built with Django, offering comprehensive functionalities such as CRUD operations for seamless management of employee records. It features a secure login and signup process leveraging Django's built-in authentication system.",
      repo: "https://github.com/Rahuljain-tech/EmployeeManagementSystem.git",
      demo: "https://employeemanagementsystem-navi.onrender.com/"
    },
    {
      title: "Parking System",
      image: "/assets/jpeg/parking_system.jpg",
      description: "It is an automated solution designed to streamline parking facility management, reducing the workload of security guards. It features user-friendly data entry, pass generation, and efficient management with diverse pass types and timestamping.",
      repo: "https://github.com/Rahuljain-tech/Parking-System"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.demo ? (
                    <a 
                      href={project.demo} 
                      className="hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  ) : project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm line-clamp-4">
                  {project.description}
                </p>
                
                {/* Buttons Container */}
                <div className="flex gap-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Repository
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 