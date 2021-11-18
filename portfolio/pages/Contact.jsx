import styles from '../styles/Contact.module.css'
const Contact=()=>{
    return(
    <div className={styles.container}>
        <h1 className={styles.title}>GET IN TOUCH</h1>
        <form className={styles.form}>
          <input className={styles.inputS} placeholder="USERNAME"/>
          <input className={styles.inputS} placeholder="PHONE"/>
          <input className={styles.inputL} placeholder="EMAIL"/>
          <input className={styles.inputL} placeholder="SUBJECT"/>
          <textarea className={styles.textArea} placeholder="MESSAGE"></textarea>
          <button className={styles.button}>SUBMIT</button>
        </form>
      </div>
    )
}
export default Contact;