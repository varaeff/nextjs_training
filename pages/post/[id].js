import { MainLayout } from "@/components/MailLayout";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <MainLayout title="Post">
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={`/posts`}>Back to posts page</Link>
    </MainLayout>
  );
}

// Post.getInitialProps = async (ctx) => {
//   // await sleep(2000);
//   const responce = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
//   const post = await responce.json();
//   return { post };
// };

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getServerSideProps(ctx) {
  await sleep(2000);
  const responce = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await responce.json();
  return { props: { post } };
}
