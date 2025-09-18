import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./ui/Card";

const VisionSection = () => {
  // This code for animation using the library
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  // completing the code with hook useTransform
  const leftCardX = useTransform(scrollYProgress, [0.1, 0.7], ["-100%", "0%"]);
  const rightCardX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "0%"]);
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["20px", "0px"]);
  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  const leftCardStyle = { x: leftCardX, opacity: cardOpacity };
  const rightCardStyle = { x: rightCardX, opacity: cardOpacity };

  return (
    // The head word
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center overflow-x-hidden"
    >
      <motion.h2
        className="text-[#ec1a63] text-4xl font-extrabold mb-4 tracking-wide drop-shadow"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        Our Vision
      </motion.h2>
      {/* the line under the head word */}
      <motion.div
        className="w-24 h-1 bg-[#ec1a63] rounded mb-8"
        style={{ scaleX: lineScaleX, transformOrigin: "left" }}
      ></motion.div>
      {/* the two cards with props  */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
        <Card
          title={"Our Mission"}
          description={
            "The club aims to introduce a new generation of digital artists who possess the innovation and passion needed to excel in their art field, allowing them to make significant contributions to their community."
          }
          borderColor="var(--main-color)"
          style={leftCardStyle}
        />
        <Card
          title={"Our Approach"}
          description={
            "The club strives to fulfill its mission by offering unpaid membership to any individual interested in digital arts. Through this membership, members are offered tutorial lectures and assignments in graphic design, video production, and 3D design."
          }
          borderColor="var(--main-color-2)"
          style={rightCardStyle}
        />
      </div>
    </div>
  );
};

export default VisionSection;
