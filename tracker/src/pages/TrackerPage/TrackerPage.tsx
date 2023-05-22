import { FC } from 'react'

import search from 'assets/icons/search.svg'
import sun from 'assets/icons/sun.svg'

import IntakeCard from 'components/IntakeCard'
import Layout from 'components/Layout'

import { INTAKE_DATA } from 'constants/intakeData'

import styles from './TrackerPage.module.scss'

const TrackerPage: FC = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__headBlock}>
          <h2 className={styles.wrapper__headBlock_title}>
            Welcome back <span className={styles.title__word}>Mathew!</span>
          </h2>
          <div className={styles.wrapper__headBlock_searchBlock}>
            <img
              className={styles.searchBlock__icon}
              src={search}
              alt="search"
            />
            <input
              className={styles.searchBlock__search}
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className={styles.wrapper__weatherBlock}>
          <div className={styles.wrapper__weatherBlock_tempBlock}>
            <img className={styles.tempBlock__icon} src={sun} alt="sun" />
            <p className={styles.tempBlock__temperature}>
              26<span className={styles.tempBlock__temperature_dot}></span>C
            </p>
          </div>
          <p className={styles.wrapper__weatherBlock_title}>
            It’s a <span className={styles.title__boldWord}>Sunny Day </span>
            today!
          </p>
          <p className={styles.wrapper__weatherBlock_subtitle}>
            Don’t forget to take your water bottle with you.
          </p>
        </div>
        <div className={styles.wrapper__intakeCardsBlock}>
          {INTAKE_DATA.map(
            ({
              subtitleClassName,
              titleClassName,
              cardClassName,
              boldIcon,
              percent,
              intake,
              volume,
              icon,
              id,
            }) => (
              <IntakeCard
                subtitleClassName={subtitleClassName}
                titleClassName={titleClassName}
                cardClassName={cardClassName}
                boldIcon={boldIcon}
                percent={percent}
                intake={intake}
                volume={volume}
                icon={icon}
                key={id}
              />
            ),
          )}
        </div>
      </div>
    </Layout>
  )
}

export default TrackerPage
