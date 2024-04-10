import {useMap} from "react-leaflet"
import {useEffect } from "react"

export const RecenterAutomatically = ({lat,lng, zoom}) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng], zoom);
     }, [lat, lng]);
     return null;
}