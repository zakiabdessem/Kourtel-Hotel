"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";

const myIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/ios-filled/50/4-star-hotel--v2.png",
  iconRetinaUrl: "https://img.icons8.com/ios-filled/50/4-star-hotel--v2.png",
  popupAnchor: [-0, -0],
  iconSize: [25, 30],
});

const center = [35.53896233515, 6.135822220543988];

const LeafletMap = () => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "40vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={myIcon}>
        <Popup>Hotel Kourtel.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
