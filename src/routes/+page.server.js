import connect from "$lib/database/connection";
import ArticleCategories from "$lib/database/ArticleCategories";
import PodcastVideos from "$lib/database/PodcastVideos";
import Gallery from "$lib/database/Gallery";
import LiveSessions from "$lib/database/LiveSessions";
import PrintMedia from "$lib/database/PrintMedia";
import Books from "$lib/database/Books";


async function loadBooks() {
    try {

        await connect()
        const books = await Books.find().limit(6)
        let bookURL = []
        
        for (let book of books) {
            bookURL.push(book.photoURL)
        }
        
        return new Response(JSON.stringify(bookURL), {
            headers: { 'Content-Type': 'application/json' },
        });
        
    } catch (err)  {
        return new Response(JSON.stringify({ status: 401, message: err.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


async function loadIncomingSession() {
    try {
        await connect()
        let gitaIncoming = await LiveSessions.find({name:"Gita Samagam"}).sort({ date: -1 }).limit(1)
        let vedantIncoming = await LiveSessions.find({ name: "vedant samhita" }).sort({ date: -1 }).limit(1)
        const today = new Date()
        if (gitaIncoming[0].date > today) {
            gitaIncoming[0]['noDate'] = "Date will be announced soon"
        } 

        if (vedantIncoming[0].date < today) {
            vedantIncoming[0]['noDate'] = "Date will be announced soon"
        } 

     
        return new Response(JSON.stringify({gitaIncoming, vedantIncoming}), {
            headers: { 'Content-Type': 'application/json' },
        });


    } catch (err)  {
        return new Response(JSON.stringify({ status: 401, message: err.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

async function loadArticleCategories() {
    await connect();
    try {
        // Get the beginner, intermediate, and advanced article categories
        const beg_categories = await ArticleCategories.find({ level_of_difficulty: "beginner" }).select("name").limit(8).exec();
        const inter_categories = await ArticleCategories.find({ level_of_difficulty: "intermediate" }).select("name").limit(2).exec();
        const adv_categories = await ArticleCategories.find({ level_of_difficulty: "advanced" }).select("name").limit(9).exec();

        // Serialize and return the response
        return new Response(JSON.stringify({ beg_categories, inter_categories, adv_categories }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (e) {
        // Handle errors and return serialized error response
        return new Response(JSON.stringify({ status: 401, message: e.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

async function loadPodcastVideos() {
    await connect();
    try {
        // Get podcast videos
        const podcast_videos = await PodcastVideos.find().limit(10).exec();

        // Serialize and return the response
        return new Response(JSON.stringify(podcast_videos), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (e) {
        // Handle errors and return serialized error response
        return new Response(JSON.stringify({ status: 401, message: e.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

async function loadGallery() {
    await connect()

    try {
        const gallery_image_reponse = await Gallery.find().limit(20)
        const gallery_image = JSON.stringify(gallery_image_reponse)

        return new Response(gallery_image, {
            headers: { 'Content-Type': 'application/json' },
        });
        
    } catch (e) {
        return new Response(JSON.stringify({ status: 401, message: e.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

async function loadPrintMedia() {
    await connect()

    try {
        const print_media_response = await PrintMedia.find().limit(10)
        const print_media = JSON.stringify(print_media_response)

        return new Response(print_media, {
            headers: { 'Content-Type': 'application/json' },
        });
        
    } catch (e) {
        return new Response(JSON.stringify({ status: 401, message: e.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


export async function load() {
    const articleCategoriesResponse = await loadArticleCategories();
    const podcastVideosResponse = await loadPodcastVideos();
    const galleryImageResponse = await loadGallery();
    const printMediaResponse = await loadPrintMedia();
    const incomingSessionResponse = await loadIncomingSession();
    const bookURLResponse = await loadBooks()

    // Check if responses are OK
    if (!podcastVideosResponse.ok) return "Error with podcast videos";
    if (!articleCategoriesResponse.ok) return "Error with articles categories";
    if (!galleryImageResponse.ok) return "Error with articles categories";
    if (!printMediaResponse.ok) return "Error with print media categories";
    if (!incomingSessionResponse.ok) return "Error with live sessions fetching";
    if (!bookURLResponse.ok) return "Error with loading book image urls"
    
    // Parse JSON response data
    const articleCategories = await articleCategoriesResponse.json();
    const podcastVideos = await podcastVideosResponse.json();
    const galleryImage = await galleryImageResponse.json()
    const printMedia = await printMediaResponse.json()
    const incomingSessions = await incomingSessionResponse.json()
    const bookURL = await bookURLResponse.json()

    
    // Return serialized data
    return {
        articleCategories,
        podcastVideos,
        galleryImage,
        printMedia,
     
        incomingSessions,
        bookURL
    };
}
