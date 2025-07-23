"use client";
import { Settings, Users2, BarChart4, MonitorSmartphone } from "lucide-react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import BgLayer from "../../app_chunks/BgLayer";
const problems = [
  {
    img: '/services/advisory-support.webp',
    title: "Hiring & HR Complexity",
    desc: "From recruitment to compliance, we simplify human resources for all business sizes.",
  },
  {
    img: '/services/processManangement.webp',
    title: "Operational Bottlenecks",
    desc: "We streamline daily tasks so you can focus on growth — not admin overload.",
  },
  {
    img: '/services/cloud-services.webp',
    title: "Tech & IT Gaps",
    desc: "We deliver reliable IT support and infrastructure that scales with your business.",
  },
  {
    img: '/services/roadmap.webp',
    title: "Expansion Challenges",
    desc: "Entering new markets? We guide your growth with proven strategy and execution.",
  },
];

const GlobalAndProblems = () => {
  useSplitText({
    selector: ".globalHead",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".globalTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".globalSpan",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".globalTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
    delay: 0.2,
  });
  useSplitText({
    selector: ".globalPara1",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".globalTrigger",
    type: "words, lines",
    linesClass: "line-wrapper++",
    delay: 0.4,
  });
  useSplitText({
    selector: ".globalPara2",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".globalTrigger",
    type: "words, lines",
    linesClass: "line-wrapper++",
    delay: 0.4,
  });
  useSplitText({
    selector: ".problemHead",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".problemTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });
  useSplitText({
    selector: ".problemPara",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".problemTrigger",
    type: "words, lines",
    linesClass: "line-wrapper++",
  });
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Global Reach */}
        <div className="grid globalTrigger md:grid-cols-2 gap-14 items-center">
          <div className="space-y-5">
            <h2 className="text-4xl globalHead font-dmSans font-[600] tracking-tight !leading-[3.5rem] lg:text-5xl text-dimondra-black">
              Global Reach, Local Insight
            </h2>
            <p className="text-xl text-dimondra-tealDark font-rubik globalSpan font-semibold">
              Local Insight. Global Expertise.
            </p>
            <p className="text-gray-700 font-quicksand font-[600] leading-relaxed globalPara1">
              At Dimondra, we serve businesses across borders and industries.
              Whether you&nbsp;re operating locally or expanding globally, our
              team brings strategic insight and localized execution.
            </p>
            <p className="text-gray-700 font-quicksand font-[600] leading-relaxed globalPara2">
              With multilingual teams and delivery hubs worldwide, we ensure
              your business remains compliant and competitive — wherever you
              are.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/services/global.webp"
              alt="Global Reach"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-white px-4 py-2 rounded-xl shadow text-sm text-gray-700 font-medium">
              🌍 Trusted in 15+ countries
            </div>
          </div>
        </div>

        {/* Problems We Solve */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl problemTrigger mx-auto space-y-2">
            <h3 className="text-3xl sm:text-4xl font-dmSans tracking-tighter font-[600] problemHead text-gray-900">
              Problems We Solve at Dimondra
            </h3>
            <p className="text-gray-600 problemPara font-quicksand font-[600]">
              Businesses face real challenges — and we provide practical,
              people-first solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {problems.map(({ title, img, desc }, i) => (
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
                    <p className="text-sm  text-dimondra-white font-medium text-center">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <p className="text-md text-gray-600">
              We handle the complexity so you can focus on what matters most —{" "}
              <span className="font-medium text-gray-800">
                growing your business.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalAndProblems;
