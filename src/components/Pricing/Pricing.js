import styles from "./Pricing.module.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Pricing= (props)=>{
    return(
        <div className={styles.pricing}>
            <div>
                <span className={styles.price}>{props.price}</span>
                <span>/month</span>
            </div>

            <div className={styles.button_wrap}>
                <FavoriteBorderOutlinedIcon className={styles.like}/>
                <button className={styles.rent}>Rent now</button>
            </div>
        </div>
    )
}


export default Pricing;