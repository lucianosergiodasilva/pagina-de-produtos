import Header from './components/Header/Header'
import Greeting from './components/Greeting'
import Search from './components/Search'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import './App.css'

function App() {

  return (
      
      <section className='product-page'>

        <Greeting name="Luciano" />

        <Search />
        
        <Categories />

        <Products />
        
      </section>
      
  )
}

export default App
