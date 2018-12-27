'use strict'

import * as React from 'react'
import Container from '../Generic/Container'
import Saving from '../Standard/Saving'
import { Product } from '../Types/Product'

interface ProductsProps {
  products: Product[],
  isLoading: boolean
}

export default function ({ products, isLoading }: ProductsProps) {
  if (isLoading) {
    return (
      <Container>
        <Saving key={1} title='Title' availableBalance={0} currentBalance={0}/>
        <Saving key={2} title='Title' availableBalance={0} currentBalance={0}/>
        <Saving key={3} title='Title' availableBalance={0} currentBalance={0}/>
      </Container>
    )
  }

  const productsElements = products.map(
    (product: Product) => (
      <Saving key={product.id} {...product}/>
    )
  )

  return (
    <Container>
      {productsElements}
    </Container>
  )
}
