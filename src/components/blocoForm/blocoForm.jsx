import Form from '../form/form'
import style from './blocoForm.module.css'

function BlocoForm() {
  return (
    <div className={ style['form'] }> 
      <Form />
    </div>
  )
}

export default BlocoForm