import React , {useEffect} from 'react'
import  '../assets/Market.css'
import  '../assets/Purchase.css'
import { useHistory } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const LetterData = [
    {
        tokenID:"1",
        name: "Kriti",
        note: "Note of love",
        type:"Female"
    },
    {
        tokenID:"2",
        name: "Shraddha",
        note: "Note of love",
        type:"Female"
    },
    {
        tokenID:"3",
        name: "Alia",
        note: "Note of love",
        type:"Female"
    },
    {
        tokenID:"4",
        name: "Katrina",
        note: "Note of love",
        type:"Female"
    },
    {
        tokenID:"5",
        name: "Disha",
        note: "Note of love",
        type:"Female"
    },
  
  ]


function LoveLetters() {
    const { push } = useHistory()
    return (
        <Tabs defaultActiveKey="Your Love Letters" id="uncontrolled-tab-example" className="mb-3">
            <Tab
                eventKey="Your Love Letters"
                title="Your Love Letters"
                tabClassName='text-warning'
                responsive
            >
                <div className='market'> 
                    {LetterData.map((letter) => (
                        <div className="card" style={{margin:"10px",cursor:"pointer"}} onClick={() => push('/love-letter/' + letter.tokenID)}>
                            <div className="card-body">
                                <div className="item">
                                    <img style={{width:"100%"}}src='/assets/images/wedding-img/marriage-certificate-image.png' alt="carousel-item" />
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </Tab>
            <Tab
                eventKey="Received Love Letters"
                title="Received Love Letters"
                tabClassName='text-warning'
                responsive
            >
                <div className='market'> 
                    {LetterData.map((letter) => (
                        <div className="card" style={{margin:"10px",cursor:"pointer"}} onClick={() => push('/read-love-letter/' + letter.tokenID)}>
                            <div className="card-body">
                                <div className="item">
                                    <img style={{width:"100%"}}src='/assets/images/wedding-img/marriage-certificate-image.png' alt="carousel-item" />
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </Tab>
            <Tab
                eventKey="Claim Love Letter NFT"
                title="Claim Love Letter NFT"
                tabClassName='text-warning'
                responsive
            >
                
            </Tab>            
        </Tabs>
        /* <div>
            <div className="purchase__detailsBuy">
                <button >Claim Love Letter NFT</button>
            </div>
        <h2 className='mt-3'>Your Love Letters</h2>
        <div className='market'> 
                {LetterData.map((letter) => (
                     <div className="card" style={{margin:"10px",cursor:"pointer"}} onClick={() => push('/love-letter/' + letter.tokenID)}>
                        <div className="card-body">
                            <div className="item">
                                <img style={{width:"100%"}}src='/assets/images/wedding-img/marriage-certificate-image.png' alt="carousel-item" />
                            </div>
                        </div>
                    </div>
                ))
                }
        </div>
        <h2 className='mt-3'>Recieved Love Letters</h2>
        <div className='market'> 
                {LetterData.map((letter) => (
                     <div className="card" style={{margin:"10px",cursor:"pointer"}} onClick={() => push('/read-love-letter/' + letter.tokenID)}>
                        <div className="card-body">
                            <div className="item">
                                <img style={{width:"100%"}}src='/assets/images/wedding-img/marriage-certificate-image.png' alt="carousel-item" />
                            </div>
                        </div>
                    </div>
                ))
                }
        </div>
        </div> */
    );
}

export default LoveLetters
