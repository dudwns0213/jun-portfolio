'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import GradientWaveBackground from '@/components/animation/GradientWaveBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientWaveBackground>
        <div className="mx-auto pt-[50vh] px-4 text-center relative z-10">
          <div className="opacity-0 animate-fadeInUp">
            <p className="text-lg text-blue-600 dark:text-blue-400 mb-4 animate-delay-400">
              안녕하세요,
            </p>

            <h1 className="text-5xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-delay-200">
              프론트엔드 개발자 배영준입니다.
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 animate-delay-600">
              사용자 경험을 중시하는 개발자입니다. <br />
              최신 기술을 학습하고 적용하는것을 즐깁니다.
            </p>

            <div className="flex justify-center space-x-4 mt-8 animate-delay-1000">
              <Link
                href="https://github.com/dudwns0213"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-transform hover:scale-110"
              >
                <FaGithub size={24} />
              </Link>

              <Link
                href="https://velog.io/@jun_o_o/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-transform hover:scale-110"
              >
                <SiVelog size={24} />
              </Link>
            </div>
          </div>
        </div>
      </GradientWaveBackground>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(
                ${Math.random() * 100 - 50}px,
                ${Math.random() * 100 - 50}px
              )
              rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s forwards;
        }

        .animate-delay-200 {
          animation-delay: 0.2s;
        }

        .animate-delay-400 {
          animation-delay: 0.4s;
        }

        .animate-delay-600 {
          animation-delay: 0.6s;
        }

        .animate-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
