import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Store.module.css'

const Store = ({ data }) => {
    const router = useRouter()

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

export async function getServerSideProps({ query }) {
    const page = query.page
    const limit = query.limit
    const res = await fetch(`http://localhost:3000/api/shoes?page=${page ? page : 1}&&limit=${limit ? limit : 2}`)
    const data = await res.json()
    return { props: { data } }
}

export default Store
