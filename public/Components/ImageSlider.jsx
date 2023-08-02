import { useState, useEffect } from "react"
import { HashLink as Link } from "react-router-hash-link"
import toLeft from "../../src/assets/to-left.svg"
import toRight from "../../src/assets/to-right.svg"

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        // Set an interval to change the slide every 5 seconds (adjust as needed)
        const interval = setInterval(() => {
            gotToNext();
        }, 7000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [currentIndex]);

    const sliderStyles = {
        width: "100%",
        height: "100%",
        position: "relative"
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        background: `url(${slides[currentIndex].url}) center/cover`,
        color: "white"
    }

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        width: "40px",
        height: "40px",
        zIndex: 1,
        cursor: "pointer",
        backgroundColor: "rgba(255,250,255, .1",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        zIndex: "4"
    }

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        width: "40px",
        height: "40px",
        zIndex: 1,
        cursor: "pointer",
        backgroundColor: "rgba(255,250,255, .1)",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        zIndex: "4"
    }

    const gotToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const gotToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const dotContainerStyles = {
        position: "absolute",
        bottom: "20px",
        left: "45%",
        display: "flex",
        justifyContent: "center",
        zIndex: "3"
    }

    const dotStyles = (isActive) => ({
        margin: "0 3px",
        cursor: "pointer",
        fontSize: isActive ? "28px" : "30px",  
        color: "white",
        color: isActive ? "rgb(230, 40, 78)" : "white",
    })

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }


    return (
        <section style={sliderStyles} className="slides">
            <div style={leftArrowStyles} onClick={gotToPrevious}><img width="20px" src={toLeft} /></div>
            <div
                style={slideStyles}
            >
                <div className="hero-content">
                    <h1>{slides[currentIndex].title}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        commodo consequat.
                    </p>
                    <div>
                        <Link
                            to="/"
                            className="get-started"
                            >
                            GET STARTED
                        </Link>

                        <Link
                            to="/"
                            className="download"
                            >
                            DOWNLOAD
                        </Link>
                    </div>
            </div>

            </div>
            <div style={rightArrowStyles} onClick={gotToNext}><img width="20px"  src={toRight}/></div>
            <div style={dotContainerStyles}>
            {slides.map((slid, slideIndex) => (
                    <div
                    key={slideIndex}
                    style={dotStyles(slideIndex === currentIndex)}
                    onClick={() => goToSlide(slideIndex)}
                    >&#x2022;</div>
                ))}
            </div>
        </section>
    )
}

export default ImageSlider
