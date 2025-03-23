import Header from "./header";
import Footer from "./footer";

const Body = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <br />
      <div className="program_details_area detials_bg_1 overlay2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section_title text-center mb-80 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h3 style={{ fontFamily: "Arial", fontWeight: "bold" }}>
                  Enthuzea 2025
                </h3>
              </div>
            </div>
          </div>
          <center>
            <img
              src="img/enthu/must.png"
              alt="Enthuzea 2025"
              style={{ width: "55%", borderRadius: "10%" }}
            />
          </center>
          <br />
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="program_detail_wrap">
                {[
                  {
                    title: "Bullet and Bohemian is here",
                    imgSrc: "/img/Enthuzea 2025/band 2025/bullet b1.jpg",
                    date: "March 26, 2025",
                  },
                  {
                    title: "T.R.A.P. is also here",
                    imgSrc: "/img/Enthuzea 2025/band 2025/trap.jpg",
                    date: "March 27, 2025",
                  },
                  {
                    title: "Mesmerizing Dance performances💃",
                    imgSrc: "img/program_details/4.jpg",
                    date: "Dancing connects your body with your soul",
                  },
                  {
                    title: "Fashion Show👗",
                    imgSrc: "img/program_details/fashion.jpg",
                    date: "Know the new trends",
                  },
                  {
                    title: "Singing Competition",
                    imgSrc: "img/program_details/music.jpg",
                    date: "Enjoy the musical melody",
                  },
                ].map((event, index) => (
                  <div key={index} className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className="wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          {event.title}
                        </span>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src={event.imgSrc} alt={event.title} />
                      </div>
                      <h4
                        className="wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".6s"
                        style={{ fontFamily: "Arial", fontWeight: "bold" }}
                      >
                        {event.date}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
