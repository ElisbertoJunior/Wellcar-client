
import { styled } from 'styled-components'
import Card from '../../components/Card'
import Button from '../../components/Button'

const ClientsContainer = styled.div`
  display: flex;
  

`

const ClientDetails = () => {
 

  return (
    <ClientsContainer>
      <Card id={0} name={'Rogerio'} phone={'235463546754'} cpf={325511556} email={'teste@teste.com'} >
        <Button>Adicionar carro</Button>
      </Card>
    </ClientsContainer>
  )
}

export default ClientDetails