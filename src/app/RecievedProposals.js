import React , { useState, useEffect} from 'react'
import Card from './card'
import  '../assets/Market.css'
import { useHistory } from 'react-router-dom'
import { web3, loadAccount, getUser, getAllEngagementProposals } from "./services/web3";
import { getImageFromTokenId } from "./services/utility";

  const MarriageData = [
    {
        tokenID:"1",
        name: "Kriti",
        vows: "Vows",
        type:"Female"
    },
    {
        tokenID:"2",
        name: "Shraddha",
        vows: "Vows",
        type:"Female"
    },
    {
        tokenID:"3",
        name: "Alia",
        vows: "Vows",
        type:"Female"
    },
    {
        tokenID:"4",
        name: "Katrina",
        vows: "Vows",
        type:"Female"
    },
    {
        tokenID:"5",
        name: "Disha",
        vows: "Vows",
        type:"Female"
    },
  
  ]


function Market() {

    const { push } = useHistory()


    const [engageProposals, setEngageProposals] = useState([]);

    useEffect(() => {
        const fetchEngageProposals = async () => {
            const myAddress = await loadAccount();
            const engagementProposals = await getAllEngagementProposals();
            engagementProposals.forEach(async function(proposal, index, object) {
                if (proposal.proposer === myAddress) {
                    return;
                }
                const user = await getUser(proposal.proposer);
                const image = await getImageFromTokenId(proposal.proposerRingTokenId);
    
                const engageProposal = {
                    name: user.name,
                    proposalId: proposal.id,
                    image: image,
                    note: proposal.proposerNote,
                    status: proposal.status,
                }
                setEngageProposals((arr) => [...arr, engageProposal]);
              });
        };
        fetchEngageProposals();
    },[])
    

    return (
        <div>

        <h2>Engagement Proposals</h2>
        <div className='market'> 
                {engageProposals.map((proposal) => (
                    <div className='card' onClick={() => push('/accept-engagement-proposal/' + proposal.proposalId)} >
                        <img src={proposal.image} alt="Ring NFT" />
                        <div className="card__info">
                            <h2>{proposal.name}</h2>
                            <h4>{proposal.note.length >= 100 ? proposal.note.substring(0, 100) + '...' : proposal.note}</h4>
                        </div>
                        <div className='card__infoValueParent'>
                            <div className="card__infoValue">
                                {proposal.status === "0" && <button type="button" className="btn btn-warning">Waiting</button>}
                                {proposal.status === "1" && <button type="button" className="btn btn-success">Accepted</button>}
                                {proposal.status === "2" && <button type="button" className="btn btn-danger">Rejected</button>}
                            </div>
                        </div>
                    </div>
                ))
                }
        </div>

        <h2>Marriage Proposals</h2>

        <div className='market'> 
                {MarriageData.map((data) => (
                            <div className='card' onClick={() => push('/accept-marriage-proposal/' + data.tokenID)}>
                            {/* <img src={"https://ipfs.io/ipfs/" + src.slice(7)} alt="nft artwork" /> */}
                            <img src='/assets/images/certificate.jpeg' alt="nft artwork" />
                            <div className="card__info">
                                <h2>{data.name}</h2>
                                <h4>{data.vows.length >= 100 ? data.vows.substring(0, 100) + '...' : data.vows}</h4>
                                <h4>{data.type}</h4>
                            </div>
                        </div>
                ))
                }
        </div>
        </div>
    )
}

export default Market
