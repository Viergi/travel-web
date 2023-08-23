import { useEffect } from "react";
import "../App.css";
import { topDestination } from "../img";
import { filteredListImg } from "../img";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const Navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  // const track = document.querySelector(".category-track");
  // if (track) {
  //   window.onmousedown = (e) => {
  //     track.dataset.mouseDownAt = e.clientX;
  //   };

  //   window.onmousemove = (e) => {
  //     if (track.dataset.mouseDownAt === "0") return;
  //     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  //       // disini edit
  //       maxDelta = window.innerWidth / 2;

  //     const percentage = (mouseDelta / maxDelta) * -100,
  //       nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  //     Math.min(nextPercentage, 0);
  //     Math.max(nextPercentage, -100);
  //     console.log(nextPercentage);

  //     track.dataset.percentage = nextPercentage;
  //     track.style.transform = `translate(${nextPercentage}%,50%)`;
  //   };
  //   window.onmouseup = () => {
  //     track.dataset.mouseDownAt = "0";
  //     track.dataset.prevPercentage = track.dataset.percentage;
  //   };
  // }

  // const track = document.querySelector(".category-track");
  // window.onmousedown = (e) => {
  //   track.dataset.mouseDownAt = e.clientX;
  // };
  // window.onmousemove = (e) => {
  //   if (track.dataset.mouseDownAt === "0") return;
  //   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  //     // disini edit
  //     maxDelta = window.innerWidth / 2;

  //   const percentage = (mouseDelta / maxDelta) * -100,
  //     nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  //   Math.min(nextPercentage, 0);
  //   Math.max(nextPercentage, -100);
  //   console.log(nextPercentage);

  //   track.dataset.percentage = nextPercentage;
  //   track.style.transform = `translate(${nextPercentage}%,50%)`;
  // };

  // window.onmouseup = () => {
  //   track.dataset.mouseDownAt = "0";
  //   track.dataset.prevPercentage = track.dataset.percentage;
  // };

  // const track = document.querySelector(".category-track");
  // window.onmousedown = (e) => {
  //   track.dataset.mouseDownAt = e.clientX;
  // };

  // window.onmousemove = (e) => {
  //   if (track.dataset.mouseDownAt === "0") return;
  //   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  //     // disini edit
  //     maxDelta = window.innerWidth / 2;

  //   const percentage = (mouseDelta / maxDelta) * -100,
  //     nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  //   Math.min(nextPercentage, 0);
  //   Math.max(nextPercentage, -100);
  //   console.log(nextPercentage);

  //   track.dataset.percentage = nextPercentage;
  //   track.style.transform = `translate(${nextPercentage}%,50%)`;
  // };

  // window.onmouseup = () => {
  //   track.dataset.mouseDownAt = "0";
  //   track.dataset.prevPercentage = track.dataset.percentage;
  // };

  return (
    <div className="container">
      <Navbar></Navbar>
      <section className="home-page">
        <div className="home-page-container">
          <img
            className="home-page-img"
            src="https://images.unsplash.com/photo-1559917078-72caab575b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnQlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="beach"
            draggable="false"
          />
          <div className="slogan-text">
            Spirit of Discovery,
            <br />
            Journeys Beyond Boundaries
          </div>
        </div>
        <div className="home-page-destination">
          <h1>Top Destinations</h1>
          <div className="destination-list">
            {topDestination.map((img) => {
              return (
                <div
                  key={img.location}
                  className="destination-card"
                  // data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                >
                  <img
                    className="destination-img"
                    src={img.link}
                    draggable="false"
                  ></img>
                  <div className="destination-info">
                    <span>{img.location}</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt minima consectetur facilis, non omnis dolore quod
                      voluptate labore rem rerum magnam expedita placeat
                      veritatis incidunt molestiae ea iste similique id.
                    </p>
                  </div>
                  <button className="btn-order">ORDER NOW</button>
                </div>
              );
            })}
          </div>
          <button className="destination-btn-see-more">
            Lihat Destinasi lainnya...
          </button>
        </div>
      </section>
      <section className="category-page">
        <div className="category-list">
          <h3>Categories</h3>
          <div
            className="category-track"
            data-mouse-down-at="0"
            data-prev-percentage="0"
          >
            {filteredListImg.map((img) => {
              return (
                <div
                  key={img.location}
                  className="category-item"
                  onClick={() =>
                    Navigate(`/category`, { state: { category: img.category } })
                  }
                >
                  <h4>{img.category}</h4>
                  <img src={img.link} draggable="false"></img>
                </div>
              );
            })}
          </div>
        </div>
        {/* kategori kalo mode web kasih gambar yang bisa berubah gambar sesuai iist kategorinya */}
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
