import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import { HashLink } from 'react-router-hash-link';

const sections = ['home', 'project', 'service', 'review', 'contact'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const isScrollingUp = currentScrollPos < prevScrollPos;
      setVisible(isScrollingUp || currentScrollPos < 10);
      setScrolledUp(isScrollingUp && currentScrollPos > 10);
      setPrevScrollPos(currentScrollPos);

      // Active section detection
      let current = 'home';
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY >= top - 100) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolledUp ? 'bg-white shadow-md' : 'bg-[#f9f4f0]'}`}
    >
      <div className="w-11/12 md:w-[90%] mx-auto flex items-center justify-between py-5 border-b border-gray-200">
        {/* Logo */}
        <a href="#home" className="logo">
          <img src={logo} alt="logo" className="h-12" />
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <span className="text-2xl font-extrabold text-black">✕</span>
          ) : (
            <div className="space-y-2">
              <span className="block w-8 h-[3px] rounded-sm bg-black"></span>
              <span className="block w-6 h-[3px] rounded-sm bg-black"></span>
            </div>
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center space-x-6">
          {sections.map((item) => (
            <HashLink
              key={item}
              smooth
              to={`#${item}`}
              className={`text-lg  capitalize ${
                activeSection === item ? 'font-extrabold text-black' : 'text-gray-800 font-medium'
              }`}
            >
              {item}
            </HashLink>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-[#f9f4f0] flex flex-col items-start justify-start p-5 gap-4 shadow-lg transition-transform duration-700 ${
          isMenuOpen ? 'translate-y-20' : '-translate-y-full'
        }`}
      >
        {sections.map((item) => (
          <HashLink
            key={item}
            smooth
            to={`#${item}`}
            className={`text-base  capitalize ${
              activeSection === item ? 'font-extrabold text-black' : 'text-gray-800 font-medium'
            }`}
            onClick={toggleMenu}
          >
            {item}
          </HashLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
