import { FC } from 'react'

import search from 'assets/icons/search.svg'

import Layout from 'components/Layout'

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
      </div>
    </Layout>
  )
}

export default TrackerPage
