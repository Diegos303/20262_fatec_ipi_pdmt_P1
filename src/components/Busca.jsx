
import React, { Component } from 'react'
import { Button } from '@primereact/ui/button'
import { InputText } from '@primereact/ui/inputtext'


const categorias = [
  { 
    rotulo: 'Cafés', 
    chave: 'catering.cafe'
  },
  {
    rotulo: 'Restaurantes', 
    chave: 'catering.restaurant' 
  },
  { 
    rotulo: 'Parques', 
    chave: 'leisure.park' 
  },
  { 
    rotulo: 'Farmácias', 
    chave: 'healthcare.pharmacy' 
  },
  { 
    rotulo: 'Supermercados', 
    chave: 'commercial.supermarket' 
  },
  { 
    rotulo: 'Museus', 
    chave: 'entertainment.museum' 
  }
]

export default class Busca extends Component {
  
  state = {
    categoria: null,
    raio: '1000',
    erro: null
  }

  onCategoriaEscolhida = (categoria) => {
    this.setState({categoria})
  }

  onRaioAlterado = (evento) => {
    this.setState({raio: evento.target.value})
  }


  onFormSubmit = (evento) => {

    evento.preventDefault()

    const categoria = this.state.categoria
    const raio = parseInt(this.state.raio)

    const erro = !categoria
      ? 'Escolha uma categoria.'
      : !Number.isInteger(raio) || raio < 100 || raio > 5000
      ? 'Informe um raio inteiro entre 100 e 5000 metros.'
      : null

    this.setState({
      erro: erro
    })

    erro === null &&
      this.props.onBuscaRealizada(categoria, raio)
  }


 render() {
    return (
      <form onSubmit={this.onFormSubmit}>

        <div className="flex flex-column gap-3">

          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <Button
                key={categoria.chave}
                type="button"
                variant={this.state.categoria === categoria.chave ? undefined : 'outlined'}
                onClick={() => this.onCategoriaEscolhida(categoria.chave)}>
                {categoria.rotulo}
              </Button>
            ))}
          </div>
          <InputText
            value={this.state.raio}
            onChange={this.onRaioAlterado}
            placeholder={this.props.dica}
          />

          <Button type="submit">
            <i className='pi pi-search'></i>
              Buscar
          </Button>
          

          {this.state.erro && (
            <p style={{ color: 'red', marginTop: 0 }}>
              {this.state.erro}
            </p>
          )}

        </div>

      </form>
    )
  }
}

Busca.defaultProps = {
  dica: 'Raio em metros (100 a 5000)'
}


