export default function GurukulPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Gurukul Pattern
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
        A full-day structured learning system designed to combine academics,
        skills, and holistic development — all under one roof.
      </p>

      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What is the Gurukul Pattern?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          In today’s education system, students often attend school and then
          additional coaching or foundation classes, repeating the same syllabus
          and increasing stress. To solve this, Rajveer Public School has
          introduced the Gurukul Pattern — a complete system where students get
          everything in one place.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Our aim is to develop well-rounded students with strong communication
          skills, confidence, and the ability to perform on stage.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Everything Under One Roof
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>State Board Curriculum with integrated Foundation Preparation</li>
          <li>Meditation, Yoga, and Sports for physical and mental health</li>
          <li>Modern Skills like Computers, Robotics, and Communication</li>
          <li>Creative activities like Painting and Music</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What Makes It Different?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Competitive foundation preparation for exams like JEE, NEET, CET,
            NDA, MPSC, UPSC
          </li>
          <li>
            Training in Aptitude, Logical Reasoning, Communication, and Interviews
          </li>
          <li>
            Practical language learning (English, Marathi, Hindi)
          </li>
          <li>
            Hands-on technical skills like Robotics and Computer Science
          </li>
          <li>
            Focus on holistic development through Yoga, Meditation, and Sports
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Benefits for Parents
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>No need for extra classes or coaching</li>
          <li>Complete academic responsibility handled by school</li>
          <li>Less stress and better time management for students</li>
          <li>Reduced distractions like mobile usage</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Who Can Join?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Students from Class 4th to 9th</li>
          <li>Semi-English or English medium students</li>
          <li>Students ready for discipline and hard work</li>
        </ul>
      </section>

    </div>
  );
}