import React, { useState } from 'react'
import '../spaScss/Mappins.css'
import 'leaflet/dist/leaflet.css'

import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'

import pin from '../spaSstatic/pin.svg'

const markers = [{ id: 1, geocode: [40.7128, -74.0060], popup: "New York City Hall" }, { id: 2, geocode: [40.7580, -73.9855], popup: "Times Square" }, { id: 3, geocode: [40.7306, -73.9352], popup: "Central Park" }, { id: 4, geocode: [40.6892, -74.0445], popup: "Statue of Liberty" }, { id: 5, geocode: [40.748817, -73.985428], popup: "Empire State Building" }, { id: 6, geocode: [40.7061, -74.0092], popup: "One World Trade Center" }, { id: 7, geocode: [40.7794, -73.9632], popup: "The Metropolitan Museum of Art" }, { id: 8, geocode: [40.7060, -73.9969], popup: "Brooklyn Bridge" }, { id: 9, geocode: [40.7587, -73.9787], popup: "Rockefeller Center" }, { id: 10, geocode: [40.7421, -73.9897], popup: "The High Line" }];

const customIcon = new Icon({
    iconUrl: pin,
    iconSize: [27, 27]
})


const Mappins = () => {
    const [finalMarkers, setFinalMarkers] = useState(markers)

    function rmvadrs(e, argu) {
        e.stopPropagation()
        setFinalMarkers((prev) => {
            return prev.filter((each) => { return each.id !== argu })
        })
    }

    return (
        <div className='hero' style={{ backgroundColor: 'black' }}>
            <MapContainer center={[40.7128, -74.0060]} zoom={12} >
                <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />

                {/* <MarkerClusterGroup> */}
                {
                    finalMarkers.map((each) => {
                        return <Marker position={each.geocode} icon={customIcon}>
                            <Popup>
                                <div className='popupstuffcunt'>
                                    <b><i>{each.popup}</i></b>
                                    <button className='rmvbtn' onClick={(e) => { rmvadrs(e, each.id) }} style={{ fontSize: '10px' }}>remove?</button>
                                </div>
                            </Popup>
                        </Marker >
                    })
                }
                {/* </MarkerClusterGroup> */}

                <ClickHandlerComp prop1={finalMarkers} prop2={setFinalMarkers} />

            </MapContainer >
        </div>
    )
}
export default Mappins





const ClickHandlerComp = (props) => {

    function clk(e) {
        const { lat, lng } = e.latlng

        const btrlat = lat.toFixed(4)
        const btrlng = lng.toFixed(4)

        props.prop2([...props.prop1, {
            id: Date.now(),
            geocode: [Number(btrlat), Number(btrlng)],
            popup: 'your address'
        }])


    }
    const mymap = useMap()

    mymap.on('click', clk)
}
