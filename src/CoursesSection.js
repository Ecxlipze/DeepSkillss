import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaLaptop, FaCode, FaPaintBrush, FaWordpress } from "react-icons/fa";
import courseBg from "./assets/course-bg.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #000000;
  overflow: hidden;
`;

const Header = styled(motion.div)`
  text-align: center;
  padding: 60px 20px 40px;
`;

const SectionTitle = styled.h2`
  font-family: 'Asimovian', sans-serif;
  font-size: 2.7rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Tagline = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #ffffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 600;
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  background-image: url(${courseBg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #CD7C7C;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 80px;
`;

const Column = styled.div`
  flex: 1;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const IconContainer = styled(motion.div)`
  background-color: #7A1E2D;
  color: #ffffffff;
  border-radius: 50%;
  padding: 15px;
  margin-bottom: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  width: 50px;
  height: 50px;
  transition: transform 0.5s ease;
`;

const Separator = styled(motion.hr)`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: #ffffffff;
  margin-top: 10px;
  opacity: 0.5;
  transition: width 0.4s ease, opacity 0.4s ease;
`;

const CourseCard = styled(motion.div)`
  background: transparent;
  color: white;
  width: 100%;
  max-width: 350px;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 450px;

  &:hover {
    ${IconContainer} {
      transform: rotate(360deg);
    }

    ${Separator} {
      width: 50%;
      opacity: 1;
    }
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-family: 'Asimovian', sans-serif;
  margin-bottom: 15px;
  font-weight: normal;
  letter-spacing: 1px;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CourseImage = styled.div`
  width: 100%;
  height: 150px;
  background-color: #333;
  border-radius: 15px;
  margin-bottom: 20px;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;

  ${CourseCard}:hover & {
    transform: scale(1.05);
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  margin-bottom: 20px;
  line-height: 1.5;
  color: #e0e0e0;
  flex-grow: 1;
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CoursesSection = () => {
  const navigate = useNavigate();

  const courses = [
    { 
      title: "Graphic Design", 
      icon: <FaPaintBrush />, 
      path: "/graphic-design",
      desc: "Learn visual communication, branding, and design fundamentals using industry-standard tools.",
      img: "https://via.placeholder.com/300x150/333/fff?text=Design"
    },
    { 
      title: "Full Stack Web Development (PHP & Laravel)", 
      icon: <FaLaptop />, 
      path: "/laravel-mastery",
      desc: "Learn full-stack web development using PHP and Laravel to build dynamic web applications.",
      img: "https://via.placeholder.com/300x150/333/fff?text=PHP"
    },
    { 
      title: "Full Stack Web Development (React)", 
      icon: <FaCode />, 
      path: "/full-stack-react",
      desc: "Develop modern, high-performance web applications using React & JavaScript frameworks.",
      img: "https://via.placeholder.com/300x150/333/fff?text=React"
    },
    { 
      title: "WordPress Web Development (Elementor)", 
      icon: <FaWordpress />, 
      path: "/wordpress-mastery",
      desc: "Learn to design and develop professional websites using WordPress and Elementor.",
      img: "https://via.placeholder.com/300x150/333/fff?text=WordPress"
    }
  ];

  return (
    <Section>
      <Header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Courses We Offer</SectionTitle>
        <Tagline>Career-Ready Learning Programs</Tagline>
      </Header>
      
      <ContentContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Column>
          {courses.slice(0, 2).map((course, index) => (
            <CourseCard 
              key={index} 
              variants={cardVariants} 
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => navigate(course.path)}
            >
              <IconContainer>{course.icon}</IconContainer>
              <Title>{course.title}</Title>
              <CourseImage style={{ backgroundImage: `url(${course.img})` }} />
              <Description>{course.desc}</Description>
              <Separator />
            </CourseCard>
          ))}
        </Column>

        <Column>
          {courses.slice(2).map((course, index) => (
            <CourseCard 
              key={index} 
              variants={cardVariants} 
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => navigate(course.path)}
            >
              <IconContainer>{course.icon}</IconContainer>
              <Title>{course.title}</Title>
              <CourseImage style={{ backgroundImage: `url(${course.img})` }} />
              <Description>{course.desc}</Description>
              <Separator />
            </CourseCard>
          ))}
        </Column>
      </ContentContainer>
    </Section>
  );
};

export default CoursesSection;
