import Logo from '../../assets/img/Logo.png'
import style from './header.module.css'

function Header() {
  return (<div className={ style['header'] }>
    <img src={ Logo } alt="" />
    <h1>Teste Calculadora Postaqui</h1>
  </div>
  )
}

export default Header