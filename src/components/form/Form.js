import "./form.css";

export default function Form() {
  return (
    <section className="formContainer">
      <div className="formContent">
        <div className="formInfo">
          <div className="leftForm">
            <p>
              While traffic groth on your blog is important it's also
              meaningless without conversions. Effective conversion rate
              optimization means making small changes (to your calls-to-action,
              copy, etc) based on behaviors that yield big results.
            </p>
            <img
              src="https://offers.impactplus.com/hs-fs/hubfs/Landing_Page_(715)/Assets/generate-more-leads-blog.png?width=156&name=generate-more-leads-blog.png"
              alt=""
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
              <li>Groth hacks for improving your search ranking</li>
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
      <div className="form"></div>
    </section>
  );
}
