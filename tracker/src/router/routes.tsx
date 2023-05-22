import { FC } from 'react'

import TrackerPage from 'pages/TrackerPage'
import ErrorPage from 'pages/ErrorPage'

import { PATHS } from './paths'

interface Routes {
  path: string
  component: FC
}

export const ROUTES: Routes[] = [
  {
    path: PATHS.TRACKER,
    component: TrackerPage,
  },
  {
    path: PATHS.ERROR,
    component: ErrorPage,
  },
]
