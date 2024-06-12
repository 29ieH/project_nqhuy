import { addProduct } from "../../services/cart.services"

    addProduct = (id) => {
        console.log("abc")
        const options = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id})
        }
        fetch("/cart/addproduct",options).catch(err => {
            console.log(err)
        })
    }