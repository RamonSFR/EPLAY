import Button from '../../components/Button'
import Card from '../../components/Card'
import * as S from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Billing Adress">
      <>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Adress</label>
            <input id="cpf" type="text" />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="postalCode">Postal Code</label>
            <input id="postalCode" type="number" />
          </S.InputGroup>
        </S.Row>
        <h3 className="margin-top">Delivery Information - Digital Content</h3>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input id="deliveryEmail" type="text" />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="confirDeliveryEmail">Confirm E-mail</label>
            <input id="confirDeliveryEmail" type="text" />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" />
          </S.InputGroup>
        </S.Row>
      </>
    </Card>
    <Card title="Payment">
      <div>
        <p>
          If you choose this payment method, please note that confirmation may
          take up to 3 business days, due to processing times set by financial
          institutions. As a result, the activation code for your purchased game
          will only be released after the payment has been successfully
          approved.
        </p>
      </div>
    </Card>
    <Button type="button" variant="primary" title="click to finish purchase">
      Finish Purchase
    </Button>
  </div>
)

export default Checkout
