export const actions = {
    addArticle: async ({ request }) => {
        const data = await request.formData();
        const name = data.get("name");
        
        // Log or process the data
        console.log(name);

        // Return a response object
        
        return {
            status: 200,
            body: {
                message: `Article '${name}' added successfully!`
            }
        };
    }
};