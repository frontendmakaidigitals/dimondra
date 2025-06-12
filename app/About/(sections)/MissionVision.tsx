import React from "react";

const MissionVision = () => {
  return (
    <section className="relative bg-gradient-to-b from-[10%]  from-teal-800 to-[90%] to-[#EEF7FF] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-center font-[600] text-dimondra-white mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-slate-100 max-w-2xl mx-auto">
            Helping businesses grow smarter and stronger with modern,
            people-first solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="p-6 bg-white/30 backdrop-filter backdrop-blur-md rounded-2xl shadow-sm border border-gray-200/40">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-dimondra-tealDark rounded" />
              <h3 className="text-3xl font-semibold text-gray-800">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              We help organizations work smarter, grow faster, and build
              stronger teams through expert-led services in HR, operations,
              digital, and strategic planning.
            </p>
            <p className="text-gray-700">
              We want to make your work easier by handling the complex parts –
              from HR and operations to IT and strategy – so you can focus on
              growing your business. Whether you're a small company or a large
              organization, we&nbsp;re here to help you become more efficient, more
              agile, and better prepared for the future. Our goal is to create
              real value through long-term support that helps you succeed.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 bg-white/30 backdrop-filter backdrop-blur-md rounded-2xl shadow-sm border border-gray-200/40">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-dimondra-tealDark rounded" />
              <h3 className="text-3xl font-semibold text-gray-800">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              We aim to create a future where businesses of all sizes can
              operate efficiently and confidently, powered by the right support
              systems.
            </p>
            <p className="text-gray-700">
              We see Dimondra becoming a trusted name in the world of
              outsourcing, consulting, and workforce transformation. Our vision
              is to help businesses of all sizes run better, grow faster, and
              manage change more confidently. We want to be the partner that
              companies rely on — not just for services, but for insights,
              ideas, and solutions that truly make a difference. Through our
              work, we aim to lift both business performance and the potential
              of the people behind it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
