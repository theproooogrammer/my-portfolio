import React from 'react';
import { Code2, Server, Palette } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-md mx-auto md:max-w-full">
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=600"
              alt="Developer working"
              className="rounded-lg shadow-lg w-full h-[250px] md:h-[300px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-base text-gray-600 mb-6">
              With over 5 years of experience in full-stack development, I specialize
              in building scalable web applications that solve real-world problems.
              My passion lies in creating clean, efficient code and delivering
              exceptional user experiences.
            </p>
            <div className="grid gap-4">
              <div className="flex gap-3">
                <Code2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Frontend Development</h3>
                  <p className="text-sm text-gray-600">Creating responsive and intuitive user interfaces</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Server className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Backend Development</h3>
                  <p className="text-sm text-gray-600">Building robust and scalable server-side solutions</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Palette className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">UI/UX Design</h3>
                  <p className="text-sm text-gray-600">Designing beautiful and functional interfaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}