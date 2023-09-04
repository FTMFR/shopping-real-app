export const cardRedcer = (state = { cardItems: [] }, action) => {
    switch (action.type) {
        case 'CARD-ADD-ITEM':
            const item = action.payload;
            const existingItem = state.cardItems.find(i => i.product === item.product)
            if (existingItem) {
                return {
                    ...state,
                    cardItems: state.cardItems.map(i => i.product === existingItem.product ? item : i),
                }
            } else {
                return {
                    ...state,
                    cardItems: [...state.cardItems, item]
                }
            }
        default:
            return state
    }
}