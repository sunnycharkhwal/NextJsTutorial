import Link from "next/link";

export default async function File({ params }) {
  const { filePath } = await params;
  return (
    <>
      <h1>File /{filePath?.join("/")}</h1>
      <Link href="/">Home</Link>
    </>
  );
}
