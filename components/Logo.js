import Link from "next/link";
import Image from "next/image";

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <Image
          className="logo"
          src="/dave2.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </a>
    </Link>

    <style jsx>{`
      .logo {
        display: block;
        width: 120px;
      }
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);

export default Logo;
