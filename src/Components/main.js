// import React, { useState }  from "react";
// import Card from "./Card";
// import axios from "axios";
// const Main=()=>{
//     const [search,setSearch]=useState("");
//     const [bookData,setData]=useState([]);
//     const searchBook=(evt)=>{
//         if(evt.key==='Enter'){
//             axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDiTXGlSTkhovy5qxbBVumfBql5DhJf-o8'+'&maxResults=40')
//             .then(res=>setData(res.data.items))
//             .catch(err=>console.log(err))
//         }
//     }
//     return(
//         <>
//         <div className="header">
//             <div className="row1">
//                 <h1>A room without book is like<br/>a body without a soul</h1>
//             </div>
//             <div className="row2">
//                 <h2>find your books</h2>
//             <div className="search">
//                 <input type="text" placeholder="enter your book name"
//                 value={search} onChange={e=>setSearch(e.target.value)}
//                 onKeyPress={searchBook}/>
//                 <button>search</button>
//             </div>
//                 <img src="bg2.jpeg" alt=""/>
//             </div>
//         </div>

//         <div className="container">
//            {
//             <Card book={bookData}/>
//            }
//         </div>
//         </>
//     )
// }
// export default Main

import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = (evt) => {
        if (evt.key === 'Enter' || evt.type === 'click') {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDiTXGlSTkhovy5qxbBVumfBql5DhJf-o8'+'&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without book is like<br />a body without a soul</h1>
                </div>
                <div className="row2">
                    <h2>FIND YOUR BOOKS</h2>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="enter your book name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                        <button onClick={searchBook}>search</button>
                    </div>
                    <img src="bg2.jpeg" alt="" />
                </div>
            </div>

            <div className="container">
                {bookData.length > 0 && <Card book={bookData} />}
            </div>
        </>
    )
}

export default Main;
