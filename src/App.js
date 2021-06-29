import './App.css'
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import Dropdown from './components/Dropdown'
import { ReactComponent as ArrowIcon } from './icons/arrow-icon.svg'
import { ReactComponent as MenuIcon } from './icons/menu-icon.svg'
import { ReactComponent as SearchIcon } from './icons/search-icon.svg'
import { ReactComponent as CloseIcon } from './icons/close-icon.svg'

function App() {
  return (
    <Navbar>
      <NavItem icon={<ArrowIcon />}></NavItem>
      <NavItem icon={<SearchIcon />}></NavItem>
      <Dropdown icon={<MenuIcon />} altIcon={<CloseIcon />} />
    </Navbar>
  )
}

export default App
