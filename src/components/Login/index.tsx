import { FormContainer, LoginContainer } from "./styles"

type Props = {
  onClick: () => void
}

const Login = ({onClick}: Props) => {
  return (
    <LoginContainer>
      <FormContainer>
        <form>
          <input type="text" placeholder="usuario"/>
          <input type="password" placeholder="senha"/>
          <button type="submit" onClick={onClick}>Entrar</button>
        </form>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login