import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./ui/Card";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { BiLogoBlender } from "react-icons/bi";
import { TbBrandAdobePremier } from "react-icons/tb";
import { SiAdobeaftereffects } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
// premiere blender illustrator photoshop AfterEffect AdobeAnimate
const VisualartsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Animations for titles
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], ["20px", "0px"]);
  const lineScaleX = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);

  // Animations for row 1
  const leftCardX1 = useTransform(scrollYProgress, [0.1, 0.5], ["-100%", "0%"]);
  const rightCardX1 = useTransform(scrollYProgress, [0.1, 0.5], ["100%", "0%"]);
  const cardOpacity1 = useTransform(scrollYProgress, [0.1, 0.28], [0, 1]);
  const cardScale1 = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
  const cardRotateLeft1 = useTransform(scrollYProgress, [0.1, 0.4], [-10, 0]);
  const cardRotateRight1 = useTransform(scrollYProgress, [0.1, 0.4], [10, 0]);
  const leftCardStyle1 = {
    x: leftCardX1,
    opacity: cardOpacity1,
    scale: cardScale1,
    rotate: cardRotateLeft1,
  };
  const rightCardStyle1 = {
    x: rightCardX1,
    opacity: cardOpacity1,
    scale: cardScale1,
    rotate: cardRotateRight1,
  };

  // Animations for row 2
  const leftCardX2 = useTransform(scrollYProgress, [0.3, 0.7], ["-100%", "0%"]);
  const rightCardX2 = useTransform(scrollYProgress, [0.3, 0.7], ["100%", "0%"]);
  const cardOpacity2 = useTransform(scrollYProgress, [0.3, 0.48], [0, 1]);
  const cardScale2 = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);
  const cardRotateLeft2 = useTransform(scrollYProgress, [0.3, 0.6], [-10, 0]);
  const cardRotateRight2 = useTransform(scrollYProgress, [0.3, 0.6], [10, 0]);
  const leftCardStyle2 = {
    x: leftCardX2,
    opacity: cardOpacity2,
    scale: cardScale2,
    rotate: cardRotateLeft2,
  };
  const rightCardStyle2 = {
    x: rightCardX2,
    opacity: cardOpacity2,
    scale: cardScale2,
    rotate: cardRotateRight2,
  };

  // Animations for row 3
  const leftCardX3 = useTransform(scrollYProgress, [0.5, 0.9], ["-100%", "0%"]);
  const rightCardX3 = useTransform(scrollYProgress, [0.5, 0.9], ["100%", "0%"]);
  const cardOpacity3 = useTransform(scrollYProgress, [0.5, 0.68], [0, 1]);
  const cardScale3 = useTransform(scrollYProgress, [0.5, 0.8], [0.8, 1]);
  const cardRotateLeft3 = useTransform(scrollYProgress, [0.5, 0.8], [-10, 0]);
  const cardRotateRight3 = useTransform(scrollYProgress, [0.5, 0.8], [10, 0]);
  const leftCardStyle3 = {
    x: leftCardX3,
    opacity: cardOpacity3,
    scale: cardScale3,
    rotate: cardRotateLeft3,
  };
  const rightCardStyle3 = {
    x: rightCardX3,
    opacity: cardOpacity3,
    scale: cardScale3,
    rotate: cardRotateRight3,
  };

  return (
    // the main div
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center overflow-x-hidden"
    >
      {/* the head word */}
      <motion.h2
        style={{ opacity: titleOpacity, y: titleY }}
        className="text-4xl font-extrabold text-[#ec1a63] mb-4"
      >
        Visual Arts
      </motion.h2>
      {/* the line under the head word */}
      <motion.p
        style={{ opacity: titleOpacity, y: titleY }}
        className="text-lg mb-5 text-[#ec1a63]"
      >
        Explore the world of visual arts and unleash your creativity.
      </motion.p>
      <motion.div
        style={{ scaleX: lineScaleX, transformOrigin: "left" }}
        className="w-24 h-1 bg-[#ec1a63] rounded mb-8"
      ></motion.div>
      {/* the six cards for the app that will be used*/}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
        <Card
          title={"Adobe Photoshop"}
          icon={<TbBrandAdobePhotoshop />}
          description={
            "Create stunning graphics and edit photos with the industry-standard software."
          }
          borderColor="var(--main-color-2)"
          style={leftCardStyle1}
        />
        <Card
          title={"Adobe Illustrator"}
          icon={<TbBrandAdobeIllustrator />}
          description={
            "Design vector graphics and illustrations with precision and ease."
          }
          borderColor="var(--main-color-2)"
          style={rightCardStyle1}
        />
        <Card
          title={"Blender"}
          icon={<BiLogoBlender />}
          description={
            "Bring your 3D creations to life with this powerful and completely free, open-source software."
          }
          borderColor="var(--main-color)"
          style={leftCardStyle2}
        />
        <Card
          title={"Adobe After Effects"}
          icon={<SiAdobeaftereffects />}
          description={
            "Add motion graphics and visual effects to your videos with ease."
          }
          borderColor="var(--main-color)"
          style={rightCardStyle2}
        />
        <Card
          title={"Adobe Premiere Pro"}
          icon={<TbBrandAdobePremier />}
          description={
            "Edit and produce professional videos with powerful, industry-leading tools."
          }
          borderColor="var(--main-color-3)"
          style={leftCardStyle3}
        />
        <Card
          title={"Adobe Animate"}
          icon={<MdAnimation />}
          description={
            "Create interactive animations for games, TV shows, and the web."
          }
          borderColor="var(--main-color-3)"
          style={rightCardStyle3}
        />
      </div>
    </div>
  );
};

export default VisualartsSection;
