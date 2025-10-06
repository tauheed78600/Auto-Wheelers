import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import BikeCarousel from '../pageComponents/Carousel.jsx'
import Page2 from './components/Page2.jsx';
import Page3 from './components/Page3.jsx';
import OurProcess from './components/OurProcess.jsx';
import AboutUs from './components/AboutUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Blogs from './components/Blogs.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const BikeCarousel = React.lazy(() => import('../app/components/Carousel.jsx'));

function Homepage() {
  return (
    <div className=''>
      {/* <Header/>x` */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <BikeCarousel />
      </React.Suspense>
      <Page2/>
      <Page3/>
      <OurProcess/>
      <AboutUs/>
      <Testimonials/>
      <Blogs/>
      {/* <Footer/> */}
    </div>
  )
}

export default Homepage
