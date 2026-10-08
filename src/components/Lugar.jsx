import Cartao from "./Cartao"

const formatarDistancia = (distancia) => {
    if (distancia < 1000) {
        return `a ${Math.round(distancia)} m`
    }
    return `a ${(distancia/1000).toFixed(1).replace('.',',')} km`
}


const estiloNumero = {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '50%',
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
}

const Lugar = ({numero,nome,endereco,distancia}) => {
    return (
        <Cartao cabecalho={formatarDistancia(distancia)}>
            <div className="flex align-items-center">
                <div style={estiloNumero}>
                    {numero}
                </div>
                <div>
                    <h4 style={{ margin: 0 }}>
                        {nome ? nome : 'Sem nome'}
                    </h4>
                    <div>{endereco}</div>
                </div>
            </div>
        </Cartao>
    )
}

export default Lugar