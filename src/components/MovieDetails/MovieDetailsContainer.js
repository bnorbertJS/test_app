import React, { Component, Fragment} from 'react'
import {Section, Video, Image} from '../Proxies'

class MovieDetailsContainer extends Component {
    constructor(props) {
        super(props)
       
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this)
    }

    componentDidMount(){
      //scroll-top. react-router needs us to scroll to the top manually
      window.scrollTo(0, 0)

      //set focus on container
      const container = document.getElementById("details-container")
      container.focus()

      //put movie id to store if its undefined
      if(!this.props.movieClicked.id){
        this.props.ClickMovie(this.props.match.params.id)
      }
    }

    onKeyDownHandler(e){
      const firstElementChild = document.getElementById("details-container")
      const next = e.target.nextSibling || e.target.children[0].children[0] || e.target.children[0]
      const prev = e.target.previousSibling || firstElementChild

      if(e.which === 40) next.focus()
      if(e.which === 38) prev.focus()
    }
    
    render() {
      const {movieDetails} = this.props.movies

      return (
        <div id="details-container" tabIndex="0" onKeyDown={this.onKeyDownHandler}>
        {
            movieDetails &&
            <div>
              <Image className="detail-content"
                src={`${STATIC_URL}/${movieDetails.imageSrc}`}/>
              <Section id="title" title={movieDetails.title} />
              <Section title="Description" text={movieDetails.description}/>
              <Section title="IMDB" text={movieDetails.rating}/>
              <Section title="Genres" text={movieDetails.genre}/>
              <Section title="Movie length" text={movieDetails.length}/>
              <Section title="Release date" text={movieDetails.releaseDate}/>
              <Video 
                style={{width: 80 + "%", maxHeight: 30 + "em", marginRight: 10 + "%", marginLeft: 10 + "%"}}
                tabIndex="0" src={movieDetails.videoSrc} />
            </div>
          }
          </div>
      )
  }
}



export default MovieDetailsContainer