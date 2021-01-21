import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../src/css/styles.module.css'

function Index() {
    return(
        <div>
            <Head>
                <title>Recentes - DicList</title>
            </Head>

            <Header selected="history"/>

            <section className={styles.section}>
                <Link href="/dic/[item]" as="/dic/interoperabilidade" passHref>
                        <a>
                            <div className={styles.listItem}>
                                <p className={styles.listItemContent}>Interoperabilidade</p>
                                <span className={styles.listItemIndex}>1 : Dicionário</span>
                            </div>
                        </a>
                </Link>
                <Link href="/dic/[item]" as="/dic/equidade" passHref>
                        <a>
                            <div className={styles.listItem}>
                                <p className={styles.listItemContent}>Equidade</p>
                                <span className={styles.listItemIndex}>2 : Dicionário</span>
                            </div>
                        </a>
                </Link>
                <Link href="/list/[item]" as="/list/mercado" passHref>
                        <a>
                            <div className={styles.listItem}>
                                <p className={styles.listItemContent}>Mercado</p>
                                <span className={styles.listItemIndex}>1 : Lista</span>
                            </div>
                        </a>
                </Link>
                <Link href="/note/[item]" as="/note/reuniao-de-quinta" passHref>
                        <a>
                            <div className={styles.listItem}>
                                <p className={styles.listItemContent}>Reunião de quinta</p>
                                <span className={styles.listItemIndex}>1 : Nota</span>
                            </div>
                        </a>
                </Link>
            </section>
        </div>
    );
}

export default Index