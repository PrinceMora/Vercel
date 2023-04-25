import React from "react";

function Footer() {
  const style = { height: "25px", with: "25px," };
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="mb-3">Follow me on my social networks</h5>
            <ul className="list-inline"></ul>
          </div>
          <div className="col-md-6">
            <h5 className="mb-3">Contact:</h5>
            <ul className="list-unstyled">
              <li>Telephone: +506 62965949</li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100011288176106">
                  Facebook
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.instagram.com/j_katsumi99/">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
