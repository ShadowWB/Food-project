export const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Some error !  " + res.status);
    }
    return await res.json();
}

export async function postData(url, data) {
    const res = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await res.json()
}