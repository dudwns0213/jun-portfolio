'use client';

import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

import Link from 'next/link';
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-gray-800 py-8 mt-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Jun&apos;s Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/dudwns0213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://velog.io/@jun_o_o/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              <SiVelog size={24} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
