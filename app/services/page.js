import Link from "next/link";

export default function services() {
  return (
    <>
      <div>all services</div>
      <Link href="/services/app-dev">App Development</Link>
      <br />
      <Link href="/services/app-dev">Web Development</Link>
      <br />
      <Link href="/services/app-dev">SEO Development</Link>
    </>
  );
}
