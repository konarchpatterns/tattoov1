import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoryGrid from './components/CategoryGrid'
import ShopSection from './components/ShopSection'
import FeaturedCollections from './components/FeaturedCollections'
import GenzCollections from './components/GenzCollections'
import HotRightNow from './components/HotRightNow'
import VibeFeedBlog from './components/VibeFeedBlog'
import FAQSection from './components/FAQSection'
import TrustSection from './components/TrustSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <ShopSection />
        <FeaturedCollections />
        <GenzCollections />
        <HotRightNow />
        <VibeFeedBlog />
        <TrustSection />
        <FAQSection />
        <TestimonialSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
