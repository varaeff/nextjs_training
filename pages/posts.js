// import { useState, useEffect } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/MailLayout";

export default function Posts({ posts }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function load() {
  //     const responce = await fetch("http://localhost:4200/posts");
  //     const json = await responce.json();
  //     setPosts(json);
  //   }

  //   load();
  // }, []);

  return (
    <MainLayout title="Posts">
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const responce = await fetch("http://localhost:4200/posts");
  const posts = await responce.json();
  return { posts };
};
