import React, { Component, useContext, useState } from 'react'
import { SpotContext } from '../SpotContext'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const MapContainer = () => {

  const { spots } = useContext(SpotContext)

  console.log(spots)


const position = [56.38, 10.83]
const zoom = [11]
console.log(zoom)


  return (
    <Map center={position} zoom={zoom}>
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
        {/* <Marker position= {[56.38, 10.83]}>
          <Popup>
            Another popup. <br /> Easily customizable. <br/> <br/>
            <a href="http://bing.com" target="_blank" rel="noopener noreferrer">Go To Bing</a>
          </Popup>
        </Marker> */}
      </Map>
  )
}

export default MapContainer