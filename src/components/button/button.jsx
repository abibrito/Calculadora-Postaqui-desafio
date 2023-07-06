import style from './button.module.css'

function Button() {
  return (
    <div className={style['btn']}>
      <button>Avançar</button>
    </div>
  )
}

export default Button