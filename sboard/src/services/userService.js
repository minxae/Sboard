const url = "http://localhost:8080"

export async function getUser(id){
    const endpoint = "/users/" + id;
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

export async function getUsers(){
    const endpoint = "/users";
    try {
        const response = await fetch(url + endpoint,   {
            method : "GET",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
                "Content-type":  "application/json"
            },
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}

export async function addUser(obj){
    const endpoint = "/users";
    try {
        const response = await fetch(url + endpoint,   {
            method : "POST",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
                "Content-type":  "application/json"
            },
            body : JSON.stringify({
                "enabled": obj.enabled,
                "password" : obj.password,
                "pfpLocation" : "ava/profile.jpg",
                "username" : obj.username,
                "role" : obj.role
            })
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}

