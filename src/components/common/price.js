
export const getDiscountPrice = ({ pOffer, pPrice }) => {
    const i = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format((pPrice * (100 - pOffer)) / 100)
    return i;
};

export const getPrice = (pPrice) => {
    const i = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(pPrice)
    return i;
};

