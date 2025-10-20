'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="A1 Day1 Productions" width={50} height={50} className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-green-400 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-green-400 transition">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-green-400 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium hover:text-green-400 transition">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-green-400 transition">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-sm font-medium hover:text-green-400 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-sm font-medium hover:text-green-400 transition">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-sm font-medium hover:text-green-400 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-sm font-medium hover:text-green-400 transition">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-sm font-medium hover:text-green-400 transition">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Elevate Your <span className="text-green-400">Story</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Award-winning video production for brands that demand excellence. From concept to final cut, we bring your vision to life.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-lg hover:bg-green-400 transition transform hover:scale-105"
              >
                Start Your Project
              </button>
            </div>
            <div className="relative h-96 md:h-full">
              <Image src="/logo.png" alt="A1 Day1 Productions" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Work</h2>
          <p className="text-gray-400 mb-16 text-lg">Explore our latest productions</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-video">
              <iframe
                src="https://player.vimeo.com/video/906404181?h=65aecc4477&title=0&byline=0&portrait=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-video">
              <iframe
                src="https://player.vimeo.com/video/912372127?h=65aecc4477&title=0&byline=0&portrait=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-video">
              <iframe
                src="https://player.vimeo.com/video/483161961?h=65aecc4477&title=0&byline=0&portrait=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video 4 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-video">
              <iframe
                src="https://player.vimeo.com/video/480793119?h=65aecc4477&title=0&byline=0&portrait=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-400 mb-16 text-lg">Comprehensive video production services</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Branded Content', desc: 'Compelling stories that connect your brand with your audience' },
              { title: 'Brand Documentaries', desc: 'Deep-dive narratives that showcase your company&apos;s journey' },
              { title: 'Narrative & Doc Films', desc: 'Cinematic storytelling with emotional depth and impact' },
              { title: 'Corporate Shoots', desc: 'Professional production for internal and external communications' },
              { title: 'Commercials', desc: 'High-impact ads that drive engagement and conversions' },
              { title: 'Full Production', desc: 'From concept development to final delivery' },
            ].map((service, idx) => (
              <div key={idx} className="p-8 bg-gray-950 rounded-xl border border-white/10 hover:border-green-500/50 transition group">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg mb-4 group-hover:bg-green-500/40 transition flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">What Clients Say</h2>
          <p className="text-gray-400 mb-16 text-lg">Trusted by industry leaders</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Working with Andrew and his team was seamless...I would highly recommend them to anyone and look forward to working with them again in the future.',
                author: 'Black Enterprise',
              },
              {
                quote: 'Working with this production company had been absolutely TREMENDOUS. I commissioned them for my second documentary and the customer service/professionalism is nothing short of exemplary. I recommend them for any of your production needs.',
                author: 'History Before Us',
              },
              {
                quote: 'We are truly blessed to have an incredible local film community of talented creatives. A1 Day1 Productions is one of those companies that not only provides quality services, but generously shares FREE content and resources to local artists who wish to expand their brand or personal business.',
                author: 'Mike Lamb',
              },
              {
                quote: 'Working with this team was an absolute joy!!!! They were professional and extremely creative. They took our idea and elevated and actually made it more of us then we did. I certainly can not wait to work with this amazing team again. Definitely not disappointed. They made it a memorable experience.',
                author: 'Fionna B',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-black rounded-xl border border-white/10">
                <p className="text-lg text-gray-300 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold text-green-400">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">About A1 Day1</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                A1 Day1 Productions is a full-service video production company dedicated to creating compelling visual stories that elevate brands and inspire audiences.
              </p>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                With a team of award-winning creatives, we specialize in branded content, documentaries, corporate productions, and commercials that deliver results.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                We&apos;re committed to excellence, professionalism, and generously supporting the local creative community.
              </p>
            </div>
            <div className="relative h-96">
              <Image src="/logo.png" alt="A1 Day1 Productions" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Create?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Let&apos;s bring your vision to life. Get in touch with our team to discuss your next project.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:info@a1day1productions.com"
              className="inline-block px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-lg hover:bg-green-400 transition transform hover:scale-105"
            >
              Send us an Email
            </a>
            <p className="text-gray-400">or visit us at a1day1productions.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2025 A1 Day1 Productions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
