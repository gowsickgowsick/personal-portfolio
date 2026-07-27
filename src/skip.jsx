import Header from "./header"
import { Outlet } from "react-router"
export default function Skip() {
    return (
        <>
    <Header/>
       <Outlet/>
       </>
    )     
}