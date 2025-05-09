import Link from "next/link";
import Private from "../_lib/Private";
import { title } from "process";
const NaveData = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "contact",
    link: "/contact",
  },
  {
    title: "services",
    link: "/services",
  },
  {
    title: "blogs",
    link: "/blogs",
  },
  {
    title: "files",
    link: "/files",
  },
  {
    title: "login",
    link: "/login",
  },
  {
    title: "register",
    link: "/register",
  },
];
export default function Home() {
  return (
    <>
      <Private />
      <h1>home page</h1>
      {NaveData.map((nav, i) => (
        <Link
          key={nav.title}
          className="capitalize cursor-pointer flex flex-col mb-5"
          href={nav.link}
        >
          {nav.title}
        </Link>
      ))}
    </>
  );
}
