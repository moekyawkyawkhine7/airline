import React, { useEffect, useState } from 'react'
// lib
import ReactMapGl, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';

const Map = ({
    searchData = []
}) => {
    if (searchData.length > 0) {
        const reFormatData = searchData.map(({ latitude, longitude }) => ({
            latitude,
            longitude
        }))
        const { latitude, longitude } = getCenter(reFormatData);
        const [viewPoint, setviewPoint] = useState({
            longitude,
            latitude,
            zoom: 11
        })

        useEffect(() => {
            setviewPoint(prev => ({
                ...prev,
                latitude,
                longitude
            }))
        }, [latitude, longitude])

        return (
            <ReactMapGl
                {...viewPoint}
                style={{ width: '100%', height: '100%' }}
                mapboxAccessToken={process.env.mapboxAccessToken}
                mapStyle="mapbox://styles/moekyaw9638/cl7vkpxgq000914n711cgkeqi"
                onMove={({ viewState }) => setviewPoint(viewState)}
            >
                {searchData.map(({ latitude, longitude }) => (
                    <Marker key={latitude} longitude={longitude} latitude={latitude} anchor="bottom" />
                ))}
            </ReactMapGl>
        )
    }
    return null;
}

export default Map