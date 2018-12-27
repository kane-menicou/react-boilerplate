'use strict'

import * as React from 'react'
import Container from '../Generic/Container'
import Row from '../Generic/Row'
import Label from '../Generic/Label'
import Input from '../Generic/Input'

interface AddBankAccountProps {
  onFieldChange: (field: string, value: string) => void,
  accountNumber: string,
  sortCode: string,
  accountRef?: string,
  onSubmit: () => void
}

export default function (
  {
    onFieldChange,
    accountNumber,
    sortCode,
    accountRef,
    onSubmit
  }: AddBankAccountProps
) {
  const onChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange(field, event.currentTarget.value)
  }

  return (
    <Container>
      <Row>
        <Label isFieldRequired={true} htmlFor='accountNumber'>Account number</Label>
        <Input
          value={accountNumber}
          onChange={onChange('accountNumber')}
          id='accountNumber'
          required={true}
          type='text'
        />
      </Row>
      <Row>
        <Label isFieldRequired={true} htmlFor='sortCode'>Sort code</Label>
        <Input
          value={sortCode}
          onChange={onChange('sortCode')}
          id='sortCode'
          required={true}
          type='text'
        />
      </Row>
      <Row>
        <Label htmlFor='reference'>Reference</Label>
        <Input
          value={accountRef}
          onChange={onChange('reference')}
          id='reference'
          required={true}
          type='text'
        />
      </Row>
      <Input onSubmit={onSubmit} type='submit'/>
    </Container>
  )
}
