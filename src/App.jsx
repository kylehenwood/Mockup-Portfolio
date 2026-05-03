import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Showreel from './pages/Showreel.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Post from './pages/Post.jsx';
import Project from './pages/Project.jsx';
import DesignSystem from './pages/DesignSystem.jsx';
import ProjectStyleguide from './pages/ProjectStyleguide.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Project routes are nested under Home so the home grid stays
            mounted as the underlay when a project overlay is active. */}
        <Route path="/" element={<Home />}>
          <Route path="projects/:slug" element={<Project />} />
        </Route>
        <Route path="showreel" element={<Showreel />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<Post />} />
        <Route path="posts/:slug" element={<Post />} />
        <Route path="design-system" element={<DesignSystem />} />
        <Route path="design-system/projects" element={<ProjectStyleguide />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
