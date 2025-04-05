import Link from "next/link";

export default async function commentsid({ params }) {
  const paramsOBJ = await params;
  const { blogID, commentsID } = await paramsOBJ;
  return (
    <>
      <h1>
        Comments No <i style={{ color: "red" }}>{commentsID}</i> on
        <span style={{ color: "blue" }}>{blogID}</span> page
      </h1>
      <Link href="/">Home</Link>
    </>
  );
}
