import React, { useEffect } from 'react';
import styled from 'styled-components';
import WordPressHero from './components/WordPressHero';
import WordPressFeatures from './components/WordPressFeatures';
import WordPressLearning from './components/WordPressLearning';
import WordPressOverview from './components/WordPressOverview';
import WordPressProjects from './components/WordPressProjects';
import WordPressCareer from './components/WordPressCareer';
import VideoReviews from './components/VideoReviews';
import WhyChooseUs from './components/WhyChooseUs';
import InstantDoubt from './components/InstantDoubt';
import CertifySection from './components/CertifySection';
import CourseOutline from './components/CourseOutline';
import WordPressOutcomes from './components/WordPressOutcomes';
import wpInstantBanner from './assets/wp-instant-banner.svg';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  overflow-x: hidden;
`;

const WordPressPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <WordPressHero />
      <WordPressFeatures />
      <WordPressLearning />
      <WordPressOverview />
      <WordPressProjects />
      <WordPressCareer />
      
      {/* Reusable sections for consistency */}
      <VideoReviews accentColor="#8CC7FF" accentRGB="140, 199, 255" />
      <WhyChooseUs accentColor="#8CC7FF" accentRGB="140, 199, 255" />
      <InstantDoubt accentColor="#8CC7FF" accentRGB="140, 199, 255" bannerImage={wpInstantBanner} />
      <CertifySection accentColor="#8CC7FF" accentRGB="140, 199, 255" />
      <WordPressOutcomes />
      <CourseOutline accentColor="#8CC7FF" accentRGB="140, 199, 255" />
    </PageContainer>
  );
};

export default WordPressPage;
