import React from "react"
import Creditos from "./Creditos"
import Loading from "./Loading"
import Cartao from "./Cartao"
import MeuPonto from "./MeuPonto"
import geoapifyClient from "../utils/geoapifyClient.js"
import Busca from "./Busca.jsx"
import ListaLugares from "./ListaLugares"

class App extends React.Component  {

    state = {
        latitude: null,
        longitude: null,
        horarioLocalizacao: null,
        mensagemDeErro: null,
        lugares: null

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

    onBuscaRealizada = (categoria,raio) => {
        const {latitude, longitude} = this.state
        geoapifyClient.get('/places', {
            params: {
                categories: categoria,
                filter: `circle:${longitude},${latitude},${raio}`,
                bias: `proximity:${longitude},${latitude}`,
                limit: 20
            }
        })
        .then((result) => {
            // console.log(result.data.features)
            this.setState({
                lugares: result.data.features 
            
            })
        })

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

            <div className="grid">

                <div className="col-12">
                    <h1 className="titulo">
                        <i className="pi pi-map-marker"></i>
                        RolêRadar
                    </h1>
                    <p style={estiloSubtitulo}> Descubra o que existe perto de você</p>

                    <Creditos />
                </div>

                {(!this.state.latitude && !this.state.mensagemDeErro) ?
                    <div className="col-12">
                        <Loading mensagem="Aguardando permissão de localização..."/>
                    </div>
                    :
                    this.state.mensagemDeErro ?
                        <div className="col-12">
                            <p>
                                {this.state.mensagemDeErro}
                            </p>
                        </div>
                    :
                    <>
                        <div className="col-6">
                            <Cartao cabecalho="Você está aqui">
                                <MeuPonto
                                    latitude={this.state.latitude}
                                    longitude={this.state.longitude}
                                    horarioLocalizacao={this.state.horarioLocalizacao}
                                    onAtualizar={this.obterLocalizacao}
                                />
                            </Cartao>

                            <Cartao cabecalho="O que você procura?">
                                <Busca onBuscaRealizada={this.onBuscaRealizada} />
                            </Cartao>
                        </div>

                        <div className="col-6">
                            {this.state.lugares === null ?
                                null
                            :
                                this.state.lugares.length === 0 ?
                                    <p>Nenhum lugar encontrado. Tente aumentar o raio.</p>
                                :
                                    <ListaLugares lugares={this.state.lugares} />
                            }
                        </div>
                    </>
                }

                <div className="col-12">
                    <p>RolêRadar © {obterAno()} </p>
                </div>

            </div>
        )
    }
}

export default App