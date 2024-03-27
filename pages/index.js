import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "@/components/MailLayout";

export default function Index() {
  return (
    <MainLayout title="Home page">
      <h1>Hello!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href="posts">Posts</Link>
      </p>
    </MainLayout>
  );
}
