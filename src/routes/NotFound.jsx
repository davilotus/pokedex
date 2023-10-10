import { Author } from '../components/Author/Author';
import { Header } from '../components/Header/Header';

export function NotFound() {
  return (
    <>
      <Header />

      <div className="container">
        <h1>404</h1>
        <p>Page not found</p>
      </div>

      <Author />
    </>
  );
}
