import { useState } from "react";

export default function useHandleWishList(product, onWishlistChange) {
    const [isInWishList, setIsInWishList] = useState(() => {
        const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
        return wishList.some(item => item.id === product?.id);
    });

    function handleWishList() {
        if (!product) return;

        let wishList = JSON.parse(localStorage.getItem("wishList")) || [];
        const isExist = wishList.some(item => item.id === product.id);

        if (isExist) {
            wishList = wishList.filter(item => item.id !== product.id);
            setIsInWishList(false);
        } else {
            wishList.push(product);
            setIsInWishList(true);
        }

        localStorage.setItem("wishList", JSON.stringify(wishList));
        onWishlistChange ? onWishlistChange() : "";
    }

    return {
        handleWishList,
        isInWishList,
    };
}