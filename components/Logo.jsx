import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="logo">
        <span className="type">OCSRA</span>
        <span className="info">.info</span>
      </a>
    </Link>
  );
}
