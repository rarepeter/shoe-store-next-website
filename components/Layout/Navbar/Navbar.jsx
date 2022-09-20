import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link href="/stores" passHref>
                    <a>
                        <span className={styles[`stores-link`]}>Store locations</span>
                    </a>
                </Link>
                <Link href="/" passHref>
                    <a>
                        <svg className={styles.logo} viewBox="0 0 82 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.58437 1.59664C3.48709 3.58354 1.09545 7.88848 0.359563 10.9424C-0.633887 15.2842 0.469947 20.6929 3.19274 24.7403L4.48054 26.6536L6.24667 44.9037C7.20333 54.9486 8.0864 63.3377 8.23357 63.5585C8.60152 64.1472 12.9433 64.1472 13.532 63.5585C13.8631 63.2273 13.9735 58.628 13.9735 45.1612V27.2056L15.0038 27.4263C19.4927 28.4198 22.6202 30.3331 26.2996 34.2701C29.464 37.692 31.6348 41.261 34.7624 48.1784C39.5456 58.812 43.2251 62.4546 49.9585 63.3377C52.7181 63.7056 67.2519 63.4849 73.2861 63.0066L76.0825 62.7858L78.8789 58.2233C83.2942 50.9748 82.9631 49.8709 74.8683 45.7868C72.0351 44.3518 67.8774 41.9969 65.6329 40.5251C63.3884 39.0902 61.2544 37.8759 60.9232 37.8759C60.5921 37.8759 60.0034 38.4279 59.6722 39.0534C58.9731 40.4148 55.4776 44.131 54.9625 44.131C54.7785 44.0942 52.6445 41.5922 50.216 38.5015C35.1671 19.4419 20.5965 4.87134 13.0169 1.26548C11.8394 0.676773 10.0733 0.161651 9.11664 0.0512682C7.49768 -0.0959096 7.31371 -0.0223197 5.58437 1.59664ZM17.285 6.96862C23.5769 11.6047 36.0134 24.8139 47.2725 38.7958C51.467 44.0206 51.9454 44.6829 51.2095 44.7933C48.4131 45.198 38.1107 36.0362 26.4468 22.7902C20.6701 16.204 9.92612 3.25238 9.92612 2.81085C9.92612 2.29573 14.1943 4.68737 17.285 6.96862ZM13.0536 10.832C20.7069 20.141 26.6676 26.948 33.9161 34.5645C43.2251 44.3886 47.2725 47.2953 51.6878 47.2217C55.2201 47.2217 57.9061 45.6396 60.7024 42.0337L61.6223 40.8563L66.0376 43.6527C68.4661 45.1612 72.2927 47.3321 74.5372 48.3992C80.2403 51.1219 80.2403 51.2323 77.076 56.5307L74.6475 60.6149L68.3189 60.8725C64.8234 61.0197 58.8627 61.0564 54.9993 60.9829C48.1923 60.8725 47.9716 60.8357 46.3158 59.879C42.526 57.6346 39.8768 54.0655 36.9332 47.1481C31.8188 35.19 25.2326 27.7943 17.6897 25.5866C15.2981 24.8875 12.4649 24.8139 11.8394 25.4394C11.5083 25.7706 11.3979 30.3699 11.3979 43.8366C11.3979 58.9224 11.3243 61.7923 10.8828 61.7923C10.1837 61.7923 10.1837 61.7187 8.41755 42.6592L6.87218 25.9178L5.32681 23.5261C4.48054 22.2015 3.4503 20.2882 3.08235 19.2948C2.19929 16.9399 2.19929 12.635 3.08235 10.0226C3.81824 7.85169 6.46744 3.54674 6.98256 3.73071C7.16653 3.8043 9.88932 6.96862 13.0536 10.832Z" fill="#222222" />
                        </svg>
                    </a>
                </Link>
                <div className={styles[`right-buttons`]}>
                    <div className={styles[`language-selector`]}>
                        <button className={styles[`language-selector__button`]}>RO</button>
                        <button className={styles[`language-selector__button`]}>RU</button>
                    </div>
                    <div className={styles[`checkout-links`]}>
                        <div className={styles[`checkout-link`]}>
                            <svg viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.8231 3.71353C39.4406 1.33108 36.2865 0.0289367 32.9202 0.0289367C29.5539 0.0289367 26.3902 1.34073 24.0078 3.72317L22.7635 4.96745L21.4999 3.70388C19.1175 1.32144 15.9441 0 12.5778 0C9.22118 0 6.05744 1.31179 3.68464 3.68459C1.3022 6.06704 -0.00959271 9.23077 5.28162e-05 12.5971C5.28162e-05 15.9633 1.32149 19.1174 3.70394 21.4999L21.8182 39.6142C22.069 39.865 22.4066 40 22.7346 40C23.0625 40 23.4001 39.8746 23.6509 39.6238L41.8038 21.5385C44.1862 19.156 45.498 15.9923 45.498 12.626C45.5076 9.25971 44.2055 6.09597 41.8231 3.71353ZM39.9711 19.6962L22.7346 36.8652L5.53659 19.6672C3.64606 17.7767 2.60435 15.2689 2.60435 12.5971C2.60435 9.92525 3.63642 7.41741 5.52694 5.53653C7.40782 3.65566 9.91565 2.61394 12.5778 2.61394C15.2496 2.61394 17.7671 3.65565 19.6576 5.54618L21.8375 7.72607C22.3487 8.23728 23.1686 8.23728 23.6798 7.72607L25.8404 5.56547C27.7309 3.67495 30.2484 2.63323 32.9106 2.63323C35.5728 2.63323 38.0806 3.67495 39.9711 5.55582C41.8616 7.44635 42.8937 9.95418 42.8937 12.626C42.9034 15.2978 41.8616 17.8056 39.9711 19.6962Z" fill="#222222" />
                            </svg>
                        </div>
                        <div className={styles[`checkout-link`]}>
                            <svg viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.4583 34.6678L30.1565 8.72697C30.1151 8.21362 29.6845 7.82447 29.1629 7.82447H24.3109C24.3026 3.51066 20.792 0 16.4782 0C12.1644 0 8.6537 3.51066 8.64542 7.82447H3.79343C3.28008 7.82447 2.84953 8.21362 2.79985 8.72697L0.498047 34.6678C0.498047 34.7009 0.498047 34.7257 0.498047 34.7588C0.498047 37.6485 3.15588 40 6.41814 40H26.5382C29.8005 40 32.4583 37.6485 32.4583 34.7588C32.4583 34.7257 32.4583 34.7009 32.4583 34.6678ZM16.4782 1.98717C19.699 1.98717 22.3155 4.6036 22.3237 7.82447H10.6326C10.6409 4.6036 13.2573 1.98717 16.4782 1.98717ZM26.5382 38.0046H6.41814C4.26538 38.0046 2.51005 36.5721 2.48521 34.792L4.70421 9.81163H8.64542V13.2975C8.64542 13.8439 9.09254 14.291 9.63901 14.291C10.1855 14.291 10.6326 13.8439 10.6326 13.2975V9.81163H22.3237V13.2975C22.3237 13.8439 22.7709 14.291 23.3173 14.291C23.8638 14.291 24.3109 13.8439 24.3109 13.2975V9.81163H28.2521L30.4711 34.8002C30.4463 36.5721 28.691 38.0046 26.5382 38.0046Z" fill="#222222" />
                            </svg>
                        </div>
                    </div>
                </div>

            </header>
            <nav className={styles.navigation}>

            </nav>
        </div>
    )
}

export default Navbar