import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { setLanguage } from '../scripts/language'
import MapContainer from './divingspots/MapContainer'
import map_banner from '../components/gfx/banner_map.jpg'
import '../GlobalStyles/divingspots.scss'

const Dykkerspots = () => {

    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(false); // using this further down in a ternary operator to show "loading" when waiting for data

    const spotcardmap = spots.map(spot => {

        return (

            <section className="col-11 col-md-6 col-lg-4 my-4 ml-3 ml-md-0">
                <Link to={"/dykkerspots/" + (spot.Stednavn.toLowerCase().replace(' ', '-').replace('/', '').replace(' ', '-'))} className="card-link">
                    <div key={Math.random} className="card divingCard">
                        <img src={spot.billede_top.url} alt="diving spot" title={spot.Stednavn} className="img-fluid card-img-top p-1" />
                        <div className="card-body">
                            <h4 className="card-title">{spot.Stednavn}</h4>
                        </div>
                    </div>
                </Link>
            </section>

        )

    })

    useEffect(() => {
        loadPosts();
        setLanguage();
        setTimeout(showList, 200);
    }, []);


    function showList() {
        var x = document.getElementById("spotList")
        var y = document.getElementById("spotMap")
        x.style.height = "auto";
        y.style.height = "0";
        y.style.overflow = "hidden";
    }

    function showMap() {
        var b = document.getElementById("spotList")
        var a = document.getElementById("spotMap")
        a.style.height = "auto";
        b.style.height = "0";
        b.style.overflow = "hidden";
    }

    async function loadPosts() { // trying without contextprovider to implement "loading" when waiting for data //
        const response = await axios.get('https://fourth-groove-289807.ew.r.appspot.com/dykkerspots', {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjA1ODEwNjczLCJleHAiOjE2MDg0MDI2NzN9.Rlv0FwTV4MCgwxNW9VN_ETGvTc5A_EUHAPz7ivU4CCA',
            },
        })
            .then(response => {
                // Handle success.
                console.log('Data: ', response.data);
                console.log("data from google app engine has been fetched")
                const spots = response.data;
                setSpots(spots);
                console.log(spots);
                setLoading(true) // using this further down in a ternary operator
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
                setLoading(false)
            });

    }

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
                        <button type="button" class="testbtn btn btn-outline-primary" onClick={showList}>Liste</button>
                    </div>

                    <div className="col-6">
                        <button type="button" class="btn btn-outline-primary" onClick={showMap}>Kort</button>
                    </div>

                    </div>


                    <div className="container">
                    <div className="card-deck" id="spotList">
                        {loading ? spotcardmap : <h5 className="loading text-center my-4">Content is loading... <img src="/loading.gif" alt="loading" /> </h5> }
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
