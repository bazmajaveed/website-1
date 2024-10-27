import Header from "@/components/header"
import Footer from "@/components/footer";
import Link from "next/link"

export default function Search(){
    return(
        
        <div className="search">
            
            <h1 className="h1">Search</h1>

            <Link href="http://www.google.com" target="_blank" className="  btn button-link ">
            <input type="text" id="search" placeholder="Search With Google"/>
            </Link>
           
        </div>
        
    )
}