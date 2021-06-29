/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import DropdownItem from './DropdownItem'
import './dropdown.css'

function Dropdown(props) {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <li className='dd-item'>
      <a href='#' className='dd-icon' onClick={() => toggle(!open)}>
        {!open && props.icon}
        {open && props.altIcon}
      </a>
      {open && (
        <>
          <div className='bg' onClick={() => toggle(!open)}></div>
          <div className='dropdown'>
            <ul className='dropdown-nav'>
              <DropdownItem func={() => toggle(!open)}>Account</DropdownItem>
              <DropdownItem func={() => toggle(!open)}>History</DropdownItem>
              <DropdownItem func={() => toggle(!open)}>About</DropdownItem>
              <DropdownItem func={() => toggle(!open)}>Sign Out</DropdownItem>
            </ul>
          </div>
        </>
      )}
    </li>
  )
}

export default Dropdown
