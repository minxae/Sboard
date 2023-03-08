const url = "http://localhost:8080"

export async function login(username, password){
    const endpoint = "/authenticate"   
    try {
        const response = await fetch(url + endpoint,   {
            method : "POST",
            headers: {
                "Content-type":  "application/json"
            },
            body: JSON.stringify({
                password,
                username
            })
        })

        return response;
    } catch (err) {
        console.log(err)
    }
}