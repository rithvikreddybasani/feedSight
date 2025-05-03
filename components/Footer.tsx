import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, ListMinus } from 'lucide-react';

interface FooterProps {
  year?: number;
  email?: string;
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Docs', href: '/docs' },
  { name: 'Projects', href: '/projects' },
] as const;

const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  email = 'rithvikreddybasani@gmail.com',
}) => {
  return (
    <footer className=" dark:text-gray-300 py-8  mt-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex gap-2 ">
              <ListMinus />
              Feed-Sight
            </h3>
            <p className="text-sm">
              The Ultimate Feedback Collection & Showcase Tool.
            </p>
            <p className="text-sm">© {year} Feed-Sight All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm hover:text-blue-500 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm hover:text-blue-500 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/rithvikreddybasani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-400"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://x.com/RithvikBasani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/basani-rithvik-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div>
              <a
                href={`mailto:rithvikreddybasani@gmail.com`}
                className="text-sm hover:underline"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
