import Navbar from "../components/Navbar";
import "../styles/category.css";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import listImg from "../img";

export default function Category() {
  const { state } = useLocation();
  const { category } = state;

  const selected = listImg.filter((item) => {
    return item.category.toLowerCase().includes(category.toLowerCase());
  });

  return (
    <div className="container">
      <Navbar></Navbar>
      <h2 className="container-title">{category}</h2>
      <section className="list-category-container">
        {selected.map((item, index) => {
          return (
            <div key={index} className="list-category-item">
              <div>
                <h4>{item.location}</h4>
                <img src={item.link} />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt accusantium neque nihil veritatis praesentium error
                  repudiandae labore non molestias, ex laudantium quia. Veniam
                  iste exercitationem aperiam, iure saepe dolor expedita!
                </p>
                <button>Booking Plan</button>
              </div>
            </div>
          );
        })}
      </section>
      <Footer></Footer>
    </div>
  );
}
