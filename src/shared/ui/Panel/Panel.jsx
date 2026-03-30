import styles from './Panel.module.scss'

const Panel = (props) => {
  const { children } = props

  return <div className={styles.panel}>{children}</div>
}

export default Panel
