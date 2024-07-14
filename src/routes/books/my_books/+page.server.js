import { get } from 'svelte/store'; // Assuming you use stores to manage state

export async function load({ fetch, url}) {
    const userfront_id = url.searchParams.get("user"); // Assuming userfront_id is part of the route params

    try {
        // Make GET request to external API
        const response = await fetch(`/api/users?userfront_id=a7dd8a3c-f263-49eb-8c41-b8d30158ff05`);

        if (!response.ok) {
            // Handle non-OK response status (e.g., 404 Not Found)
            return {
                status: response.status,
                error: `Failed to fetch user: ${response.statusText}`,
            };
        }

        // Parse JSON response
        const userData = await response.json();

        console.log(userData)

        // find the eBooks the user has access for 
        const eBookRes = await fetch(`/api/accessEBook?user_id=${userData.user._id}`)
        const eBooks = await eBookRes.json()
    
        // Return user data as props
        return {
            props: {
                eBooks
            },
        };
    } catch (error) {
        // Handle fetch errors
        console.error('Error fetching user:', error);
        return {
            status: 500,
            error: 'Internal Server Error',
        };
    }
}
