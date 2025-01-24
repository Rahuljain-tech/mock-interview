import Image from 'next/image'

export default function Footer() {
  const socials = [
    { icon: 'linkedin-ico.png', url: 'https://www.linkedin.com/in/rahul-jain-4109421b7' },
    { icon: 'github-ico.png', url: 'https://github.com/Rahuljain-tech' },
    { icon: 'twitter-ico.png', url: '#' },
    { icon: 'yt-ico.png', url: '#' },
    { icon: 'insta-ico.png', url: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex gap-4">
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
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Rahul Jain</h4>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-800">
          &copy; Copyright 2024. Made by{' '}
          <a href="#" className="hover:text-white transition-colors">
            Rahul Jain
          </a>
        </div>
      </div>
    </footer>
  )
} 