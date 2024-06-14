import React from "react";
import { useNavigate } from "react-router-dom";
import HKürzen from "../../assets/HoseBilder/h_kürzen.png";
import HBundEnger from "../../assets/HoseBilder/h_bundenger.png";
import HReissverschluss from "../../assets/HoseBilder/h_reissverschluss.png";
import HFussWeite from "../../assets/HoseBilder/h_fussweite.png";
import JKürzen from "../../assets/HoseBilder/j_kürzen.png";
import JBundEnger from "../../assets/HoseBilder/j_bundenger.png";
import JReissverschluss from "../../assets/HoseBilder/j_reissverschluss.png";
import JFussweite from "../../assets/HoseBilder/j_fussweiteEnger.png";
import KnopfErsetzen from "../../assets/HoseBilder/KnopfErsetzen.png";
import KnopfLochReparieren from "../../assets/HoseBilder/KnopflochReparieren.png";
import Gürtelschlaufe from "../../assets/HoseBilder/GürtelSchlaufe.png";
import sonstige from "../../assets/mainBilder/sonstige.png"
import "./Auftrag.css";

export const Hose = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    
  };

  return (
    <div>
      <div className="header">
        <h2>Bitte wählen Sie Ihren Artikel</h2>
      </div>

      <div className="outer-container">
        <div onClick={handleClick} className="HKürzen">
          <img src={HKürzen} />
        </div>
        <div className="HBundEnger">
          <img src={HBundEnger} />
        </div>
        <div className="HReissverschluss">
          <img src={HReissverschluss} />
        </div>
        <div className="HFussWeite">
          <img src={HFussWeite} />
        </div>
        <div className="JKürzen">
          <img src={JKürzen} />
        </div>
        <div className="JBundEnger">
          <img src={JBundEnger} />
        </div>
        <div className="JReissverschluss">
          <img src={JReissverschluss} />
        </div>
        <div className="JFussweite">
          <img src={JFussweite} />
        </div>
        <div className="KnopfErsetzen">
          <img src={KnopfErsetzen} />
        </div>
        <div className="KnopfLochReparieren">
          <img src={KnopfLochReparieren} />
        </div>
        <div className="Gürtelschlaufe">
          <img src={Gürtelschlaufe} />
        </div>
        <div className="Sonstiges">
          <img src={sonstige} />
        </div>
      </div>
    </div>
  );
};
