import Link from "next/link";
import "./global.css"
import ImageDetector from "./image";

export default function Home() {
  return (
    <div className="container">
      <h2>Image Detection (Cats And Dogs Only)</h2>
      <ImageDetector/>
    </div>
  );
}
