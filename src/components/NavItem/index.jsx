/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './navitem.css'

function NavItem(props) {
  return (
    <li className='nav-item'>
      <a href='#' className='icon-button'>
        {props.icon}
      </a>
    </li>
  )
}

export default NavItem
