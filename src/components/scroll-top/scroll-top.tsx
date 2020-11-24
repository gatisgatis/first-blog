import React from 'react'
import './scroll-top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollUp = () => {

    const smoothScroolToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <button 
            onClick={smoothScroolToTop}
            className="scroll-top"
        >
        <FontAwesomeIcon icon={faArrowUp} className="scroll-top__icon" />
      </button>
    )
}

export default ScrollUp