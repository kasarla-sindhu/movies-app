import './index.css'
import { Component } from 'react'
import MovieCard from '../MovieCard'

import initialData from '../../data.json'

let languages=[]

  const filteringLanguages=initialData.map((eachMovie)=> eachMovie.movielanguages.map((eachL)=> {
    if (languages.includes(eachL)){
        return null
    }
    else{
        languages.push(eachL)
    }
    return eachMovie
}))
console.log(filteringLanguages)

let countries=[]

  const filteringcountries=initialData.map((eachMovie)=> eachMovie.moviecountries.map((eachL)=> {
    if (countries.includes(eachL)){
        return null
    }
    else{
        countries.push(eachL)
    }
    return eachMovie
}))
console.log(filteringcountries)

class Home extends Component{
    state={languageSelected:'',countrySelected:'',data:initialData}

    filterbasedOnLanguage=()=>{
        const {languageSelected}=this.state
        const languageData=initialData.filter((eachMovie)=> eachMovie.movielanguages.includes(languageSelected))
        this.setState({data:languageData})
    }

    filterbasedOnCountry=()=>{
        const {countrySelected}=this.state
        const countryData=initialData.filter((eachMovie)=> eachMovie.moviecountries.includes(countrySelected))
        this.setState({data:countryData})     
    }

    changeLanguage=(e)=>{
        this.setState({languageSelected:e.target.value},this.filterbasedOnLanguage)
    }

    changeCountry=(e)=>{
        this.setState({countrySelected:e.target.value},this.filterbasedOnCountry)
    }

    getmovies=()=>{
        this.setState({data:initialData})
    }

    render(){
        const {data}=this.state
        
        return (
            <div className='main-container'>
                <div className='header-con'>
                    <div className='logo-con' onClick={this.getmovies} >
                        <img src="https://png.pngtree.com/element_our/png/20181227/movie-icon-which-is-designed-for-all-application-purpose-new-png_287896.jpg" alt="movie-logo" className='logo'/>
                        <h1 className='heading'>Movies</h1>
                    </div>
                    <div className='drop-down-container'>
                        <select className='dropdown-styling' onChange={this.changeLanguage}>
                            <option value=""> Language</option>
                            {languages.map((each)=> <option key={each} value={each}>{each}</option>)}
                        </select>
                        <select className='dropdown-styling' onChange={this.changeCountry}>
                            <option value=''> Country</option>
                            {countries.map((each)=> <option key={each} value={each}>{each}</option>)}
                        </select>
                    </div>
                </div>
                <ul className='movies-container'>
                    {data.map((eachmovie)=> <MovieCard details={eachmovie} key={eachmovie.imdbmovieid}/>)}
                </ul>
            </div>
        )
    }
}

export default Home