import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout=({children})=>{
    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        <div style={{backgroundColor:'black',color:'white',textAlign:'center',height:'30px',fontSize:'20px'}}>Copyright@All Rights Reserved</div>
        </>
    )
}
export default Layout;