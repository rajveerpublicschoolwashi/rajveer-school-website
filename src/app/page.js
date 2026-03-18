"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";

export default function Home() {

  const images = [
    { src: "/gallery1.jpg" },
    { src: "/gallery2.jpg" },
    { src: "/gallery3.jpg" },
    { src: "/gallery4.jpg" },
    { src: "/gallery5.jpg" },
    { src: "/gallery6.jpg" },
    { src: "/gallery7.jpg" },
    { src: "/gallery8.jpg" }
  ];

  const [index, setIndex] = useState(-1);

  return (
    <main>

      {/* HERO */}

      <section
        id="home"
        className="h-[550px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="bg-black/50 p-10 rounded">

          <h1 className="text-5xl font-bold">
            Rajveer Public School
          </h1>

          <p className="mt-4 text-xl">
            Discover Bright Beginnings
          </p>

          <a
  href="https://wa.me/917057603603?text=Hello%20I%20want%20information%20about%20school%20admission"
  target="_blank"
  className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded font-semibold"
>
  Admission Open 2026
</a>

        </div>
      </section>


      {/* STATS */}

      <Stats />

/* ACADEMICS */

<section id="academics" className="py-16 bg-gray-100 text-center">

  <h2 className="text-3xl font-bold">
    Our Academics
  </h2>

  <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-8">

    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold">Pre Primary</h3>
      <p className="mt-2">Nursery, Jr. K. G. & Sr. K. G.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold">Primary School</h3>
      <p className="mt-2">1st to 5th Standard</p>
      <p>Semi-English and English Medium</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold">High School</h3>
      <p className="mt-2">6th to 10th Standard</p>
      <p>Semi-English and English Medium</p>
    </div>

  </div>


  {/* ⭐ GURUKUL HIGHLIGHT */}

  <div className="mt-12 flex justify-center px-6">

    <Link href="/gurukul" className="w-full max-w-xl">

      <div className="bg-yellow-400 text-black p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">

        <h3 className="text-xl font-bold">
          🎓 Gurukul Pattern (5th to 10th)
        </h3>

        <p className="mt-2 text-sm">
          Complete education with foundation preparation, skills, and holistic development — all under one roof.
        </p>

        <p className="mt-3 font-semibold text-blue-900">
          Click to know more →
        </p>

      </div>

    </Link>

  </div>

</section>


      {/* FACILITIES */}

<section id="facilities" className="py-16 text-center">

  <h2 className="text-3xl font-bold">
    Our Campus & Facilities
  </h2>

  {/* Facilities List (UNCHANGED) */}
  <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6">

    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Computer Lab</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Digital Classroom</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Library</div>

    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Playground</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">School Bus</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Science Lab</div>

    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Sports Activities</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">CCTV Security</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Activity Room</div>

    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">NCC</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Atal Lab</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Kreedo Lab</div>

    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Music</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Children Play Park</div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">Clean Washrooms</div>

  </div>


  {/* 🔥 Facility Images (OLD GALLERY, NO TITLE) */}

  <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-4 gap-4 px-6">

    {images.map((img, i) => (
      <img
        key={i}
        src={img.src}
        onClick={() => setIndex(i)}
        className="w-full h-56 object-cover rounded-lg shadow hover:scale-105 transition cursor-pointer"
      />
    ))}

  </div>


  {/* View Full Gallery Button */}

  <div className="mt-10">
    <a
      href="/gallery"
      className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      View Full Gallery
    </a>
  </div>

</section>


{/* LIGHTBOX (Keep this same) */}

<Lightbox
  open={index >= 0}
  close={() => setIndex(-1)}
  slides={images}
  index={index}
/>


      {/* CONTACT */}

<section id="contact" className="py-16 bg-gray-100">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

    {/* Contact Details */}

    <div>

      <h2 className="text-3xl font-bold">
        Contact Us
      </h2>

      <p className="mt-6 text-gray-700">
        <strong>Rajveer Public School</strong><br/>
        Near Khat Karkhana, Khau Galli Stop<br/>
        Radhanagari Road, Washi<br/>
        Tal - Karveer, Dist - Kolhapur<br/>
        416011
      </p>

      <p className="mt-4">
        <strong>Phone:</strong> 7057603603
      </p>

    </div>


    {/* Google Map */}

    <div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.9108287804497!2d74.16900777370772!3d16.631243884132637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc05501fa294031%3A0x157768cf369263b4!2sRajveer%20Public%20School!5e0!3m2!1sen!2sin!4v1773377109766!5m2!1sen!2sin"
        className="w-full h-[350px] rounded-lg border"
        loading="lazy"
      ></iframe>

    </div>

  </div>

</section>

{/* FLOATING WHATSAPP BUTTON */}

<a
  href="https://wa.me/917057603603?text=Hello%20I%20want%20information%20about%20school%20admission"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 animate-bounce"
>

  <img
    src="/whatsapp.png"
    alt="WhatsApp"
    className="w-6 h-6"
  />

  Chat

</a>

    </main>
  );
}