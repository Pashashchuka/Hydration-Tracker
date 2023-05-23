import melon from 'assets/images/melon.png'
import orange from 'assets/images/orange.png'
import grapes from 'assets/images/grapes.png'

import styles from 'components/FruitCard/FruitCard.module.scss'

export const FRUIT_DATA = [
  {
    id: 1,
    subtitle: 'It contains 97% water in it. A good choice to stay hydrated.',
    className: styles.greenCard,
    title: 'Watermelon',
    image: melon,
  },
  {
    id: 2,
    subtitle:
      'It contains 72% water in it. It’s tangy nature helps with skin care.',
    className: styles.orangeCard,
    title: 'Oranges',
    image: orange,
  },
  {
    id: 3,
    subtitle: 'It contains vitamin ‘C’ which helps with retaining water.',
    className: styles.purpleCard,
    title: 'Grapes',
    image: grapes,
  },
]
