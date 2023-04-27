export const types = {
    ADD_FAV: "ADD_FAV",
    REMOVE_FAV: "REMOVE_FAV"
}

export const addFav = (character) => {
    return {
        type: types.ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: types.REMOVE_FAV,
        payload: id
    }
}
