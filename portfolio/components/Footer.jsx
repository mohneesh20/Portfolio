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
        <div className={styles.cardItem2}>
               <span style={{fontSize:'40px',textDecoration:'underline',color:'rgb(93, 141, 22)'}}>FOLLOW US:</span>
               <span style={{display:'flex',fontSize:'20.0px',alignItems:'center'}}><Facebook style={{color:'#0059b3',marginRight:'5px'}} fontSize='large'/><Link href='https://www.facebook.com/mohneesh.bansal.9/'> FACEBOOK</Link></span>
               <span style={{display:'flex',fontSize:'20.0px',alignItems:'center'}}><LinkedIn style={{color:'#0059b3',marginRight:'5px'}} fontSize='large'/><Link href='https://www.linkedin.com/in/mohneesh-bansal-312194191/'> LINKDIN</Link></span>
               <span style={{display:'flex',fontSize:'20.0px',alignItems:'center'}}><Instagram style={{color:'#ff66d9',marginRight:'5px'}} fontSize='large'/><Link href='https://www.instagram.com/mohneeshbansal/'> INSTAGRAM</Link></span>
               <span style={{display:'flex',fontSize:'20.0px',alignItems:'center'}}><Twitter style={{color:'#0059b3',marginRight:'5px'}} fontSize='large'/><Link href='https://twitter.com/MohneeshBansal1'> TWITTER</Link></span>
            </div>
        </div>
        </div>
    )
}
export default Footer;