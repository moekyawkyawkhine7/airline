import React, { useEffect, useState } from 'react'
// lib
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';
import Image from 'next/image';

const Map = ({
    searchData = []
}) => {
    if (searchData.length > 0) {
        const reFormatData = searchData.map(({ latitude, longitude }) => ({
            latitude,
            longitude
        }))
        const { latitude, longitude } = getCenter(reFormatData);
        const [popUpId, setPopUpId] = useState(0);
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
                {searchData.map(({ latitude, longitude, destination, img }) => (
                    <div key={latitude}>
                        <Marker
                            onClick={(e) => {
                                // If we let the click event propagates to the map, it will immediately close the popup
                                // with `closeOnClick: true`, Defalut: true
                                // with `closeOnClick: false`, not need stopPropagation.
                                e.originalEvent.stopPropagation();
                                setPopUpId(latitude);
                            }}
                            longitude={longitude}
                            latitude={latitude}
                            anchor="top"
                        />
                        {popUpId == latitude && (
                            <Popup
                                longitude={longitude}
                                anchor="top"
                                latitude={latitude}
                                onClose={() => setPopUpId(0)}
                                closeOnClick={true}
                                className="mt-5 py-1"
                            >
                                <div>
                                    <h1 className="text-xs pb-1">{destination}</h1>
                                    <div className="relative w-32 h-24">
                                        <Image src={img} layout="fill" objectFit="cover" className="rounded-md" />
                                    </div>
                                </div>
                            </Popup>
                        )}
                    </div>
                ))}
            </ReactMapGl>
        )
    }
    return null;
}

export default Map