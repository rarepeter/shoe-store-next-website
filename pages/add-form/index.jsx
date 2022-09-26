import AddShoe from '../../components/AddShoeForm/AddShoe'
import styles from '../../styles/add-form/add-form.module.css'

const AddForm = () => {
    return (
        <>
            <section className={styles[`form-page`]}>
                <div className={styles.wrapper}>
                    <AddShoe />
                </div>
            </section>
        </>
    )
}