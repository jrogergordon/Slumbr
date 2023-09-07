export const fetchAllPosts = () => {
    return $.ajax({
        method: "GET",
        url: "/api/posts",
    });
};

export const fetchPost = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/posts/${id}`
    });
};

export const createPost = (post) => {
    return $.ajax({
        method: "POST",
        url: "/api/posts",
        data: { post }
    });
};

export const updatePost = (post) => {
    return $.ajax({
        method: "patch",
        url: `api/posts/${post.id}`,
        data: { post }
    })
}

export const deletePost = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/posts/${id}`
    });
};

export const createLike = id => {
    return $.ajax({
        method: 'POST',
        url: `api/posts/${id}/like`
    });
};

export const deleteLike = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/posts/${id}/like`
    });
};