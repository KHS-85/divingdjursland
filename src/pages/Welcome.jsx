import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { SpotContext } from './SpotContext'
import {setLanguage} from '../scripts/language'

const Welcome = () => {

    const { spots } = useContext(SpotContext)

    console.log(spots)
    console.log("loading spot context")

    const [aktiviteter] = useState([
        { img: "/sangstrup/b0.jpg", title: 'Sangstrup Klint',
          text: 'Et af Danmarks smukkest dyk finder du på spidsen af Djursland.',
          link: "/dykkerspots/sangstrup-klint", id: 1 },

        { img: "/nordmole/b0.jpg", title: 'Grenå Nordmole',
          text: 'Grenå Nordmole er et af Djurslands bedste dykkerspots til UV-jagt',
          link: "/dykkerspots/grenå-nordmole" ,id: 2 },

        { img: "/polderrev/b0.jpg", title: 'Polderrev',
          text: 'Et utroligt smukt rev med masser af liv ved Grenå Strand.',
          link: "/dykkerspots/polderrev", id: 3 }
          
    ]);

    useEffect(() => {
        setLanguage();
      });
    
    
    return (
        <div className="welcome">
            <article className="container my-5">

                <section className="row">
                    <div className="col-12">


                        <div className="mx-0 px-1 mx-sm-5 px-sm-5">
                            <h3 className="text-center font-weight-bold py-3 test1"><span className="danish">Velkommen til Diving Djursland</span><span className="english">Welcome to Diving Djursland</span></h3>
                            <p><span className="danish">Djursland rummer mange unikke naturoplevelser både over og under vandet. Er du certificeret dykker har du mulighed for at deltage i vores mange guidede ture på forskellige destinationer rund omkring Djursland.

                            Har du taget certifikat for nylig og har brug for lidt mere erfaring er vores guidede ture lige noget for dig. Vi dykker forskellige destinationer alt efter vind og vejr så du har mulighed for at prøve lidt forskelligt. Er det længere tid siden du har dykket er det også en mulighed for en genopfriskning af dine dykkerfærdigheder.<br/><br/></span>
                           

                            <span className="english">Djursland has many unique nature experiences – both above and below water. If you are a certified diver you can participate in our many guided tours in different destinations all over Djursland.
                            
                            If you recently acquired your certificate and need a bit more experience, then our guided tours are just the thing for you. We dive in different locations depending on the weather so you get the chance to try out different things. If it has been a while since your last dive, this will also be a good opportunity to sharpen your diving skills.<br/><br/></span>
                            </p>
                            
                        </div>

                    </div>
                </section>

                <div className="col-12">
                    <h3 className="text-center"><span className="danish">Udvalgte dykkerspots</span> <span className="english">Highlighted Diving Spots</span></h3>
                </div>

                

                <div className="card-deck">
            {aktiviteter.map(aktivitet => {
                return (
                    <section className="col-12 col-md-6 col-lg-4 my-3">
                        <Link to={aktivitet.link} className="card-link">
                        <div key={aktivitet.id} className="card divingCard">
                            <img src={aktivitet.img} alt="Aktivitet" title={aktivitet.title} className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h3 className="card-title">{aktivitet.title}</h3>
                                <p className="card-text">{aktivitet.text}</p>
                            </div>
                        </div>
                        
                        </Link>
                        
                    </section>
                )
            })}
        </div>

        <div className="col-12 text-center my-3">
            <Link to="/dykkerspots"><button type="button" class="btn btn-primary btn-lg"><span className="danish">Se flere  <i class="fa fa-arrow-right"></i></span> <span className="english">See More  <i class="fa fa-arrow-right"></i></span> </button></Link>
        </div>

            </article>
        </div>

        
    )
}


export default Welcome
