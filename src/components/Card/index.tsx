import Button from "../Button"
import {CardContainer } from "./styles"


const Card = () => {
  return (
    <CardContainer>
      <strong>Nome:</strong>
      <h3>Rogerio</h3>
      <br />

      <strong>Telefone:</strong> 
      <p>6212345789</p>
      <br />

      <strong>cpf:</strong> 
      <p>1234567893</p>
      <br />

      <strong>Email:</strong> 
      <p>teste@teste.com</p>
      <br />
      <hr />
      <Button children={"Detalhes"}/>
    </CardContainer>
  )
}

export default Card