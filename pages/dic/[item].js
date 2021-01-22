import Head from 'next/head'
import Header from '../../components/Header'
import styles from '../../src/css/styles.module.css'

function Index({data}) {
    return(
        <div>
            <Head>
                <title>{data.title ? data.title : 'Dicionário'}</title>
            </Head>

            <Header selected="dic"/>

            <section className={styles.section}>
                    <div className={styles.wordItem}>
                            <h3>{data.title ? data.title : "Palava não registrada"}</h3>
                            <br/>
                            <p>{data.description ? data.description : ""}</p>
                    </div>
            </section>
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.VERCEL_URL}/api/dic/${context.params.item}`)
    const data = await res.json()
    
    return {
      props: {
        data,
      },
    }
}

export default Index