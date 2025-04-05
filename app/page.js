import Link from "next/link";
import Header from "./components/Header";
export default function Home() {
  return (
    <>
      <Header title="Welcome to My Next.js App" backgroundColor="#0070f3" />
      <h1>home page</h1>
      <Link href="/peges/about">About</Link>
      <br />
      <Link href="/peges/contact">Contact</Link>
      <br />
      <Link href="/peges/services">Services</Link>
      <br />
      <Link href="/peges/blogs">Blogs</Link>
    </>
  );
}
