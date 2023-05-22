import firstGreenLineIcon from 'assets/icons/first-green-line.svg'
import secondGreenLineIcon from 'assets/icons/second-green-line.svg'
import firstPurpleLineIcon from 'assets/icons/first-purple-line.svg'
import secondPurpleLineIcon from 'assets/icons/second-purple-line.svg'
import firstMauveLineIcon from 'assets/icons/first-mauve-line.svg'
import secondMauveLineIcon from 'assets/icons/second-mauve-line.svg'
import purpleBoldIcon from 'assets/icons/bold-purple-ellipse.svg'
import mauveBoldIcon from 'assets/icons/bold-mauve-ellipse.svg'
import greenBoldIcon from 'assets/icons/bold-green-ellipse.svg'
import purpleIcon from 'assets/icons/purple-ellipse.svg'
import greenIcon from 'assets/icons/green-ellipse.svg'
import mauveIcon from 'assets/icons/mauve-ellipse.svg'

import styles from 'components/IntakeCard/IntakeCard.module.scss'

export const INTAKE_DATA = [
  {
    subtitleClassName: styles.greenSubtitle,
    titleClassName: styles.greenTitle,
    secondLineIcon: secondGreenLineIcon,
    firstLineIcon: firstGreenLineIcon,
    cardClassName: styles.greenCard,
    boldIcon: greenBoldIcon,
    intake: 'Daily Intake',
    volume: '5000 ml',
    icon: greenIcon,
    percent: '80%',
    id: 1,
  },
  {
    subtitleClassName: styles.purpleSubtitle,
    titleClassName: styles.purpleTitle,
    secondLineIcon: secondPurpleLineIcon,
    firstLineIcon: firstPurpleLineIcon,
    cardClassName: styles.purpleCard,
    boldIcon: purpleBoldIcon,
    intake: 'Average Intake',
    icon: purpleIcon,
    volume: '2500 ml',
    percent: '85%',
    id: 2,
  },
  {
    subtitleClassName: styles.mauveSubtitle,
    titleClassName: styles.mauveTitle,
    secondLineIcon: secondMauveLineIcon,
    firstLineIcon: firstMauveLineIcon,
    cardClassName: styles.mauveCard,
    boldIcon: mauveBoldIcon,
    intake: 'Total Intake',
    volume: '17000 ml',
    icon: mauveIcon,
    percent: '68%',
    id: 3,
  },
]
