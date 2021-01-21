import styles from '../src/css/styles.module.css'
import Link from 'next/link'

function Dic(props) {
    const setClass = props.selected == "dic" ? styles.menuItemSelected : styles.menuItem
    return <Link href="/dic"><a className={setClass}>Dicionário</a></Link>
}

export default Dic