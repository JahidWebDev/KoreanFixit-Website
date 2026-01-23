import React, { useState, useRef, useEffect} from 'react';
import { Menu, X, Phone, MapPin, ChevronRight, Shield, Palette, Truck, Factory, HardHat, ThermometerSun, Droplets } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCTS', href: '#products' },
    { label: 'SOLUTIONS', href: '#solutions' },
    { label: 'INDUSTRIES', href: '#industries' },
    { label: 'TECHNICAL', href: '#technical' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const industrialSolutions = [
    { name: 'Heavy Equipment Coating', icon: <HardHat size={16} /> },
    { name: 'Corrosion Protection', icon: <Shield size={16} /> },
    { name: 'High-Temperature Resistance', icon: <ThermometerSun size={16} /> },
    { name: 'Chemical Resistant Paint', icon: <Droplets size={16} /> },
    { name: 'Anti-Slip Flooring', icon: <Factory size={16} /> },
    { name: 'Marine Grade Paint', icon: <Truck size={16} /> },
  ];
// ====================================
const [randomVideoIndex, setRandomVideoIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Alternative video sources - More reliable URLs
  const randomVideos = [
    // Pexels Videos (Free to use, reliable CDN)
    "https://player.vimeo.com/external/371433846.sd.mp4?s=2da31d299ee3ef4b0d4c8d5c2f5c8d7b1d4b5d5c&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/373925892.sd.mp4?s=3d6f4bb7a5c1d2d8c5e5b6f5b8c7d6e5f4b5c6d7&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/430373269.sd.mp4?s=ab4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b&profile_id=165&oauth2_token_id=57447761",
    
    // Pixabay Videos (Free stock videos)
    "https://cdn.pixabay.com/video/2023/04/11/162584-818969617_large.mp4",
    "https://cdn.pixabay.com/video/2023/04/11/162589-818970111_large.mp4",
    
    // Free Stock Videos
    "https://assets.codepen.io/3364143/720p.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    
    // Coverr.co (Free stock videos)
    "https://storage.coverr.co/videos/coverr-industrial-machine-close-up-1578750246185?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjQyMDY4MjUwfQ.3-4W7FkJY7l5q0Vv6Qd6d6Q6v6d6Q6v6d6Q6v6d6Q6v6",
    
    // Unsplash Video (Embed)
    "https://images.unsplash.com/video-1529548545183-0e04323d5c3e?mp4&fit=crop&w=800&q=80",
  ];

  // Local video fallbacks (if you add videos to public/videos folder)
  const localVideos = [
    "../video/6474077-uhd_3840_2160_25fps.mp4",
    "/videos/paint-spray.mp4",
    "/videos/factory-process.mp4",
  ];

  // Function to get a random video
  const getRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * randomVideos.length);
    return randomVideos[randomIndex];
  };

  // Initialize with random video
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomVideos.length);
    setRandomVideoIndex(randomIndex);
  }, []);

  const handleVideoError = () => {
    // Try next video if current fails
    const nextIndex = (randomVideoIndex + 1) % randomVideos.length;
    setRandomVideoIndex(nextIndex);
  };

  const handleLoadNextVideo = () => {
    const nextIndex = (randomVideoIndex + 1) % randomVideos.length;
    setRandomVideoIndex(nextIndex);
    setVideoLoaded(false);
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Top Bar */}
      <div className="bg-primary-dark text-text-invert py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-2 md:mb-0">
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-secondary" />
              <span className="text-sm font-medium">+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-secondary" />
              <span className="text-sm font-medium">Industrial Zone, Chicago, IL</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <button className="text-sm hover:text-secondary transition font-medium">REQUEST QUOTE</button>
            <button className="text-sm hover:text-secondary transition font-medium">TECHNICAL SUPPORT</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-bg shadow-lg sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <Palette className="text-text-invert" size={28} />
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-heading text-primary tracking-widest">INDUSTRI<span className="text-secondary">COAT</span></h1>
                <p className="text-xs text-text-secondary font-body tracking-wide mt-1">INDUSTRIAL COATING SOLUTIONS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-text-primary hover:text-secondary font-heading text-lg tracking-widest transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-primary text-text-invert px-8 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center group shadow-md hover:shadow-lg">
                <span className="font-heading tracking-widest">GET SAMPLE</span>
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-border bg-surface">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-text-primary hover:text-secondary py-3 text-lg font-heading tracking-widest border-b border-border last:border-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="bg-primary text-text-invert px-6 py-3 rounded-lg hover:bg-primary-dark transition mt-4 font-heading tracking-widest">
                  GET SAMPLE
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br  from-primary via-primary-dark to-gray-900 text-text-invert overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className=' mb-60'>
              <div className="inline-flex items-center bg-secondary/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
                <Shield size={18} className="mr-3 text-secondary" />
                <span className="font-body font-bold tracking-wide text-sm">TRUSTED SINCE 1985</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-none tracking-wider">
                <span className="block">INDUSTRIAL</span>
                <span className="text-secondary">COATINGS</span>
                <span className="block">REDEFINED</span>
              </h1>

              <p className="text-xl text-text-invert/80 mb-10 leading-relaxed font-body max-w-2xl">
                Professional-grade industrial paints and coatings engineered for extreme environments. 
                Corrosion-resistant, chemical-resistant, and high-temperature solutions for manufacturing, 
                marine, and heavy equipment industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-14">
                <button className="bg-secondary hover:bg-secondary-dark text-text-primary px-10 py-4 rounded-lg font-heading text-lg tracking-widest transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                  <span>REQUEST CATALOG</span>
                  <ChevronRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="bg-transparent border-2 border-text-invert hover:bg-text-invert/10 text-text-invert px-10 py-4 rounded-lg font-heading text-lg tracking-widest transition-all duration-300">
                  CONSULTATION
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <Shield size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading text-white text-lg tracking-wide">5-YEAR WARRANTY</p>
                    <p className="text-text-invert/70 text-sm font-body">Guaranteed Protection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <Truck size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading text-white text-lg tracking-wide">FAST DELIVERY</p>
                    <p className="text-text-invert/70 text-sm font-body">Global Shipping</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <Palette size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading text-white text-lg tracking-wide">CUSTOM COLORS</p>
                    <p className="text-text-invert/70 text-sm font-body">Any RAL Code</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Stats Card */}
          {/* Hero Stats Card with Video */}
