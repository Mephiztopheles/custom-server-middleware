import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    return <>
        <div>
            Visit <Link href={'/redirect'}>/redirect</Link> to be redirected to google
        </div>
        <div>
            Visit <Link href={'/redirect-2'}>/redirect-2</Link> to be redirected to github
        </div>
    </>;
}
