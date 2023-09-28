import styled from "styled-components";
import Card from "../../components/Card";

const ClientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Clients = () => {
  return (
    <ClientsContainer>
      <Card
        typeCard="external"
        id={0}
        name={"Marcio"}
        phone={"324543256"}
        cpf={312421512}
        email={"teste@teste.com"}      />
    </ClientsContainer>
  );
};

export default Clients;
