import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { 
  Home, 
  MissionVision, 
  History, 
  Leadership, 
  FacilityBased, 
  AdminTeam, 
  BoardOfDirectors, 
  Careers, 
  Resources, 
  Partners, 
  Programs,
  RecreationalPrograms,
  SpecialOlympics,
  ResidentialPrograms,
  StandardsAccreditation,
  Contact,
  Apply,
  Impact,
  SuccessStories,
  Blog,
  AnnualReport,
  Expansion,
  GetInvolved,
  LegacyGiving,
  Suggestions,
  Events
} from './lazyComponents';

// Import the non-lazy components
import BlogPostDetail from '../pages/Blog/PostDetail';
import CategoryView from '../pages/Blog/CategoryView';
import GiftsInKind from '../pages/GiftsInKind';

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/mission-vision" element={<MissionVision />} />
      <Route path="/history" element={<History />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/residential" element={<ResidentialPrograms />} />
      <Route path="/programs/facility-based" element={<FacilityBased />} />
      <Route path="/programs/recreational" element={<RecreationalPrograms />} />
      <Route path="/programs/special-olympics" element={<SpecialOlympics />} />
      <Route path="/programs/apply" element={<Apply />} />
      <Route path="/admin-team" element={<AdminTeam />} />
      <Route path="/board" element={<BoardOfDirectors />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPostDetail />} />
      <Route path="/blog/category/:category" element={<CategoryView />} />
      <Route path="/annual-report" element={<AnnualReport />} />
      <Route path="/expansion" element={<Expansion />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/get-involved/legacy-giving" element={<LegacyGiving />} />
      <Route path="/gifts-in-kind" element={<GiftsInKind />} />
      <Route path="/standards-accreditation" element={<StandardsAccreditation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/suggestions" element={<Suggestions />} />
      <Route path="/events" element={<Events />} />
    </RouterRoutes>
  );
}

export default Routes;