"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Gift, Sparkles, Heart, Star, ArrowRight, Menu, X, ShoppingBag, Play } from 'lucide-react';
import byFasheLogo from '../image/byfashelogo.png'

const ByFasheWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const logo = [
    {
      image: ""
    }
  ]

  const giftBoxes = [
    {
      name: "Luxury Romance",
      price: "$89",
      image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=400&h=400&fit=crop",
      description: "Curated with premium chocolates, silk accessories, and romantic essentials"
    },
    {
      name: "Adventure Spirit",
      price: "$76",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Perfect for thrill-seekers with gadgets, outdoor gear, and surprises"
    },
    {
      name: "Wellness Bliss",
      price: "$94",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop",
      description: "Self-care essentials, aromatherapy, and wellness-focused surprises"
    }
  ];

  const testimonials = [
    {
      name: "1603.a__",
      role: "Tiktok Customer",
      content: "good item and good seller 5 star for u",
      rating: 5
    },
    {
      name: "@bie🦋",
      role: "Tiktok Customer",
      content: "love giler , thanks seller.",
      rating: 5
    },
    {
      name: "@Riyan Afif 427",
      role: "Tiktok Customer",
      content: "Mantap ibu saya memang suka",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[rgba(255,255,255,0)] text-black "> {/* Changed bg-white to bg-[rgba(255,255,255,0.8)] */}
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-red-100/100 via-orange-200 to-amber-200"
          // style={{
          //   transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          // }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-tl from-[#F88DA3] to-[#FF6B81] bg-clip-text text-transparent">
                byFashé
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-[#F88DA3] to-[#FF6B81] px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Now</span>
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#products" className="block text-white/80 hover:text-white transition-colors">Products</a>
              <a href="#about" className="block text-white/80 hover:text-white transition-colors">About</a>
              <a href="#contact" className="block text-white/80 hover:text-white transition-colors">Contact</a>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Affordable Surprise Gift Box</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#F88DA3] to-[#FF6B81] bg-clip-text text-transparent">
                  Shhh..
                </span>
                <br />
                <span className="text-white">its Surprise!</span>
              </h1>
              <p className="text-xl text-white/200 max-w-2xl leading-relaxed">
                Fall in love with every surprise. By Fashé curates cute and romantic gift boxes made to
                melt hearts — perfect for birthdays, anniversaries, or just to show you care.
                Thoughtfully crafted, affordably priced — because love should always feel this easy. 💌✨
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-[#F88DA3] to-[#FF6B81] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>Explore Collections</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Story</span>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">39+</div>
                <div className="text-white/60">5 Star Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">262+</div>
                <div className="text-white/60">Unique Items Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">97%</div>
                <div className="text-white/60">Satisfaction</div>
              </div>
            </div>``
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-900 to-yellow-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                    src="https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=600&h=600&fit=crop"
                    alt="Luxury Gift Box"
                    className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            {/* <div className="absolute top-20 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="w-8 h-8 text-white" />
            </div> */}
            {/* <div className="absolute -bottom-10 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center animate-bounce">
              <Star className="w-6 h-6 text-white" />
            </div> */}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#F88DA3] to-[#FF6B81] bg-clip-text text-transparent">
                Signature Collections
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each collection is thoughtfully designed to create unforgettable moments and lasting memories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {giftBoxes.map((box, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden group-hover:border-white/20 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={box.image}
                      alt={box.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">{box.name}</h3>
                      <span className="text-2xl font-bold text-[#FF6B81]">{box.price}</span>
                    </div>
                    <p className="text-white/100">{box.description}</p>
                    <button className="w-full bg-gradient-to-r from-[#F88DA3] to-[#FF6B81] py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                      Choose This Box
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-[#F88DA3] to-[#FF6B81] bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-400/20 to-pink-400/20  backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-white">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-white/60">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-purple-500' : 'bg-white/30'
                    }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready for Your Next
              <br />
              <span className="bg-gradient-to-r from-[#F88DA3] to-[#FF6B81] bg-clip-text text-transparent">
                Surprise?
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust byFashé to deliver extraordinary moments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#F88DA3] to-[#FF6B81] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#F88DA3] to-[#FF6B81] bg-clip-text text-transparent">
                  byFashé
                </span>
              </div>
              <p className="text-white/60">
                Creating magical moments through curated surprise experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Home</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Products</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Collections</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Luxury Romance</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Adventure Spirit</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Wellness Bliss</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/60">
              © 2025 byFashé. All rights reserved. Crafted with love for surprise enthusiasts.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ByFasheWebsite;