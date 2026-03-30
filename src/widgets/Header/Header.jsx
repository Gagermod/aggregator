import { useContext } from 'react'
import styles from './Header.module.scss'
import { BurgerMenuContext } from '@/app/providers/BurgerMenuProvider'
import BurgerButton from '@/shared/ui/BurgerButton'
import Logo from '@/shared/ui/Logo'


const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(BurgerMenuContext)

  return (
    <header className={styles.header}>
      <div className={`${styles.container}`}>
        <Logo loading="eager">
          <div className={styles.decor} aria-hidden={true}>
            #!/usr/bin/env
          </div>
          <h1 className="h1">OpinionHub</h1>
        </Logo>
        <div className={`${styles.container}`}>
          <span>v1.0.0</span>
          <BurgerButton
            className="visible-tablet"
            isActive={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
