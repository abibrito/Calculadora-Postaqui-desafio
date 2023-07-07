import Header from "../../components/header/header";
import Correio from "../../assets/img/FinishCorreios.png";
import Button from "../../components/button/button";

import style from "./finish.module.css";

function Finish() {
  return (
    <div className={style["finish-container"]}>
      <Header />
      <div className={style["bk-img"]}>
        <img src={ Correio } />
      </div>
      <div className={style["text-container"]}>
        <p>Parabéns o seu frete foi postado com sucesso.</p>
        <span>O seu códico de rastreio é </span>
        <p>BBBBBBBBBBBBBBBB</p>
      </div>
      <div className={style['bloco-btn']}>
        <Button value={"Nova Postagem"}/>
      </div>
    </div>
  );
}

export default Finish;
