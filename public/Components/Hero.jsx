import { useState } from "react"
import { NavHashLink as Link } from "react-router-hash-link"
import Hero1 from "../../src/assets/hero.jpg"
import Hero2 from "../../src/assets/hero1.jpg"
import toLeft from "../../src/assets/to-left.svg"
import toRight from "../../src/assets/to-right.svg"

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slides = [
        {url: `${Hero1}`, title: "one"},
        {url: `${Hero2}`, title: "two"},
    ]
    
    return (
        <section className="hero-sect" id="hero" style={slideStyles}>
            <div style={}>
                <img src={toLeft} />
            </div>

            <div style={}>
                <img src={toRight} />
            </div>

            <h1>JOIN FITNEZZ TODAY</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
            <Link
                to="/"
            >
                GET STARTED
            </Link>

            <Link
                to="/"
            >
                DOWNLOAD
            </Link>
        </section>
    );
}

export default Hero;
