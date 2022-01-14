import "./form.css";

export default function Form() {
  return (
    <section className="formContainer">
      <div className="formContainerContent">
        {" "}
        <div className="formInfoContent">
          <div className="formInfo">
            <div className="leftForm">
              <p>
                While traffic groth on your blog is important it's also
                meaningless without conversions. Effective conversion rate
                optimization means making small changes (to your
                calls-to-action, copy, etc) based on behaviors that yield big
                results.
              </p>
              <img
                src="https://offers.impactplus.com/hs-fs/hubfs/Landing_Page_(715)/Assets/generate-more-leads-blog.png?width=156&name=generate-more-leads-blog.png"
                alt=""
                className="formImg"
              />
            </div>
            <div className="leftForm">
              <p>
                In this free guide, we're giving away the seacrets that have
                helped grow the IMPACT Blog earn over 20'000 subscribers
                including:
              </p>
            </div>
            <div className="leftForm">
              <ul>
                <li>The best places to put your calls-to-actions</li>
                <li>Actionables tips for optimizing the conversion path</li>
                <li>Ways to leverage social proof on your blog</li>
                <li>Growth hacks for improving your search ranking</li>
                <li>and more!</li>
              </ul>
            </div>
            <div className="leftForm">
              <p>
                Fill out the form on this page to get your free copy and start
                growing your blog right now!
              </p>
            </div>
          </div>
        </div>
        <div className="formContent">
          <fieldset className="form">
            <legend className="formHeader">GET MY OWN COPY NOW!</legend>

            <div className="formWrapper">
              <div className="formRow">
                <div className="nameRow">
                  <form>
                    <h4 className="label">
                      First Name<p className="star">*</p>
                    </h4>
                    <label>
                      <input className="nameInput" type="text" name="name" />
                    </label>
                  </form>
                </div>
                <div className="nameRow">
                  <form>
                    <h4 className="label">
                      Last Name<p className="star">*</p>
                    </h4>
                    <label>
                      <input className="nameInput" type="text" name="name" />
                    </label>
                  </form>
                </div>
              </div>
              <div className="formRow">
                <div className="email">
                  <form>
                    <h4 className="label">
                      Email(
                      <a href="http://www.impactplus.com/privacy-policy.html">
                        Privacy Policy
                      </a>
                      )<p className="star">*</p>
                    </h4>
                    <label>
                      <input className="emailInput" type="text" name="name" />
                    </label>
                  </form>
                </div>
              </div>
              <div className="formRow">
                <div className="comWebRow">
                  <form>
                    <h4 className="label">
                      Company Name<p className="star">*</p>
                    </h4>
                    <label>
                      <input className="comWebInput" type="text" name="name" />
                    </label>
                  </form>
                </div>
                <div className="comWebRow">
                  <form>
                    <h4 className="label">
                      Website<p className="star">*</p>
                    </h4>
                    <label>
                      <input className="comWebInput" type="text" name="name" />
                    </label>
                  </form>
                </div>
              </div>
              <div className="formRow">
                <div className="subscribe">
                  <input type="checkbox" className="checkbox"></input>
                  <h4 className="sub">
                    Subscribe me to the IMPACT blog (Daily)
                  </h4>
                </div>
              </div>
              <div className="formRow">
                <div className="impactInfo">
                  IMPACT needs the information you provide to send you the
                  content you're requesting. We may contact you in the future
                  about related resources or services that may be helpful to
                  you, based on this information. You may unsubscribe from these
                  communications at any time. For information on how to update
                  your subscription preferences, as well as our privacy
                  practices, check out our{" "}
                  <a href="https://www.impactbnd.com/privacy-policy?__hstc=118612054.1886c7d75df09aa2b12af958e7b23f42.1641751687080.1642099181320.1642188352630.5&__hssc=118612054.1.1642188352630&__hsfp=3880548604">
                    Privacy Policy
                  </a>
                  .
                </div>
              </div>
              <div className="formRow">
                <div className="formButton">
                  <button className="bottomButton">
                    GENERATE MORE CONVERSIONS!
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
