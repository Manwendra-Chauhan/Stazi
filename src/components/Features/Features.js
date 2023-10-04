import styles from "./Features.module.css";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';

const Features=(props)=>{
    return(
        <div className={styles.features}>
            <div className={styles.feature_wrap}>
                <div className={styles.type}>
                    <GroupOutlinedIcon className={styles.icon}/>
                    <span className={styles.icon_text}>{props.capacity}</span>
                </div>
                <div className={styles.type}>
                    <LocalGasStationOutlinedIcon className={styles.icon}/>
                    <span className={styles.icon_text}>{props.fuel}</span>
                </div> 
            </div>
            <div className={styles.feature_wrap}>
                <div className={styles.type}>
                    <SpeedOutlinedIcon className={styles.icon}/>
                    <span className={styles.icon_text}>{props.milage}</span>
                </div>
                <div className={styles.type}>
                    <ToysOutlinedIcon className={styles.icon}/>
                    <span className={styles.icon_text}>{props.type}</span>
                </div>
            </div>
        </div>
    )
}

export default Features;