<div className="bg-surface/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border">
  {/* Video Section */}
<div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl mb-10 overflow-hidden group">
        
        {/* Loading State */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/5 z-10">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary/30 border-t-secondary rounded-full animate-spin mx-auto mb-4"></div>
              <p className="font-body text-text-secondary">Loading video...</p>
            </div>
          </div>
        )}

        {/* Video Player */}
        <video 
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={handleVideoError}
          poster="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        >
          <source 
            src={randomVideos[randomVideoIndex]} 
            type="../video/6474077-uhd_3840_2160_25fps.mp4" 
          />
          {/* Fallback message */}
          <p className="absolute inset-0 flex items-center justify-center text-white bg-primary/80">
            Your browser doesn't support HTML5 video. Here's a 
            <a href={randomVideos[randomVideoIndex]} className="text-secondary ml-1 underline">
              link to the video
            </a> instead.
          </p>
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
        
        {/* Video Controls */}
        <div className="absolute top-4 left-4 flex space-x-2 z-20">
          <button 
            onClick={handleLoadNextVideo}
            className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg hover:bg-black/90 transition-all hover:scale-105 flex items-center group"
            title="Load next video"
          >
            <svg className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
            </svg>
            Next Video
          </button>
          <button 
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = !videoRef.current.muted;
              }
            }}
            className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg hover:bg-black/90 transition-all hover:scale-105 flex items-center"
            title="Toggle sound"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"/>
            </svg>
            Sound
          </button>
        </div>
        
        {/* Play/Pause Button */}
        <button 
          onClick={() => {
            if (videoRef.current) {
              if (videoRef.current.paused) {
                videoRef.current.play();
              } else {
                videoRef.current.pause();
              }
            }
          }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:border-white/50 transition-all hover:scale-110">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </button>
        
        {/* Video Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/80 to-transparent z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-secondary/30">
                <Factory size={28} className="text-secondary" />
              </div>
              <div>
                <p className="font-heading text-xl tracking-widest text-white">INDUSTRIAL GRADE</p>
                <p className="font-body text-white/90 mt-1">Demo Video {randomVideoIndex + 1} of {randomVideos.length}</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-1">
                {randomVideos.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === randomVideoIndex ? 'bg-secondary' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  {/* Industry Solutions - No Changes */}
  <div className="mb-10">
    <h3 className="font-heading text-2xl tracking-widest mb-6 text-text-primary">INDUSTRY SOLUTIONS</h3>
    <div className="grid grid-cols-2 gap-4">
      {industrialSolutions.map((solution, index) => (
        <div key={index} className="flex items-center p-3 bg-bg rounded-lg hover:shadow-md transition-shadow group hover:-translate-y-1 duration-300">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
            <span className="text-secondary">{solution.icon}</span>
          </div>
          <span className="font-body font-medium text-text-secondary text-sm group-hover:text-primary transition-colors">
            {solution.name}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Stats - No Changes */}
  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
    <div className="text-center group">
      <div className="font-heading text-4xl text-primary tracking-widest group-hover:scale-110 transition-transform duration-300">500+</div>
      <div className="font-body text-text-secondary text-sm mt-2">CLIENTS WORLDWIDE</div>
    </div>
    <div className="text-center group">
      <div className="font-heading text-4xl text-primary tracking-widest group-hover:scale-110 transition-transform duration-300">25K+</div>
      <div className="font-body text-text-secondary text-sm mt-2">PROJECTS COMPLETED</div>
    </div>
    <div className="text-center group">
      <div className="font-heading text-3xl text-primary tracking-widest group-hover:scale-110 transition-transform duration-300">ISO</div>
      <div className="font-body text-text-secondary text-sm mt-2">9001 CERTIFIED</div>
    </div>
  </div>
</div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="var(--color-bg)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Additional Sections would go here */}
<section className=" py-24">
  <div className="container mx-auto px-4">

    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-extrabold text-[var(--color-secondary)] mb-6 tracking-wide">
        Our Business
      </h2>
      <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
        Korean Fixit provides reliable repair, installation, and maintenance
        services with Korean-quality standards and professional expertise.
      </p>
    </div>

    {/* Business Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* Card 1 */}
      <div className="
        group
        bg-[var(--color-bg)]
        p-10
        rounded-3xl
        border border-[var(--color-border)]
        shadow-lg
        min-h-[280px]
        flex flex-col justify-center
        transition-all duration-300
        hover:bg-[var(--color-primary)]
        hover:shadow-2xl
      ">
        <h3 className="
          text-2xl md:text-3xl
          font-bold
          text-[var(--color-primary-dark)]
          mb-4
          transition-colors duration-300
          group-hover:text-[var(--color-text-invert)]
        ">
          Appliance Repair
        </h3>
        <p className="
          text-base md:text-lg
          text-[var(--color-text-muted)]
          leading-relaxed
          transition-colors duration-300
          group-hover:text-[var(--color-text-invert)]/90
        ">
          Expert repair services for refrigerators, washing machines,
          air conditioners, and other home appliances.
        </p>
      </div>

      {/* Card 2 (Highlighted Default) */}
      <div className="
        group
        bg-[var(--color-primary)]
        p-10
        rounded-3xl
        shadow-xl
        min-h-[280px]
        flex flex-col justify-center
        transition-all duration-300
        hover:bg-[var(--color-primary-dark)]
      ">
        <h3 className="
          text-2xl md:text-3xl
          font-bold
          text-[var(--color-text-invert)]
          mb-4
        ">
          Installation Service
        </h3>
        <p className="
          text-base md:text-lg
          text-[var(--color-text-invert)]/90
          leading-relaxed
        ">
          Professional installation of Korean brand appliances ensuring
          safety, performance, and long-term reliability.
        </p>
      </div>

      {/* Card 3 */}
      <div className="
        group
        bg-[var(--color-bg)]
        p-10
        rounded-3xl
        border border-[var(--color-border)]
        shadow-lg
        min-h-[280px]
        flex flex-col justify-center
        transition-all duration-300
        hover:bg-[var(--color-primary)]
        hover:shadow-2xl
      ">
        <h3 className="
          text-2xl md:text-3xl
          font-bold
          text-[var(--color-primary-dark)]
          mb-4
          transition-colors duration-300
          group-hover:text-[var(--color-text-invert)]
        ">
          Maintenance & Support
        </h3>
        <p className="
          text-base md:text-lg
          text-[var(--color-text-muted)]
          leading-relaxed
          transition-colors duration-300
          group-hover:text-[var(--color-text-invert)]/90
        ">
          Regular maintenance, genuine spare parts, and trusted after-sales
          support for long-lasting service.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="bg-[var(--color-primary)] py-24">
  <div className="container mx-auto px-4">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-[var(--color-text-invert)] mb-6">
          450<span className="text-[var(--color-secondary)]">+</span> Employees
        </h2>

        <p className="text-lg md:text-xl text-[var(--color-text-invert)]/90 leading-relaxed mb-8 max-w-xl">
          Korean Fixit is powered by a strong workforce of skilled engineers,
          technicians, and support professionals delivering reliable services
          across the country.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 max-w-md">
          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-[var(--color-secondary)]">
              10+
            </h3>
            <p className="text-[var(--color-text-invert)]/80">
              Years Experience
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-[var(--color-secondary)]">
              24/7
            </h3>
            <p className="text-[var(--color-text-invert)]/80">
              Customer Support
            </p>
          </div>
        </div>
      </div>

      {/* Right Visual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
            450+
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Certified Professionals
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
            30+
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Service Locations
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
            99%
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Customer Satisfaction
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
            100%
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Genuine Parts
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

<section className="bg-[var(--color-surface)] py-24">
  <div className="container mx-auto px-4">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Visual Card */}
      <div className="bg-[var(--color-primary)] p-14 rounded-[2.5rem] shadow-2xl text-center lg:text-left">
        <h2 className="text-6xl md:text-7xl font-extrabold text-[var(--color-text-invert)] mb-6">
          2000<span className="text-[var(--color-secondary)]">+</span>
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-invert)] mb-4">
          Ton Service Capacity
        </p>
        <p className="text-lg text-[var(--color-text-invert)]/85 leading-relaxed max-w-md mx-auto lg:mx-0">
          Large-scale operational capacity enabling Korean Fixit to handle
          industrial, commercial, and residential service demands efficiently.
        </p>
      </div>

      {/* Right Content */}
      <div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6">
          Built for Large-Scale Operations
        </h3>

        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-xl">
          With a service capacity exceeding <span className="font-semibold text-[var(--color-primary-dark)]">2000 tons</span>,
          Korean Fixit ensures fast deployment, optimized maintenance, and
          uninterrupted performance across all projects.
        </p>

        {/* Capacity Stats */}
        <div className="grid grid-cols-2 gap-8 max-w-lg">

          <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow hover:shadow-lg transition">
            <h4 className="text-3xl font-bold text-[var(--color-secondary)] mb-1">
              Industrial
            </h4>
            <p className="text-[var(--color-text-muted)]">
              Heavy-duty systems
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow hover:shadow-lg transition">
            <h4 className="text-3xl font-bold text-[var(--color-secondary)] mb-1">
              Commercial
            </h4>
            <p className="text-[var(--color-text-muted)]">
              Large buildings
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow hover:shadow-lg transition">
            <h4 className="text-3xl font-bold text-[var(--color-secondary)] mb-1">
              Residential
            </h4>
            <p className="text-[var(--color-text-muted)]">
              Housing projects
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow hover:shadow-lg transition">
            <h4 className="text-3xl font-bold text-[var(--color-secondary)] mb-1">
              Nationwide
            </h4>
            <p className="text-[var(--color-text-muted)]">
              Coverage support
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
<section className="bg-[var(--color-primary)] py-24">
  <div className="container mx-auto px-4">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-6xl md:text-7xl font-extrabold text-[var(--color-text-invert)] mb-6">
          1000<span className="text-[var(--color-secondary)]">+</span>
        </h2>

        <p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-invert)] mb-6">
          Ton Operational Capacity
        </p>

        <p className="text-lg md:text-xl text-[var(--color-text-invert)]/90 leading-relaxed mb-10 max-w-xl">
          Korean Fixit delivers reliable large-scale service solutions with
          a capacity exceeding <span className="font-semibold">1000 tons</span>,
          ensuring efficiency, safety, and long-term performance.
        </p>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 gap-6 max-w-md">
          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-[var(--color-secondary)]">
              HVAC
            </h3>
            <p className="text-[var(--color-text-invert)]/80">
              System Handling
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-[var(--color-secondary)]">
              Industrial
            </h3>
            <p className="text-[var(--color-text-invert)]/80">
              Heavy Equipment
            </p>
          </div>
        </div>
      </div>

      {/* Right Visual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
            1000+
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Ton Capacity
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
            25+
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Major Projects
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
            98%
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Efficiency Rate
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
            Nationwide
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Service Coverage
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;