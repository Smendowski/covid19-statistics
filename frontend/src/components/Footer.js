import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            &copy; {new Date().getFullYear()} Mateusz Smendowski  Nikita Muravytskyi Krzysztof Skoś   
        </div>
    )
}

export default Footer;