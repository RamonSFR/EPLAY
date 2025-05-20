import { useState } from 'react'
import { useFormik } from 'formik'

import Button from '../../components/Button'
import Card from '../../components/Card'
import * as S from './styles'
import creditCardIco from '../../assets/images/icons/credit-card.png'
import barcodeIco from '../../assets/images/icons/barcode.png'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      zipCode: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      phone: '',
      cardName: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      installments: 1
    },
    validationSchema: Yup.object({
      // Delivery Info
      fullName: Yup.string()
        .min(3, 'Full name must be at least 3 characters long')
        .required('Full name is required'),
      address: Yup.string()
        .min(3, 'Address must be at least 15 characters long')
        .required('Address is required'),
      zipCode: Yup.string()
        .min(5, 'ZIP Code must have 5 digits')
        .max(5, 'ZIP Code must have 5 digits')
        .required('ZIP Code is required'),
      deliveryEmail: Yup.string()
        .email('Invalid email address')
        .required('E-mail is required'),
      confirmDeliveryEmail: Yup.string()
        .email('Invalid email address')
        .oneOf([Yup.ref('deliveryEmail')], 'E-mails must match')
        .required('Confirm E-mail is required'),
      phone: Yup.string().min(10, 'Phone number must have at least 10 digits'),

      // Payment Info
      cardName: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(3, 'Name on card must be at least 3 characters long')
              .required('Name on card is required')
          : schema
      ),

      cardNumber: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(16, 'Card number must have 16 digits')
              .max(16, 'Card number must have 16 digits')
              .required('Card number is required')
              .required('Name on card is required')
          : schema
      ),

      expirationDate: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .matches(
                /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                'Invalid expiration date'
              )
              .required('Expiration date is required')
          : schema
      ),

      cvv: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .matches(/^[0-9]{3}$/, 'Invalid CVV')
              .required('CVV is required')
              .required('Name on card is required')
          : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullName,
          email: values.deliveryEmail,
          phone: values.phone
        },
        delivery: {
          address: values.address,
          zipCode: values.zipCode,
          email: values.deliveryEmail
        },
        payment: {
          card: {
            active: payWithCard,
            owner: {
              name: values.cardName
            },
            name: values.cardName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expirationDate.split('/')[0]),
              year: Number(values.expirationDate.split('/')[1])
            },
            code: Number(values.cvv)
          },
          installments: Number(values.installments)
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) {
      return message
    }

    return ''
  }

  return (
    <form className="container" onSubmit={form.handleSubmit}>
      <Card title="Billing Adress">
        <>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="fullName">Full Name</label>
              <input
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="fullName"
                value={form.values.fullName}
                placeholder="Your Full Name"
                id="fullName"
                type="text"
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Address</label>
              <input
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.address}
                name="address"
                placeholder="Your Adress"
                id="cpf"
                type="text"
              />
              <small>{getErrorMessage('address', form.errors.address)}</small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="zipCode">ZIP Code</label>
              <input
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="zipCode"
                value={form.values.zipCode}
                placeholder="Your ZIP Code"
                id="zipCode"
                type="number"
              />
              <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
            </S.InputGroup>
          </S.Row>
          <h3 className="margin-top">Delivery Information - Digital Content</h3>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                placeholder="Your E-Mail"
                id="deliveryEmail"
                type="text"
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirm E-mail</label>
              <input
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                placeholder="Confirm E-Mail"
                id="confirmDeliveryEmail"
                type="text"
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="phone">Phone Number</label>
              <input
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="phone"
                value={form.values.phone}
                type="tel"
                placeholder="(000) 000-0000"
              />
              <small>{getErrorMessage('phone', form.errors.phone)}</small>
            </S.InputGroup>
          </S.Row>
        </>
      </Card>
      <Card title="Payment">
        <div>
          <S.TabButton
            className={!payWithCard ? 'isActive' : ''}
            onClick={() => setPayWithCard(false)}
          >
            <img src={barcodeIco} alt="bank slip" />
            <span>Bank Slip</span>
          </S.TabButton>
          <S.TabButton
            className={payWithCard ? 'isActive' : ''}
            onClick={() => setPayWithCard(true)}
          >
            <img src={creditCardIco} alt="credit card" />
            <span>Credit Card</span>
          </S.TabButton>
          {!payWithCard ? (
            <p>
              If you choose this payment method, please note that confirmation
              may take up to 3 business days, due to processing times set by
              financial institutions. As a result, the activation code for your
              purchased game will only be released after the payment has been
              successfully approved.
            </p>
          ) : (
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="cardName"
                    placeholder="Your Full Name"
                    id="cardName"
                    type="text"
                    value={form.values.cardName}
                  />
                  <small>
                    {getErrorMessage('cardName', form.errors.cardName)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="cardNumber"
                    value={form.values.cardNumber}
                    placeholder="0000-0000-0000-0000"
                    id="cardNumber"
                    type="text"
                    maxLength={16}
                  />
                  <small>
                    {getErrorMessage('cardNumber', form.errors.cardNumber)}
                  </small>
                </S.InputGroup>
              </S.Row>
              <S.Row margintop="24px">
                <S.InputGroup maxwidth="123px" defaultflex="flex">
                  <label htmlFor="expirationDate">Expiration Date</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="expirationDate"
                    type="text"
                    placeholder="MM/YY"
                    maxLength={4}
                    value={form.values.expirationDate}
                  />
                  <small>
                    {getErrorMessage(
                      'expirationDate',
                      form.errors.expirationDate
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup maxwidth="64px" defaultflex="flex">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="cvv"
                    value={form.values.cvv}
                    placeholder="000"
                    id="cvv"
                    type="text"
                    maxLength={3}
                  />
                  <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                </S.InputGroup>
                <S.InputGroup maxwidth="200px">
                  <label htmlFor="installments">Installments</label>
                  <select
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="installments"
                    value={form.values.installments}
                    id="installments"
                  >
                    <option>1x $200</option>
                    <option>2x $100</option>
                    <option>3x $66.70</option>
                  </select>
                  <small>
                    {getErrorMessage('installments', form.errors.installments)}
                  </small>
                </S.InputGroup>
              </S.Row>
            </>
          )}
        </div>
      </Card>
      <Button
        type="submit"
        onClick={form.handleSubmit}
        variant="primary"
        title="click to finish purchase"
      >
        Finish Purchase
      </Button>
    </form>
  )
}

export default Checkout
