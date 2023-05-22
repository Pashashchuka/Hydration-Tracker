import { FC } from 'react'

import styles from './GlassPoint.module.scss'

interface IGlassPointProps {
  className: string
  content: string
}

const GlassPoint: FC<IGlassPointProps> = ({ className, content }) => {
  return (
    <div className={styles.point}>
      <div className={className}></div>
      <p className={styles.name}>{content}</p>
    </div>
  )
}

export default GlassPoint
