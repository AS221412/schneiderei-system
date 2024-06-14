import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hose from "../../assets/mainBilder/Hose.png";
import Anzug from "../../assets/mainBilder/Anzug.png";
import Gardinen from "../../assets/mainBilder/Gardine.png";
import Hemd from "../../assets/mainBilder/Hemd.png";
import Jacke from "../../assets/mainBilder/Jacke.png";
import Kissen from "../../assets/mainBilder/Kissen.png";
import Kleid from "../../assets/mainBilder/Kleid.png";
import Mantel from "../../assets/mainBilder/Mantel.png";
import Pullover from "../../assets/mainBilder/Pullover.png";
import Rock from "../../assets/mainBilder/Rock.png";
import Shirt from "../../assets/mainBilder/Shirt.png";
import sonstige from "../../assets/mainBilder/sonstige.png";
import Tasche from "../../assets/mainBilder/Tasche.png";
import Weste from "../../assets/mainBilder/Weste.png";
import "./Auftrag.css";

 


export const Auftrag = () => {
const navigate = useNavigate();

   const handleClick = () => {
    return navigate("/Hose");
   } 

return (
     <div>
        <div className="header">
            <h2>Bitte wählen Sie Ihren Artikel</h2>
        </div>


        <div className="outer-container">
            <div onClick={handleClick} className="Hose">
                <img src={Hose}  />
            </div>
            <div className="Shirt">
                <img src={Shirt}  />
            </div>
            <div className="Hemd">
                <img src={Hemd}  />
            </div>
            <div className="Kleid">
                <img src={Kleid}  />
            </div>
            <div className="Rock">
                <img src={Rock}  />
            </div>
            <div className="Anzug">
                <img src={Anzug}  />
            </div>
            <div className="Jacke">
                <img src={Jacke}  />
            </div>
            <div className="Mantel">
                <img src={Mantel}  />
            </div>
            <div className="Gardinen">
                <img src={Gardinen}  />
            </div>
            <div className="Kissen">
                <img src={Kissen}  />
            </div>
            <div className="Weste">
                <img src={Weste}  />
            </div>
            <div className="Pullover">
                <img src={Pullover}  />
            </div>
            <div className="Tasche">
                <img src={Tasche}  />
            </div>
            <div className="Sonstiges">
                <img src={sonstige}  />
            </div>
        </div>


     </div>
    );
};