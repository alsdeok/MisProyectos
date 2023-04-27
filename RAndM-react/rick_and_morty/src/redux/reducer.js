import {types, addFav, removeFav} from "./actions";

const initialState = {
    myFavourites: []
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case types.ADD_FAV:
            return {
                ...state,
                myFavourites: [...state.myFavourites, action.payload]
               
            }
        case types.REMOVE_FAV:
            return {
                ...state, 
                myFavourites: state.myFavourites.filter((character) => {return character.id !== Number(action.payload);})
              
            }
        default:
            return {...state};
    }
}