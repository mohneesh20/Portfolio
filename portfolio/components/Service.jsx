import styles from '../styles/Service.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Service=({services})=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>MY PROJECTS</h1>
            <div className={styles.services}>
                {
                    services.map((service)=>(
                        <Link passHref key={service.id} href={`${service.linkTo}`}>
                            <div className={styles.service}>
                                <div className={styles.desc}>{service.desc}</div>
                            <span className={styles.cat}>{service.title}</span>
                            <div className={styles.media}>
                                <Image alt='' src={`/image/${service.photo}`} width='100%' height='100%' layout='responsive' objectFit='cover'></Image>
                            </div>
                            </div>
                        </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}
export default Service;