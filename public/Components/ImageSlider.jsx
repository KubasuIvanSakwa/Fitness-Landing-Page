import { useState } from "react"
import toLeft from "../../src/assets/to-left.svg"
import toRight from "../../src/assets/to-right.svg"

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: "100%",
        position: "relative"
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgrounSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    }

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
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
        display: "flex",
        justifyContent: "center"
    }

    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "30px"
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <section style={sliderStyles}>
            <div style={leftArrowStyles} onClick={gotToPrevious}><img width="20px" src={toLeft} /></div>
            <div
                style={slideStyles}
            >
            </div>
            <div style={rightArrowStyles} onClick={gotToNext}><img width="20px"  src={toRight}/></div>
            <div style={dotContainerStyles}>
            {slides.map((slid, slideIndex) => (
                    <div
                    key={slideIndex}
                    style={dotStyles}
                    onClick={() => goToSlide(slideIndex)}
                    >&#x2022;</div>
                ))}
            </div>
        </section>
    )
}

export default ImageSlider
