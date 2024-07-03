


export async function load({fetch}) {
    // load all the books
    const eBookRes = await fetch("/api/eBooks")
    const eBooks = await eBookRes.json()

    return {
        eBooks
    }

}