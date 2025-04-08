import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import './Header.css'

const Header = (props) => {
  return (
    <header className="category-page__header">
        
        <button type="button" className="header__icon">
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <h1>{props.category}</h1>
        
    </header>
  )
}

export default Header