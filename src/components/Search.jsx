import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"

const Search = () => {

  const [inputValue, setInputValue] = useState('')
  
  const productsContainer = document.querySelector('.produtos')
  const products = Array.from(productsContainer.children)
  
  // Exibe produtos filtrados
  // FALTA REFATORAR
  products
    .filter(product => {
      const productTitle = product.querySelector('.descricao__titulo').textContent
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g,"")
        .toLowerCase()

      return !productTitle.includes(inputValue.trim())
    })
    .forEach(product => {
      product.classList.add('hidden')
    })
    
  // Exibe todos os produtos
  // FALTA REFATORAR
  products
    .filter(product => {
        const productTitle = product.querySelector('.descricao__titulo').textContent
        return productTitle.includes(inputValue)
      })
    .forEach(product => {
      product.classList.remove('hidden')
      document.querySelector('.product-notFound').classList.add('hidden')
    })

  // Produtos visíveis ou encontrados
  // FALTA REFATORAR
  const visibleProducts = products
    .filter(product => {
      const productTitle = product.querySelector('.descricao__titulo').textContent
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g,"")
        .toLowerCase()

      return productTitle.includes(inputValue.trim())
    })

  // Se o produto não for encontrado, mostre uma mensagem de erro

  if(visibleProducts.length == 0){
      document.querySelector('.product-notFound').classList.remove('hidden')
  } 

  // Obtém o valor do input
  function filterProduct(e){
    const valorFiltrado = e.target.value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g,"")
        .toLowerCase()
        
    setInputValue(valorFiltrado)
  }

  // Limpar input de busca
  function clearInput(){
    if(inputValue){
      setInputValue('')
      document.querySelector('.product-page__input').focus()
    }
  }

  return (
    <div className='product-page__search container'>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='product-page__icon' />
        <input type="text" placeholder='Procurar comida' className='product-page__input' value={inputValue} onChange={filterProduct} autoFocus />
      </div>
      <FontAwesomeIcon icon={faXmark} className='product-page__icon product-page__icon--clickable' onClick={clearInput} />
    </div>
  )
}

export default Search