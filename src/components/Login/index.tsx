import { LoginContainer } from "./styles"


const Login = () => {
  return (
    <LoginContainer>
      <div>
        <form>
          <input type="text" placeholder="usuario"/>
          <input type="password" placeholder="senha"/>
          <button type="submit">Entar</button>
        </form>
      </div>
    </LoginContainer>
  )
}

export default Login