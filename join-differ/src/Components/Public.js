import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1> Welcome To
          <span>Join Differ</span>
        </h1>
      </header>
      <footer>
        <Link to="/Login">Login</Link>
      </footer>
    </section>
  )
  return content
}

export default Public