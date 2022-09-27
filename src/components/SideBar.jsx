import { CustomButton } from './CustomButton'
import { useNavigate } from 'react-router-dom'

import './SideBar.scss'
import logo from '../assets/images/logo.png'

export const SideBar = () => {
  const navigate = useNavigate()
  const handleSignOutClick = () => {
    navigate('/login')
  }
  return (
        <div className="sidebar-container">
            <div className="logo">
                 <img src={logo} alt="FullStack Club" />
            </div>
            <div className="sign-out">
                <CustomButton onClick={handleSignOutClick}>Sair</CustomButton>
            </div>
        </div>)
}
