import {
  Handshake,
  Star,
  CheckCircle2,
  HeartHandshake,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    icon: Handshake,
    desc: "We uphold the highest standards — doing the right thing, even when it's difficult.",
  },
  {
    title: "Excellence",
    icon: Star,
    desc: "We strive for excellence in every project, continuously improving our impact.",
  },
  {
    title: "Accountability",
    icon: CheckCircle2,
    desc: "We own our actions and outcomes, staying committed from start to finish.",
  },
  {
    title: "Empathy",
    icon: HeartHandshake,
    desc: "We understand and value the people behind every business decision.",
  },
];

const ApproachAndValues = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Approach & Values
          </h2>
          <p className="text-lg text-gray-600">
            We do more than deliver services — we build long-term relationships
            based on trust, expertise, and shared vision.
          </p>
        </div>

        {/* Our Approach */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-4">
            <h3 className="text-4xl lg:text-5xl font-bold text-dimondra-black">
              Our Approach
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Dimondra, our philosophy is rooted in partnership. We take time
              to understand each client&nbsp;s unique business, challenges, and
              goals. No cookie-cutter solutions — just tailored support, real
              expertise, and lasting results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From HR and IT to operations and strategy, our services are
              designed to reduce complexity, increase efficiency, and empower
              your team to thrive.
            </p>
          </div>
          <div className="rounded-3xl h-[350px] overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1607778413290-6bc9b4cf30f1?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Collaborative approach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-dimondra-black  mb-4">
              What We Stand For
            </h3>
            <p className="text-gray-600 text-lg">
              Our values shape how we think, work, and lead. They&nbsp;re more
              than words — they&nbsp;re the foundation of every decision we
              make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map(({ title, icon: Icon, desc }, i) => (
              <div
                key={i}
                className={`p-6 relative ${i % 2 === 0 ? "bg-black" : "bg-dimondra-white  border-gray-300"}  rounded-xl border  shadow hover:shadow-md transition duration-300`}
              >
                <div className="absolute top-10 blur-3xl left-1/2 -translate-x-1/2 w-24 h-24 bg-slate-50 rounded-full " />
                <div className=" mb-4">
                  <div
                    className={` ${i % 2 === 0 ? "bg-slate-800" : "bg-teal-100"} w-fit p-2 rounded-xl`}
                  >
                    <Icon
                      className={`w-8 h-8  ${i % 2 === 0 ? "text-dimondra-white" : "text-dimondra-tealDark"}`}
                    />
                  </div>
                  <h4
                    className={`text-xl mt-4 ${i % 2 === 0 ? "text-dimondra-white" : "text-dimondra-black"} font-semibold text-dimondra-black`}
                  >
                    {title}
                  </h4>
                </div>
                <p
                  className={` ${i % 2 === 0 ? "text-dimondra-white" : "text-dimondra-black"} text-sm leading-relaxed`}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachAndValues;
