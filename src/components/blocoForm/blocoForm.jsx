import Form from '../form/form'
import style from './blocoForm.module.css'

function BlocoForm() {
  return (
    <div className={ style['form'] }>
      <div className={style['subtitulo']}><h2>Dados de Origem</h2></div>
      <Form />
    </div>
  )
}

export default BlocoForm