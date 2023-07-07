import Button from "../button/button";
import InputText from "../inputText/inputText";
import style from "./form.module.css";

function Form() {
  return (
    <div>
      <form className={style["form"]}>
        <div className={style["divForm"]}>
          <div className={style["divLine"]}>
            <div className={style["form-control"]}>
              <InputText label={"Nome Completo"} inputId={"nome"} />
            </div>
            <div className={style["form-control"]}>
              <InputText label={"CPF"} inputId={"cpf"} />
            </div>
            <div className={style["form-control"]}>
              <InputText label={"Telefone"} inputId={"tel"} />
            </div>
            <div className={style["form-control"]}>
              <InputText label={"Email"} inputId={"email"} />
            </div>
          </div>
          <div className={style["divLine"]}>
            <div className={style["form-control"]}>
              <InputText label={"CEP"} inputId={"cep"} />
            </div>
            <div className={style["form-control"]}>
              <InputText label={"Estado"} inputId={"estado"} />
            </div>
            <div className={style["form-control"]}>
              <InputText label={"Cidade"} inputId={"cidade"} />
            </div>
            <div className={style["form-control"]}>
              <InputText label={"Bairro"} inputId={"bairro"} />
            </div>
          </div>
          <div className={style["divLine"]}>
            <div className={style["form-control"]}>
              <InputText label={"Rua"} inputId={"rua"} />
            </div>
            <div className={style["form-control"]}>
              <InputText label={"Número"} inputId={"numero"} />
            </div>
            <div className={style["form-control"]}>
              <InputText label={"Complemento"} inputId={"complemento"} />
            </div>
          </div>
          <Button value={"Avançar"}/>
        </div>
      </form>
    </div>
  );
}

export default Form;
