export const addToCartRequest = (id: number, updatedQuantity?: number) => {
    fetch('https://virtserver.swaggerhub.com/I425/ReactJS/1.0.0/cart',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                quantity: updatedQuantity ?? 1,
            })
        }
    )
}

export const deleteFromCartRequest = (id: number) => {
    fetch('https://virtserver.swaggerhub.com/I425/ReactJS/1.0.0/cart',
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemId: id,
            })
        }
    )
}

export const updateCartRequest = (id: number, updatedQuantity: number) => {
    fetch(`https://virtserver.swaggerhub.com/I425/ReactJS/1.0.0/cart/${id}`,
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: updatedQuantity,
            })
        }
    )
}