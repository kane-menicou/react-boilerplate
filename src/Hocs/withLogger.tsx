'use strict'

import * as React from 'react'

const withLogger = <T extends {}> (Component: React.ComponentType<T>) => (props: any): JSX.Element => {
  const message = `(${new Date().toLocaleString()}): ${Component.displayName || 'A component'} rendered with props:`

  console.info(message, props)

  return (<Component {...props}/>)
}

export default withLogger
