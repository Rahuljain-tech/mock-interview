import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const socials = [
    { icon: 'linkedin-ico.png', url: 'https://www.linkedin.com/in/rahul-jain-4109421b7' },
    { icon: 'github-ico.png', url: 'https://github.com/Rahuljain-tech' },
    { icon: 'twitter-ico.png', url: '#' },
    { icon: 'yt-ico.png', url: '#' },
    { icon: 'insta-ico.png', url: '#' },
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hey, My name is Rahul Jain
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          I am dedicated to delivering innovative solutions and continuously expanding my skills in software development. 
          I thrive in collaborative environments and look forward to contributing to dynamic teams.
        </p>
        <Link 
          href="/#projects"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Projects
        </Link>
      </div>

      <div className="flex gap-6 mt-12">
        {socials.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src={`/assets/png/${social.icon}`}
              alt={social.icon.split('-')[0]}
              width={30}
              height={30}
            />
          </a>
        ))}
      </div>
    </section>
  )
} 