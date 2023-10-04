/* eslint-disable react/jsx-key */
import styles from "./Page1.module.css";
import Header from '@/components/Header/Header';
import Card from '@/components/Card/Card';
import Footer from "@/components/Footer/Footer";
import {data} from "../components/data";

const Page1= ()=>{
    return(
        <div className={styles.cars}>
            <Header/>
            {data.map((content)=>{   
              return(
                <div className={styles.body}>
                    {content.map((item)=>{
                        return <Card img={item.image} name={item.name} year={item.year} capacity={item.capacity} fuel={item.fuel} milage={item.milage} type={item.type} price={item.price}/>
                    })}
                </div>
              ) 
            
            })}
          <Footer page={1}/>
        </div>
        
    )
}


export default Page1;