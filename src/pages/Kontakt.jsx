import React, { useEffect } from 'react';
import {setLanguage} from '../scripts/language'
import kontakt_banner from '../components/gfx/banner_kontakt.jpg'

const Kontakt = () => {
    useEffect(() => {
        setLanguage();
      });
    return (
        <div>

            {/* image banner */}
            <div className="container-fluid px-0 mb-3">
                <div className="">
                    <img className="img-fluid" src={kontakt_banner} alt="kontakt banner" />
                </div>
            </div>


            <article className="container my-5">
                <section className="row">

                    {/* kontakt formular */}
                    <div className="col-md order-2 order-md-1">
                        <form action="/send_besked">
                            <div class="form-group">
                                <label for="name"><strong><span className="danish">Dit navn (skal udfyldes):</span> <span className="english">Your name (required):</span></strong></label>
                                <input type="text" class="form-control" id="name" required />
                            </div>
                            <div class="form-group">
                                <label for="email"><strong><span className="danish">Din Email adresse (skal udfyldes):</span> <span className="english">Your email (required):</span></strong></label> 
                                <input type="email" class="form-control" id="email" required />
                            </div>
                            <div class="form-group">
                                <label for="tlf"><strong><span className="danish">Telefon:</span> <span className="english">Phone number:</span></strong></label>
                                <input type="tel" class="form-control" id="tlf" pattern="[0-9]{8}" required /> 
                            </div>
                            
                                <div class="form-group py-1">
                                    <label for="Textarea"><strong><span className="danish">Din besked:</span> <span className="english">Your message:</span></strong></label> 
                                    <textarea class="form-control" id="Textarea" rows="3" required></textarea>
                                </div>
                            
                            <button type="submit" class="btn btn-primary"><span className="danish">Indsend</span> <span className="english">Submit</span></button> 
                        </form>
                    </div>

                    {/* Google Maps iFrame */}
                    <div className="col order-1 order-md-2 py-3">
                        <iframe title="gmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2209.7702943985373!2d10.74500591606461!3d56.36829545181991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c2b608152cc73%3A0xd75e2ebba1663da5!2sSvinget%202%2C%208570%20Trustrup!5e0!3m2!1sen!2sdk!4v1599474547090!5m2!1sen!2sdk"  height="300" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                 </section>
            </article>

        </div>
    )
}

export default Kontakt
