import Link from "next/link";

export default async function Blog({ params }) {
  const { blogID } = await params;
  return (
    <>
      <div>page {blogID}</div>
      <Link href="/">Home</Link>
    </>
  );
}
