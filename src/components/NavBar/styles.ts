
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import styled from "styled-components";



export const NavContainer = styled.div`
  background: ${colors.blackColor};
  color: ${colors.whiteColor};
  padding: 2.5rem .5rem;
  min-height: 100vh;
  text-align: center;

  position: sticky;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1, footer {
    margin: 2rem 0;
  }

  li {
    margin: 3.5rem 0;
    cursor: pointer;
    :hover {
    font-weight: bold;
  }
  }

 
`

export const LinkItem = styled(Link)`
  color: ${colors.whiteColor};
`

