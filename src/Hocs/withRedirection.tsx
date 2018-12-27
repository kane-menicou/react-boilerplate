'use strict'

import * as React from 'react'

export default function<T> (Component: React.ComponentType<T>) {
  return function (props: any) {
    return <Component {...props} />
  }
}
