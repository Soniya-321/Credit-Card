// Write your code here
import {useState} from 'react'
import {
  Main,
  FirstContainer,
  SecondContainer,
  Card,
  Heading,
  PayMentCard,
  PayHeading,
  Input,
  CardNum,
  CardHolder,
  Name,
} from './styledComponents'
const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onchangeCardHolder = event => {
    setCardHolder(event.target.value)
  }
  return (
    <Main>
      <FirstContainer>
        <Heading>CREDIT CARD</Heading>
        <Card data-testid='creditCard'>
          <CardNum>{cardNumber}</CardNum>
          <CardHolder>CARDHOLDER NAME</CardHolder>
          <Name>{cardHolder.toUpperCase()}</Name>
        </Card>
      </FirstContainer>
      <SecondContainer>
        <PayMentCard>
          <PayHeading>Payment Method</PayHeading>
          <Input
            value={cardNumber}
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
          />
          <Input
            value={cardHolder}
            type="text"
            placeholder="Cardholder Name"
            onChange={onchangeCardHolder}
          />
        </PayMentCard>
      </SecondContainer>
    </Main>
  )
}

export default CreditCard
