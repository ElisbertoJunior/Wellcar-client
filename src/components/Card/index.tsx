import { CardContainer, InternalCard } from "./styles";

type Props = {
  id: number;
  name: string;
  phone: string;
  cpf: number;
  email: string;
  children?: JSX.Element;
  typeCard?: "internal" | "external";
};

const Card = ({ cpf, email, id, name, phone, children, typeCard }: Props) => {

  if (typeCard === "external") {
    return (
      <CardContainer to={`/client/${id}`}>
        <strong>Nome:</strong>
        <h3>{name}</h3>
        <br />

        <strong>Telefone:</strong>
        <p>{phone}</p>
        <br />

        <strong>cpf:</strong>
        <p>{cpf}</p>
        <br />

        <strong>Email:</strong>
        <p>{email}</p>
        <br />
        <hr />
        {children}
      </CardContainer>
    );
  } else
    return (
      <InternalCard>
        <strong>Nome:</strong>
        <h3>{name}</h3>
        <br />

        <strong>Telefone:</strong>
        <p>{phone}</p>
        <br />

        <strong>cpf:</strong>
        <p>{cpf}</p>
        <br />

        <strong>Email:</strong>
        <p>{email}</p>
        <br />
        <hr />
        {children}
      </InternalCard>
    );
};

export default Card;
