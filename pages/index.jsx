import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Index.module.css'
import img from '../assets/images/featured.png'

export default function Home() {
  return (
    <>
      <Layout>
        <section className={styles.showcase}>
          <div className={styles.wrapper}>
            <div className={styles[`featured-section`]}>
              <Image src={img} placeholder='blur' width='300' height='300' alt='featured'/>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
