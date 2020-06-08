import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: '6c835007858c40a7c9060fab46',
    version: "v3"
});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getPages() {
    return await api.pages
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        });
}

//rendering single post
export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug
        })
        .catch(err => {
            console.error(err);
        });
}