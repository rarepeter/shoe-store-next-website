import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Index.module.css'
import img from '../assets/images/featured.png'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Layout>
        <section className={styles.showcase}>
          <div className={styles.wrapper}>
            <Link href='/store'>
              <div className={styles[`featured-section`]}>
                <Image src={img} placeholder='blur' layout='intrinsic' alt='featured' />
                <span className={styles[`featured-section__text`]}>Browse women`s autumn collection</span>
              </div>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}
