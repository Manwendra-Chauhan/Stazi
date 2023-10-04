import styles from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';

const Header= ()=>{
    return(
        <div className={styles.header}>
            <div className={styles.search}>
                <input type="text" className={styles.search_bar} placeholder="Search...."/>
                <SearchIcon className={styles.icon}/>
            </div>
            <select className={styles.relevance}><option>Relevance</option></select>
            <select className={styles.relevance}><option>All Brands</option></select>
        </div>
    )
}

export default Header;