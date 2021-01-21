import styles from '../src/css/styles.module.css'
import Link from 'next/link'

function History(props) {
    const setClass = props.selected == "history" ? styles.menuItemSelected : styles.menuItem
    return <Link href="/"><a className={setClass}>Recentes</a></Link>
}

export default History