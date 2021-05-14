import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css"

const width = 100;
const height = 100;

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <Image
          className="logo"
          src="/dave2.png"
          alt="Logo"
          width={width}
          height={height}
          priority
        />
      </a>
    </Link>
  </div>
);

export default Logo;
