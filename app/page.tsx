import Image from "next/image";
import retroLogoPng from "./retroLogo.png";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <div>
        <p>image loaded with next/image</p>
        <Image
          src={retroLogoPng}
          style={{ imageRendering: "pixelated", width: "80%", height: "auto" }}
          alt="image loaded with next/image"
        />
      </div>
      <div>
        <p>image loaded with native img element</p>
        <img
          src={retroLogoPng.src}
          style={{ imageRendering: "pixelated", width: "80%", height: "auto" }}
          alt="image loaded with native img element"
        />
      </div>
    </div>
  );
}
