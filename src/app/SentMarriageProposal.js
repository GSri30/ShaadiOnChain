import React, { useEffect, useState } from 'react'
import '../assets/Purchase.css'
import { useHistory } from 'react-router-dom'
import {Certificate, download} from './certificate.js';

function SendMarriageProposal
(props) {
    const { goBack } = useHistory()
    const data =   {
        id:"1",
        imageURL:'/assets/images/wedding-img/marriage-certificate-image.png',
        spouseName: "Kriti Sanon",
        walletAddress: "0x1231231241",
        type: "Female",
        status:"rejected"
    }
    const[vows, setVows] = useState(""); 
    const groom_vows = 'Your vows';
    const bride_vows = data.status=="accepted"? "Their Vows" : ""

    const handleVowsChange = (e) => {
        setVows(e.target.value);
    };

    return(
            <div className='purchase'>
                <div className="goback">    
                   <img src="/assets/images/wedding-img/icon/next.png" onClick={goBack} alt="Go back" className='gobackButton'/>
                </div> 
                <br/><br/><br/>
                <div className="purchase__artwork">
                    {/* <img style={{width:"30vw"}}src={data.imageURL} alt="couple photo" /> */}
                    <Certificate style={{width:"35vw"}} width='700' height='500' groom_name='G Sri Harsha' bride_name='Sri Harsha G' groom_vows={groom_vows} bride_vows={bride_vows} is_proposal='false'/>
                    <br/>
                    <button className="btn btn-primary" onClick={() => {download();} }><i className="mdi mdi-file-check btn-icon-prepend"></i>Download</button>
                </div>

                <div className="purchase__details">
                    {/* <h1>#{data.tokenID} {data.name}</h1> */}
                    <h3 style={{height:"75px"}}>Name: {data.spouseName}</h3>
                    <h4>Wallet Address: {data.walletAddress}</h4>
                    <h4>Gender: {data.type}</h4>
                    <label htmlFor="exampleTextarea1">Your Vows:</label>
                    <textarea style={{color:"white"}} className="form-control" id="vows" rows="4" value={groom_vows}></textarea>
                    <br/>  
                    {data.status == "accepted" && 
                    <div>
                    <button type="button" className="btn btn-lg btn-success mt-4">Accepted</button>
                    <br/>
                    <label className="mt-4" htmlFor="exampleTextarea1">Their Vows:</label>
                    <textarea style={{color:"white"}}className="form-control" id="exampleTextarea1" rows="4" value="Their vows"></textarea>
                    </div>
                    }
                    {data.status == "rejected" && <button type="button" className="btn btn-lg btn-danger mt-4">Rejected</button>}
                    {data.status == "waiting" && <button type="button" className="btn btn-lg btn-warning">Waiting</button>}
                    
                </div>
            </div> 
    )
}

export default SendMarriageProposal
