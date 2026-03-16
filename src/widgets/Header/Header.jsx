import styles from "./Header.module.scss"
import Logo from '@/shared/ui/Logo'
import BurgerButton from '@/shared/ui/BurgerButton'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container}`}>
        <Logo loading='eager'>
          <h1>OpinionHub</h1>
        </Logo>
        <BurgerButton className='visible-tablet'/>
        {/* надо вернуться к burgerbutton когда допишу часть основного блока. Возвращаться на 6
         видео */}
      </div>
    </header>
  )
}

export default Header