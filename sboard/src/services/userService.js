const url = "http://localhost:8080"

export async function getUser(id){
    const endpoint = "/users/" + id;
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

//Admin only
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

export async function updateUser(obj){
    const endpoint = "/users/" + obj.userId;
    try {
        const response = await fetch(url + endpoint,   {
            method : "PUT",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
                "Content-type":  "application/json"
            },
            body : JSON.stringify({
                "enabled": obj.enabled ? obj.enabled : true,
                "password" : obj.password ? obj.password : "",
                "pfpLocation" : "ava/profile.jpg",
                "username" : obj.username ? obj.username : "",
                "role" : obj.role
            })
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}

