export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">My App</h6>
            <p className="text-muted small">
              A simple and modern React application built with clean UI
              and responsive design.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Links</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Services</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Contact</h6>
            <p className="text-muted small mb-1">Email: info@example.com</p>
            <p className="text-muted small mb-0">Phone: +91 98765 43210</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center text-muted small">
          © {new Date().getFullYear()} My App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
