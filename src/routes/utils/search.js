
async function search(query, type) {

    if (type === 'book') {

        try {
            // make an api request to the ebook table
            const response = await fetch(`https://prashant-advait.vercel.app/api/eBooks?query=${query}`)
            const book = await response.json()

        
            return book
            
        }catch (err) {
            console.log(err)
        }
       
    }
    else if (type == 'video_series') {
        try {
            // make an api request to the video series table
            const response = await fetch(`https://prashant-advait.vercel.app/api/videoSeries?query=${query}`)
            const videoSeries = await response.json()
           
            return videoSeries
            
        }catch (err) {
            console.log(err)
        }
    }

}

export default search
