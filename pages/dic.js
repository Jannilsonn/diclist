import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../src/css/styles.module.css'

function Dic() {
    return(
        <div>
            <Head>
                <title>Dicionário - DicList</title>
            </Head>
            
            <Header selected="dic"/>
            
            <section className={styles.section}>
                <Link href="/dic/[item]" as="/dic/equidade" passHref>
                        <a>
                            <div className={styles.listItem}>
                                <p className={styles.listItemContent}>Equidade</p>
                                <span className={styles.listItemIndex}>1</span>
                            </div>
                        </a>
                </Link>
                <Link href="/dic/[item]" as="/dic/interoperabilidade" passHref>
                        <a>
                            <div className={styles.listItem}>
                                <p className={styles.listItemContent}>Interoperabilidade</p>
                                <span className={styles.listItemIndex}>2</span>
                            </div>
                        </a>
                </Link>
            </section>
        </div>
    );
}

export default Dic