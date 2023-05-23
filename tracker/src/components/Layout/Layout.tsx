import { FC, ReactNode } from 'react'

import Rightbar from 'components/Rightbar'
import Leftbar from 'components/Leftbar'

import styles from './Layout.module.scss'

type TLayotProps = {
  children: ReactNode
}

const Layout: FC<TLayotProps> = (props) => {
  return (
    <div className={styles.layout}>
      <Leftbar />
      <div className={styles.layout__children}>{props.children}</div>
      <Rightbar />
    </div>
  )
}

export default Layout
