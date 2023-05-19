import React, { Component } from "react";
import Slider from "react-slick";

export default class CardSlide extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div className="">
                <h2> Responsive </h2>
                <Slider {...settings}>
                    {/* <div className="cards"> */}
                        <div className="card-item">
                            <h3>1</h3>
                        </div>
                        <div className="card-item">
                            <h3>2</h3>
                        </div>
                        <div className="card-item">
                            <h3>3</h3>
                        </div>
                        <div className="card-item">
                            <h3>4</h3>
                        </div>
                        <div className="card-item">
                            <h3>5</h3>
                        </div>
                        <div className="card-item">
                            <h3>6</h3>
                        </div>
                        <div className="card-item">
                            <h3>7</h3>
                        </div>
                        <div className="card-item">
                            <h3>8</h3>
                        </div>
                    {/* </div> */}
                </Slider>
            </div>
        );
    }
}
