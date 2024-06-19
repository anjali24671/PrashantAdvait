export async function load({locals}) {
    if (!locals.auth) return {
        "authenticated":false
    }
    else return {
        "authenticated":true
    }
}