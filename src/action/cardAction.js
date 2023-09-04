import axios from "axios";

export const addToCard = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);
    dispatch({
        type: 'CARD-ADD-ITEM',
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
        },
    });
    localStorage.setItem('cardItem' , JSON.stringify(getState().card.cardItems));
};