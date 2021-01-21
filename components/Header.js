import styles from '../src/css/styles.module.css'
import Link from 'next/link'
import Guide from '../components/Guide'

function Header(props) {
    return(
        <header className={styles.header}>
            <h3 style={{textAlign: 'center'}}>
                <Link href="/">
                    <a>DicList</a>
                </Link>
            </h3>

            <Guide selected={props.selected}/>
        </header>
    )
}
export default Header