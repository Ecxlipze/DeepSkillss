import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Slider from 'react-slick';
import MediaCard from './components/MediaCard';
import AwardsCard from './components/AwardsCard';
import RegisterButton from './components/RegisterButton';

// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import assets
import featureBg from './assets/feature-bg.png';
import featureCard from './assets/feature-card.svg';
import dsTree from './assets/ds-tree.png';
import awardsBg from './assets/awards-bg.png';
import awardsAsset from './assets/awards.svg';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 90px;
  background-color: #000;
  color: #fff;
  overflow-x: hidden;
  position: relative;
`;



const Spotlight = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  background: radial-gradient(
    600px circle at var(--x) var(--y),
    rgba(123, 31, 46, 0.1) 0%,
    transparent 80%
  );
`;

const Banner = styled.section`
  background: linear-gradient(135deg, #7B1F2E 0%, #3d0f17 100%);
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  position: relative;
  overflow: hidden;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin: 0;
    font-family: 'Inter', sans-serif;
    position: relative;
    z-index: 2;
    background: linear-gradient(to bottom, #fff, #ffccd5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  p {
    font-size: 1.25rem;
    max-width: 800px;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
    h1 { font-size: 2.2rem; }
    p { font-size: 0.8rem; }
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '400px'};
  height: ${props => props.size || '400px'};
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  z-index: 1;
`;

const FeaturedSection = styled.section`
  position: relative;
  padding: 50px 20px;
  text-align: center;
  overflow: hidden;
`;

const ParallaxBg = styled(motion.div)`
  position: absolute;
  inset: -10%;
  background-image: url(${featureBg});
  background-size: 100% 100%;
  background-position: center;
  z-index: 1;
  opacity: 1;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: #fff;
  }

  .description {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 750px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const WhyChooseSection = styled.section`
  padding: 50px 20px;
  background: radial-gradient(circle at top right, rgba(123, 31, 46, 0.5) 0%, transparent 60%),
              radial-gradient(circle at bottom left, rgba(123, 31, 46, 0.5) 0%, transparent 50%);
  text-align: center;
  position: relative;
  overflow: hidden;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 10px;
    letter-spacing: -1px;
    background: linear-gradient(to right, #fff, #ffccd5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 800px;
    margin: 0 auto 60px;
    line-height: 1.6;
  }

  .tree-container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    
    img {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 0 30px rgba(123, 31, 46, 0.5));
    }
  }
`;

const AwardsSection = styled.section`
  padding: 50px 20px;
  position: relative;
  background-image: url(${awardsBg});
  background-size: cover;
  background-position: center;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  ${ContentWrapper} {
    z-index: 2;
  }

  .slick-slider {
    margin-top: 40px;
  }
  
  .slick-slide {
    padding: 0 15px;
  }
`;

const VideoSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;

  .register-btn-container {
    margin-top: 60px;
    display: flex;
    justify-content: center;
  }
`;

const StayUpdatedSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const MediaPage = () => {
  const { scrollYProgress } = useScroll();
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Mouse tracking for spotlight and parallax shapes
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax move for banner circles (inverted)
  const circleX = useTransform(smoothMouseX, [0, 1920], [50, -50]);
  const circleY = useTransform(smoothMouseY, [0, 1080], [50, -50]);

  const spotlightX = useMotionValue("0px");
  const spotlightY = useMotionValue("0px");

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      spotlightX.set(`${e.clientX}px`);
      spotlightY.set(`${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, spotlightX, spotlightY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };



  return (
    <PageContainer>
      <Spotlight style={{ '--x': spotlightX, '--y': spotlightY }} />

      <Banner>
        <FloatingShape 
          size="600px" 
          style={{ top: '-20%', left: '-10%', x: circleX, y: circleY }} 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <FloatingShape 
          size="500px" 
          style={{ bottom: '-10%', right: '-5%', x: useTransform(smoothMouseX, [0, 1920], [-30, 30]), y: useTransform(smoothMouseY, [0, 1080], [-30, 30]) }} 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          DeepSkills Media
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Welcome to the DeepSkill Media Page! Here, you can explore our latest updates, 
          student projects, and tutorials in web development. Stay inspired and learn from 
          our community through images, videos, and news updates.
        </motion.p>
      </Banner>

      <FeaturedSection>
        <ParallaxBg style={{ y: yParallax }} />
        
        <ContentWrapper>
          <SectionHeader
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Featured Projects & Moments</h2>
            <p className="description">
              Browse through our curated gallery showcasing student projects, 
              coding workshops, and DeepSkill events.
            </p>
          </SectionHeader>

          <CardGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <MediaCard 
              variants={itemVariants}
              image={featureCard} 
              title="Featured Projects & Moments" 
            />
            <MediaCard 
              variants={itemVariants}
              image={featureCard} 
              title="Featured Projects & Moments" 
            />
          </CardGrid>
        </ContentWrapper>
      </FeaturedSection>

      <WhyChooseSection>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          WHY CHOOSE DEEPSKILLS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Browse through our curated gallery showcasing student projects,
        </motion.p>
        <div className="tree-container">
          <motion.img 
            src={dsTree} 
            alt="DeepSkills Path" 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "backOut" }}
          />
        </div>
      </WhyChooseSection>

    
      <StayUpdatedSection>
        <ParallaxBg style={{ y: yParallax }} />
        <ContentWrapper>
          <SectionHeader
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Stay Updated</h2>
            <p className="description">
              Browse through our curated gallery showcasing student projects, 
              coding workshops, and DeepSkill events.
            </p>
          </SectionHeader>

          <CardGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MediaCard 
              variants={itemVariants}
              image={featureCard} 
              title="Featured Projects & Moments" 
            />
            <MediaCard 
              variants={itemVariants}
              image={featureCard} 
              title="Featured Projects & Moments" 
            />
          </CardGrid>
        </ContentWrapper>
      </StayUpdatedSection>
        <AwardsSection>
        <ContentWrapper>
          <SectionHeader
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>AWARDS</h2>
            <p className="description">
              Browse through our curated gallery showcasing student projects, 
              coding workshops, and DeepSkill events.
            </p>
          </SectionHeader>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Slider {...sliderSettings}>
              <AwardsCard 
                image={awardsAsset}
                title="AWARDS"
                description="Browse through our curated gallery showcasing student projects, coding workshops, and DeepSkill events."
              />
              <AwardsCard 
                image={awardsAsset}
                title="AWARDS"
                description="Browse through our curated gallery showcasing student projects, coding workshops, and DeepSkill events."
              />
              <AwardsCard 
                image={awardsAsset}
                title="AWARDS"
                description="Browse through our curated gallery showcasing student projects, coding workshops, and DeepSkill events."
              />
               <AwardsCard 
                image={featureCard}
                title="AWARDS"
                description="Browse through our curated gallery showcasing student projects, coding workshops, and DeepSkill events."
              />
            </Slider>
          </motion.div>
        </ContentWrapper>
      </AwardsSection>

      <VideoSection>
        <ParallaxBg style={{ y: yParallax }} />
        <ContentWrapper>
          <SectionHeader
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Learn Through Videos</h2>
            <p className="description">
              Browse through our curated gallery showcasing student projects, 
              coding workshops, and DeepSkill events.
            </p>
          </SectionHeader>

          <CardGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MediaCard 
              variants={itemVariants}
              image={featureCard} 
              title="Featured Projects & Moments" 
              onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
              style={{ cursor: 'pointer' }}
            />
            <MediaCard 
              variants={itemVariants}
              image={featureCard} 
              title="Featured Projects & Moments" 
              onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
              style={{ cursor: 'pointer' }}
            />
          </CardGrid>

          <motion.div 
            className="register-btn-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <RegisterButton />
          </motion.div>
        </ContentWrapper>
      </VideoSection>

    </PageContainer>
  );
};

export default MediaPage;
