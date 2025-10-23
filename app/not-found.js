import Link from "next/link";
import classes from './page.module.css'
export default function NotFound(){
    return (
        <main className="not-found">
            <h1>NOT FOUND</h1>
            <p>Unfortunately we did not find the requested page or resource.</p>
            <div className={` ${classes.center} ${classes.cta}`}><div>try again</div><Link href='/'>Back To Home</Link></div>
        </main>
    )
}