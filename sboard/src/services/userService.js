const url = "http://localhost:8080"

export async function getUser(id){
    const endpoint = "/user/" + id;
    try {
        const response = await fetch(url + endpoint,   {
            method : "GET",
            headers: {
                "Content-type":  "application/json"
            },
        })

        return response;
    } catch (err) {
        console.log(err)
    }
}
