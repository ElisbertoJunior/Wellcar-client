
import { styled } from 'styled-components'
import Card from '../../components/Card'
import Button from '../../components/Button'
import CarCard from '../../components/CarCard'

const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 1rem 1rem;

  > h2 {
    margin-top: 2rem;
    font-size: 1.7rem;
  }

`

const ClientDetails = () => {
 
  return (
    <ClientsContainer>
      <Card id={0} name={'Rogerio'} phone={'235463546754'} cpf={325511556} email={'teste@teste.com'} >
        <Button>Adicionar carro</Button>
      </Card>
     <h2>Carro(s)</h2>
     <CarCard brand={'Peugeot'} model={'208'} license={'PQP-0898'} color={'Prata'} ageModel={'20/21'}>
        <Button>Adicionar Orçamento</Button>
     </CarCard>
    </ClientsContainer>
  )
}

export default ClientDetails