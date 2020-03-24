import styles from './buttons.module.scss'
type Props = JSX.IntrinsicElements['button'] & {
  children: React.ReactNode
}

const PrimaryButton = ({ children, ...props }: Props) => (
  <button {...props} className={styles.primaryButton}>
    {children}
  </button>
)

export default PrimaryButton
