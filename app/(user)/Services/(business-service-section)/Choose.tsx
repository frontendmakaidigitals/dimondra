import React from "react";

interface FeatureType {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface propsType {
  data: FeatureType[];
  title: string;
  desc: string;
}
const Choose = ({ data, title, desc }: propsType) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-dimondra-black mb-4 text-center max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">{desc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {data.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4 text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Choose;
