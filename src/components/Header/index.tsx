import logo from '../../assets/logo.svg'
import { StyledContainer } from '../../styles/grid'
import { ButtonRegister } from '../Buttons'
import { StyledHeader } from './style'

export const Header = () => {
    return(
        <StyledHeader>
            <StyledContainer>
                <div className='flexGrid'>
                    <img src={logo} className='logo'/>
                        <nav>
                            <div className='buttons'>
                            <button type='button' className='btnLogin'>Fazer Login</button>
                            <ButtonRegister/>
                            </div>
                        </nav>
                </div>
            </StyledContainer>
        </StyledHeader>
    )
}