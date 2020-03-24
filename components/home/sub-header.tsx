import styles from './sub-header.module.scss'

const SubHeader = () => (
  <div className={styles.subHeader}>
    <h1>Encuentra donde pueden atenderte</h1>
    <div>
      <input type="text" placeholder="Buscar ciudad..." />
    </div>
  </div>
)

export default SubHeader
