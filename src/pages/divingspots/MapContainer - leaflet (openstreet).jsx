import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'



export default class MapContainer extends Component {
  state = {
      lat: 56.356613,
      lng: 10.732239833,
      zoom: 10.5,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable. <br/> <br/>
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">Go To Google</a>
          </Popup>
        </Marker>
        <Marker position= {[56.38, 10.83]}>
          <Popup>
            Another popup. <br /> Easily customizable. <br/> <br/>
            <a href="http://bing.com" target="_blank" rel="noopener noreferrer">Go To Bing</a>
          </Popup>
        </Marker>
      </Map>
    )
  }
}