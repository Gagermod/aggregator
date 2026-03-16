import Header from '@/widgets/Header'
import Content from '@/widgets/Content'
import styles from './Aggregator.module.scss'

const Aggregator = () => {
  return (
    <div className={styles.aggregator}>
      <Header/>
      <Content/>
    </div>
  )
}

export default Aggregator