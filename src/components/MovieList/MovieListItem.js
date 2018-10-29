import React, { Component } from 'react'
import {Image} from '../Proxies'
const MovieListItem = props =>{
  
  const onClickMovieItem = e => props.onClick()

  const onKeyDownMovieList = e =>{
    /*
      firstelementChild is always the searchField.
      If theres no nextSibling or previousSibling, we focus the first element, which is the searchField
    */
    const {firstElementChild} = e.target.parentElement.parentElement.previousSibling
    const next = e.target.nextSibling || firstElementChild
    const prev = e.target.previousSibling || firstElementChild

    if(e.which === 40 || e.which === 39) next.focus()
    if(e.which === 38 || e.which === 37) prev.focus()
    if(e.which === 13) onClickMovieItem(e)
  }

  return(
    <div  className="movielist-item-container" tabIndex="0"
      onKeyDown={onKeyDownMovieList}
      onClick={onClickMovieItem}>
      <div>
        <Image className="list-image"
          src={`${STATIC_URL}/${props.logoSrc}`}/>
        </div>
        <div className="movie-item-text">
          <p>{props.title}</p>
          <p>{props.type}</p>
        </div>
      </div>
  )
}

export default MovieListItem