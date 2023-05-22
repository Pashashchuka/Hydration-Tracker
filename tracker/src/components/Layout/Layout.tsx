import { FC, ReactNode } from 'react'

import calendar from 'assets/icons/calendar.svg'
import chevron from 'assets/icons/chevron.svg'
import logo from 'assets/icons/logo.svg'

import Menu from 'components/Menu'
import User from 'components/User'

import styles from './Layout.module.scss'

type LayotProps = {
  children: ReactNode
}

const Layout: FC<LayotProps> = (props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__leftbar}>
        <div className={styles.leftbar__logoBlock}>
          <img
            className={styles.leftbar__logoBlock_logo}
            src={logo}
            alt="logo"
          />
          <h3 className={styles.leftbar__logoBlock_title}>Hydrocult</h3>
        </div>
        <Menu />
        <User />
      </div>
      <div className={styles.layout__children}>{props.children}</div>
      <div className={styles.layout__rightbar}>
        <div className={styles.rightbar__dateBlock}>
          <img
            className={styles.rightbar__dateBlock_calendar}
            src={calendar}
            alt="calendar"
          />
          <p className={styles.rightbar__dateBlock_date}>Tue, 24 Nov 2021</p>
          <img
            className={styles.rightbar__dateBlock_chevron}
            src={chevron}
            alt="chevron"
          />
        </div>
      </div>
    </div>
  )
}

export default Layout
