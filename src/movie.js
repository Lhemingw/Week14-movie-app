import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Search from './component/Search';
import Results from './components/Results';
import Popup from './movie-app/src/component/Popup.js';
//import Results from './component/Results';

function MovieApp ()  {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
      });
    const URL_ENDPOINT = "http://www.omdbapi.com/?i=tt3896198&apikey=45f74583"; 
    const search = (e) => {
        if (e.key === "Enter") {
          axios(URL_ENDPOINT + "&s=" + state.s).then(({ data }) => {
            let results = data.Search;
    
            setState(prevState => {
              return { ...prevState, results: results }
            })
          });
        }
      }
    
    const handleInput = (e) => {
        let s = e.target.value;
        setState(prevState => {
            return { ...prevState, s: s }
          });
    }

    const openPopup = id => {
        axios(URL_ENDPOINT + "&i=" + id).then(({ data }) => {
          let result = data;
    
          console.log(result);
    
          setState(prevState => {
            return { ...prevState, selected: result }
          });
        });
      }
    
      const closePopup = () => {
        setState(prevState => {
          return { ...prevState, selected: {} }
        });
      }
    
      return (
        <div> 
          <header className="App-header">
            <h1>Movie App</h1>
          </header>
          <main>
        
            <Search handleInput={handleInput} search={search} />
    
            <Results results={state.results} openPopup={openPopup} />
    
            {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
          </main>
        </div>
      );
    }
    export default MovieApp;


    //const[movieData, setMovieData] =  useState({});
    //api_key = '45f74583';
    
    /*fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=45f74583`,{
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.log('Error:', error));
    })*/
    // useEffect(()  => {
    //     axios.get(URL_ENDPOINT)
    //     .then((response) => {
    //         setMovieData(response.data);
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching movie data:', error);
    //     });
    // }, []);
    

/*$.get(URL_ENDPOINT).then(data => { //jquery $ and a get url
    data.map(movie => {// use map function to map out the people, kinda like cards
      $('tbody').append( //append the tbody*/
      



