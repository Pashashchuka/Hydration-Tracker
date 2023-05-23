import { FC } from 'react'

import secondBottomLine from 'assets/icons/second-bottom-line.svg'
import drinkLogChevron from 'assets/icons/drink-log-chevron.svg'
import firstBottomLine from 'assets/icons/first-bottom-line.svg'
import secondTopLine from 'assets/icons/second-top-line.svg'
import firstTopLine from 'assets/icons/first-top-line.svg'
import calendar from 'assets/icons/calendar.svg'
import chevron from 'assets/icons/chevron.svg'
import bottle from 'assets/images/bottle.png'
import drop from 'assets/icons/drop.svg'

import DrinkLogCard from 'components/DrinkLogCard'
import DotGroup from 'components/DotGroup'

import { DRINK_LOGS } from 'constants/drinkLogs'

import styles from './Rightbar.module.scss'

const Rightbar: FC = () => {
  return (
    <div className={styles.rightbar}>
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
      <div className={styles.rightbar__drinkLogBlock}>
        <div className={styles.rightbar__drinkLogBlock_titleBlock}>
          <p className={styles.titleBlock__title}>Drink Log</p>
          <DotGroup className={styles.titleBlock__group} />
        </div>
        <div className={styles.rightbar__drinkLogBlock_logsBlock}>
          {DRINK_LOGS.map(({ id, volume, time }) => (
            <DrinkLogCard key={id} volume={volume} time={time} />
          ))}
        </div>
        <img
          className={styles.rightbar__drinkLogBlock_chevron}
          src={drinkLogChevron}
          alt="down"
        />
      </div>
    </div>
  )
}

export default Rightbar
