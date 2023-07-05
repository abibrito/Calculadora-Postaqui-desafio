import BlocoForm from '../../components/blocoForm/blocoForm'
import Header from '../../components/header/header'
import style from './postagem.module.css'

function Postagem() {
  return (<>
    <Header />
    <div className={style['bloco']}>
      <div className={style['subtitulo']}><h2>Dados de Origem</h2></div>
      <BlocoForm />
    </div>
    
  </>
  )
}

export default Postagem