import Router from "next/router";
import Head from "next/head";
import { MainLayout } from "@/components/MailLayout";

export default function About() {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title="About">
      <h1>About this shit</h1>{" "}
      <p>
        <button onClick={linkClickHandler}>Mainpage</button>
        <button onClick={() => Router.push("/posts")}>Posts</button>
      </p>
    </MainLayout>
  );
}
