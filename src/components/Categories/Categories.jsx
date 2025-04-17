import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faGrip } from "@fortawesome/free-solid-svg-icons"
import './Categories.css'

const Categories = () => {

    const [item, setItem] = useState([
        {
            id: '1',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/pizza.png?raw=true',
            alt: 'Categoria da pizza',
            title: 'Pizza'
        },
        {
            id: '2',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/burguer.png?raw=true',
            alt: 'Categoria do burguer',
            title: 'Burguer'
        },
        {
            id: '3',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/hot-dog.png?raw=true',
            alt: 'Categoria do hot-dog',
            title: 'Hot-dog'
        },
        {
            id: '4',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/sorvete.png?raw=true',
            alt: 'Categoria do sorvete',
            title: 'Sorvete'
        },
        {
            id: '5',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/sushi.png?raw=true',
            alt: 'Categoria do sushi',
            title: 'Sushi'
        },
        {
            id: '6',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/donut.png?raw=true',
            alt: 'Categoria do donut',
            title: 'Donut'
        },
        {
            id: '7',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/batata.png?raw=true',
            alt: 'Categoria da batata',
            title: 'Batata'
        },
        {
            id: '8',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/sorvete.png?raw=true',
            alt: 'Categoria da sorvete',
            title: 'Sorvete'
        },
        {
            id: '9',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/pizza.png?raw=true',
            alt: 'Categoria da Pizza',
            title: 'Pizza'
        },
        {
            id: '10',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/burguer.png?raw=true',
            alt: 'Categoria da burguer',
            title: 'Burguer'
        },
        {
            id: '11',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/hot-dog.png?raw=true',
            alt: 'Categoria da hot-dog',
            title: 'Hot-dog'
        },
        {
            id: '12',
            src: 'https://github.com/lucianosergiodasilva/pagina-de-produtos/blob/main/src/assets/img-categorias/sorvete.png?raw=true',
            alt: 'Categoria da sorvete',
            title: 'Sorvete'
        }
    ])

    const [inputValue, setInputValue] = useState('')

    // Seleciona o primeiro item da categoria, para que as próximas seleções nas categorias,
    // possam funcionar corretamente.
    useEffect(() => {
      
        const tab = document.querySelector('.tab')
        tab.classList.add('active')

        // O título principal dos produtos, altera para a primeira categoria selecionada, ao carregar a página
        const tabs = document.querySelector('.tabs')
        const proctPageTitle = document.querySelector('.product-page__title')
        const categoryTitle = tabs.querySelector('.active').lastChild.innerText
        proctPageTitle.innerText = categoryTitle
      
    }, [])

    
    
    // Scroll do mouse
    function handleWheel(e){

        let tabs = document.querySelector('.tabs')

        // Seta a propriedade "scrollBehavior" do elemento "tabs" para "auto"
        tabs.computedStyleMap().scrollBehavior = "auto"
        
        // Permite a rolagem horizontal através do roda do mouse
        tabs.scrollLeft += e.deltaY
        
    }

    // Move as categorias para direita ou esquerda
    function handleScroll(e){

        let tabs = document.querySelector('.tabs')

        // Move ".tabs" para esquerda se conter a classe "right-arrow", se não, move para direita
        tabs.scrollLeft += e.target.classList.contains('right-arrow') ? 300 : -300

    }

    // Seleciona a categoria que foi clicada
    function handleClick(item){

        const tabs = document.querySelector('.tabs')
        
        // Remove a classe "active"
        tabs.querySelector('.active').classList.remove('active')  

        // Adiciona a classe "active"
        item.classList.add('active')  

        // move o ítem clicado para área visível ao centro
        item.scrollIntoView({
            inline: 'center'
        })
        
        // O título principal dos produtos, altera para a categoria que foi selecionada
        const productPageTitle = document.querySelector('.product-page__title')
        const categoryTitle = tabs.querySelector('.active').lastChild.innerText
        productPageTitle.innerText = categoryTitle

        // 
        // BUSCA POR CATEGORIA
        // 

        const products = document.querySelectorAll('.produto')
        const activeCategoryTextContent = categoryTitle
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g,"")
            .toLowerCase()

        // Exibe produtos filtrados
        Array.from(products)
          .filter(product => {
            const productCategory = product.querySelector('.descricao__categoria').textContent
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g,"")
                .toLowerCase()
        
            return !productCategory.includes(activeCategoryTextContent)
          })
          .forEach(product => {
            product.classList.add('hidden')
          })
       
        // Exibe todos os produtos
        Array.from(products)
          .filter(product => {
            const productCategory = product.querySelector('.descricao__categoria').textContent
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g,"")
                .toLowerCase()
        
            return productCategory.includes(activeCategoryTextContent)
          })
          .forEach(product => {
            product.classList.remove('hidden')
          })
    }

    // Esconde e mostra as setas. Obtém o scrollLeft de "tabs"
    function updateIcons(scrolled_width){
        
        const tabs = document.querySelector('.tabs')
        const {clientWidth, scrollWidth} = tabs

        // SETA ESQUERDA

        // Acessa o pai "<div class="icon">" de "<span class="left-arrow">&lt;</span>", 
        // e faz um toggle na classe "hide", removendo a seta da esquerda quando o scrollLeft chegar ao valor "1"
        document.querySelectorAll('.icon span')[0].parentElement.classList.toggle('hide', scrolled_width <= 1)
        
        // SETA DIREITA

        // Acessa o pai "<div class="icon">" de "<span class="right-arrow">&gt;</span>", 
        // e faz um toggle na classe "hide", removendo a seta da direta quando o scrollLeft chegar ao valor "1"
        document.querySelectorAll('.icon span')[1].parentElement.classList.toggle('hide', scrollWidth - (clientWidth + scrolled_width) <= 1)

    }

    // Mostrar todos os produtos quando clicar na categoria TODOS
    function showAllProducts(item){
        const tabs = document.querySelector('.tabs')
        
        // Remove a classe "active"
        tabs.querySelector('.active').classList.remove('active')  

        // Adiciona a classe "active"
        item.classList.add('active')  

        const products = document.querySelectorAll('.produto')

        Array.from(products)
        .filter(product => {
          const productCategory = product.querySelector('.descricao__categoria').textContent
          return productCategory.includes(inputValue)
        })
        .forEach(product => {
          product.classList.remove('hidden')
          document.querySelector('.product-notFound').classList.add('hidden')
        })
        document.querySelector('.product-page__input').value = ''
        document.querySelector('.product-page__input').focus()
        setInputValue('')

        // O título principal dos produtos, altera para "Todos"
        const productPageTitle = document.querySelector('.product-page__title')
        productPageTitle.innerText = 'Todos'
    }

  return (

    <div className='product-page__categories container'>
        <section className="categoria">

            <h2>Categorias</h2>
            
            <div className="slider">

                <div className="icon hide">
                    <span className="left-arrow" onClick={handleScroll}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                </div>
                
                <ul className="tabs" onWheel={handleWheel} onScroll={(e) => updateIcons(e.target.scrollLeft)}>
                        
                        <li className="tab" onClick={(e) => showAllProducts(e.target)}>
                            <FontAwesomeIcon icon={faGrip} className='icon-todos' />
                            <p className="titulo">Todos</p>
                        </li>
                    {
                        item.map((itemAtual) => (

                            <li className="tab" key={itemAtual.id} onClick={(e) => handleClick(e.target)}>
                                <img src={itemAtual.src} alt={itemAtual.alt} />
                                <p className="titulo">{itemAtual.title}</p>
                            </li>
                            
                        ))
                    }
                    
                </ul>

                <div className="icon">
                    <span className="right-arrow" onClick={handleScroll}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </div>

            </div>

        </section>
    </div>
  )
}

export default Categories