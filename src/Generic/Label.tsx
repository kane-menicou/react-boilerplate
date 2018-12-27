'use strict'

import * as React from 'react'
import styles from './Label.sass'

interface LabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  isFieldRequired?: boolean
}

export default (
  {
    className,
    isFieldRequired = false,
    ...props
  }: LabelProps
) => {
  const classes = [styles.label, className]

  if (isFieldRequired) {
    classes.push(styles.required)
  }

  return (
    <label className={classes.join(' ')} {...props}>{props.children}</label>
  )
}
