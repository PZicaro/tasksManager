import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../components/CustomButton'
import logo2 from '../assets/images/logo2.png'
import './Login.scss'

export const Login = () => {
  const navigate = useNavigate()
  const handleSignInClick = () => {
    navigate('/')
  }
  return (
        <div className="login-container">
            <img src={logo2} alt="FullStackClub" />
                <div className="button-container">
                    <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
                </div>
        </div>
  )
}
