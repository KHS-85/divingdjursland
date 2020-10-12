import React, { useEffect, useContext } from 'react';
import { SpotContext } from './SpotContext'
import { Link } from 'react-router-dom'
import { setLanguage } from '../scripts/language'
import MapContainer from './divingspots/MapContainer'
import map_banner from '../components/gfx/banner_map.jpg'
import '../GlobalStyles/divingspots.scss'

const Dykkerspots = () => {

    const { spots } = useContext(SpotContext)

    console.log(spots)


    const spotcardmap = spots.map(spot => {

        return (


            <section className="col-12 col-md-6 col-lg-4 my-4">
                <Link to={"/dykkerspots/" + (spot.Stednavn.toLowerCase().replace(' ', '-').replace('/', '').replace(' ', '-'))} className="card-link">
                    <div key={Math.random} className="card divingCard">
                        <img src={"http://localhost:1337" + spot.billede_top.url} alt="diving spot" title={spot.Stednavn} className="img-fluid card-img-top p-1" />
                        <div className="card-body">
                            <h4 className="card-title">{spot.Stednavn}</h4>
                        </div>
                    </div>
                </Link>
            </section>

        )

    })

    useEffect(() => {
        setLanguage();
    });

    function showList() {
        var x = document.getElementById("spotList")
        var y = document.getElementById("spotMap")
        x.style.display = "flex";
        y.style.display = "none";
    }

    function showMap() {
        var b = document.getElementById("spotList")
        var a = document.getElementById("spotMap")
        a.style.display = "block";
        b.style.display = "none";
    }

    useEffect(() => {
        setTimeout(showList, 1000);
    })

    return (
        <div>

            <div className="container-fluid px-0 mb-3">
                <div className="">
                    <img className="img-fluid" src={map_banner} alt="map banner" />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 px-3 py-5">

                        <h3 className="font-weight-bold pb-3">
                            <span className="danish">Dykkerspots på Djursland</span><span className="english">Diving spots on Djursland</span>
                        </h3>

                        <p className="pb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam alias molestiae eos at sequi, odit totam natus eaque iure maxime nostrum cupiditate dolorum laudantium aliquid repudiandae earum quisquam sapiente. Voluptatibus repellendus quaerat ratione. Eius, nobis sequi autem aspernatur non quaerat nihil veritatis at hic vitae, adipisci alias culpa amet.
                </p>

                    </div>
                </div>

                <div className="row">

                    <div className="col-6 text-right">
                        <button type="button" class="btn btn-outline-primary" onClick={showList}>Liste</button>
                    </div>

                    <div className="col-6">
                        <button type="button" class="btn btn-outline-primary" onClick={showMap}>Kort</button>
                    </div>

                    <div className="card-deck" id="spotList">
                        {spotcardmap}
                    </div>



                </div>

            </div>

            <div id="spotMap" className="container p-0 mb-5">
                <MapContainer />
            </div>

        </div>
    )
}

export default Dykkerspots
