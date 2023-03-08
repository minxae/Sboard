const url = "http://localhost:8080"

export async function getAvailability() {
    const endpoint = "/availabilities";
    try {
        const response = await fetch(url + endpoint,   {
            method : "GET",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
            },
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}