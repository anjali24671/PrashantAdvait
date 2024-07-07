
async function search(query, type) {

    if (type === 'book') {

        try {
            // make an api request to the ebook table
            const response = await fetch(`http://localhost:5173/api/eBooks?query=${query}`)
            const book = await response.json()
           
            return book
            
        }catch (err) {
            console.log(err)
        }
       
    }

}

export default search