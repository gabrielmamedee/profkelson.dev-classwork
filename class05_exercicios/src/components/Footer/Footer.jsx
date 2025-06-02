import styles from './Footer.module.css'

import Logo from '../../assets/logo1.svg'

const Footer = () => {
  return (
    <footer className={`${styles} d-flex flex-column justify-content-center align-items-center`}>
        <div>
            <img className={styles.imgLogo} src={Logo} alt="logo" />
        </div>
        <div>
            <hr />
            <p>Todos os diretos reservados 2025©</p>
        </div>
    </footer>
  )
}

export default Footer