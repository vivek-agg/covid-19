import React from "react";
import "./Map.css";
import { Map, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";

function MapComp({ center, zoom, countries, caseType }) {
  console.log(center);
  console.log(zoom);
  return (
    <div className="map">
      <Map center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, caseType)}
      </Map>
    </div>
  );
}

export default MapComp;
