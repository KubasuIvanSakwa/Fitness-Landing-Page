import Hero1 from "../../src/assets/hero.jpg"
import Hero2 from "../../src/assets/hero1.jpg"
import ImageSlider from "./ImageSlider"

function Hero() {
    const slides = [
        {url: `${Hero1}`, title: "JOIN FITNEZZ TODAY"},
        {url: `${Hero2}`, title: "HEALTH IS WEALTH"}
    ]

    return (
        <section  className="slid-holder" id="hero">
            <ImageSlider slides={slides}/>
        </section>
        
        )
    }

export default Hero
