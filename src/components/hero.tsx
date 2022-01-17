import Link from "next/link";
import heroStyles from "styles/components/hero.module.scss";
import { IconContext } from 'react-icons'
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"



const Hero = (props) => {
  return (
    <>
    <section className={heroStyles.hero}>
      <div className={heroStyles.left}>
        <div>
          <h2>
            好きなことで<br />溢れた人生を
          </h2>
        </div>
        <ul>
          <li>
            <p>
              <span>2020.00.00</span>お知らせ内容が入ります。
            </p>
          </li>
          <li>
            <p>
              <span>2020.00.00</span>お知らせ内容が入ります。
            </p>
          </li>
          <li>
            <p>
              <span>2020.00.00</span>お知らせ内容が入ります。ああああああああ
            </p>
          </li>
        </ul>
        </div>
        <div className={heroStyles.right}>
          <img src="../../images/sample_image.png" />
        </div>
      </section>
      </>
  )
}

export default Hero