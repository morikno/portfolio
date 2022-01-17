import Head from "next/head";
import Image from "next/image";
import styles from "styles/components/layout.module.scss";
import Link from "next/link";
import Header from "components/header";

// const name: string = "morikno";
export const siteTitle: string = "morikno | 好きなことで溢れた人生";
export const siteDescription: string = "福岡在住のサラリーマンデザイナー、デザイン、ライフスタイル、趣味のキャンプを軸に日々更新していきます。";

export default function Layout({
  children,
  home,
}: {
  children:any;
  home?: boolean;
}): any {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={siteDescription}
        />
        
        <meta property="og:image" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
}
