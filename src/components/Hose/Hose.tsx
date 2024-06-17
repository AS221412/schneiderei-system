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
import "./Hose.css";

export const Hose = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    
  };

  return (
    <div>
      <div className="header">
        <h2>Bitte wählen Sie die Leistung</h2>
      </div>

      <div className="outer-container">
        <div 
         onClick={handleClick} className="HKürzen">
          <img src={HKürzen} />
          <p>Hose kürzen</p>
        </div>
        <div className="HBundEnger">
          <img src={HBundEnger} />
          <p>Bund enger machen</p>
        </div>
        <div className="HReissverschluss">
          <img src={HReissverschluss} />
          <p>Reißverschluss repa.</p>
        </div>
        <div className="HFussWeite">
          <img src={HFussWeite} />
          <p>Fußweite anpassen</p>
        </div>
        <div className="JKürzen">
          <img src={JKürzen} />
          <p>Jeans kürzen</p>
        </div>
        <div className="JBundEnger">
          <img src={JBundEnger} />
        <p>Jeans Bund enger</p>
        </div>
        <div className="JReissverschluss">
          <img src={JReissverschluss} />
          <p>Jeans Reißverschluss r.</p>
        </div>
        <div className="JFussweite">
          <img src={JFussweite} />
          <p>Fußweite anpassen</p>
        </div>
        <div className="KnopfErsetzen">
          <img src={KnopfErsetzen} />
          <p>Knopf ersetzen</p>
        </div>
        <div className="KnopfLochReparieren">
          <img src={KnopfLochReparieren} />
          <p>Knopfloch reparieren</p>
        </div>
        <div className="Gürtelschlaufe">
          <img src={Gürtelschlaufe} />
          <p>Gürtelschlaufe rep.</p>
        </div>
        <div className="Sonstiges">
          <img src={sonstige} />
          <p>sonstiges</p>
        </div>
      </div>
    </div>
  );
};
