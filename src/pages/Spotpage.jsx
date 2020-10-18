import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../GlobalStyles/divingspots.scss'
import iconland from '../components/gfx/icon-land.png'
import iconlat from '../components/gfx/icon-lat.png'
import iconlon from '../components/gfx/icon-lon.png'
import icondb from '../components/gfx/icon-db.png'
import icondt from '../components/gfx/icon-dt.png'
import ReactMarkdown from 'react-markdown'
import { setLanguage } from '../scripts/language'
import { SpotContext } from './SpotContext'
import { startSlide } from '../scripts/newLightbox'
import '../GlobalStyles/lightbox.scss'


const Spotpage = ({ match }) => {

    useEffect(() => {
        setLanguage();
        setTimeout(startSlide, 1000);
    })

    const history = useHistory();

    const { spots } = useContext(SpotContext)

    const { params: { spotID } } = match;
    let spot = spots.filter(spot => {
        return (spot.Stednavn.toLowerCase().replace(' ', '-').replace('/', '').replace(' ', '-') === spotID)
    })

    const SpotDisplay = spot.map((spot) => {

        // Thumbnails that are shown on the spotpage (frontpage)
        const GalleryDisplay = spot.billede_galleri.map((galleryimg, i) => {

            return (
                <div className="mb-5 col-6 col-sm-4 col-md-3 col-lg-2">
                <img src={galleryimg.url} className="img-thumbnail imgThumb" rel={i++} alt="" />
                </div>
                
            )
        })


        // Thumbnails that are used inside the lightbox modal
        const GalleryThumbs = spot.billede_galleri.map((galleryimg, i) => {

            return (
                <img src={galleryimg.url} className="demo cursor lightboxThumb img-fluid" rel={i++} alt={galleryimg.alternativeText} />
            )
        })

        // Full size images that are used inside the lightbox modal
        const GalleryFullSize = spot.billede_galleri.map((galleryimg, i) => {

            return (
                <div className="mySlides">
                    <div className="numbertext">{i++ +1 + "/" + spot.billede_galleri.length}</div>
                    <img src={galleryimg.url} className="img-fluid lightboxImg" rel={i++} alt={galleryimg.alternativeText} />
                </div>
            )
        })


        return (

            <main key={Math.random()}>
                <div>
                    <div className="container divingspot">

                        <div className="row px-3">
                            <div className="col-sm-12 col-lg-6">
                                <h2 className="divingheadline">{spot.Stednavn}</h2>
                            </div>
                        </div>

                        <div className="row px-3">
                            <div className="col-sm-12 col-lg-6 mb-lg-0 mb-4">
                                <img src={spot.billede_top.url} alt="Diving Spot" className="img-fluid divingimg" />
                            </div>

                            <div className="col-sm-12 col-lg-6 divingstats">
                                <p> <img src={iconlat} alt="" className="icon" /> <span className="ds"> Latitude: </span> {spot.Latitude} </p>
                                <p> <img src={iconlon} alt="" className="icon" /> <span className="ds"> Longtitude: </span> {spot.Longtitude} </p>
                                <p> <img src={icondt} alt="" className="icon" /> <span className="ds"> Dybde til top: </span> {spot.dybde_top} </p>
                                <p> <img src={icondb} alt="" className="icon" /> <span className="ds"> Dybde til bund: </span> {spot.dybde_bund} </p>
                                <p> <img src={iconland} alt="" className="icon" /> <span className="ds"> Afstand fra land: </span> {spot.afstand_land}</p>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-12 py-4 px-4">
                            
                                <p className="danish">
                                <ReactMarkdown source= {spot.beskrivelse_dansk}/>
                                </p>

                                <p className="english">
                                <ReactMarkdown source= {spot.beskrivelse_engelsk}/>
                                </p>


                            </div>
                        </div>

                        <div className="mb-5">
                            <div className="row">
                            {GalleryDisplay}
                            </div>

                        </div>

                        <div className="backbuttonarea">
                        <section className="danish">
                        <button type="button" onClick={() => history.goBack()} class="btn btn-primary btn-lg btn-block my-5"> <i class="fa fa-arrow-left"></i> Tilbage</button>
                        </section>
                        <section className="english">
                        <button type="button" onClick={() => history.goBack()} class="btn btn-primary btn-lg btn-block my-5"> <i class="fa fa-arrow-left"></i> Back</button>
                        </section>
                        </div>

                    </div>
                </div>

                <div>

                </div>

                {/* ////////////// */}

                {/* <!-- The Modal/Lightbox --> */}
                <div id="myModal" className="modal row">

                    <span className="close cursor" >&times;</span>
                    <div className="modal-content">

                        {GalleryFullSize}

                        {/* Next and Previous controls */}

                        <a className="prev" >&#10094;</a>
                        <a className="next" >&#10095;</a>

                        {/* Caption text */}
                        <div className="caption-container">
                            <p id="caption"></p>
                        </div>

                        {/* Thumbnail image controls */}

                        <div className="thumbnailcontrol">

                            {GalleryThumbs}

                        </div>

                    </div>

                </div>

                {/* ////////////// */}

            </main>
        )
    }
    )

    return (
        <section>
            {SpotDisplay}
        </section>
    )
}

export default Spotpage
