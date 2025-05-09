import Link from "next/link";

export const metadata = {
  title: {
    default: "My Fils",
    absolute: "My Fils",
  },
};
export default async function File({ params }) {
  const { filePath } = await params;
  return (
    <>
      <h1>File /{filePath?.join("/")}</h1>
      <Link href="/">Home</Link>
    </>
  );
}
