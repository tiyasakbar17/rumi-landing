import Button from "../components/Button";
import Card from "../components/Card";

export default function Page() {
  return (
    <>
      <h2>This page is used for testing components functionality</h2>

      {/* use style props to add additional style */}
      {/* bg and color props to custom button color */}
      {/* use "small", "medium", and "large" in size props to change button size. "medium" size is the default */}
      <section>
        <Button bg={"primary"} color={"white"} size={"small"} style={""}>
          log in
        </Button>
        <br />
        <Button bg={"primary"} color={"white"} style={""}>
          sign up
        </Button>
        <br />
        <Button bg={"primary"} color={"white"} size={"large"} style={""}>
          sign up for free lesson
        </Button>
        <br />

        {/* add text-btn and bordered-btn in variant props for different button type */}
        <Button variant={"text-btn"}>more about us</Button>
        <br />
        <Button color={"primary"} variant={"bordered-btn"}>
          more about us
        </Button>
      </section>

      <section>
        <div className="flex">
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            consequatur vitae distinctio alias error labore.
          </Card>
          {/* add variant={"3d"} for the 3D card */}
          <Card variant={"3d"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            consequatur vitae distinctio alias error labore.
          </Card>
        </div>
      </section>

      <section>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veniam?
        </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veniam?
        </h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veniam?
        </h3>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veniam?
        </h4>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veniam?
        </h5>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veniam?
        </h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veniam?
        </p>
        <p className="caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veniam?
        </p>
      </section>
    </>
  );
}
