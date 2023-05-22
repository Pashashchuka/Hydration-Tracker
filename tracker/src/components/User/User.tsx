import { FC } from 'react'

import avatar from 'assets/images/avatar.jpg'

import styles from './User.module.scss'

const User: FC = () => {
  return (
    <div className={styles.user}>
      <img className={styles.user__avatar} src={avatar} alt="avatar" />
      <div className={styles.user__nameBlock}>
        <p className={styles.user__nameBlock_name}>Mathew Perry</p>
        <p className={styles.user__nameBlock_email}>mathewperry@xyz.com</p>
      </div>
      <div className={styles.user__group}>
        <div className={styles.user__group_elem}></div>
        <div className={styles.user__group_elem}></div>
        <div className={styles.user__group_elem}></div>
      </div>
    </div>
  )
}

export default User
