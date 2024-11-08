import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href={"/blog"}>Blogs</Link>
    </div>
  );
}
