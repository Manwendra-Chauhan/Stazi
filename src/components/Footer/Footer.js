/* eslint-disable react/jsx-key */
import styles from "./Footer.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer= (props)=>{
    const totalPages=[1,2,3,4,5,6,7,8,9,10];

    const backwardClickHandler=()=>{
        const current= props.page-1;
        if(current!==0)
        window.location = "../../Page"+ current;
        // window.open(url);
    }

    const forwardClickHandler=()=>{
        const current=props.page+1;
        if(current!==11)
        window.location = "../../Page"+ current;
    }

    return(
        <div className={styles.footer}>
        
            <span className={styles.footer_page}>{props.page} from 10</span>
            <div className={styles.pageNumber}>
                <button className={styles.number} onClick={backwardClickHandler} >{"<-"}</button>
                {totalPages.map((page)=>{
                    var href="../../Page"+page;
                    return <a href={href} className={styles.number}>{page}</a>
                })}
                <button className={styles.number} onClick={forwardClickHandler}>{"->"}</button>
            </div>
        </div>
    )
}


export  default Footer;