import{ routeUserToLogin } from "../utils.js"
const url = "http://localhost:8080";


export async function getScreens() {
    const endpoint = "/screens";
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

export async function createScreen(screen) {
    console.log(screen)
    const endpoint = "/screens";
    try {
        const response = await fetch(url + endpoint,   {
            method : "POST",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                "name": screen.location,
                "location": screen.name
            })
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}