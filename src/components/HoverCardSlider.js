import React, { useState } from "react";
import { motion } from "framer-motion";

const cardData = [
  { id: 1, main: "/images/Card1.png", hover: "/images/cardhover1.png" },
  { id: 2, main: "/images/Card2.png", hover: "/images/cardhover2.png" },
  { id: 3, main: "/images/Card3.png", hover: "/images/cardhover3.png" },
  { id: 4, main: "/images/Card4.png", hover: "/images/cardhover4.png" },
  { id: 5, main: "/images/Card5.png", hover: "/images/cardhover5.png" },
];

const CARD_WIDTH = 400;
const CARD_GAP = 36;
const LEFT_SPACE = 180;

const HoverCardSlider = () => {
  const [hovered, setHovered] = useState(null);

  const visibleCards = 2.5;
  const rowWidth = (CARD_WIDTH * visibleCards) + (CARD_GAP * 2);

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(120deg, #f8fafc 60%, #b3cbe6 100%)",
        padding: "100px 0",
        minHeight: 600,
      }}
    >
      <div className="hover-slider-container" style={{ maxWidth: 1400, margin: "0 auto" }}>
        <h3 className="mb-3 fs-2 fw-bold" style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, marginLeft: LEFT_SPACE }}>
          What Sets Us Apart
        </h3>
        <p className="text-muted" style={{ color: "#7b8a99", marginBottom: 56, fontSize: 18, marginLeft: LEFT_SPACE }}>
          Committed to building purposeful infrastructure.
        </p>

        <div style={{ display: "flex" }}>
          <div style={{ width: LEFT_SPACE, flexShrink: 0 }} />
          <div style={{
            width: "100%",
            overflowX: "auto",
            scrollbarWidth: "thin",
          }}>
            <div
              className="card-row"
              style={{
                width: rowWidth,
                display: "flex",
                gap: `${CARD_GAP}px`,
                margin: 0,
                background: "transparent",
                boxSizing: "border-box",
              }}
            >
              {cardData.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: card.id * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHovered(card.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="card-hover"
                  style={{
                    minWidth: CARD_WIDTH,
                    maxWidth: CARD_WIDTH,
                    minHeight: CARD_WIDTH,
                    height: CARD_WIDTH,
                    flex: `0 0 ${CARD_WIDTH}px`,
                    margin: 0,
                    background: "#e9eef2",
                    borderRadius: 0,
                    boxShadow: "none",
                    padding: 0,
                    position: "relative",
                  }}
                >
                  <img
                    src={hovered === card.id ? card.hover : card.main}
                    alt="main"
                    className="main-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      background: "#e9eef2",
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .card-hover {
          position: relative;
          overflow: hidden;
        }
        /* شريط التمرير شفاف جدًا */
        .hover-slider-container > div > div::-webkit-scrollbar {
          height: 4px;
          background: transparent;
        }
        .hover-slider-container > div > div::-webkit-scrollbar-thumb {
          background: rgba(207, 216, 220, 0.2);
          border-radius: 2px;
          border: none;
        }
        .hover-slider-container > div > div::-webkit-scrollbar-track {
          background: transparent;
          border: none;
        }
        /* إخفاء شريط التمرير في Firefox */
        .hover-slider-container > div > div {
          scrollbar-width: thin;
          scrollbar-color: rgba(207, 216, 220, 0.2) transparent;
        }
        @media (max-width: 1200px) {
          .card-hover { min-width: 300px !important; max-width: 300px !important; min-height: 300px !important; height: 300px !important; flex: 0 0 300px !important;}
          .main-img { height: 300px !important; }
        }
        @media (max-width: 900px) {
          .card-row { width: 100vw !important; }
          .hover-slider-container h3 { margin-left: 0 !important; }
          .hover-slider-container p { margin-left: 0 !important; }
          .hover-slider-container > div > div:first-child { width: 0 !important; }
        }
        @media (max-width: 768px) {
          .card-hover { min-width: 350px !important; max-width: 350px !important; min-height: 350px !important; height: 350px !important; flex: 0 0 350px !important;}
          .main-img { height: 350px !important; }
        }
        @media (max-width: 576px) {
          .card-hover { min-width: 320px !important; max-width: 320px !important; min-height: 320px !important; height: 320px !important; flex: 0 0 320px !important;}
          .main-img { height: 320px !important; }
        }
      `}</style>
    </div>
  );
};

export default HoverCardSlider;
