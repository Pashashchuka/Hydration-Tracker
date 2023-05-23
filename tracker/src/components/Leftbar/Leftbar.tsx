import { FC } from 'react'

import logo from 'assets/icons/logo.svg'

import Menu from 'components/Menu'
import User from 'components/User'

import styles from './Leftbar.module.scss'

const Leftbar: FC = () => {
  return (
    <div className={styles.leftbar}>
      <div className={styles.leftbar__logoBlock}>
        <img className={styles.leftbar__logoBlock_logo} src={logo} alt="logo" />
        <h3 className={styles.leftbar__logoBlock_title}>Hydrocult</h3>
      </div>
      <Menu />
      <User />
    </div>
  )
}

export default Leftbar
