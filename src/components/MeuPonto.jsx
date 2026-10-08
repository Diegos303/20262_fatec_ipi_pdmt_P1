import React from "react";
import { GEOAPIFY_KEY } from "../utils/chaves.js";
import { Button } from "@primereact/ui/button";

class MeuPonto extends React.Component {

    state = {
        agora: Date.now()
    }

    componentDidMount() { 
        this.timer = setInterval(() => { 
            this.setState({
                 agora: Date.now() 
                }) 
            }, 1000) 
        } 
        
    componentWillUnmount() { 
        clearInterval(this.timer) 
        console.log("MeuPonto removido") 
    }

    render() {

        const urlMapa = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=300&center=lonlat:${this.props.longitude},${this.props.latitude}&zoom=16&marker=lonlat:${this.props.longitude},${this.props.latitude};color:%23d32f2f;size:48&apiKey=${GEOAPIFY_KEY}`

        const hemisferio = this.props.latitude < 0 ? "Hemisfério Sul" : "Hemisfério Norte"

        const segundos = Math.floor(
            (this.state.agora - this.props.horarioLocalizacao) / 1000
        )
        
        return (
            <div>
                <img 
                className="w-100"
                src={urlMapa} 
                alt="Mapa da sua localização" 
                />

                <p>
                    Latitude:{this.props.latitude.toFixed(4)} | Longitude:{this.props.longitude.toFixed(4)}
                </p>

                <p>
                    {hemisferio}
                </p>

                <p>
                    Localização obtida há {segundos} s
                </p>

                <Button onClick={this.props.onAtualizar}>
                    <i className="pi pi-refresh"></i>
                       Atualizar localização
                </Button>

            </div>

        )

    }

}

export default MeuPonto