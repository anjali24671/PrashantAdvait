


export async function load({fetch}) {
    // load all the books
    const eBookRes = await fetch("/api/eBooks")
    const eBooks = await eBookRes.json()

    const bookRes = await fetch("/api/books")
    const books = await bookRes.json()


    for (let e of eBooks) {
        for (let b of books) {
            if (e.name === b.name) {
                e.bookPrice = b.price 
                console.log(e)
            }
        }
    }

    

    return {
        eBooks
    }
}