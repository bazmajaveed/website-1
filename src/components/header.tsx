import Link from"next/link"
export default function Header(){
    return(
        
        <div className="header"> 
        <ul className="header-btn">
             <img className="logo" src="https://images.nightcafe.studio/jobs/Du20wfQULOnldHknVdiO/Du20wfQULOnldHknVdiO--1--15dss.jpg?tr=w-384,c-at_max" alt="Logo B"></img>
            
                <Link href={"/"}>
                <li>Home</li>


                </Link>

                <Link href={"/about-us"}>
                <li>About-Us</li>
                </Link>

                <Link href={"/website"}>
                <li>Website</li>
                </Link>

                <Link href={"/search"}>
                <li>Search</li>
                </Link>

        </ul>

        
        </div>
    )
  }
