import Link from "next/link";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-buttons">

              <Link href="https://www.facebook.com/bazma.javeed/" target="_blank" className="  btn button-link " >
                Facebook
                </Link>
                <span>|</span>

                <Link href="https://mail.google.com/mail/u/0/#inbox"  className=" btn button-link">
                E-mail
                </Link>
                <span>|</span>

                <Link href="https://www.linkedin.com/in/bazma-javeed-5476022b4/" target="_blank" className="btn button-link" >
                Linkedin
                </Link>
                <span>|</span>

                <Link href="https://github.com/bazmajaveed?tab=projects" target="_blank" className=" btn button-link">
                Github
                </Link>
            </div>
        </div>
    )
}