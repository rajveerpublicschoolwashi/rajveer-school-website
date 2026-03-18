import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <main>


      {/* PAGE HEADER */}

      <section className="bg-blue-900 text-white text-center py-20">

        <h1 className="text-4xl font-bold">
          About Rajveer Public School
        </h1>

      </section>



      {/* SCHOOL INFORMATION */}

      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto text-center px-6">

          <img
            src="/logo.png"
            alt="School Logo"
            className="mx-auto w-24 mb-6"
          />

          <h2 className="text-3xl font-bold">
            Rajveer Public School
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">

            Shriram Dnyanpeeth Washi – Parent Institution!
Rajvir Public School, managed by Shriram Dnyanpeeth Washi, is a permanently unaided institution. The noble objective of our organization is to provide quality education to children from average families, empowering them to stand on their own feet in today’s competitive era.
In recent times, it has become crucial to blend traditional education with modern approaches. Therefore, while establishing this school, the institution has consciously focused on providing the maximum possible facilities and amenities at an affordable fee.
While doing so, our teaching staff is constantly striving to ensure that the quality of education remains uncompromised. In the coming times, the school remains committed to implementing even better initiatives for the continued progress of our students!

          </p>

        </div>

      </section>



      {/* SCHOOL LEADERSHIP */}

<section className="py-16 bg-gray-100">

  <div className="max-w-6xl mx-auto text-center px-6">

    <h2 className="text-3xl font-bold">
      School Leadership
    </h2>

    <p className="mt-4 text-gray-600">
      Messages from our leadership team
    </p>

  </div>


  {/* PRINCIPAL SECTION (HIGHLIGHTED) */}

  <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center px-6 bg-gradient-to-r from-blue-50 to-white p-10 rounded-xl shadow">

    <div className="text-center">

      <img
        src="/principal.jpg"
        alt="Principal"
        className="w-56 h-56 object-cover rounded-full mx-auto border-4 border-blue-500"
      />

      <h3 className="text-2xl font-bold mt-4">
        Prof. V. S. Sarnobat
      </h3>

      <p className="text-gray-500">
        Principal
      </p>

    </div>


    <div>

      <p className="text-gray-700 leading-relaxed">

        With the primary objective of achieving the holistic development of every student, we are dedicated to shaping them into sensitive and responsible citizens. The school offers education from Primary through Class 10th in both Semi-English and English mediums.

        Our focus goes beyond mere textbook knowledge; we emphasize practical intelligence, life skills, and the mastery of new concepts. By making our teaching methods as interactive and activity-based as possible, the school strives to instill a genuine love for learning in every student.

      </p>

    </div>

  </div>



  {/* COORDINATOR + DIRECTOR */}

  <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 px-6">


    {/* COORDINATOR */}

    <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">

      <img
        src="/coordinator.jpg"
        alt="Coordinator"
        className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-blue-500"
      />

      <h3 className="text-xl font-bold mt-4">
        Mr. K. L. Khade
      </h3>

      <p className="text-gray-500">
        School Coordinator
      </p>

      <p className="mt-4 text-gray-700 text-sm leading-relaxed">

        In alignment with the Founder's primary vision, the school operations are progressing excellently. Serving as the Coordinator, it has been possible to drive the school's continuous development by bringing together all stakeholders—students, parents, teachers, and the Management.

        We are receiving an overwhelming response from parents. Having successfully navigated the challenges of the pandemic, it is now much easier to move forward steadily toward achieving the institution's ultimate goals.

      </p>

    </div>



    {/* DIRECTOR */}

    <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">

      <img
        src="/director.jpg"
        alt="Director"
        className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-blue-500"
      />

      <h3 className="text-xl font-bold mt-4">
        Mr. B. A. Patil
      </h3>

      <p className="text-gray-500">
        Director
      </p>

      <p className="mt-4 text-gray-700 text-sm leading-relaxed">

        The core objective of the institution is to provide quality education to children from common social backgrounds. We operate through this educational institution with the determination to shape wise, rational, and secular Indian citizens—individuals grounded in ancient Indian traditions while embracing modern scientific thinking.

      </p>

    </div>


  </div>

</section>


      {/* FOOTER */}

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

        <li><a href="/#home" className="hover:text-yellow-300">Home</a></li>
        <li><a href="/about" className="hover:text-yellow-300">About</a></li>
        <li><a href="/#academics" className="hover:text-yellow-300">Academics</a></li>
        <li><a href="/#facilities" className="hover:text-yellow-300">Facilities</a></li>
        <li><a href="/#gallery" className="hover:text-yellow-300">Gallery</a></li>
        <li><a href="/#contact" className="hover:text-yellow-300">Contact</a></li>

      </ul>

    </div>


    {/* About */}

    <div>

      <h3 className="text-xl font-bold">
        About School
      </h3>

      <p className="mt-4 text-sm">

        Rajveer Public School focuses on holistic development
        of students through modern education, activities,
        and value-based learning.

      </p>

    </div>

  </div>


  <div className="text-center mt-10 border-t border-blue-700 pt-6 text-sm">

    © 2026 Rajveer Public School. All Rights Reserved.

  </div>

</footer>

    </main>
  );
}
