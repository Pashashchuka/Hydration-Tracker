import { FC } from 'react'

import styles from './FruitCard.module.scss'

interface IFruitCardProps {
  className: string
  subtitle: string
  title: string
  image: string
}

const FruitCard: FC<IFruitCardProps> = ({
  className,
  subtitle,
  image,
  title,
}) => {
  return (
    <div className={className}>
      <img className={styles.image} src={image} alt="fruit" />
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  )
}

export default FruitCard
