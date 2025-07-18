"use client";
import { Settings, Users2, BarChart4, MonitorSmartphone } from "lucide-react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
const problems = [
  {
    icon: Users2,
    title: "Hiring & HR Complexity",
    desc: "From recruitment to compliance, we simplify human resources for all business sizes.",
  },
  {
    icon: Settings,
    title: "Operational Bottlenecks",
    desc: "We streamline daily tasks so you can focus on growth — not admin overload.",
  },
  {
    icon: MonitorSmartphone,
    title: "Tech & IT Gaps",
    desc: "We deliver reliable IT support and infrastructure that scales with your business.",
  },
  {
    icon: BarChart4,
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
            {problems.map(({ title, icon: Icon, desc }, i) => (
              <div
                key={i}
                className={`p-6 relative ${i % 2 === 1 ? "bg-black" : "bg-dimondra-white  border-gray-300"}  rounded-xl border  shadow hover:shadow-md transition duration-300`}
              >
                <div className="absolute top-10 blur-3xl left-1/2 -translate-x-1/2 w-24 h-24 bg-slate-50 rounded-full " />
                <div className=" mb-4">
                  <div
                    className={` ${i % 2 === 1 ? "bg-slate-800" : "bg-teal-100"} w-fit p-2 rounded-xl`}
                  >
                    <Icon
                      className={`w-8 h-8  ${i % 2 === 1 ? "text-dimondra-white" : "text-dimondra-tealDark"}`}
                    />
                  </div>
                  <h4
                    className={`text-xl mt-4 ${i % 2 === 1 ? "text-dimondra-white" : "text-dimondra-black"} font-rubik font-[500] text-dimondra-black`}
                  >
                    {title}
                  </h4>
                </div>
                <p
                  className={` ${i % 2 === 1 ? "text-dimondra-white" : "text-dimondra-black"} text-sm font-quicksand font-[600] leading-relaxed`}
                >
                  {desc}
                </p>
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
