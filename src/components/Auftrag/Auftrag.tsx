import Hose from "../../assets/mainBilder/Hose.png"
import Shirt from "../../assets/mainBilder/Shirt.png"
import Hemd from "../../assets/mainBilder/Hemd.png"
import Kleid from "../../assets/mainBilder/Kleid.png"
import Rock from "../../assets/mainBilder/Rock.png"
import Anzug from "../../assets/mainBilder/Anzug.png"
import Jacke from "../../assets/mainBilder/Jacke.png"  // Überprüfe Groß-/Kleinschreibung
import Mantel from "../../assets/mainBilder/Mantel.png"
import Gardinen from "../../assets/mainBilder/Gardine.png"  // Überprüfe Verzeichnis und Schreibweise
import Kissen from "../../assets/mainBilder/Kissen.png"
import Weste from "../../assets/mainBilder/Weste.png"  // Überprüfe Verzeichnis und Schreibweise
import Pullover from "../../assets/mainBilder/Pullover.png"  // Überprüfe Groß-/Kleinschreibung
import Tasche from "../../assets/mainBilder/Tasche.png"
import sonstige from "../../assets/mainBilder/sonstige.png"
import "./Auftrag.css"
import { useNavigate } from "react-router-dom"
 


export const Auftrag = () => {
const navigate = useNavigate();


   const HosehandleClick = () => {
    return navigate("/Hose");
   } 

   const TShirthandleClick = () => {
    return navigate("/TShirt");
   } 

   const HemdhandleClick = () => {
    return navigate("/Hemd");
   } 


   const KleidhandleClick = () => {
    return navigate("/Kleid");
   } 

   const RockhandleClick = () => {
    return navigate("/Rock");
   } 

   const AnzugHandleClick = () => {
    return navigate("/Anzug");
   } 
   
return (
     <div>
        <div className="header">
            <h2>Bitte wählen Sie Ihren Artikel</h2>
        </div>


        <div className="outer-container">
            <div onClick={HosehandleClick} className="Hose">
                <img src={Hose}  />
            </div>
            <div onClick={TShirthandleClick} className="Shirt">
                <img src={Shirt}  />
            </div>
            <div onClick={HemdhandleClick} className="Hemd">
                <img src={Hemd}  />
            </div>
            <div onClick={KleidhandleClick}  className="Kleid">
                <img src={Kleid}  />
            </div>
            <div onClick={RockhandleClick}  className="Rock">
                <img src={Rock}  />
            </div>
            <div onClick={AnzugHandleClick} className="Anzug">
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