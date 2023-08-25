import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/123">Dashboard dynamic</Link>
        </li>
        <li>
          <Link to="/dashboard/analytics">Dashboard analytics</Link>
        </li>
        <li>
          <Link to="/error">Error page</Link>
        </li>
      </ul>
    </>
  );
}
