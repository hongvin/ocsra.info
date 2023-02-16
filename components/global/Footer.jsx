import Logo from "../Logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <section>
          <Logo />
          <p>
            OCSRA.info represents On-chain Credit Scoring and Risk Analysis. It is a service allowing developers to perform scoring on a given address for a better DeFi products.
          </p>
          <p>A project created by <strong><a href="https://www.linkedin.com/in/koayhv">Koay Hong Vin</a></strong> for <strong>KL Mini Hack</strong></p>
          <p>2023 ©OCSRA. All rights reserved.</p>
        </section>
      </div>
    </footer>
  );
}
