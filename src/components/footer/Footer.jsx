import React from "react";
import "./footer.scss";
import logo from "../../Images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="left">
        <img src={logo} alt="" />
        <span>
          {year} © For keep supporting me{" "}
          <a
            href="https://www.buymeacoffee.com/muhammadzohaib"
            target="_blank"
            rel="noopener noreferrer"
            className="a"
          >
            Buy me a ☕
          </a>
          .
        </span>

      </div>
      <a
          href="//www.dmca.com/Protection/Status.aspx?ID=a43bbbd4-68fe-418c-ad1e-ad8476f981c0"
          title="DMCA.com Protection Status"
          class="dmca-badge"
        >
          {" "}
          <img
            src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=a43bbbd4-68fe-418c-ad1e-ad8476f981c0"
            alt="DMCA.com Protection Status"
          />
        </a>{" "}
        <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js">
          {" "}
        </script>
      <div className="right">
        <span>
          Thank you so much for your most precious time, I am glad that you
          scrolled till end! ❤️
        </span>
      </div>
    </footer>
  );
};

export default Footer;
