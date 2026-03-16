import styles from './Field.module.scss'

const Field = (props) => {
  const {
    className = '',
    id,
    label,
    type = 'text',
    value,
    onInput,
    ref,
  } = props

  return (
    <div
      className={`${styles.field} ${className}`}
    >
      <label
        className={styles.label}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
        ref={ref}
      />
    </div>
  )
}

export default Field