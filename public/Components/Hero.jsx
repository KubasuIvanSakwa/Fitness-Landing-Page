import { NavHashLink as Link } from "react-router-hash-link"


function Hero() {
    
    return (
        <section className="hero-sect" id="hero">
            <h1>JOIN FITNEZZ TODAY</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
            <Link
                to=""
            >
                GET STARTED
            </Link>

            <Link
                to=""
            >
                DOWNLOAD
            </Link>
        </section>
    );
}

export default Hero;
