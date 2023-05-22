import { FC } from 'react'

import avatar from 'assets/images/avatar.jpg'

import DotGroup from 'components/DotGroup'

import styles from './User.module.scss'

const User: FC = () => {
  return (
    <div className={styles.user}>
      <img className={styles.user__avatar} src={avatar} alt="avatar" />
      <div className={styles.user__nameBlock}>
        <p className={styles.user__nameBlock_name}>Mathew Perry</p>
        <p className={styles.user__nameBlock_email}>mathewperry@xyz.com</p>
      </div>
      <DotGroup className={styles.user__group} />
    </div>
  )
}

export default User
