import { Link } from "react-router-dom";
import { colors } from "./../../styles/index";
import styled from "styled-components";



export const CardContainer = styled(Link)`
  background: ${colors.whiteColor};
  padding: 1rem;
  width: 31.25rem;
  border-radius: 10px;
  margin: 1rem;
  -webkit-box-shadow: -2px 0px 11px 1px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: -2px 0px 11px 1px rgba(0, 0, 0, 0.42);
  box-shadow: -2px 0px 11px 1px rgba(0, 0, 0, 0.42);
`;

export const InternalCard = styled.div`
  background: ${colors.whiteColor};
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  margin: 1rem;
  -webkit-box-shadow: -2px 0px 11px 1px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: -2px 0px 11px 1px rgba(0, 0, 0, 0.42);
  box-shadow: -2px 0px 11px 1px rgba(0, 0, 0, 0.42);
`;