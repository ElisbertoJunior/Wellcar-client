import styled from "styled-components";
import { colors } from "../../styles";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #00000099;
  z-index: 1;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.div`
    background: ${colors.whiteColor};
    padding: 2rem;
    border-radius: 10px;

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      

      input {
        padding: 2rem 1rem;
        width: 31.25rem;
        height: 3rem;
        border: none;
        border-bottom: 2px solid ${colors.blackColor};
        outline: none;
      }

      button {
        height: 3rem;
        margin-top: 1rem;
        font-size: 1.5rem;
        background-color: ${colors.blackColor};
        color: ${colors.whiteColor};
        border: ${colors.whiteColor};
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          opacity: 0.9;
        }
      }

    }
`