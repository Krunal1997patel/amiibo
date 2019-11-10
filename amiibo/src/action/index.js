import axios from 'axios'

export const FETCHING_AMIIBO = 'FETCHING_AMIIBO'
export const FETCHING_AMIIBO_SUCCESS = 'FETCHING_AMIIBO_SUCCESS'
export const FETCHING_AMIIBO_FAILURE = 'FETCHING_AMIIBO_FAILURE'


export const allAmiibo = () => dispatch => {
    dispatch( { type: FETCHING_AMIIBO } )

    axios
    .get(`https://www.amiiboapi.com/api/amiibo`)
    .then(responde => dispatch( { type: FETCHING_AMIIBO_SUCCESS, payload: responde.data.amiibo } ) )
    .catch(err => dispatch( { type: FETCHING_AMIIBO_FAILURE, payload: err.responde } ))
}