const ClickMovie = (id) => dispatch =>{
    dispatch({
        type: "MOVIE_ITEM_CLICKED",
        payload: id
    })
}
export default ClickMovie