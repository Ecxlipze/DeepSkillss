import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StyledButton = styled(motion.button)`
  background-color: #7B1F2E;
  color: #fff;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 15px 40px;
  cursor: pointer;
  clip-path: polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%);
  position: relative;
  outline: none;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 30px;
  }
`;

const RegisterButton = ({ children = "REGISTER NOW", to = "/register", onClick, ...props }) => {
  const buttonProps = {
    animate: { 
      boxShadow: [
        "0 0 20px rgba(123, 31, 46, 0.6)", 
        "0 0 35px rgba(230, 0, 0, 0.8)", 
        "0 0 20px rgba(123, 31, 46, 0.6)"
      ]
    },
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: "easeInOut" 
    },
    whileHover: { scale: 1.05, y: -5 },
    whileTap: { scale: 0.95 },
    ...props
  };

  if (to) {
    return (
      <StyledButton
        as={Link}
        to={to}
        onClick={onClick}
        {...buttonProps}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
};

export default RegisterButton;
