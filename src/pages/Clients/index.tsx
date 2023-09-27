import styled from "styled-components"
import Card from "../../components/Card"

const ClientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

`


const Clients = () => {
  return (
    <ClientsContainer>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </ClientsContainer>
  )
}

export default Clients