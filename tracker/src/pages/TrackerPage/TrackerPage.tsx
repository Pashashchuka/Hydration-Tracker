import { FC } from 'react'

import search from 'assets/icons/search.svg'
import graph from 'assets/images/graph.png'
import sun from 'assets/icons/sun.svg'

import IntakeCard from 'components/IntakeCard'
import Layout from 'components/Layout'

import { INTAKE_DATA } from 'constants/intakeData'
import { GRAPH_DATE } from 'constants/graphDate'

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
        <div className={styles.wrapper__graphBlock}>
          <div className={styles.wrapper__graphBlock_headBlock}>
            <div className={styles.headBlock__titleBlock}>
              <p className={styles.headBlock__titleBlock_title}>Glass Intake</p>
              <p className={styles.headBlock__titleBlock_subtitle}>200 ml</p>
            </div>
            <div className={styles.wrapper__graphBlock_glassPointsBlock}>
              <div className={styles.glassPointsBlock__glassPoint}>
                <div
                  className={styles.glassPointsBlock__glassPoint_bluePoint}
                ></div>
                <p className={styles.glassPointsBlock__glassPoint_name}>
                  Glass 1
                </p>
              </div>
              <div className={styles.glassPointsBlock__glassPoint}>
                <div
                  className={styles.glassPointsBlock__glassPoint_pinkPoint}
                ></div>
                <p className={styles.glassPointsBlock__glassPoint_name}>
                  Glass 2
                </p>
              </div>
              <div className={styles.glassPointsBlock__glassPoint}>
                <div
                  className={styles.glassPointsBlock__glassPoint_redPoint}
                ></div>
                <p className={styles.glassPointsBlock__glassPoint_name}>
                  Glass 3
                </p>
              </div>
            </div>
          </div>
          <img
            className={styles.wrapper__graphBlock_graph}
            src={graph}
            alt="graph"
          />
          <div className={styles.wrapper__graphBlock_dateBlock}>
            {GRAPH_DATE.map(({ id, time }) => (
              <p key={id} className={styles.dateBlock__time}>
                {time}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TrackerPage
