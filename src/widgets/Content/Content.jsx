import styles from './Content.module.scss'
import Sidebar from '@/widgets/Sidebar'
import Main from '@/widgets/Main'

const Content = () => {
  return (
    <div className={`${styles.content}`}>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default Content