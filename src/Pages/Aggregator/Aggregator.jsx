import styles from './Aggregator.module.scss'
import Content from '@/widgets/Content'
import Footer from '@/widgets/Footer'
import Header from '@/widgets/Header'

const Aggregator = () => {
  return (
    <div className={styles.aggregator}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Aggregator
