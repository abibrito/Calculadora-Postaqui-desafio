import BlocoForm from '../../components/blocoForm/blocoForm'
import Header from '../../components/header/header'
import style from './postagem.module.css'

function Postagem() {
  return (<>
    <Header />
    <div className={style['bloco']}>
      <BlocoForm />
    </div>
    
  </>
  )
}

export default Postagem