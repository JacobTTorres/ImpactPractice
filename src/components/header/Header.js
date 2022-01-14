import "./header.css";

export default function Header() {
  return (
    <section className="headerContainer">
      <div className="headerContent">
        <div className="headerTitle">
          <img
            src="https://offers.impactplus.com/hs-fs/hub/145335/file-468683385-png/inbound-marketing-logo-impactbnd-white.png"
            alt=""
            className="logo"
          />
        </div>
        <div className="headerInfo">
          <div className="infoContainer">
            <div className="infoTitle">
              <h1 className="decoratedTitle">
                The IMPACT Conversion Collection{"  "}
              </h1>
            </div>
            <div className="freeGuide">
              <h1 className="infoInHeader">
                Free Guide: How to Generate Even More Leads from Your Blog
              </h1>
            </div>
          </div>
          <div className="infoImage">
            <img
              className="img"
              src="https://offers.impactplus.com/hs-fs/hub/145335/file-2041646158-png/Impact_Conversion_Collection/Blogging/blog_half-ipad.png"
              alt=""
            />
            <img
              className="img2"
              src="https://offers.impactplus.com/hs-fs/hub/145335/file-2041646163-png/Impact_Conversion_Collection/Blogging/blog-ipad.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
// still need moblie breakPoints
