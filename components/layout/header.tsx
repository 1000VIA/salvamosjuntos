import Container from '../common/container/container'
import styles from './header.module.scss'
import PrimaryButton from '../common/buttons/primary-button'
import Link from 'next/link'

const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.flexHeader}>
        <div className={styles.logo}>
          <span>
            Salvamos <b>Juntos</b>
          </span>
        </div>
        <div className="flex-center">
          <nav>
            <ul>
              <Link href="/">
                <a>Hospitales</a>
              </Link>
            </ul>
            <ul>
              <Link href="/">
                <a>Lineas de Atención</a>
              </Link>
            </ul>
            <ul>
              <Link href="/">
                <a>Nosotros</a>
              </Link>
            </ul>
          </nav>
          <PrimaryButton>Ayudar</PrimaryButton>
        </div>
      </div>
    </Container>
  </header>
)

export default Header
