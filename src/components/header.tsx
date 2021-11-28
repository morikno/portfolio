import topStyles from "styles/components/nav.module.scss";
import Link from "next/link";


const Header = (props) => {
  return (
    <header>
      <nav className={topStyles.nav}>
        
        <ul className={topStyles.navBody}>
          <li className={topStyles.navList}><Link href="/"><a><span className={topStyles.navListEn}>ABOUT</span><span className={topStyles.navListJa}>私について</span></a></Link></li>

          <li className={topStyles.navList}><Link href="/"><a><span className={topStyles.navListEn}>PRODUCT</span><span className={topStyles.navListJa}>制作物</span></a></Link></li>

          <li className={topStyles.navList}><Link href="/"><a><span className={topStyles.navListEn}>ARTICLE</span><span className={topStyles.navListJa}>記事カテゴリー</span></a></Link></li>

          <li className={topStyles.navList}><Link href="/"><a><span className={topStyles.navListEn}>CONTACT</span><span className={topStyles.navListJa}>問い合わせ</span></a></Link></li>

        </ul>
      </nav>
    </header>
  )
}

export default Header