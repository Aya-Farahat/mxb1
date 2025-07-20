import { motion } from "framer-motion";

const DiscoverMore = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/Frame7.png')",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "visible",
        minHeight: "auto",
        height: "auto",
      }}
    >
      <div className="container discover-container" style={{ padding: "100px 100px 20px 0px" }}>
        <div className="d-flex flex-lg-row align-items-start justify-content-evenly">
          {/* النص */}
          <motion.div
            className="mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="fw-bold"
              style={{
                fontFamily: "'IBM Plex Serif', serif",
                fontWeight: 700,
                fontSize: "25px",
                lineHeight: "136%",
                letterSpacing: "6px",
                color: "#193050",
              }}
            >
              Discover More
            </h2>

            <h3
              className="fw-normal mb-3"
              style={{
                fontFamily: "'IBM Plex Serif', serif",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "136%",
                letterSpacing: "14%",
                color: "#193050",
              }}
            >
              About Our Projects
            </h3>

            <p
              className="text-secondary mb-4"
              style={{
                fontSize: "20px",
                lineHeight: "136%",
                letterSpacing: "3px",
                maxWidth: "450px",
              }}
            >
              A forward-thinking developments that embody Saudi Vision 2030 –
              blending sustainability, innovation, and architectural excellence.
            </p>

            <a
              href="/"
              className="btn btn-link px-0"
              style={{
                color: "#3c6e9e",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              See more
              <span className="ms-2">
                <svg width="20" height="20" fill="#3c6e9e" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" opacity="0.2" />
                  <path
                    d="M7 10h6m0 0l-2-2m2 2l-2 2"
                    stroke="#3c6e9e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
            </a>

            {/* الصورة للجوال - خلف النص */}
            <div 
              className="position-absolute d-block d-lg-none"
              style={{ 
                right: "-90px", 
                bottom: "0px",
                zIndex: -1
              }}
            >
              <img
                src="/images/discsub.png"
                alt="discover img"
                className="img-fluid"
                style={{ 
                  width: "800px", 
                  height: "auto",
                  
                }}
              />
            </div>

            {/* الصورة للكمبيوتر */}
            <div
              className="position-absolute d-none d-lg-block"
              style={{ left: "-140px", bottom: "0px", marginLeft: "150px" }}
            >
              <img
                src="/images/discsub.png"
                alt="discover img"
                className="img-fluid mt-4"
                style={{ width: "300px", height: "auto" }}
              />
            </div>
          </motion.div>

          {/* الصور الأربع - تظهر فقط في الكمبيوتر */}
          <motion.div
            className="d-none d-lg-flex"
            style={{ gap: "1rem", flexShrink: 0 }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* العمود الأول */}
            <div className="d-flex flex-column">
              <img
                src="/images/Discover/disc1.png"
                alt="Al Olaya"
                className="img-fluid shadow-sm"
                style={{
                  width: "180px",
                  height: "250px",
                  objectFit: "cover",
                  margin: 0,
                  padding: 0,
                }}
              />

              <span
                style={{
                  color: "#5584b1ff",
                  fontWeight: "550",
                  fontSize: "17px",
                  margin: 0,
                  padding: 0,
                }}
              >
                Al Olaya
              </span>

              <img
                src="/images/Discover/disc3.png"
                alt="Al Olaya"
                className="img-fluid"
                style={{
                  width: "180px",
                  height: "125px",
                  objectFit: "cover",
                  objectPosition: "bottom",
                  margin: 0,
                  padding: 0,
                }}
              />
            </div>

            {/* العمود الثاني */}
            <div className="d-flex flex-column" style={{ marginTop: "100px" }}>
              <img
                src="/images/Discover/disc4.png"
                alt="Al Olaya"
                className="img-fluid shadow-sm"
                style={{
                  width: "180px",
                  height: "250px",
                  objectFit: "cover",
                  margin: 0,
                  padding: 0,
                }}
              />
              <span
                style={{
                  color: "#5584b1ff",
                  fontWeight: "550",
                  fontSize: "17px",
                  margin: 0,
                  padding: 0,
                }}
              >
                Plumeria
              </span>

              <img
                src="/images/Discover/disc2.png"
                alt="Al Olaya"
                className="img-fluid shadow-sm"
                style={{
                  width: "180px",
                  height: "63px",
                  objectFit: "cover",
                  objectPosition: "center",
                  margin: 0,
                  padding: 0,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .discover-container {
            padding: 100px 100px 250px 0px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DiscoverMore;
