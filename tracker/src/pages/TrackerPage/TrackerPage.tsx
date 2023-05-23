import { FC } from 'react'

import chevron from 'assets/icons/see-all-chevron.svg'
import search from 'assets/icons/search.svg'
import graph from 'assets/images/graph.png'
import sun from 'assets/icons/sun.svg'

import IntakeCard from 'components/IntakeCard'
import GlassPoint from 'components/GlassPoint'
import FruitCard from 'components/FruitCard'
import Layout from 'components/Layout'

import { GLASS_POINTS_DATA } from 'constants/glassPointsData'
import { INTAKE_DATA } from 'constants/intakeData'
import { GRAPH_DATE } from 'constants/graphDate'
import { FRUIT_DATA } from 'constants/fruitData'

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
              secondLineIcon,
              firstLineIcon,
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
                secondLineIcon={secondLineIcon}
                firstLineIcon={firstLineIcon}
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
              {GLASS_POINTS_DATA.map(({ id, className, content }) => (
                <GlassPoint key={id} className={className} content={content} />
              ))}
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
        <div className={styles.wrapper__tipsBlock}>
          <div className={styles.wrapper__tipsBlock_headBlock}>
            <h2 className={styles.headBlock__title}>Hydration Tips</h2>
            <div className={styles.headBlock__seeAllBlock}>
              <p className={styles.headBlock__seeAllBlock_message}>See All</p>
              <img
                className={styles.headBlock__seeAllBlock_chevron}
                src={chevron}
                alt="see all"
              />
            </div>
          </div>
          <p className={styles.wrapper__tipsBlock_subtitle}>
            Consuming fruit juices keeps up the hydration level.
          </p>
          <div className={styles.wrapper__tipsBlock_fruitCardsBlock}>
            {FRUIT_DATA.map(({ id, className, title, subtitle, image }) => (
              <FruitCard
                className={className}
                subtitle={subtitle}
                title={title}
                image={image}
                key={id}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TrackerPage
