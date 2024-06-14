import Hose from "../../assets/Hose.png"
import Shirt from "../../assets/Shirt.png"
import Hemd from "../../assets/Hemd.png"
import Kleid from "../../assets/Kleid.png"
import Rock from "../../assets/Rock.png"
import Anzug from "../../assets/Anzug.png"
import Jacke from "../../assets/Jacke.png"
import Mantel from "../../assets/Mantel.png"
import Gardinen from "../../assets/Gardine.png"
import Kissen from "../../assets/Kissen.png"
import Weste from "../../assets/Weste.png"
import Pullover from "../../assets/Pullover.png"
import Tasche from "../../assets/Tasche.png"
import sonstige from "../../assets/sonstige.png"
import  "../Auftrag/Auftrag.css"
import { useNavigate } from "react-router-dom"
 


export const Auftrag = () => {
const navigate = useNavigate();
const Shirtnavigate = useNavigate();
const Hemdnavigate = useNavigate();
const Kleidnavigate = useNavigate();
const Rocknavigate = useNavigate();
const Anzugnavigate = useNavigate();

   const HosehandleClick = () => {
    return navigate("/Hose");
   } 

   const TShirthandleClick = () => {
    return Shirtnavigate("/TShirt");
   } 

   const HemdhandleClick = () => {
    return Hemdnavigate("/Hemd");
   } 


   const KleidhandleClick = () => {
    return Kleidnavigate("/Kleid");
   } 

   const RockhandleClick = () => {
    return Rocknavigate("/Rock");
   } 

   const AnzugHandleClick = () => {
    return Anzugnavigate("/Anzug");
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