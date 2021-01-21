import styles from '../src/css/styles.module.css'
import Link from 'next/link'

function List(props) {
    const setClass = props.selected == "list" ? styles.menuItemSelected : styles.menuItem
    return <Link href="/list"><a className={setClass}>Lista</a></Link>
}

export default List