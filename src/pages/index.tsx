import Head from "next/head";
import Layout, { siteTitle } from "components/layout";
import Hero from "components/hero"
import utilStyles from "styles/utility/utils.module.scss";
import Link from "next/link";
import { client } from "../../libs/client";
import { IBlog, ICategory, IPopularArticles, ITag } from '../../types';



export default function Home({ blog }) {
  return (
    <Layout home>
      <Hero />
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};