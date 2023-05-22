import { FC } from 'react'

import styles from './IntakeCard.module.scss'

interface IIntakeCardProps {
  subtitleClassName?: string
  titleClassName?: string
  cardClassName?: string
  boldIcon: string
  percent: string
  intake: string
  volume: string
  icon: string
}

const IntakeCard: FC<IIntakeCardProps> = ({
  subtitleClassName,
  titleClassName,
  cardClassName,
  boldIcon,
  percent,
  intake,
  volume,
  icon,
}) => {
  return (
    <div className={cardClassName}>
      <div className={styles.percentBlock}>
        <img
          className={styles.percentBlock__boldIcon}
          src={boldIcon}
          alt="progress"
        />
        <img className={styles.percentBlock__icon} src={icon} alt="progress" />
        <p className={styles.percentBlock__percent}>{percent}</p>
      </div>
      <div className={styles.infoBlock}>
        <p className={titleClassName}>{intake}</p>
        <p className={subtitleClassName}>{volume}</p>
      </div>
    </div>
  )
}

export default IntakeCard
