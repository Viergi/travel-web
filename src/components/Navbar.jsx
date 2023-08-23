import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="text-title">
          <h1>
            Wander<span>Sphere</span>
          </h1>
        </div>
        <div>
          <button
            onClick={() => {
              setMenu(!menu);
            }}
            className="button-menu"
          >
            <span></span>
          </button>
          <ul className={`menu ${menu ? "active" : ""}`}>
            <li className="menu-link">
              <a href="#">Home</a>
            </li>
            <li className="menu-link">
              <a href="#">Pricing</a>
            </li>
            <li className="menu-link">
              <a href="#">Service</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
