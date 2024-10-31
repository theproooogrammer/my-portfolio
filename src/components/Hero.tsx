import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Full-Stack Developer
            <span className="block text-blue-600">Building Digital Experiences</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl">
            Crafting scalable applications and beautiful interfaces that solve real-world problems.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
