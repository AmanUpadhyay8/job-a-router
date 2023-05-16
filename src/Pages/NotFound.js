import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h1>404 Error</h1>
        <p>The page you were looking for not found</p>

        <p>Go to <Link to="/">Homepage</Link></p>
    </div>
  )
}
