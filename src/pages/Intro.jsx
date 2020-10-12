import React from 'react'
import Slide1 from '../components/gfx/slide1.jpg'
import Slide2 from '../components/gfx/slide2.jpg'
import Slide3 from '../components/gfx/slide3.jpg'

const Intro = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={Slide1} alt="orange car" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Slide2} alt="orange car and divers" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Slide3} alt="divers" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Intro
