import { LinkItem, NavContainer } from "./styles";

const NavBar = () => {
  return (
    <NavContainer>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <LinkItem to={"/clients"}>Clientes</LinkItem>
          </li>

          <li>
            <LinkItem to={"/products"}>Produtos</LinkItem>
          </li>

          <li>
            <LinkItem to={"/labor"}>Mao de Obra</LinkItem>
          </li>

          <li>
            <LinkItem to={"/budgets"}>Orcamento</LinkItem>
          </li>

          <li>
            <LinkItem to={"/so"}>Ordem de Servico</LinkItem>
          </li>

          <li>
          <LinkItem to={"/report"}>Relatorios</LinkItem>
            </li>
        </ul>
      </nav>
      <footer>
        <small>
          Copyright © 2023 - Todos os direitos reservados. Desenvolvido por:
          Elisberto Junior.
        </small>
      </footer>
    </NavContainer>
  );
};

export default NavBar;
