import { FC, ReactNode } from 'react'

import secondBottomLine from 'assets/icons/second-bottom-line.svg'
import firstBottomLine from 'assets/icons/first-bottom-line.svg'
import secondTopLine from 'assets/icons/second-top-line.svg'
import firstTopLine from 'assets/icons/first-top-line.svg'
import calendar from 'assets/icons/calendar.svg'
import chevron from 'assets/icons/chevron.svg'
import bottle from 'assets/images/bottle.png'
import logo from 'assets/icons/logo.svg'
import drop from 'assets/icons/drop.svg'

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
        <div className={styles.rightbar__bottleBlock}>
          <img
            className={styles.rightbar__bottleBlock_bottle}
            src={bottle}
            alt="bottle"
          />
          <p className={styles.rightbar__bottleBlock_title}>
            Stay Hydrated and beat heat.
          </p>
        </div>
        <div className={styles.rightbar__goalBlock}>
          <p className={styles.rightbar__goalBlock_title}>Intake Goal</p>
          <p className={styles.rightbar__goalBlock_subtitle}>
            18000 ml / 25000 ml
          </p>
          <img
            className={styles.rightbar__goalBlock_drop}
            src={drop}
            alt="drop"
          />
          <img
            className={styles.rightbar__goalBlock_firstBottomLine}
            src={firstBottomLine}
            alt="line"
          />
          <img
            className={styles.rightbar__goalBlock_secondBottomLine}
            src={secondBottomLine}
            alt="line"
          />
          <img
            className={styles.rightbar__goalBlock_firstTopLine}
            src={firstTopLine}
            alt="line"
          />
          <img
            className={styles.rightbar__goalBlock_secondTopLine}
            src={secondTopLine}
            alt="line"
          />
        </div>
      </div>
    </div>
  )
}

export default Layout
