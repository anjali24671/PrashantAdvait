export async function load({ params, fetch }) {
    let { price } = params
    
    // get the book with price = price
    const ebooksRes = await fetch(`/api/eBooks?price=${price}`)
    const ebooks = await ebooksRes.json()

    const booksRes = await fetch(`/api/books?price=${price}`)
    const books = await booksRes.json()
    

    return {
        ebooks,
        books
    }
}