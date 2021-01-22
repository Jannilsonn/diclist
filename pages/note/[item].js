import Head from 'next/head'
import Header from '../../components/Header'
import styles from '../../src/css/styles.module.css'

function Index({data}) {
    return(
        <div>
            <Head>
                <title>{data.title ? data.title : "Nota"}</title>
            </Head>

            <Header selected="note"/>

            <section className={styles.section}>
                    <div className={styles.wordItem}>
                            <h3>{data.title ? data.title : "Nota não registrada"}</h3>
                            <br/>
                            <p>{data.note ? data.note : ""}</p>
                    </div>
            </section>
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.VERCEL_URL}/api/note/${context.params.item}`)
    const data = await res.json()
    
    return {
      props: {
        data,
      },
    }
}

export default Index