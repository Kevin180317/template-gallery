import React from 'react'
import HeroSection from '@/app/pages/Hero'
import CardSection from '@/app/pages/Card'
import FooterSection from '@/app/pages/Footer'

function Home() {
  return (
    <div>
      <HeroSection />
      <div className="mb-8">
        <CardSection />
      </div>
      <FooterSection />
    </div>
  )
}

export default Home