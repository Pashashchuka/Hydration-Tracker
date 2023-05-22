import styles from './Menu.module.scss'

import notificationsIcon from 'assets/icons/notifications.svg'
import dashboardIcon from 'assets/icons/dashboard.svg'
import scheduleIcon from 'assets/icons/schedule.svg'
import settingsIcon from 'assets/icons/settings.svg'
import reportsIcon from 'assets/icons/reports.svg'

export const NAVIGATION_MENU = [
  {
    id: 1,
    label: 'Dashboard',
    icon: <img className={styles.icon} src={dashboardIcon} alt="dashboard" />,
  },
  {
    id: 2,
    label: 'Schedule Reminder',
    icon: <img className={styles.icon} src={scheduleIcon} alt="schedule" />,
  },
  {
    id: 3,
    label: 'Reports',
    icon: <img className={styles.icon} src={reportsIcon} alt="reports" />,
  },
  {
    id: 4,
    label: 'Notifications',
    icon: (
      <img
        className={styles.icon}
        src={notificationsIcon}
        alt="notifications"
      />
    ),
  },
  {
    id: 5,
    label: 'Settings',
    icon: <img className={styles.icon} src={settingsIcon} alt="settings" />,
  },
]
