import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import './Products.css'
import './HeartLike.css'

const Products = () => {


    const [produtos, setProdutos] = useState([
        {
            id:'1',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/produtos/pizza.png?raw=true',
            alt: 'Foto de uma pizza Marguerita',
            titulo: 'Márguerita',
            categoria: 'Pizza',
            preco: 45.00,
            like: 0
        },
        {
            id:'2',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/produtos/calabresa.png?raw=true',
            alt: 'Foto de uma pizza Calabresa',
            titulo: 'Calabresa',
            categoria: 'Pizza',
            preco: 33.30,
            like: 0
        },
        {
            id:'3',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/produtos/palmito.png?raw=true',
            alt: 'Foto de uma pizza Palmito',
            titulo: 'Palmito',
            categoria: 'Pizza',
            preco: 77.39,
            like: 0
        },
        {
            id:'4',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/produtos/pepperoni.png?raw=true',
            alt: 'Foto de uma pizza Pepperoni',
            titulo: 'Pepperoni',
            categoria: 'Pizza',
            preco: 62.15,
            like: 0
        },
        {
            id:'5',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/produtos/tomate.png?raw=true',
            alt: 'Foto de uma pizza Tomate',
            titulo: 'Tomate',
            categoria: 'Pizza',
            preco: 52.99,
            like: 0
        },
        {
            id:'6',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/produtos/vegetariana.png?raw=true',
            alt: 'Foto de uma pizza Vegetariana',
            titulo: 'Cogumelo Vegetariano',
            categoria: 'Pizza',
            preco: 69.39,
            like: 0
        },
        {
            id:'7',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/produtos/burger1.png?raw=true',
            alt: 'Foto de um hamburguer',
            titulo: 'Burger Batata',
            categoria: 'Burguer',
            preco: 17.99,
            like: 0
        },
        {
            id:'8',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/produtos/burger2.png?raw=true',
            alt: 'Foto de um hamburguer',
            titulo: 'Burger Salada',
            categoria: 'Burguer',
            preco: 13.99,
            like: 0
        },
    ])

    // Curtir - Habilita a classe "heart-active"
    function like(e){
        e.target.classList.toggle('heart-active')
    }

  return (
    <>
    <div className='product-page__produtos container'>
        <h2 className='product-page__title'></h2>

        <div className="produtos">
            
            {
                produtos.map((produto) => (
                    
                    <div className="produto" key={produto.id}>

                        <div className="produto__curtida">
                            <div className="curtida__container">
                                <span className="heart" onClick={like}></span>
                                <span className="heart__background"></span>
                            </div>
                        </div>

                        <div className="produto__img">
                            <img src={produto.src} alt={produto.alt} />
                        </div>

                        <div className="produto__descricao">

                            <p className="descricao__categoria">{produto.categoria}</p>
                            <p className="descricao__titulo">{produto.titulo}</p>

                            <div className="descricao__container">
                                <p className="descricao__preco descricao__preco--negrito">R${produto.preco}</p>
                                <button className="btn-plus-icon">                        
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>

                        </div>

                    </div>

                ))
            }

        </div>
        
        <h3 className='product-notFound hidden'>
            Desculpe! Não foi possível encontrar o produto.
        </h3>

    </div>
    </>
  )
}

export default Products