import React, { useEffect } from 'react';
import {setLanguage} from '../scripts/language'
import booking_banner from '../components/gfx/banner_booking.jpg'

const Booking = () => {
  useEffect(() => {
    setLanguage();
  });
    return (
        <div>

            <div className="container-fluid px-0 mb-3">
                <div className="">
                    <img className="img-fluid" src={booking_banner} alt="booking banner" />
                </div>
            </div>

            <div className="container">
                <div className="px-3 py-5">

                    <h3 className="font-weight-bold pb-3">
                    <span className="danish">Book din næste dykkertur på Djursland</span> <span className="english">Book your next diving trip on Djursland</span>
                    </h3>

                    <p className="pb-2">
                      <span className="danish">På denne side kan du se vores kommende dykkerture, hvilket løbende vil blive opdateret. På grund af forskellige forhold omkring vind og vejr, kan lokationen ikke bestemmes på forhånd og vil typisk først blive besluttet en dag eller to før.</span>
                      <span className="english">On this page you can see our upcoming diving trips which will be continually updated. Due to the unpredicable nature of the weather, we cannot pick a location in advance. It will usually be decided a day or two before the dive.</span>
                    
                    </p>

                    <p className="pb-3">
                     <span className="danish">Hvis du gerne vil med på det næste dyk, så send en mail til <a href="mailto:contact@scubafun.dk?subject=Diving Djursland tilmelding">contact@scubafun.dk</a>. <br/> Husk at skrive dit navn, telefonnummer, højde, vægt og skostørrelse. <br/> Det koster 350 kr. og betaling modtages på MobilePay (+45) 42789605 eller via shoppen på <a href="https://scubafun.dk/vare/dyk-dive/" target="_blank" rel="noopener noreferrer">ScubaFun</a>.</span>
                     <span className="english">If you would like to join us on the next dive then send an email to <a href="mailto:contact@scubafun.dk?subject=Diving Djursland tilmelding">contact@scubafun.dk</a>. <br/> Please include your name, phonenumber, height, weight and shoe size. <br/> The price is 350 DKK. and payment can be done on MobilePay APP (+45) 42789605 or through the web-shop at <a href="https://scubafun.dk/vare/dyk-dive/" target="_blank" rel="noopener noreferrer">ScubaFun</a>.</span>
                     </p>

                    

                    <table class="table table-sm">
  <thead>
    <tr class="table-primary">
      <th scope="col">#</th>
      <th scope="col"><span className="danish">Dato</span> <span className="english">Date</span></th>
      <th scope="col"><span className="danish">Tidspunkt</span> <span className="english">Time</span></th>
      <th scope="col"><span className="danish">Lokation</span> <span className="english">Location</span></th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th> 
      <td>10-09-20</td>
      <td>10:00</td>
      <td>Katholm</td>
      <td>Stranddyk</td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>12-09-20</td>
      <td>11:15</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>19-09-20</td>
      <td>10:30</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
    <th scope="row">5</th>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
  </tbody>
</table>


                </div>
            </div>

        </div>
    )
}
export default Booking
