import styles from './Logo.module.scss'

const Logo = (props) => {
  const { loading = 'lazy', children } = props

  const title = 'Home'

  return (
    <a className={styles.logo} href="/" title={title} aria-label={title}>
      <img src="/logo.svg" alt="" width={30} height={30} loading={loading} />
      {children && <span className={styles.logoSign}>{children}</span>}
    </a>
  )
}

export default Logo
