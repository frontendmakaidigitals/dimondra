"use client";
import { Handshake, Star, CheckCircle2, HeartHandshake } from "lucide-react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import BgLayer from "../../app_chunks/BgLayer";
const values = [
  {
    title: "Integrity",
    img: '/about/integrity.jpg',
    desc: "We uphold the highest standards — doing the right thing, even when it's difficult.",
  },
  {
    title: "Excellence",
    img: '/about/trophy.jpg',
    desc: "We strive for excellence in every project, continuously improving our impact.",
  },
  {
    title: "Accountability",
    img: '/about/accountablity.jpg',
    desc: "We own our actions and outcomes, staying committed from start to finish.",
  },
  {
    title: "Empathy",
   img: '/about/empathy.jpg',
    desc: "We understand and value the people behind every business decision.",
  },
];

const ApproachAndValues = () => {
  useSplitText({
    selector: ".head1",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".trigger1",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".para1",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".trigger1",
    type: "words, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".head2",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".trigger1",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".para2",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".trigger1",
    type: "words, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".head3",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".trigger2",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".para3",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".trigger2",
    type: "words, lines",
    linesClass: "line-wrapper++",
  });

  return (
    <section className="bg-dimondra-black py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Heading */}
        <div className="text-center trigger1 max-w-3xl mx-auto space-y-3">
          <h2 className="text-5xl head1 font-dmSans font-[600] text-gray-50 tracking-tighter">
            Our Approach & Values
          </h2>
          <p className="para1 text-gray-200 font-quicksand font-[600] ">
            We do more than deliver services — we build long-term relationships
            based on trust, expertise, and shared vision.
          </p>
        </div>

        {/* Our Approach */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-4">
            <h3 className="text-4xl head2 font-rubik lg:text-5xl font-[500] text-dimondra-white">
              Our Approach
            </h3>
            <p className="text-gray-50 para2 font-quicksand font-[600] leading-relaxed">
              At Dimondra, our philosophy is rooted in partnership. We take time
              to understand each client&nbsp;s unique business, challenges, and
              goals. No cookie-cutter solutions — just tailored support, real
              expertise, and lasting results.
            </p>
            <p className="text-gray-50 para2 font-quicksand font-[600] leading-relaxed">
              From HR and IT to operations and strategy, our services are
              designed to reduce complexity, increase efficiency, and empower
              your team to thrive.
            </p>
          </div>
          <div className="rounded-3xl h-[350px] overflow-hidden shadow-lg">
            <img
              src="/services/consultation.webp"
              alt="Collaborative approach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="space-y-16 trigger2">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl head2 font-dmSans font-[600] tracking-tighter text-dimondra-white  mb-2">
              What We Stand For
            </h3>
            <p className="text-gray-100 para3 font-quicksand font-[600]">
              Our values shape how we think, work, and lead. They&nbsp;re more
              than words — they&nbsp;re the foundation of every decision we
              make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map(({ title, img, desc }, i) => (
              <div
                key={i}
                className="group relative w-full h-[340px] [perspective:1000px]"
              >
                <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white rounded-xl overflow-hidden border border-gray-200 shadow flex flex-col items-center justify-center [backface-visibility:hidden]">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                    <BgLayer />
                    <h4 className="text-xl font-dmSans absolute text-dimondra-white font-[500] p-2 bg-teal-700/40 backdrop-filter rounded-md backdrop-blur-lg text-center">
                      {title}
                    </h4>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-teal-700 rounded-xl border border-gray-200 shadow p-6 flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h4 className="text-2xl text-center font-semibold mb-2 text-dimondra-white">
                      {title}
                    </h4>
                    <p className="text-sm text-dimondra-white font-medium text-center">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachAndValues;
