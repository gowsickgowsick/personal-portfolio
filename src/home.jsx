import  Header from './header'
import About from './about'
import Workprocess from './workprocess'
import Portfolio from './portfolio'
import Projectidea from './projectidea'
import Blog from './blog'
import What from './whatido'
import Happy from './happyclient'
import Contact from './Contact'
import Copy from './copy'
import Happyclient from './happyclient2'
import Profile from './Profile'

 

export default function Home (){
    return(
        <>
        <header/>
        <Profile/>
        <About/>
        <Workprocess/>
        <Portfolio/>
        <Projectidea/>
        <Blog/>
        <What/>
        <Happy/>
        <Happyclient/>
        
        <Contact/>
        <Copy/>
        </>
    )
}