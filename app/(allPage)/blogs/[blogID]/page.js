import Link from "next/link";

// Metadata generation for dynamic routes
export async function generateMetadata({ params }) {
  const { blogID } = params; // No need to await
  return {
    title: `Blog Id ${blogID}`, // Use backticks for template literals
  };
}

// Page component
export default async function Blog({ params }) {
  const { blogID } = params;
  return (
    <>
      <h1>Page {blogID}</h1>
      <Link href="/">Home</Link>
    </>
  );
}
