import Logo from '../common/main-logo/main-logo'
import styles from './styles/sign-up.module.scss'

const SignUp = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.header}></div>
      <img src="static/svg/circleMagenta.svg" />
      <Logo />
      <img src="static/svg/circleBlack.svg" />
    </div>
  )
}

export default SignUp
