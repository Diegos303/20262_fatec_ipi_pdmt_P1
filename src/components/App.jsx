import React from "react"
import Creditos from "./Creditos"
import Loading from "./Loading"
import Cartao from "./Cartao"
import MeuPonto from "./MeuPonto"

class App extends React.Component  {

    state = {
        latitude: null,
        longitude: null,
        horarioLocalizacao: null,
        mensagemDeErro: null

    }

    componentDidMount(){
        this.obterLocalizacao()
    }


    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    horarioLocalizacao: Date.now(),
                    mensagemDeErro: null
                })
            },
            (erro) => {
                console.log(erro)
                this.setState({
                    mensagemDeErro: "Não foi possível obter sua localização. Libere o acesso no navegador e atualize a página."
                })
            }
        )

    }


    render () { 

        const estiloSubtitulo =  {
            fontSize: 18,
            color: 'gray',
            marginTop: 4

        }

        const obterAno = () => {
            const data = new Date()
            const anoAtual = data.getFullYear()
            return anoAtual
            
        }

        return (
    
            <div>
                <h1 className="titulo">
                    <i className="pi pi-map-marker"></i>
                    RolêRadar
                </h1>
                <p style={estiloSubtitulo}> Descubra o que existe perto de você</p>

                <Creditos />

                {(!this.state.latitude && !this.state.mensagemDeErro) ?
                    <Loading mensagem="Aguardando permissão de localização..."/>

                    :
                    this.state.mensagemDeErro ?
                        <p>
                            {this.state.mensagemDeErro}
                        </p>
                        
                    :
                    <Cartao cabecalho="Você está aqui">
                        <MeuPonto
                            latitude={this.state.latitude}
                            longitude={this.state.longitude}
                            horarioLocalizacao={this.state.horarioLocalizacao}
                            onAtualizar={this.obterLocalizacao}
                        />
                    </Cartao>
                    
                
                }

                <div>
                    <p>RolêRadar © {obterAno()} </p>

                </div>

            </div>
        )
    }

}

export default App