import React, { useState } from "react";
import { motion } from "motion/react";
interface dataType {
  title: string;
  description: string;
  imgUrl: string;
}
const Industry = ({
  data,
  title = "Industry we serve",
  desc = "",
}: {
  data: dataType[];
  title?: string;
  desc?: string;
}) => {
  const [hoverId, setHoverId] = useState<Number | null>(0);
  return (
    <div className="container mt-20 mb-40">
      <h1 className="text-center text-5xl font-[600]">{title}</h1>
      <p className="text-center mt-2">{desc}</p>
      <motion.div className="grid grid-cols-1 gap-10  mt-12 lg:grid-cols-4">
        {data.map(({ title, description, imgUrl }, idx) => (
          <motion.div
            onMouseEnter={() => setHoverId(idx)}
            onMouseLeave={() => setHoverId(null)}
            key={idx}
            className="w-full relative h-[300px] "
          >
            <img
              src={imgUrl}
              className="w-full h-full rounded-lg object-cover"
              alt={""}
            />
            <motion.div
              layout
              className="absolute w-full left-0 shadow-md rounded-lg  bottom-0 p-4 bg-gradient-to-t from-slate-950 to-[100%] text-slate-50 to-transparent"
            >
              <h3 className="text-xl font-[600]"> {title}</h3>
              {hoverId == idx ? (
                <motion.p
                  className="text-sm mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0 }}
                >
                  {description}
                </motion.p>
              ) : null}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Industry;
