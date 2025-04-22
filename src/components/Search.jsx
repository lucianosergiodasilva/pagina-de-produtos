import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"

const Search = () => {

  const [inputValue, setInputValue] = useState('')
  
  const products = Array.from(document.querySelectorAll('.produto'))
  
  // Exibe produtos filtrados
  hideProducts(products, inputValue)
    
  // Exibe todos os produtos
  showProducts(products, inputValue)

  // Produtos visíveis ou encontrados
  // Manipula as classes para exibir os produtos filtrados. Se o produto não for encontrado, mostre uma mensagem de erro
  function manipulateClasses(products, add){
    products.forEach(product => {
      if(add){
        product.classList.remove('hidden')
        document.querySelector('.product-notFound').classList.add('hidden')
      }else{
        product.classList.add('hidden')
        document.querySelector('.product-notFound').classList.remove('hidden')
      }
    })
  }

  // Filtrar produtos
  function filterProducts(products, inputValue, returnMatchedProdutcs){
    return products
      .filter(product => {
        const productTitle = product.querySelector('.descricao__titulo').textContent
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g,"")
          .toLowerCase()
        const matchedProducts = productTitle.includes(inputValue)
        return returnMatchedProdutcs ? matchedProducts : !matchedProducts
      })
  }

  // Exibe todos os produtos
  function showProducts(products, inputValue){
    const productsToShow = filterProducts(products, inputValue, true)
    manipulateClasses(productsToShow, true)
  }

  // Exibe produtos filtrados
  function hideProducts(products, inputValue){
    const productsToHide = filterProducts(products, inputValue, false)
    manipulateClasses(productsToHide, false)
  }

  // Obtém o valor do input
  function getInputValue(e){
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
        <input type="text" placeholder='Procurar comida' className='product-page__input' value={inputValue} onChange={getInputValue} autoFocus />
      </div>
      <FontAwesomeIcon icon={faXmark} className='product-page__icon product-page__icon--clickable' onClick={clearInput} />
    </div>
  )
}

export default Search