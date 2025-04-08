import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>home page</h1>
      <Link href="/peges/about">About</Link>
      <br />
      <Link href="/peges/contact">Contact</Link>
      <br />
      <Link href="/peges/services">Services</Link>
      <br />
      <Link href="/peges/blogs">Blogs</Link>
      <br />
      <Link href="/files">Files</Link>
    </>
  );
}
