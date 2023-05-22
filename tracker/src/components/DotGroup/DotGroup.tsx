import { FC } from 'react'

import styles from './DotGroup.module.scss'

interface IDoTGroupProps {
  className: string
}

const DotGroup: FC<IDoTGroupProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.group__elem}></div>
      <div className={styles.group__elem}></div>
      <div className={styles.group__elem}></div>
    </div>
  )
}

export default DotGroup
