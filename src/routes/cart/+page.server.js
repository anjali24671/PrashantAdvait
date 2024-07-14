import connect from "$lib/database/connection";
import Carts from "$lib/database/Carts";

export async function load() {
    try {
        await connect()
        const cartsResponse = await Carts.find()
        const carts = await JSON.stringify(cartsResponse)
     
        return {
            carts
        }
        
    } catch (err) {
        console.log(err)
        }
}