import Image from "next/image";
import styles from "./Card.module.css";

import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";

const Card= (props)=>{
    return(
        <div className={styles.card}>
            <Image src={props.img} alt="" className={styles.card_image}/>
            <div className={styles.card_title}>
                <h4 className={styles.car_name}>{props.name}</h4>
                <h5 className={styles.year}>{props.year}</h5>
            </div>
            <Features capacity={props.capacity} fuel={props.fuel} milage={props.milage} type={props.type}/>
            <hr className={styles.divider}/>
            <Pricing price={props.price}/>
        </div>
    )
}


export default Card;