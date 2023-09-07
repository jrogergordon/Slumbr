export const fetchUser = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    });
};

export const fetchAllUsers = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/users'
    });
};

export const createFollow = id => {
    return $.ajax({
        method: 'POST',
        url: `api/users/${id}/follow`
    });
};

export const deleteFollow = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/users/${id}/follow`
    });
};
