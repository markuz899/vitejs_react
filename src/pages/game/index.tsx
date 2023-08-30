import { Link } from "react-router-dom";
import Layout from "../../container/Layout";

export default function Game() {
  return (
    <Layout
      title="Games"
      style={{
        height: "100vh",
        maxWidth: "100%",
        padding: 0,
      }}
    >
      <div className="flex justify-center items-center pt-5 h-full">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <Link to="/game/puzzle" target="_blank">
              Puzzle
            </Link>
          </li>
          <li>
            <a target="_blank" href="https://markuz899.github.io/js-snake/">
              Simple Snake
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
