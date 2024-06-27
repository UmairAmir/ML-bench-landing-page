import React from 'react'
import Navbar from './components/navbar/navbar'
import HeroSection from './components/heroSection/heroSection'
import Header from './components/header/header'
import Card from './components/card/card'
import Card2 from './components/card2/card2'
import LogoCard from './components/logoCard/logoCard'
import Ending from './components/ending/ending'
import Footer from './components/footer/footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Header />
      <h1 className='text-4xl md:text-4xl font-bold mb-4 mt-14 text-center'><span className='text-custom-blue '>Discover</span> What We Deliver</h1>
      <Card
        imageUrl="/card1.png"
        headingStart="IOS"
        heading="APP DEVELOPMENT"
        paragraph="OptimaGeeks is a leading iOS app development company that specializes in developing native iOS apps for the iPhone and iPad using Swift, Objective-C, and modern Apple frameworks like SwiftUI. Our skilled iOS developers build high-performing, user-friendly iOS apps with stunning UI/UX seamlessly optimized for all Apple devices. Using agile development, we continuously enhance your custom iOS app post-"
      />

        <Card2
          imageUrl="/card2.png"
          headingStart="Android"
          heading="APP DEVELOPMENT"
          paragraph="With multiple Google-certified Android developers on staff, OptimaGeeks employs Kotlin, Java, and the latest Android Studio framework to build secure, scalable native Android apps with delightful user experiences tailored for Android phones, TV, and wearables. Leveraging Firebase, Jetpack libraries, and popular technologies like Flutter, we create the highest quality Android apps that users love"
      />

      <Card
        imageUrl="/card3.png"
        headingStart="Custom"
        heading="Mobile APP DEVELOPMENT"
        paragraph="OptimaGeeks is a leading iOS app development company that specializes in developing native iOS apps for the iPhone and iPad using Swift, Objective-C, and modern Apple frameworks like SwiftUI. Our skilled iOS developers build high-performing, user-friendly iOS apps with stunning UI/UX seamlessly optimized for all Apple devices. Using agile development, we continuously enhance your custom iOS app post-"
      />

      <Card2
        imageUrl="/card4.png"
        headingStart="APP"
        heading="INTEGRATION"
        paragraph="eamlessly connects your custom mobile apps to critical backend systems, services and data sources. We integrate iOS, Android and hybrid apps with any REST or SOAP based API, database, ERP like SAP, CRM like Salesforce, or other business system via robust, scalable, and highly secure APIs. Following best practices for API design, our team handles your end-to-end integration project from planning and architecture "
      />

      <Card
        imageUrl="/card5.png"
        headingStart="TESTING"
        heading="& QUALITY ASSURANCE"
        paragraph="Our rigorous testing process includes automated testing for coverage and manual real-world testing for precision. We test all functionalities, UI flows, integrations, security, and edge cases to ensure rock-solid quality and flawless functionality at launch. Using advanced tools for test automation, bug tracking, and test reporting, we provide complete transparency into testing progress. "
      />

      <div className='bg-grey'>

        <h1 className='text-4xl md:text-4xl font-bold mb-4 mt-14 max-w-2xl m-auto text-center '> Mobile App Development Service <span className='text-custom-blue '>Process</span></h1>
        <p className='text-lg md:text-xl max-w-4xl m-auto text-center'>Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>


        <div className="flex flex-col md:flex-row justify-center items-center w-11/12 m-auto">
          <LogoCard
            logoUrl="/logoCard1.png"
            number="1"
            heading="Requirement Gathering"
            paragraph="In the first step, gather system requirements. Collaborate with the client to collect data, including app purpose, audience, features, and platform preferences"
            />
          <LogoCard
            logoUrl="/logoCard2.png"
            number="2"
            heading="Design and Development"
            paragraph="After getting requirements, we form a thorough app development plan, crafting prototypes and UI/UX designs. We then code apps using suitable frameworks, prioritizing clean, modular code."
            />
          <LogoCard
            logoUrl="/logoCard3.png"
            number="3"
            heading="Testing and Implementation"
            paragraph="Post-deployment, we prioritize ongoing app maintenance, security, and quality assurance, conducting comprehensive tests and aiding in store listings for user engagement."
            />
          <LogoCard
            logoUrl="/logoCard4.png"
            number="4"
            heading="Maintenance and Updates"
            paragraph="Post-deployment, our commitment endures. We prioritize app maintenance, keeping it secure and compatible with new OS versions. We guarantee long-term functionality and relevance."
            />
        </div>
      </div>
      <Ending />
      <Footer />
    </div>
  )
}

export default Home