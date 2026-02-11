import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.section`
  padding: 80px 20px;
  color: #fff;
  text-align: center;
  background-color: #000;
  overflow: hidden;
`;

const Header = styled(motion.div)`
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-family: 'Asimovian', sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SliderWrapper = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  filter: drop-shadow(0 0 15px rgba(230, 0, 0, 0.4));
`;

const SliderContainer = styled.div`
  background-color: #7B1F2E;
  clip-path: polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%);
  padding: 60px 100px;
  position: relative;
  
  @media (max-width: 1024px) {
    padding: 60px 40px;
  }
`;

const TestimonialCard = styled.div`
  padding: 0;
  outline: none;
`;

const VideoIcon = styled(MdOutlinePlayCircleFilled)`
  font-size: 4.5rem;
  color: #7B1F2E;
  opacity: 0.8;
  transition: all 0.3s ease;
`;

const AuthorInfo = styled.div`
  position: absolute;
  bottom: 30px;
  color: #7B1F2E;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
`;

const CardInner = styled(motion.div)`
  background: #E0E0E0;
  border-radius: 20px;
  margin: 10px 40px;
  padding: 10%;
  height: 550px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  cursor: pointer;

  &:hover {
    background: #fff;
    ${VideoIcon} {
      transform: scale(1.2);
      color: #e60000;
      opacity: 1;
    }
    ${AuthorInfo} {
      transform: translateY(-5px);
      letter-spacing: 2px;
    }
  }

  @media (max-width: 768px) {
    margin: 10px 15px;
    height: 480px;
  }
`;

const ArrowWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffffff;
  }

  &.slick-prev {
    left: -70px; 
    @media (max-width: 1200px) { left: -50px; }
  }
  &.slick-next {
    right: -35px;
    @media (max-width: 1200px) { right: -20px; }
  }
  
  &::before { display: none; }
`;

const CustomPrevIcon = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <FaChevronLeft style={{ marginRight: "-15px" }} />
    <FaChevronLeft />
  </div>
);

const CustomNextIcon = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <FaChevronRight />
    <FaChevronRight style={{ marginLeft: "-15px" }} />
  </div>
);

const NextArrow = (props) => {
  const { className, onClick } = props;
  if (className.includes("slick-disabled")) return null;
  return (
    <ArrowWrapper className={className} onClick={onClick} whileHover={{ scale: 1.2, x: 5 }}>
      <CustomNextIcon />
    </ArrowWrapper>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  if (className.includes("slick-disabled")) return null;
  return (
    <ArrowWrapper className={className} onClick={onClick} whileHover={{ scale: 1.2, x: -5 }}>
      <CustomPrevIcon />
    </ArrowWrapper>
  );
};

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    { id: 1, author: "SARAH AHMED" },
    { id: 2, author: "M. USMAN" },
    { id: 3, author: "AISHA KHAN" },
    { id: 4, author: "BILAL MALIK" },
  ];

  return (
    <Section>
      <Header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Title>Testimonials</Title>
      </Header>
      
      <SliderWrapper
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <SliderContainer>
          <Slider {...settings}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.id}>
                <CardInner 
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <VideoIcon />
                  <AuthorInfo>{t.author}</AuthorInfo>
                </CardInner>
              </TestimonialCard>
            ))}
          </Slider>
        </SliderContainer>
      </SliderWrapper>
    </Section>
  );
};

export default TestimonialSection;
