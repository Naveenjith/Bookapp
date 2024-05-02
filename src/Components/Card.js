// import React from "react";
// const Card=({book})=>{
//     console.log(book)
//     return(
//         <>
//         {
//             book.map((item)=>{
//                 let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
//                 if(thumbnail!= undefined)
//                 {
//                     return(
//                         <>
                        
//                         <div className="card">
//                 <img src={thumbnail} alt=""/>
//                 <div className="bottom">
//                     <h3 className="title">React js</h3>
//                     <p className="amount">&#8377;3299</p>
//                 </div>
//             </div>
//                         </>
//                     )
//                 }
               
//             })
//         }
        
//         </>
//     )
// }
// export default Card




















import React, { useState } from 'react';
import Modal from "./Modal";

const Card = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);

    return (
        <>
            {book.map((item, index) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if (thumbnail !== undefined && amount !== undefined) {
                    return (
                        <div key={index} className="card" onClick={() => { setShow(true); setItem(item) }}>
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount}</p>
                            </div>
                        </div>
                    )
                } else {
                    return null; // If thumbnail or amount is undefined, skip rendering this card
                }
            })}
            <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
        </>
    )
}

export default Card;