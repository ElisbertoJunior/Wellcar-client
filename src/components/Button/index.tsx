import { styled } from "styled-components";
import { colors } from "../../styles";

type Props = {
  colorButton?: "danger" | "success";
  children: string;
  onClick?: () => void;
};

export const ButtonContainer = styled.button<Props>`
  color: ${colors.whiteColor};
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  margin: 1rem 1rem 1rem 0;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }

  background: ${(props) => {
    if (props.colorButton === "danger") {
      return colors.redColor;
    } else if (props.colorButton === "success") {
      return colors.greenColor;
    } else return colors.blackColor;
  }};
`;

const Button = ({ colorButton, children, onClick }: Props) => {
  return (
    <ButtonContainer onClick={onClick} colorButton={colorButton}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
