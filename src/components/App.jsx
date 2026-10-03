
const App = () => {

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
        <h1 className="titulo">RolêRadar</h1>
        <p style={estiloSubtitulo}> Descubra o que existe perto de você</p>
    

        <div>
            <p>RolêRadar © {obterAno()} </p>

        </div>

    </div>
  )
}
export default App