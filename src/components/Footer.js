export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {/* School Info */}
        <div>
          <h3 className="text-xl font-bold">
            Rajveer Public School
          </h3>

          <p className="mt-4 text-sm">
            Near Khat Karkhana, Khau Galli Stop <br/>
            Radhanagari Road, Washi <br/>
            Tal - Karveer, Dist - Kolhapur <br/>
            416011
          </p>

          <p className="mt-4">
            📞 7057603603
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-2">

            <li>
              <a href="/#home" className="hover:text-yellow-300">Home</a>
            </li>

            <li>
              <a href="/#academics" className="hover:text-yellow-300">Academics</a>
            </li>

            <li>
              <a href="/#facilities" className="hover:text-yellow-300">Facilities</a>
            </li>

            <li>
              <a href="/gallery" className="hover:text-yellow-300">Gallery</a>
            </li>

            <li>
              <a href="/#contact" className="hover:text-yellow-300">Contact</a>
            </li>

          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xl font-bold">
            About School
          </h3>

          <p className="mt-4 text-sm">
            Rajveer Public School focuses on holistic development of students
            through modern education, activities, and Gurukul-based learning.
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 border-t border-blue-700 pt-6 text-sm">
        © 2026 Rajveer Public School. All Rights Reserved.
      </div>

    </footer>
  );
}