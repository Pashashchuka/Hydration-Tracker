import { FC, ReactNode } from 'react'

import logo from 'assets/icons/logo.svg'

import styles from './Layout.module.scss'

type LayotProps = {
  children: ReactNode
}

const Layout: FC<LayotProps> = (props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__logoBlock}>
        <img className={styles.layout__logoBlock_logo} src={logo} alt="logo" />
        <h3 className={styles.layout__logoBlock_title}>Hydrocult</h3>
      </div>
      <div className={styles.layout__childrenBlock}>{props.children}</div>
    </div>
  )
}

export default Layout
