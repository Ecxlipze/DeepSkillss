import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiPlay } from "react-icons/fi";

// Import assets
import heroBg from "./assets/hero-bg.png";

const Section = styled.section`
  background-color: #000;
  background-image: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 140px 20px 100px;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 100px 20px 60px;
    min-height: 80vh;
  }
`;

const CodeParticle = styled(motion.div)`
  position: absolute;
  color: #00ff9d;
  font-size: 1.2rem;
  font-weight: 700;
  pointer-events: none;
  z-index: 1;
  opacity: 0.35;
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%;
`;

const Heading = styled(motion.h1)`
  font-family: 'Asimovian', sans-serif;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  color: #fff;
  letter-spacing: -1px;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Tagline = styled(motion.h2)`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: #FF0000;
  text-transform: none;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Divider = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin-bottom: 30px;
`;

const Description = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #E0E0E0;
  margin-bottom: 45px;
  max-width: 750px;
  font-weight: 300;

  span {
    color: #fff;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const BaseButton = styled(motion.button)`
  padding: 14px 34px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  position: relative;
  transition: all 0.3s ease;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: #7B1F2E;
  color: #fff;
  box-shadow: 0 0 20px rgba(123, 31, 46, 0.3);

  &:hover {
    background: #9b283b;
    box-shadow: 0 0 30px rgba(123, 31, 46, 0.5);
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const CodeParticles = () => {
  const particles = Array.from({ length: 18 });

  return (
    <>
      {particles.map((_, i) => {
        const char = Math.random() > 0.5 ? "0" : "1";
        return (
          <CodeParticle
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -120 - 120],
              x: [null, (Math.random() - 0.5) * 120],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {char}
          </CodeParticle>
        );
      })}
    </>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  // Use window size or default to 1920x1080
  const initialX = typeof window !== 'undefined' ? window.innerWidth / 2 : 960;
  const initialY = typeof window !== 'undefined' ? window.innerHeight / 2 : 540;

  const mouseX = useMotionValue(initialX);
  const mouseY = useMotionValue(initialY);

  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax values
  const moveX = useTransform(springX, [0, 2000], [-15, 15]);
  const moveY = useTransform(springY, [0, 1200], [-15, 15]);

  useEffect(() => {
    // Disable parallax on touch devices to avoid the initial shift and keep it centered
    if (window.matchMedia("(pointer: coarse)").matches) {
      mouseX.set(initialX);
      mouseY.set(initialY);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, initialX, initialY]);

  return (
    <Section id="hero">
      <CodeParticles />
      <ContentWrapper style={{ x: moveX, y: moveY }}>
        <Heading
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Build Skills That <br /> Secure Your Future
        </Heading>
        
        <Tagline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Industry-relevant digital skills designed to turn learners into professionals.
        </Tagline>

        <Divider 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ margin: "0 auto 30px" }}
        />
        
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          At <span>Deepskills</span>, we equip young adults with practical, job-ready skills in design and 
          web development, the skills that power today's digital economy. 
          Design, develop and succeed!
        </Description>
        
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <PrimaryButton 
            onClick={() => navigate('/register')}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }}
          >
            <FiArrowRight size={20} /> Explore Courses
          </PrimaryButton>
          <SecondaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <FiPlay size={18} /> Book a Demo
          </SecondaryButton>
        </ButtonGroup>
      </ContentWrapper>
    </Section>
  );
};

export default HeroSection;
