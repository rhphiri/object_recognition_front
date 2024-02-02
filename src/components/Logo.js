import { Tilt } from "react-tilt";
import image from "./face-recognition-icon.png";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.99)",
};

const Logo = () => {
  return (
    <div className="float-start">
      <Tilt options={defaultOptions} style={{ height: 150, width: 150 }}>
        <div className="Tilt-inner">
          <img src={image} width="150px" height="auto" alt="" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
