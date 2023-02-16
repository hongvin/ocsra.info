import React from "react";
import Logo from "../Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <header className={isScrolled ? "isScrolled" : ""}>
      <div className="wrapper">
        <section>
          <div className="left">
            <Logo />
          </div>
          <div className="right">
          on-chain credit scoring and risk analysis
          </div>
        </section>
      </div>
    </header>
  );
}
