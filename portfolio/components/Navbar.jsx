import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Navbar=()=>{
    const folder=process.env.NEXT_PUBLIC_URL;
    console.log(folder);
    const [open,setOpen]=useState(false);
    const downloadPdf=()=>{
        window.location.href=`/image/Resume.pdf`;
        // window.location.href=`/image/Resume.pdf`;
    }
    return(
        <div className={styles.container}>
        <Link href='/'>
            <Image alt='' width="60px" height='40px' src={`${folder}/image/logo.jpg`} layout='fill'></Image>
            {/* <img alt='' width="60px" height='40px' src={`/image/logo.jpg`}></img> */}
        </Link>

        <ul className={styles.list}>
            <li className={styles.listItem} onClick={downloadPdf}>RESUME</li>
            {/* <li className={styles.listItem}><Link href="mailto:mohneeshbansal20@gmail.com">CONTACT</Link></li> */}
        </ul>
        <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <ul onClick={()=>setOpen(false)} className={styles.menu} style={{right:open?"0":"-50vw"}}>
                <li className={styles.menuItem} onClick={downloadPdf}>RESUME</li>             
                {/* <li className={styles.menuItem}><Link href="mailto:mohneeshbansal20@gmail.com">CONTACT</Link></li> */}
                </ul>
        </div>
        </div>
    )
}
export default Navbar;