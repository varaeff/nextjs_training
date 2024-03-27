import Link from "next/link";
import { MainLayout } from "@/components/MailLayout";
import classes from "../styles/error.module.scss";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Please{" "}
        <Link legacyBehavior href={"/"}>
          <a id="link">go back </a>
        </Link>
        safety
      </p>
    </MainLayout>
  );
}
