"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow">

      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
            <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="School Logo"
            />

        <span className="font-bold text-lg">
            Rajveer Public School
        </span>

        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">

          <Link href="/#home" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link href="/gurukul">Gurukul</Link>

          <Link href="/about" className="hover:text-yellow-300 transition">
            About
          </Link>

          <Link href="/#academics" className="hover:text-yellow-300 transition">
            Academics
          </Link>

          <Link href="/#facilities" className="hover:text-yellow-300 transition">
            Facilities
          </Link>

          <Link href="/gallery" className="hover:text-yellow-300 transition">
            Gallery
          </Link>

          <Link href="/#contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>

        </div>


        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-blue-800 px-4 pb-6 flex flex-col gap-4 text-center">

          <Link href="/#home" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link href="/gurukul" onClick={() => setMenuOpen(false)}>Gurukul</Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>

          <Link href="/#academics" onClick={() => setMenuOpen(false)}>Academics</Link>

          <Link href="/#facilities" onClick={() => setMenuOpen(false)}>Facilities</Link>

          <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>

          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        </div>

      )}

    </nav>
  );
}
