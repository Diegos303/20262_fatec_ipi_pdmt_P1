import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center'>
        
        <i
          className="pi pi-spin pi-spinner" 
          style={{fontSize: '2rem' }}

          >
        </i>
        <p>{this.props.mensagem}</p>
      </div>
        
    )
  }
}

Loading.defaultProps = {
  mensagem: "Carregando..."
}
