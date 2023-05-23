import { FC } from 'react'

import drop from 'assets/icons/drink-log-drop.svg'

import styles from './DrinkLogCard.module.scss'

interface IDrinkLogCardProps {
  volume: string
  time: string
}

const DrinkLogCard: FC<IDrinkLogCardProps> = ({ volume, time }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__volumeBlock}>
        <img className={styles.card__volumeBlock_drop} src={drop} alt="drop" />
        <p className={styles.card__volumeBlock_volume}>{volume}</p>
      </div>
      <p className={styles.card__time}>{time}</p>
    </div>
  )
}

export default DrinkLogCard
