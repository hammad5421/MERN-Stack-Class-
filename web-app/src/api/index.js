
export async function api_call(uri, method, data) {
    const base_url = "http://localhost:3004"

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(data);

    let requestOptions = {
        method: method,
        headers: myHeaders,
        redirect: 'follow'
    };

    if (method === "POST") {
        requestOptions['body'] = raw
    }

    const response = await fetch(`${base_url}/${uri}`, requestOptions)

    const api_response_data = await response.json()

    return api_response_data
}