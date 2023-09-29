import { styled } from "styled-components";
import { colors } from "../../styles";

const CardContainer = styled.div`
  background: ${colors.whiteColor};
  padding: 1rem;
  width: 31.25rem;
  border-radius: 10px;
  margin: 1rem 1rem 1rem 0;
  -webkit-box-shadow: -2px 0px 11px 1px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: -2px 0px 11px 1px rgba(0, 0, 0, 0.42);
  box-shadow: -2px 0px 11px 1px rgba(0, 0, 0, 0.42);

  div {
    display: inline-block;
  }
`;

type Props = {
  brand: string;
  model: string;
  license: string;
  color: string;
  ageModel: string;
  children?: JSX.Element;
};

const CarCard = ({
  brand,
  model,
  license,
  color,
  ageModel,
  children,
}: Props) => {
  return (
    <CardContainer>
      <div>
        <strong>Marca: {brand}</strong>
      </div>
      <br />
      <br />
      <strong>Modelo: {model}</strong>
      <br />
      <br />
      <strong>Placa: {license}</strong>
      <br />
      <br />
      <strong>Cor: {color}</strong>
      <br />
      <br />
      <strong>Ano/Modelo: {ageModel}</strong>
      <br />
      {children}
    </CardContainer>
  );
};

export default CarCard;
