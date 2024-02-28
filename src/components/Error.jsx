import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="error-page">
      <h1>404</h1>
      <p>Упсс...такая страница не существует</p>
      <Link to={"/"}>На главную</Link>
    </main>
  );
};
export default Error;
