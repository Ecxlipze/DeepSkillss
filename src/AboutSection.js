import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGraduationCap, FaWrench, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0;
`;

const LeftSide = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  width: 100%;
  background-color: #EFECEC;
  padding: 30px;
  border-radius: 15px 0 0 15px;
  
  @media (max-width: 992px) {
    border-radius: 15px;
    margin-bottom: 20px;
  }
`;

const RightSide = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #353535;
  padding: 37px;
  border-radius: 0 15px 15px 0;

  @media (max-width: 992px) {
    border-radius: 15px;
  }
`;

const SectionHeading = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  color: #333333;
  font-weight: bold;
  margin-bottom: 30px;
`;

const IconWrapper = styled(motion.div)`
  background-color: #7A1E2D;
  padding: 10px;
  border-radius: 15%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  transition: transform 0.3s;
`;

const OfferItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
  background-color: #111111;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #7A1E2D;
  cursor: pointer;

  &:hover {
    background-color: #1a1a1a;
    border-color: #e60000;
  }
`;

const OfferTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #e0e0e0;
  margin: 0;
  font-family: 'Inter', sans-serif;
`;

const RightHeader = styled.div`
  margin-bottom: 15px;
`;

const SubHeading = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const MainHeading = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #ffffff;
  font-weight: 400;
  line-height: 1.2;
`;

const ContentBox = styled(motion.div)`
  background-color: #000000;
  padding: 27px;
  border-radius: 5px;
  border: 1px solid #ba0b0bff;
  cursor: pointer;
`;

const Para = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const AboutSection = () => {
  const offers = [
    { title: "Career-Focused Learning", icon: <FaGraduationCap /> },
    { title: "Practical, Hands-On Training", icon: <FaWrench /> },
    { title: "Beginner to Professional Tracks", icon: <FaChalkboardTeacher /> },
    { title: "Skills That Lead to Real Opportunities", icon: <FaBriefcase /> }
  ];

  return (
    <Container>
      <LeftSide
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading>What We Offer</SectionHeading>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer, index) => (
            <OfferItem
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.02, 
                boxShadow: "0 5px 15px rgba(230, 0, 0, 0.2)" 
              }}
            >
              <IconWrapper whileHover={{ rotate: 10 }}>
                {offer.icon}
              </IconWrapper>
              <OfferTitle>{offer.title}</OfferTitle>
            </OfferItem>
          ))}
        </motion.div>
      </LeftSide>

      <RightSide
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <RightHeader>
          <SubHeading>About Deepskills</SubHeading>
          <MainHeading>Where Skills Become Careers</MainHeading>
        </RightHeader>
        
        <ContentBox
          whileHover={{ borderColor: "#e60000", y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <Para>
            The future belongs to those who can create, build, and adapt. <strong>Deepskills</strong> is a modern learning institute focused on hands-on digital education. We help students and young adults gain the technical and creative skills needed to succeed in today’s fast-changing job market, whether as professionals, freelancers, or entrepreneurs. We believe that skills, not just degrees, shape strong careers.
          </Para>
          <Para>
            Learn Skills, earn at an early age, and grasp your future.
          </Para>
        </ContentBox>
      </RightSide>
    </Container>
  );
};

export default AboutSection;
