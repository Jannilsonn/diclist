import styles from '../src/css/styles.module.css'
import History from './History'
import DicUser from './Dic'
import List from './List'
import Note from './Note'

function Guide(props) {
    return(
        <div className={styles.article}>
            <History selected={props.selected}/>
            <DicUser selected={props.selected}/>
            <List selected={props.selected}/>
            <Note selected={props.selected}/>
        </div>
    )
}

export default Guide