import styles from './Main.module.scss'

const Main = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={styles.main}
    >
      Main
    </div>
  )
}

export default Main