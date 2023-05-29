export const generateNextId = (item) => {
    const maxId = item.reduce((maxId, item) => Math.max(item.id, maxId), -1);
    return maxId + 1;
};


export const calculateTotalPrice = (cartItems) => {
    let total = 0;
    cartItems.forEach(item => {
        total += item.totalPrice;
    });

    return total;
}


export const calculateTotalCartItem = (cartItems) => {
    let totalCartItem = 0;
    cartItems.forEach(item => {
        totalCartItem += item.quantity;
    });

    return totalCartItem;
}