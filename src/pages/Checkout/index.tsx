import { useState } from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'
import * as S from './styles'

const Checkout = () => {
  const [value, setValue] = useState('')

  return (
    <div className="container">
      <Card title="Billing Adress">
        <>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="fullName">Full Name</label>
              <input placeholder="Your Full Name" id="fullName" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Adress</label>
              <input placeholder="Your Adress" id="cpf" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="zipCode">ZIP Code</label>
              <input placeholder="Your ZIP Code" id="zipCode" type="number" />
            </S.InputGroup>
          </S.Row>
          <h3 className="margin-top">Delivery Information - Digital Content</h3>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input placeholder="Your E-Mail" id="deliveryEmail" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="confirDeliveryEmail">Confirm E-mail</label>
              <input
                placeholder="Confirm E-Mail"
                id="confirDeliveryEmail"
                type="text"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" placeholder="(00) 0000-0000" />
            </S.InputGroup>
          </S.Row>
        </>
      </Card>
      <Card title="Payment">
        <div>
          <p>
            If you choose this payment method, please note that confirmation may
            take up to 3 business days, due to processing times set by financial
            institutions. As a result, the activation code for your purchased
            game will only be released after the payment has been successfully
            approved.
          </p>
          <S.Row margintop="24px">
            <S.InputGroup>
              <label htmlFor="cardName">Name on Card</label>
              <input placeholder="Your Full Name" id="cardName" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                placeholder="0000-0000-0000-0000"
                id="cardNumber"
                type="number"
              />
            </S.InputGroup>
          </S.Row>
          <S.Row margintop="24px">
            <S.InputGroup maxwidth="123px" defaultflex='flex'>
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                id="expirationDate"
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                value={value}
                onChange={(e) => {
                  let input = e.target.value.replace(/\D/g, '')

                  if (input.length >= 3) {
                    input = input.slice(0, 2) + '/' + input.slice(2, 4)
                  }

                  setValue(input.slice(0, 5))
                }}
              />
            </S.InputGroup>
            <S.InputGroup maxwidth="64px" defaultflex='flex'>
              <label htmlFor="cvv">CVV</label>
              <input placeholder="000" id="cvv" type="text" maxLength={3} />
            </S.InputGroup>
            <S.InputGroup maxwidth="200px">
              <label htmlFor="installments">Installments</label>
              <select id="installments">
                <option>1x $200</option>
              </select>
            </S.InputGroup>
          </S.Row>
        </div>
      </Card>
      <Button type="button" variant="primary" title="click to finish purchase">
        Finish Purchase
      </Button>
    </div>
  )
}

export default Checkout
