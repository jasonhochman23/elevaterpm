"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/jason-elevaterpm/30min";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-blue-dark z-[200] flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
          <a
            href="#how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-white hover:text-blue-light transition-colors"
          >
            How It Works
          </a>
          <a
            href="#why-elevate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-white hover:text-blue-light transition-colors"
          >
            Why ElevateRPM
          </a>
          <a
            href="#results"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-white hover:text-blue-light transition-colors"
          >
            Results
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-white hover:text-blue-light transition-colors"
          >
            FAQ
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Free Call
          </a>
        </div>
      )}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-sm py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-[38px] h-[38px] bg-gradient-to-br from-blue-dark to-blue rounded-[10px] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6"/>
                  <circle cx="11" cy="11" r="5" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M11 3 Q14 8 11 11 Q8 8 11 3Z" fill="white" opacity="0.9"/>
                  <rect x="10.1" y="13" width="1.8" height="4" rx="0.9" fill="white"/>
                  <circle cx="11" cy="18.5" r="1.2" fill="#4DA3E8"/>
                </svg>
              </div>
              <span className={`font-serif text-[22px] transition-colors ${isScrolled ? "text-blue-dark" : "text-white"}`}>
                elevate<span className={isScrolled ? "text-blue" : "text-blue-light"}>RPM</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {[
                { name: "How It Works", href: "#how-it-works" },
                { name: "Why ElevateRPM", href: "#why-elevate" },
                { name: "Results", href: "#results" },
                { name: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled
                        ? "text-muted hover:text-blue-dark"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden lg:block flex-shrink-0">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book a Free Strategy Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className={`block w-[22px] h-0.5 rounded transition-colors ${isScrolled ? "bg-blue-dark" : "bg-white"}`}></span>
              <span className={`block w-[22px] h-0.5 rounded transition-colors ${isScrolled ? "bg-blue-dark" : "bg-white"}`}></span>
              <span className={`block w-[22px] h-0.5 rounded transition-colors ${isScrolled ? "bg-blue-dark" : "bg-white"}`}></span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
