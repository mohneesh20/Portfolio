import styles from '../styles/Intro.module.css';
import Image from 'next/image'
const Intro=()=>{
    const folder=process.env.NEXT_PUBLIC_URL;
    return(
        <div className={styles.container}>
            {/* <Circle backgroundColor="rgb(93, 141, 22)" top='-2vh' left='-80vw'/> */}
           <div className={styles.card}>
                <h3 style={{color:'lightgray',fontSize:'large',marginTop:'100px'}}>Hi, my name is</h3>   
                <h1 className={styles.title} style={{fontSize:'50px'}}>MOHNEESH BANSAL</h1>
                <h2 style={{color:'lightgray',fontSize:'25px'}}>I am passionate about coding and I create Web-Applications.</h2>
                <p className={styles.desc}>
                    I&apos;m a Software Engineer and a Full-stack developer.I am graduating from <span className={styles.title}>Thapar University</span> in 2023 with Bachelor&apos;s in Computer Engineering.I am skilled in <span className={styles.title}>Reactjs,Nodejs,C++,MongoDB,HTML,CSS,Python,C,React-Native</span>.
                </p>
                <button className={styles.button} onClick={()=>{window.location='https://mail.google.com/mail/u/0/?ui=2&fs=1&tf=cm&shva=1&to=mohneeshbansal20@gmail.com&cc&bcc&su&body'}}>GET IN TOUCH</button>
            </div> 
        <div className={styles.card} style={{margin:'50px',borderRadius:'2px',border:'0.5px solid goldenrod'}}>
             <Image src={`${folder}/image/programmer.png`} alt="" layout='fill'></Image>
             {/* <Image src={`./image/programmer.png`} alt="" width="100%" layout='fill'></Image> */}
        </div> 
        </div>
    )
}
export default Intro;