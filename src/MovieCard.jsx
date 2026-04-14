function MovieCard({ poster, title, year, rating }) {
     return (
       <div style={{ width: "250px", border: "1px solid #ccc", borderRadius: "8px" }}>
         <img src={poster} alt={title} style={{ width: "100%" }} />
         <div style={{ padding: "10px" }}>
           <h3>{title}</h3>
           <p>Year: {year}</p>
           <p>Rating: ⭐ {rating}</p>

         </div>
       </div>
     );
      //Task submission
   }
   export default MovieCard;