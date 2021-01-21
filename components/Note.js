import styles from '../src/css/styles.module.css'
import Link from 'next/link'

function Note(props) {
    const setClass = props.selected == "note" ? styles.menuItemSelected : styles.menuItem
    return <Link href="/note"><a className={setClass}>Nota</a></Link>
}

export default Note