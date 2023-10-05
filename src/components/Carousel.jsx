import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


function Slides() {
    const landingCarousel = {
        television: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        fridge: {
            breakpoint: {
                max: 3000, min: 1024},
                items: 3
        },
        microwave: {
            breakpoint: {
            max: 1024, min: 464},
            items: 2
        },
        laptop: {
            breakpoint: {
            max: 464, min: 0},
            item: 1
        }
    };
    return (
        <div className="carousel-slides">
            <Carousel responsive={landingCarousel}>
                <div>
                    <img src="src/assets/Television.png" />
                    <h1 className="legend">Samsung Smart Android TV</h1>
                    <p>Clear & quality viewing straight to the pimple</p>
                    <h2> WAS $470</h2>
                    <h3>NOW $359</h3>
                    <h4>BUY NOW</h4>
                </div>
                <div>
                    <img src="src/assets/Refrigerator.png" />
                    <p className="legend">Ramtons Double-Door Non-Frost Fridge</p>
                    <h2> WAS $798</h2>
                    <h2>NOW $698</h2>
                    <h4>BUY NOW</h4>
                </div>
                <div>
                    <img src="src/assets/Microwave.png" />
                    <p className="legend">Hisense Sleek Digital Microwave</p>
                    <h2> WAS $533</h2>
                    <h3>NOW $450</h3>
                    <h4>BUY NOW</h4>
                </div>
                <div>
                    <img src="src/assets/HP-Pavilion-15-dk2027nia.png"/>
                    <p className="legend">HP Pavillion 15 Inch Gaming Laptop</p>
                    <h2> WAS $798</h2>
                    <h3>NOW $450</h3>
                    <h4>BUY NOW</h4>
                </div>
            </Carousel>
        </div>
    )
}

export default Slides;