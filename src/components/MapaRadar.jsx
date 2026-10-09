import { GEOAPIFY_KEY } from "../utils/chaves.js";

const MapaRadar = ({ latitude, longitude, lugares }) => {

    const marcadorUsuario = `lonlat:${longitude},${latitude};color:%23d32f2f;size:48`

    const marcadoresLugares = lugares.map((lugar, indice) =>
        `lonlat:${lugar.properties.lon},${lugar.properties.lat};type:circle;color:%231565c0;size:42;contentsize:28;text:${indice + 1}`
    )
    const marcadores = `${marcadorUsuario}|${marcadoresLugares.join('|')}`

    const url = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&marker=${marcadores}&apiKey=${GEOAPIFY_KEY}`

    return (
        <img
            style={{width: '100%'}}
            src={url}
            alt="Radar com os lugares encontrados" 
        />
    )

}

export default MapaRadar