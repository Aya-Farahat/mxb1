import React from "react";
import { motion } from "framer-motion";

function InvestmentPartners() {
  const partners = [
    { src: "/images/bank/albilad.png", alt: "Albilad Bank" },
    { src: "/images/bank/giash.jpeg", alt: "Giash" },
    { src: "/images/bank/jadwa-removebg-preview.png", alt: "Jadwa" },
    { src: "/images/bank/sudi.png", alt: "Sudi" },
    { src: "/images/bank/impalc.png", alt: "Impalc" },
  ];

  return (
    <div className="container py-5">
      <h3 className=" mb-5" style={{ color: "#65748A" }}>
        Our Investment Partners
      </h3>

      <div className="row justify-content-between g-4 partners-row">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="img-fluid"
              style={{
                maxHeight: "100px",
                objectFit: "contain",
                padding: "10px",
              }}
            />
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .partners-row {
            display: flex !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            gap: 15px !important;
            padding-bottom: 10px !important;
            scroll-snap-type: x mandatory !important;
            scroll-behavior: smooth !important;
          }
          .partners-row::-webkit-scrollbar {
            display: none;
          }
          .partners-row {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .partners-row .col-6, .partners-row .col-sm-4, .partners-row .col-md-3, .partners-row .col-lg-2 {
            flex: 0 0 calc(33.333% - 10px) !important;
            min-width: calc(33.333% - 10px) !important;
            max-width: calc(33.333% - 10px) !important;
            scroll-snap-align: start !important;
          }
          .partners-row .col-6:nth-child(-n+3) img, .partners-row .col-sm-4:nth-child(-n+3) img, .partners-row .col-md-3:nth-child(-n+3) img, .partners-row .col-lg-2:nth-child(-n+3) img {
            max-height: 120px !important;
          }
          .partners-row .col-6:nth-child(n+4) img, .partners-row .col-sm-4:nth-child(n+4) img, .partners-row .col-md-3:nth-child(n+4) img, .partners-row .col-lg-2:nth-child(n+4) img {
            max-height: 100px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default InvestmentPartners;
