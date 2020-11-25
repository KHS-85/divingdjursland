import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SpotContext } from '../SpotContext'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../../GlobalStyles/divingspots.scss'


const MapContainer = () => {

  var L = window.L;

  var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'iconshadow.png',
        iconSize:     [39, 51],
        shadowSize:   [39, 51],
        iconAnchor:   [14, 52],
        shadowAnchor: [0, 52],
        popupAnchor:  [7, -56]
    }
});

var Vragicon = new LeafIcon({iconUrl: 'boaticon.png'}),
    Strandicon = new LeafIcon({iconUrl: 'beachicon.png'})

  const { spots } = useContext(SpotContext)

  console.log(spots)

  let convertDeg = (coordinate) => {
    let split = coordinate.split(".");
    let converted = eval(+split[0] + +split[1] / 60 + +split[2] / 60000);
    return converted;
  };

  const myMarkers = spots.map(spot => {
    // converts coordinates to the format the map markers needs to function
    let newLat = convertDeg(spot.Latitude)
    let newLon = convertDeg(spot.Longtitude)
    const position = [newLat, newLon]

    return (
      <Marker position={position} icon={spot.type === "Vrag" ? Vragicon : Strandicon}>
        <Popup>
          <p className="popupTextHeadline"> {spot.Stednavn}  </p>
          <div className="row">
            <div className="col-6">
              <img src={spot.billede_top.url} alt="dykkerspot thumbnail" className="popupImg" /> <br />
            </div>
            <div className="col-6 pr-0 pl-4">
              <p className="popupText popupTextFirst">Type: {spot.type} </p>
              <p className="popupText">Lat: {spot.Latitude} </p>
              <p className="popupText">Lon: {spot.Longtitude} </p>
              <p className="popupText">Dybde top: {spot.dybde_top} </p>
              <p className="popupText">Dybde bund: {spot.dybde_bund} </p>
              <p className="popupText">Afstand land: {spot.afstand_land} </p>
              
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
            <Link to={"/dykkerspots/" + (spot.Stednavn.toLowerCase().replace(' ', '-').replace('/', '').replace(' ', '-'))}> 
                <button className="btn btn-primary btn-sm popupButton">Se mere</button>
                </Link>
                </div>
              </div>
        </Popup>
      </Marker>
    )

  })

  const startpos = [56.38, 10.83]
  const zoomval = [9.5]

  return (
    <Map center={startpos} zoom={zoomval}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {myMarkers}
    </Map>
  )
}

export default MapContainer