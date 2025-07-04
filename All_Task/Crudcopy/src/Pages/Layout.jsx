import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Employee Portal</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/insert">Insert</Link>
            <Link className="nav-link" to="/display">Display</Link>
            <Link className="nav-link" to="/search">Search</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
      <footer className="mt-4 text-center">
        <hr />
        www.cybrom.com
      </footer>
    </>
  );
};

export default Layout;
