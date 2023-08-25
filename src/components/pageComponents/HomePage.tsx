import CTASection from "./CTASection"
import Conditions from "./Conditions"
import Hero from "./Hero"
import PrizePool from "./PrizePool"
import Timeline from "./Timeline"
import FAQ from "./faq"

const Home = () => {
    return (
        <>
            <Hero />

            <Timeline />

            <Conditions />

            <PrizePool />

            <CTASection />
            
            <FAQ />
        </>
    )
}

export default Home