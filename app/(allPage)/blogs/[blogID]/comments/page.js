import Link from "next/link";

export default async function comments({ params }) {
  const paramsOBJ = await params;
  const { blogID } = await paramsOBJ;
  return (
    <>
      <h1>all comments {blogID} page</h1>
      <Link href="/">Home</Link>
    </>
  );
}
