/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './dropdownitem.css'

function DropdownItem(props) {
  return (
    <li onClick={props.func}>
      <a href='#' className='menu-item'>
        {props.children}
      </a>
    </li>
  )
}

export default DropdownItem
