import { useState } from 'react'
import '../App.css'
import HeroSideBar from '../components/HeroSideBar.jsx'
import BannerPad from '../components/BannerPad.jsx'
import PorductPad from '../components/ProductPad.jsx'
import CategoriesPad from '../components/CategoriesPad.jsx'
import SocialMedia from '../components/SocialMedia.jsx'
import LatestPad from '../components/LatestPad.jsx'
function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*Hero section Begin*/}
      <HeroSideBar />
      {/* Banner pad Begin */}
      <BannerPad />
      {/* Product pad Begin */}
      <PorductPad />
      {/* Categories Section Begin */}
      <CategoriesPad />
      {/* Social media pad Begin */}
      <SocialMedia />
      {/* Latest Section Begin */}
      <LatestPad />
    </>
  )
}

export default HomePage
