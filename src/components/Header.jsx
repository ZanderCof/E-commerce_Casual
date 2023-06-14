import React, {useState} from "react";
import Casual_Header from "../media/Casual_header.png";
import { Link } from 'react-router-dom';
import img_header_1 from "../media/img_header_1.jpg";
import img_header_2 from "../media/img_header_2.jpg";
function Header (props){
    return(
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <img id="headerImgTop" src={Casual_Header} alt="Casual Header" className="img-fluid"/>
                    </div>
                </div>   
            </div>
            <div className="container-fluid">
                <div className="row mt-5" id="visionBox">
                    <div className="col-6 mt-5" id="vision">
                        <h1 className="ps-5">ABOUT <br/> CASUAL</h1>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                            <h3 className="ps-5 descStyle">
                            Crea il tuo <strong>personal brend </strong> di moda <br/>
                            Pubblica e vendi le tue creazioni <br/>
                            <strong>Guadagna </strong>casual points e scala la classifica per diventare il più grande brand di moda del mondo
                            </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-end">                       
                                <Link to="/registrati" className="nav-link navBtn button-48" >
                                    REGISTRATI
                                </Link>
                            </div>
                        </div>
                    </div>
                        <div className="col-6 col-6 d-flex justify-content-end align-items-center " >
                            <img src={img_header_1} className="headerImgVision mt-5 me-5 img-fluid" id="img1"  alt="Casual Header" />
                        </div>
                        <div className="row">
                            <div className="col-6" id="visionHeader">
                            </div>
                            <div className="col-6 ">
                                {/* <img src={img_header_2} className="headerImgVision" alt="Casual Header" /> */}
                            </div>
                        </div>
                </div>
            </div>
            
        </header>
  );
}
export default Header;