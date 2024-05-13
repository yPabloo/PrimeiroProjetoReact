import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Container from './Container'
import styles from './Footer.module.css'
import logo from '../../img/costs_logo.png'


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2021
            </p>
        </footer>
    )
}

export default Footer