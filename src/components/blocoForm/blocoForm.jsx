/* eslint-disable react/prop-types */
import Form from '../form/form'
import style from './blocoForm.module.css'

function BlocoForm({ h2 }) {
  h2 = 'Dados de Origem'

  return (
    <div className={ style['form'] }>
      <div className={style['subtitulo']}><h2>{h2}</h2></div>
      <Form />
    </div>
  )
}

export default BlocoForm