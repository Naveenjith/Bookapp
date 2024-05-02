// import React, { useState } from 'react';
// import axios from 'axios';

// const BookDetails = () => {
//   const [book, setBook] = useState(null);
//   const [query, setQuery] = useState('');

//   const fetchBookDetails = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDiTXGlSTkhovy5qxbBVumfBql5DhJf-o8`
//       );
//       setBook(response.data.items[0]); // Assuming you want details of the first book
//     } catch (error) {
//       console.error('Error fetching book details:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter a book title"
//       />
//       <button onClick={fetchBookDetails}>Search</button>
//       {book && (
//         <div>
//           <h2>{book.volumeInfo.title}</h2>
//           <p>{book.volumeInfo.authors.join(', ')}</p>
//           <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
//           <p>{book.volumeInfo.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookDetails;
