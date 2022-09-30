import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Store.module.css'
import axios from 'axios'

const Store = ({ data }) => {
    return (
        <>
            <Layout>
                <section className={styles.store}>
                    <div className={styles.wrapper}>
                        {data.map(item => console.log(item))}
                    </div>
                </section>
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/shoes')
    const data = await res.json()
    return { props: { data } }
}

export default Store
