import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "animate.css";
import "./App.scss";

import NavBar from "./pages/nav/NavBar.jsx";
import Footer from "./pages/footer/Footer";
import LoadnigMain from "./loading/LoadnigMain.jsx";

// import Home from "./pages/home/Home.jsx";
// import Blogs from "./pages/blogs/Blogs.jsx";
// import Blog from "./pages/blogs/Blog.jsx";
// import About from "./pages/about/About.jsx";
// import Career from "./pages/career/Career.jsx";
// import Courses from "./pages/courses/Courses.jsx";
// import Hire from "./pages/hire/Hire.jsx";
// import Services from "./pages/services/Services.jsx";
// import Course from "./pages/courses/Course";
// import Service from "./pages/services/Service";
// import Webinars from "./pages/Webinars/Webinars";
// import Webinar from "./pages/Webinars/Webinar";
// import Contact from "./pages/contact/Contact";
// import CourseL from "./landignPages/CourseL";
// import WebinarL from "./landignPages/WebinarL";
// import Privacy from "./pages/Privacy/Privacy";
// import Terms from "./pages/Privacy/Terms";
// import Refund from "./pages/Privacy/Refund";

const Home = lazy(() => import("./pages/home/Home.jsx"));
const Blogs = lazy(() => import("./pages/blogs/Blogs.jsx"));
const Blog = lazy(() => import("./pages/blogs/Blog.jsx"));
const About = lazy(() => import("./pages/about/About.jsx"));
const Career = lazy(() => import("./pages/career/Career.jsx"));
const Courses = lazy(() => import("./pages/courses/Courses.jsx"));
const Hire = lazy(() => import("./pages/hire/Hire.jsx"));
const Services = lazy(() => import("./pages/services/Services.jsx"));
const Course = lazy(() => import("./pages/courses/Course"));
const Service = lazy(() => import("./pages/services/Service"));
const Webinars = lazy(() => import("./pages/Webinars/Webinars"));
const Webinar = lazy(() => import("./pages/Webinars/Webinar"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const CourseL = lazy(() => import("./landignPages/CourseL"));
const WebinarL = lazy(() => import("./landignPages/WebinarL"));
const Privacy = lazy(() => import("./pages/Privacy/Privacy"));
const Refund = lazy(() => import("./pages/Privacy/Refund"));
const Terms = lazy(() => import("./pages/Privacy/Terms"));

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Suspense fallback={<LoadnigMain />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogId" element={<Blog />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:coursesId" element={<Course />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<Service />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/webinar/:webinarId" element={<Webinar />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/landing/course/:courseId" element={<CourseL />} />
            <Route path="/landing/webinar/:webinarId" element={<WebinarL />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
          </Routes>
        </Suspense>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
