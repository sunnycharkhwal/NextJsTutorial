import Link from "next/link";

export default async function Blog({ params }) {
  const { blogID } = await params;
  return (
    <>
      <h1>page {blogID}</h1>
      <Link href="/">Home</Link>
    </>
  );
}
