import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer} id='footer'>
            <div className={styles.wrapper}>
                <div className={styles['contact-links']}>
                    <h4 className={styles['contact-links__header-text']}>Contact</h4>
                    <span className={styles['contact-links__link']}>Customer service</span>
                    <span className={styles['contact-links__link']}>Store locations</span>
                    <span className={styles['contact-links__link']}>Contact numbers</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer