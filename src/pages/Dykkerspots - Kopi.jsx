import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { setLanguage } from '../scripts/language'
import map_banner from '../components/gfx/banner_map.jpg'

const Dykkerspots = () => {

    const [dykkerspots] = useState([
        { img: "/sangstrup/b0.jpg", title: 'Sangstrup Klint', link: "/Sangstrup", id: 1 },

        { img: "/nordmole/b0.jpg", title: 'Grenå Nordmole', link: "/Nordmole", id: 2 },

        { img: "/polderrev/b0.jpg", title: 'Polderrev', link: "/Polderrev", id: 3 },

        { img: "/glatved/b0.jpg", title: 'Glatved', link: "/Glatved", id: 4 },

        { img: "/prammen/b0.jpg", title: 'Prammen i koraldybet', link: "/Prammen", id: 5 },

        { img: "/draaby/b0.jpg", title: 'Dråby Strand', link: "/Draaby", id: 6 },

        { img: "/skjold/b0.jpg", title: 'Skjold M/S', link: "/Skjold", id: 7 },

        { img: "/skjold/b0.jpg", title: 'Fjellerup Strand', link: "/dykkerspots/fjellerup-strand", id: 8 },

        { img: "/skjold/b0.jpg", title: 'NewLB', link: "/NewLB", id: 9 },

    ]);

    useEffect(() => {
        setLanguage();
    });

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
                        <button type="button" class="btn btn-outline-primary">Liste</button>
                    </div>

                    <div className="col-6">
                        <Link to="Divingmap"><button type="button" class="btn btn-outline-primary">Kort</button> </Link>
                    </div>

                    <div className="card-deck">

                        {dykkerspots.map(dykkerspot => {
                            return (
                                <section className="col-12 col-md-6 col-lg-4 my-4">
                                    <Link to={dykkerspot.link} className="card-link">
                                        <div key={dykkerspot.id} className="card divingCard">
                                            <img src={dykkerspot.img} alt="diving spot" title={dykkerspot.title} className="img-fluid card-img-top p-1" />
                                            <div className="card-body">
                                                <h4 className="card-title">{dykkerspot.title}</h4>
                                            </div>
                                        </div>

                                    </Link>

                                </section>
                            )
                        })}
                        
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Dykkerspots
