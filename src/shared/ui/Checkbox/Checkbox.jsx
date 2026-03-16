import styles from './Checkbox.module.scss'

const Checkbox = (props) => {
  const {
    name,
    text,
    id,
    checked,
    toggleFavoriteBlogger,
  } = props


  return (
    <div className={`${styles.checkbox} ${checked ? styles.active : ''}`}>
      <label
        className={`visually-hidden`}
        htmlFor={id}
      >
        {name}
      </label>
      <input
        className='visually-hidden'
        id={id}
        type="checkbox"
        checked={checked}
        onChange={({ target }) => {
          toggleFavoriteBlogger(id, target.checked)
        }}
      />
      <label
        className={styles.starLabel}
        htmlFor={id}
      >
        <span>
          {checked ? '[x]' : '[_]'}
        </span>
      </label>
      {text && <span>{text}</span>}
    </div>
  )
}

export default Checkbox