import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">DevMentor</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering developers through mentorship and structured learning paths.
          </p>
          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin aria-label="LinkedIn" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter aria-label="Twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub aria-label="GitHub" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            {['Mentors', 'Roadmaps', 'Pricing', 'Success Stories'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            {['Blog', 'Guides', 'Webinars', 'Community Forum'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Code of Conduct'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} DevMentor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}