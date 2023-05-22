import { FC } from 'react'

import styles from './Loader.module.scss'

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      Loading
      <span className={styles.loader__span}></span>
    </div>
  )
}

export default Loader
