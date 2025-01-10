const getIdFromUrl = (url: string, type: string) => {
    let parts: string[] = [];

    if (type === '/') {
        parts = url.split('/');
    } else if (type === '-') {
        parts = url.split('-');
    }

    return parts[parts.length - 1];
};

export default getIdFromUrl;
