import styles from '../styles/Footer.module.css';
import Link from 'next/link';
// import Circle from './Circle.jsx';
import {
    Facebook,
    Instagram,
    LinkedIn,
    Twitter,
  } from "@material-ui/icons";
const Footer=()=>{
    return(
        <div className={styles.container}>
        {/* <Circle backgroundColor="yellow" bottom='-250vh' right='-80vw'/> */}
        {/* <div className={styles.cardL}>
            <h1 className={styles.title}>More Info</h1>
            <h1 className={styles.linkTitle}>
                <span>WORK WITH US</span>
            </h1>
        </div> */}
        <div className={styles.cardL}>
            <div className={styles.cardItem}>
            <span style={{fontSize:'40px',textDecoration:'underline',color:'rgb(93, 141, 22)'}}>ADDRESS:</span>
            <br/>Street 1/B,Phase 2,Vishal Nagar<br/>Bathinda
            </div>
            <div className={styles.cardItem}>
                Contact@MOHNEESH.BANSAL<br/>
                mohneeshbansal20@gmail.com
            </div>
        </div>
        <div className={styles.cardS}>
        <div className={styles.cardItem}>
               <span style={{fontSize:'40px',textDecoration:'underline',color:'rgb(93, 141, 22)'}}>FOLLOW US:</span>
               <br/><Facebook/><Link href='https://www.facebook.com/mohneesh.bansal.9/'> Facebook</Link>
               <br/><LinkedIn/><Link href='https://www.linkedin.com/in/mohneesh-bansal-312194191/' passHref> LinkedIn</Link>
               <br/><Instagram/><Link href='https://www.instagram.com/mohneeshbansal/'> Instagram</Link>
               <br/><Twitter/><Link href='https://twitter.com/MohneeshBansal1'> Twitter</Link>
            </div>
        </div>
        </div>
    )
}
export default Footer;