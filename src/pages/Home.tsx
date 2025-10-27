import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProgramsHighlight from '../components/ProgramsHighlight';
import Impact from '../components/Impact';
import Expansion from '../components/Expansion';
import GetInvolved from '../components/GetInvolved';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProgramsHighlight />
      <Impact />
      <Expansion />
      <GetInvolved />
    </div>
  );
}

export default Home;