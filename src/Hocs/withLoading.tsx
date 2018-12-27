'use strict'

import * as React from 'react'
import styles from './withLoading.sass'

interface WithLoadingProps {
  load?: () => void,
  isLoading: boolean
}

/**
 * Makes text appear as blocks while loading.
 *
 * Warning this HOC strips the prop `load`.
 *
 * @param Component
 */
const withLoading = <T extends {}> (Component: React.ComponentType<T>) => {
  function loadCallback (load: (() => void) | null): void {
    if (load !== null) {
      load()
    }
  }

  return ({ load = null, ...props }: any & WithLoadingProps): JSX.Element => {
    if (props.isLoading) {
      loadCallback(load)

      return (
        <div className={styles.loadingElements}>
          <Component {...props}/>
        </div>
      )
    }

    return (<Component {...props}/>)
  }
}

export default withLoading
