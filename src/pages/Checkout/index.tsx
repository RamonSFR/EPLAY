import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { Navigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Card from '../../components/Card'

import creditCardIco from '../../assets/images/icons/credit-card.png'
import barcodeIco from '../../assets/images/icons/barcode.png'
import { usePurchaseMutation } from '../../services/api'
import type { RootReducer } from '../../store'
import getTotal from '../../utils/functions/getTotal'
import parseToUsd from '../../utils/functions/parseToUsd'
import { clear } from '../../store/reducers/cart'

import * as S from './styles'

type installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [installments, setInstallments] = useState<installment[]>([])

  const totalPrice = getTotal(items)

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

      cardName: Yup.string().when((_values, schema) =>
        payWithCard
          ? schema
              .min(3, 'Name on card must be at least 3 characters long')
              .required('Name on card is required')
          : schema
      ),

      cardNumber: Yup.string().when((_values, schema) =>
        payWithCard
          ? schema
              .transform((value) => value.replace(/-/g, ''))
              .length(16, 'Card number must have 16 digits')
              .required('Card number is required')
          : schema
      ),

      expirationDate: Yup.string().when((_values, schema) =>
        payWithCard
          ? schema
              .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid Format (MM/YY)')
              .test('valid-date', 'Invalid Expiration Date', (value) => {
                if (!value) return false
                const [monthStr, yearStr] = value.split('/')
                const month = parseInt(monthStr, 10)
                const year = parseInt('20' + yearStr, 10)

                const today = new Date()
                const expDate = new Date(year, month - 1, 1)

                return (
                  expDate >= new Date(today.getFullYear(), today.getMonth(), 1)
                )
              })
              .required('Expiration date is required')
          : schema
      ),
      cvv: Yup.string().when((_values, schema) =>
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
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number
        }))
      })
    }
  })

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: parseToUsd(totalPrice / i)
        })
      }
      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  const checkInputsHasErrors = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    return isTouched && isInvalid
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Thank You!">
          <>
            <p>
              Thank you! Your order has been successfully received. <br />
              Here are the details of your purchase: <br />
              Order Number: {data.orderId} <br />
              Payment Method: {payWithCard ? 'Credit Card' : 'Bank Slip'}
            </p>
            <p className="margin-top">
              If you chose to pay via bank slip, please note that payment
              confirmation may take up to 3 business days. Once your payment is
              confirmed, we'll send you an email with your game activation code.
            </p>
            <p className="margin-top">
              If you paid by credit card, the activation code will be sent after
              your transaction is approved by the card issuer. You'll receive
              the code at the email address registered in your account.
            </p>
            <p className="margin-top">
              Please remember to check both your inbox and spam folder to ensure
              you receive our messages. If you have any questions or need
              further assistance, feel free to contact our customer support
              team.
            </p>
            <p className="margin-top margin-bottom">
              Thanks for choosing EPLAY - we hope you enjoy your game(s)!
            </p>
            <Button to="/" type="link" title="Back to Store">
              Back to Store
            </Button>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
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
                    className={checkInputsHasErrors('fullName') ? 'error' : ''}
                  />
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
                    className={checkInputsHasErrors('address') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="zipCode">ZIP Code</label>
                  <IMaskInput
                    mask="00000"
                    onAccept={(value) => form.setFieldValue('zipCode', value)}
                    onBlur={form.handleBlur}
                    name="zipCode"
                    value={form.values.zipCode}
                    placeholder="Your ZIP Code"
                    id="zipCode"
                    type="string"
                    className={checkInputsHasErrors('zipCode') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Delivery Information - Digital Content
              </h3>
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
                    className={
                      checkInputsHasErrors('deliveryEmail') ? 'error' : ''
                    }
                  />
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
                    className={
                      checkInputsHasErrors('confirmDeliveryEmail')
                        ? 'error'
                        : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="phone">Phone Number</label>
                  <IMaskInput
                    mask="(000) 000-0000"
                    onAccept={(value) => form.setFieldValue('phone', value)}
                    onBlur={form.handleBlur}
                    name="phone"
                    value={form.values.phone}
                    type="tel"
                    placeholder="(000) 000-0000"
                    className={checkInputsHasErrors('phone') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Payment">
            <div>
                <S.TabButton
                  type="button"
                  className={!payWithCard ? 'isActive' : ''}
                  onClick={() => setPayWithCard(false)}
                >
                  <img src={barcodeIco} alt="bank slip" />
                  <span>Bank Slip</span>
                </S.TabButton>
                <S.TabButton
                  type="button"
                  className={payWithCard ? 'isActive' : ''}
                  onClick={() => setPayWithCard(true)}
                >
                  <img src={creditCardIco} alt="credit card" />
                  <span>Credit Card</span>
                </S.TabButton>
              {!payWithCard ? (
                <p>
                  If you choose this payment method, please note that
                  confirmation may take up to 3 business days, due to processing
                  times set by financial institutions. As a result, the
                  activation code for your purchased game will only be released
                  after the payment has been successfully approved.
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
                        className={
                          checkInputsHasErrors('cardName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Card Number</label>
                      <IMaskInput
                        mask="0000-0000-0000-0000"
                        onAccept={(value) =>
                          form.setFieldValue('cardNumber', value)
                        }
                        onBlur={form.handleBlur}
                        name="cardNumber"
                        value={form.values.cardNumber}
                        placeholder="0000-0000-0000-0000"
                        id="cardNumber"
                        type="text"
                        className={
                          checkInputsHasErrors('cardNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row margintop="24px">
                    <S.InputGroup maxwidth="123px" defaultflex="flex">
                      <label htmlFor="expirationDate">Expiration Date</label>
                      <IMaskInput
                        onAccept={(value) =>
                          form.setFieldValue('expirationDate', value)
                        }
                        onBlur={form.handleBlur}
                        id="expirationDate"
                        type="text"
                        placeholder="MM/YY"
                        mask="00/00"
                        value={form.values.expirationDate}
                        className={
                          checkInputsHasErrors('expirationDate') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup maxwidth="64px" defaultflex="flex">
                      <label htmlFor="cvv">CVV</label>
                      <IMaskInput
                        onAccept={(value) => form.setFieldValue('cvv', value)}
                        onBlur={form.handleBlur}
                        name="cvv"
                        mask="000"
                        value={form.values.cvv}
                        placeholder="000"
                        id="cvv"
                        type="text"
                        className={checkInputsHasErrors('cvv') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup maxwidth="200px">
                      <label htmlFor="installments">Installments</label>
                      <select
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        name="installments"
                        value={form.values.installments}
                        id="installments"
                        className={
                          checkInputsHasErrors('installments') ? 'error' : ''
                        }
                      >
                        {totalPrice >= 100 ? (
                          installments.map((installment) => (
                            <option key={installment.quantity}>
                              {installment.quantity}x of{' '}
                              {installment.formattedAmount}
                            </option>
                          ))
                        ) : (
                          <option>1x of {parseToUsd(totalPrice)}</option>
                        )}
                      </select>
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
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Finish Purchase'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
