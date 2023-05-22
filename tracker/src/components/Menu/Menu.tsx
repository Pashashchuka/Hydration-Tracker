import { FC } from 'react'

import { NAVIGATION_MENU } from './constants'

import styles from './Menu.module.scss'

const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <h3 className={styles.menu__title}>Menu</h3>
      <div className={styles.menu__block}>
        {NAVIGATION_MENU.map(({ label, icon, id }) => (
          <p key={id} className={styles.menu__block_item}>
            {icon}
            {label}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Menu
