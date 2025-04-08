import React from 'react'

const Greeting = (props) => {
  return (
    <div className="product-page__greeting container">
        <h1>Olá, <span className='h1__span--bold'>{props.name}</span></h1>
        <h3>O que você quer comer hoje?</h3>
    </div>
  )
}

export default Greeting