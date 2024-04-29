import './index.css'

const MovieCard=(props)=>{
    const {details}=props
    const {movietitle,imdbmovieid,moviemainphotos,moviegenres}=details
    return (
        <li className='card-container'>
            <img src={moviemainphotos} alt="movie-img" className='movie-image'/>
            <h1 className='movie-name'>{movietitle}</h1>
            <div className='genre-con'>
            <ul className='genre-list'>
                {moviegenres.map((eachgenre)=> <li className='genre' key={eachgenre}>{eachgenre}</li>)}
            </ul>
            </div>
            <div className='link-styling'>
            <a rel="noreferrer" href={`https://www.imdb.com/title/${imdbmovieid}/`} target='_blank'>watch trailer</a>
            </div>
        </li>
    )
}

export default MovieCard