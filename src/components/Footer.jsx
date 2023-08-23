import { useNavigate } from "react-router-dom";
import "../App.css";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <section className="footer">
      <div className="footer-link">
        <ul>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="" onClick={() => navigate("/")}>
              Home
            </a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Booking Plan</a>
          </li>
          <li>
            <a href="">Personal Trip</a>
          </li>
          <li>
            <a href="">Group Trip</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Futher Information</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Get App</a>
          </li>
          <li>
            <a href="">App Store</a>
          </li>
          <li>
            <a href="">Google Play Store</a>
          </li>
        </ul>
      </div>
      <p className="credit">©Code by Viergi 2023</p>
    </section>
  );
}
