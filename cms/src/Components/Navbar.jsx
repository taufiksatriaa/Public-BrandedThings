const Navbar = () => {
  return (
    <>
      <section>
        <div className="d-flex flex-column align-items-center bg-secondary bg-gradient"></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Branded Things
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link active" href="">
                    Add Staff
                  </a>
                </li>
                <li>
                  <a className="nav-link active" href="">
                    Category
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-1"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-danger" type="submit">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
