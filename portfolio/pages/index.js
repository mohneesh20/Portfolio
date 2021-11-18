import styles from '../styles/Home.module.css'
import Intro from '../components/Intro';
import Service from '../components/Service';
import {data} from '../data.js';
export default function Home({services}) {
  // console.log(services);
  return (
    <div className={styles.container}>
      <Intro/>
      <Service services={services}/>
    </div>
  )
}
export const getStaticProps=()=>{
  const services=data;
  return{
    props:{services}
  }
}
