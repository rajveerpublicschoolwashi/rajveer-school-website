"use client";

import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="py-12 bg-yellow-400 text-center">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-4xl font-bold">
            <CountUp end={15} duration={3} />+
          </h2>
          <p className="mt-2 font-semibold">Years of Excellence</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            <CountUp end={2000} duration={3} />+
          </h2>
          <p className="mt-2 font-semibold">Students</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            <CountUp end={40} duration={3} />+
          </h2>
          <p className="mt-2 font-semibold">Qualified Teachers</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            <CountUp end={20} duration={3} />+
          </h2>
          <p className="mt-2 font-semibold">Activities & Programs</p>
        </div>

      </div>

    </section>
  );
}