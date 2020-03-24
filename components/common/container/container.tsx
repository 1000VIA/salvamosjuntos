import styles from './container.module.scss'
type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => <div className={styles.container}>{children}</div>

export default Container
