import {useMap} from "react-leaflet"
import {useEffect } from "react"

export const RecenterAutomatically = ({lat,lng}) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng], 5.4);
     }, [lat, lng]);
     return null;
}