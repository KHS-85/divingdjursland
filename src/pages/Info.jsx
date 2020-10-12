import React, { useEffect } from 'react';
import {setLanguage} from '../scripts/language'
import { Link } from 'react-router-dom'
import info_banner from '../components/gfx/banner_info.jpg'

const Info = () => {
    useEffect(() => {
        setLanguage();
      });
    return (
        <div>
            <div className="container-fluid px-0 mb-3">
                <div className="">
                    <img className="img-fluid" src={info_banner} alt="info banner" />
                </div>
            </div>

            <div className="container">
                <div className="px-3 py-5">

                    <h3 className="font-weight-bold">
                    <span className="danish">Praktisk info og ofte stillede spørgsmål</span> <span className="english">Practical info and FAQ</span>
                    </h3>

                    <p>
                    <span className="danish">Her er lidt forskellige ting, som er værd at vide, når du skal ud at dykke med os.</span> <span className="english">Important things you should know before diving with us. </span><br /><br />
                    </p>
 
                    <h5 className="font-weight-bold"><span className="danish">Hvem kan deltage?</span> <span className="english">Who can participate?</span></h5>
                    <p><span className="danish">Som udgangspunkt kan alle deltage, hvis man er sund og rask.</span> <span className="english">If you are fit and healthy you should be good to dive with us</span></p>

                    <h5 className="font-weight-bold pt-3"> <span className="danish">Hvad skal jeg have med?</span> <span className="english">What do I need to bring?</span></h5>
                    <p><span className="danish">Vi sørger for alt udstyr du skal bruge til dit dyk - du skal blot have badetøj og håndklæde med</span> <span className="english">We will supply all the diving equipment - you only need to bring a swim suit and a towel.</span></p> 

                    <h5 className="font-weight-bold pt-3">Hvad skal I vide, når jeg bestiller et dyk?</h5>
                    <p>Navn, Adresse, telefonnummer, e-mail, højde, vægt og skostørrelse.</p>

                    <h5 className="font-weight-bold pt-3">Hvordan bestiller og betaler jeg?</h5>
                    <p>Du kan bestille og betale her: <Link to="/booking" className="navbar_link" activeClassName="navbar_link--active">Booking</Link></p>

                    <h5 className="font-weight-bold pt-3">Dykkerstedet</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur alias aliquid, facilis consequatur vitae optio? Corrupti, consectetur et.</p>

                    <h5 className="font-weight-bold pt-3">Dykkerguiden</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta rem dolore aut?</p>

                    <h5 className="font-weight-bold pt-3">Ansvar</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat error. Ex nulla quisquam quas molestias.</p>

                </div>
            </div>
        </div>
    )
}

export default Info
