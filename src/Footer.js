import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import footerBg from "./assets/footer-bg.png";
import footerLogo from "./assets/footer-logo.svg";

const FooterSection = styled.footer`
  background: url(${footerBg});
  background-size: cover;
  background-position: center;
  padding: 80px 50px 30px;
  color: #fff;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 60px 25px 30px;
  }
`;

const Grid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LogoImage = styled.img`
  width: 270px;
  height: auto;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  color: #ccc;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Title = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #7B1F2E;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FooterLink = styled(motion.create(RouterLink))`
  color: #ccc;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  width: fit-content;

  &:hover {
    color: #fff;
  }
`;

const ExternalLink = styled(motion.a)`
  color: #ccc;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  width: fit-content;

  &:hover {
    color: #fff;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  background-color: rgba(123, 31, 46, 0.1);
  border: 1px solid #7B1F2E;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: #ccc;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;

  svg {
    color: #7B1F2E;
    font-size: 1.2rem;
    margin-top: 3px;
    flex-shrink: 0;
  }
`;

const Bottom = styled.div`
  max-width: 1400px;
  margin: 60px auto 0;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #666;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Grid>
        <Column>
          <RouterLink to="/">
            <LogoImage src={footerLogo} alt="Deep Skills Logo" />
          </RouterLink>
          <Description>
            Empowering the next generation of digital professionals with industry-relevant skills and hands-on training. Join our community and build your future today.
          </Description>
          <Socials>
            <SocialIcon href="#" whileHover={{ y: -5, backgroundColor: "#7B1F2E" }}><FaFacebookF /></SocialIcon>
            <SocialIcon href="#" whileHover={{ y: -5, backgroundColor: "#7B1F2E" }}><FaInstagram /></SocialIcon>
            <SocialIcon href="#" whileHover={{ y: -5, backgroundColor: "#7B1F2E" }}><FaLinkedinIn /></SocialIcon>
            <SocialIcon href="#" whileHover={{ y: -5, backgroundColor: "#7B1F2E" }}><FaTwitter /></SocialIcon>
          </Socials>
        </Column>

        <Column>
          <Title>Quick Links</Title>
          <FooterLink to="/" whileHover={{ x: 5 }}>Home</FooterLink>
          <FooterLink to="/about" whileHover={{ x: 5 }}>About Us</FooterLink>
          <FooterLink to="/#courses" whileHover={{ x: 5 }}>All Courses</FooterLink>
          <FooterLink to="/#testimonials" whileHover={{ x: 5 }}>Testimonials</FooterLink>
          <FooterLink to="/contact" whileHover={{ x: 5 }}>Contact Us</FooterLink>
        </Column>

        <Column>
          <Title>Programs</Title>
          <FooterLink to="/graphic-design" whileHover={{ x: 5 }}>Graphic Design</FooterLink>
          <FooterLink to="/laravel-mastery" whileHover={{ x: 5 }}>Full Stack (Laravel)</FooterLink>
          <FooterLink to="/full-stack-react" whileHover={{ x: 5 }}>Full Stack (MERN)</FooterLink>
          <FooterLink to="/wordpress-mastery" whileHover={{ x: 5 }}>WordPress Mastery</FooterLink>
        </Column>

        <Column>
          <Title>Contact Us</Title>
          <ContactInfo>
            <FaEnvelope /> info@deepskills.pk
          </ContactInfo>
          <ContactInfo>
            <FaMapMarkerAlt /> 58 A2, Tipu Road Gulberg III, Lahore Pakistan
          </ContactInfo>
        </Column>
      </Grid>

      <Bottom>
        <div>© 2026 DEEPSKILLS. All rights reserved.</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <ExternalLink href="#">Privacy Policy</ExternalLink>
          <ExternalLink href="#">Terms of Service</ExternalLink>
        </div>
      </Bottom>
    </FooterSection>
  );
};

export default Footer;
