import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import assets
import missionBg from "./assets/mission-bg.png";
import card1 from "./assets/mission-card1.png";
import card2 from "./assets/mission-card2.png";

const Section = styled.section`
 background-image: url(${missionBg});
  background-size: 100% 100%;
  background-position: center;
  padding: 60px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1000px;
  margin-bottom: 70px;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Inter', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const UnifiedWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 80px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(123, 31, 46, 0.2);
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 900px) {
    flex-direction: column;
    border-radius: 20px;
  }

  &:hover {
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8), 0 0 30px rgba(123, 31, 46, 0.3);
    border-color: rgba(123, 31, 46, 0.5);
    background: rgba(0, 0, 0, 0.1);
  }
`;

const MissionCard = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent, rgba(123, 31, 46, 0.05));
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);

  ${MissionCard}:hover & {
    transform: scale(1.05);
  }
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(123, 31, 46, 0.2) 0%, transparent 70%);
  filter: blur(40px);
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;

  ${UnifiedWrapper}:hover & {
    opacity: 1;
  }
`;

const RegisterButton = styled(motion.button)`
  position: relative;
  z-index: 2;
  background: #7B1F2E;
  color: #fff;
  border: none;
  padding: 18px 50px;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(123, 31, 46, 0.4);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:active::after {
    width: 200px;
    height: 200px;
  }
`;

const PulseGlow = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 105%;
  height: 105%;
  background: #7B1F2E;
  filter: blur(20px);
  z-index: -1;
  border-radius: 14px;
  opacity: 0.3;
`;

const OurMission = () => {
  const navigate = useNavigate();
  return (
    <Section id="mission">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Mission
        </SectionTitle>
        <Tagline
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Making Learning Skills Simple and Powerful
        </Tagline>
      </ContentWrapper>

      <UnifiedWrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", damping: 20 }}
        whileHover={{ scale: 1.01 }}
      >
        <GlowEffect 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <MissionCard>
          <CardImg src={card1} alt="Mission Steps 01 and 02" />
        </MissionCard>
        <MissionCard>
          <CardImg src={card2} alt="Mission Steps 03 and 04" />
        </MissionCard>
      </UnifiedWrapper>

      <div style={{ position: 'relative' }}>
        <PulseGlow
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <RegisterButton
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={() => navigate('/register')}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 15px 35px rgba(123, 31, 46, 0.6)" 
          }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </RegisterButton>
      </div>
    </Section>
  );
};

export default OurMission;
