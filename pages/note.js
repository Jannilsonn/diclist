import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../src/css/styles.module.css'

function Note() {
    return(
        <div>
            <Head>
                <title>Nota - DicList</title>
            </Head>

            <Header selected="note"/>
            
            <section className={styles.section}>
                <Link href="/note/[item]" as="/note/reuniao-de-quinta" passHref>
                        <a>
                            <div className={styles.listItem}>
                                <p className={styles.listItemContent}>Reunião de quinta</p>
                                <span className={styles.listItemIndex}>1</span>
                            </div>
                        </a>
                </Link>
            </section>
        </div>
    );
}

export default Note