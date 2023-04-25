import React, { useRef, useState } from "react";
import Information from "../information/Information";
interface RefObject<T> {
  readonly current: T | null;
}

interface HandleOptionClick {
  (targetRef: RefObject<HTMLDivElement>): void;
}

export function NavBar() {
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const thirdDivRef = useRef(null);

  const handleOptionClick: HandleOptionClick = (targetRef) => {
    if (targetRef.current) {
      targetRef.current.focus();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Portafolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Information
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Carrusell
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Footer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
