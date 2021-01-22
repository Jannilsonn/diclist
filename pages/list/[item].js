import Head from 'next/head'
import Header from '../../components/Header'
import styles from '../../src/css/styles.module.css'

function Index({data}) {
    return(
        <div>
            <Head>
                <title>{data.title ? data.title : 'Lista'}</title>
            </Head>

            <Header selected="list"/>
            
            <section className={styles.section}>
                    <div className={styles.wordItem}>
                            <h3>{data.title ? data.title : 'Lista não registrada'}</h3>
                            <ul style={{padding: 20}}>
                                {data.list ? data.list.map(function(i) {
                                    return <li>{i}</li>
                                }) : ''}
                            </ul>
                    </div>
            </section>
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.VERCEL_URL}/api/list/${context.params.item}`)
    const data = await res.json()
    
    return {
      props: {
        data,
      },
    }
}
 
export default Index