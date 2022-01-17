import Link from "next/link";
import headerStyles from "styles/components/header.module.scss";
import { IconContext } from 'react-icons'
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"



const Header = (props) => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <Link href="/">
          <img src="../../logo.svg" alt="" />
        </Link>
      </div>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.linksWrap}>
          <li className={headerStyles.linksTitle}>Follow Me</li>
          <li className={headerStyles.linksitems}><a href="https://www.facebook.com/morikno">
            <AiFillFacebook />
          </a></li>
          <li className={headerStyles.linksitems}><a href="https://twitter.com/morik_no">
            <AiOutlineTwitter />
          </a></li>
          <li className={headerStyles.linksitems}><a href="https://www.instagram.com/morik_no/">
            <AiOutlineInstagram />
          </a></li>
        </ul>
        <ul className={headerStyles.navBody}>
          <li className={headerStyles.navList}><Link href="/"><a><span className={headerStyles.navListEn}>ABOUT</span><span className={headerStyles.navListJa}>私について</span></a></Link></li>

          <li className={headerStyles.navList}><Link href="/"><a><span className={headerStyles.navListEn}>PRODUCT</span><span className={headerStyles.navListJa}>制作物</span></a></Link></li>

          <li className={headerStyles.navList}><Link href="/"><a><span className={headerStyles.navListEn}>ARTICLE</span><span className={headerStyles.navListJa}>記事カテゴリー</span></a></Link></li>

          <li className={headerStyles.navList}><Link href="/"><a><span className={headerStyles.navListEn}>CONTACT</span><span className={headerStyles.navListJa}>問い合わせ</span></a></Link></li>

        </ul>
      </nav>
    </header>
  )
}

export default Header