import { FormContainer, LoginContainer } from "./styles";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Login = ({ onSubmit }: Props) => {
  return (
    <LoginContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="usuario" />
          <input type="password" placeholder="senha" />
          <button type="submit">
            Entrar
          </button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
