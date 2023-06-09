import { FC } from 'react'

import { useErrorPage } from './hooks'

import styles from './ErrorPage.module.scss'

const ErrorPage: FC = () => {
  const { handleSubtitleClick } = useErrorPage()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapper__title}>404 NOT FOUND</h1>
      <p onClick={handleSubtitleClick} className={styles.wrapper__subtitle}>
        Keep calm and return to the previous page
      </p>
    </div>
  )
}

export default ErrorPage
