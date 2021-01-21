import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../src/css/styles.module.css'

function List() {

    return(
        <div>
            <Head>
                <title>Lista - DicList</title>
            </Head>

            <Header selected="list"/>
            
            <section className={styles.section}>
                <Link href="/list/[item]" as="/list/mercado" passHref>
                    <a>
                        <div className={styles.listItem}>
                            <p className={styles.listItemContent}>Mercado</p>
                            <span className={styles.listItemIndex}>1</span>
                        </div>
                    </a>
                </Link>
                <Link href="/list/[item]" as="/list/equipamentos" passHref>
                    <a>
                        <div className={styles.listItem}>
                            <p className={styles.listItemContent}>Equipamentos</p>
                            <span className={styles.listItemIndex}>2</span>
                        </div>
                    </a>
                </Link>
            </section>
        </div>
    );
}

export default List