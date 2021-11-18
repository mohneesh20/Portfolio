import styles from '../styles/Intro.module.css';
import Image from 'next/image'
import Circle from './Circle.jsx';
// import Link from 'next/link'
const Intro=()=>{
    return(
        <div className={styles.container}>
            <Circle backgroundColor="rgb(93, 141, 22)" top='-2vh' left='-80vw'/>
           <div className={styles.card}>
                <h3 style={{color:'lightgray',fontSize:'large',marginTop:'100px'}}>Hi, my name is</h3>   
                <h1 className={styles.title}>Mohneesh Bansal</h1>
                <h2 style={{color:'lightgray',fontSize:'large'}}>I create Web-Applications.</h2>
                <p className={styles.desc}>
                    I'm a Full-stack developer.I graduated from <span className={styles.title}>Thapar University</span> in 2023 with Bachelor's in Computer Engineering.Skilled in <span className={styles.title}>Reactjs,Nodejs,C++,MongoDB,HTML,CSS,Python,C,React-Native</span>.
                </p>
                <button className={styles.button} onClick={()=>{window.location='mailto:mohneeshbansal20@gmail.com'}}>GET IN TOUCH</button>
            </div> 
        <div className={styles.card}>
             <Image src="/image/software.png" alt="" widhth="100%" widhth="100%" layout='fill'></Image>
        </div> 
        </div>
    )
}
export default Intro;