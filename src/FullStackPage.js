import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import mernCard from './assets/mern-card.svg';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  background: radial-gradient(circle at 20% 50%, rgba(151, 192, 73, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(123, 31, 46, 0.15) 0%, transparent 50%);
  color: #fff;
  padding-top: 100px; /* Space for fixed header */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: relative;

  @media (max-width: 968px) {
    padding-top: 120px;
    align-items: flex-start;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px 60px;
  }
`;

const TextColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
  margin: 0;

  span {
    color: #97C049; /* Lime Green Highlight */
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  max-width: 600px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0;
`;

const StartButton = styled(motion.button)`
  background-color: #97C049;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  padding: 16px 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  width: fit-content;
  margin-top: 20px;
  box-shadow: 0 4px 15px rgba(151, 192, 73, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.5s;
  }

  &:hover {
    background-color: #86aa40;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(151, 192, 73, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`;

const CardColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const EnrollCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  position: relative;
  transform-style: preserve-3d;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CardContent = styled.div`
  padding: 24px;
  color: #000;
`;

const CreatorText = styled.p`
  font-size: 0.8rem;
  color: #666;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #333;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #7B1F2E;
    flex-shrink: 0;
  }
`;

const EnrollButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #7B1F2E;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(123, 31, 46, 0.3);

  &:hover {
    background-color: #9b283b;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(123, 31, 46, 0.4);
  }
`;

const AddedBenefit = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #7B1F2E;
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  border-radius: 50%;
  background: ${props => props.color || 'rgba(255,255,255,0.03)'};
  z-index: 1;
  pointer-events: none;
  filter: blur(40px);
`;

const FullStackPage = () => {
  const navigate = useNavigate();

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <PageContainer>
      <FloatingShape 
        size="500px" 
        color="rgba(151, 192, 73, 0.08)" 
        style={{ top: '-10%', left: '-10%' }} 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, 40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <FloatingShape 
        size="400px" 
        color="rgba(123, 31, 46, 0.08)" 
        style={{ bottom: '10%', right: '-5%' }} 
        animate={{ 
          x: [0, -30, 0], 
          y: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <ContentWrapper>
        {/* Left Column: Text Info */}
        <TextColumn
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading>
            Full Stack
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Web Development with React (MERN Stack)
            </motion.span>
          </Heading>
          
          <SubHeading>
            Learn how to Build Modern Web Applications Frontend and Backend
          </SubHeading>

          <Description>
            The MERN stack is one of the most in-demand technology stacks in today's tech industry. 
            This program is designed to help students move beyond basics and gain end-to-end web 
            development skills, from creating interactive user interfaces to building secure backend 
            APIs and deploying full applications online.
          </Description>

          <Description>
            Whether your goal is employment, freelancing, or launching your own product, this course 
            focuses on real-world development workflows and outcomes.
          </Description>

          <StartButton 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onClick={() => navigate('/register')}
          >
            Start Learning
          </StartButton>
        </TextColumn>

        {/* Right Column: Enroll Card */}
        <CardColumn
          initial={{ opacity: 0, x: 50, rotateY: 90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <EnrollCard style={{ rotateX, rotateY }}>
            <CardImage src={mernCard} alt="MERN Stack Web Development" />
            <CardContent>
              <CreatorText>Created by: DEEPSKILLS</CreatorText>
              
              <FeatureList>
                <FeatureItem>JOIN</FeatureItem>
                <FeatureItem>LEARN</FeatureItem>
                <FeatureItem>GET HIRED</FeatureItem>
              </FeatureList>

              <EnrollButton onClick={() => navigate('/register')}>ENROLL NOW</EnrollButton>
              
              <AddedBenefit>ADDED BENEFIT</AddedBenefit>
            </CardContent>
          </EnrollCard>
        </CardColumn>
      </ContentWrapper>
    </PageContainer>
  );
};

export default FullStackPage;
