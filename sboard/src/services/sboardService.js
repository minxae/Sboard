const url = "http://localhost:8080"

export default async function getUser(){
    // if(!sessionStorage.getItem("token")){
    //     window.location  = "/login"
    // }
    const endpoint = "/users"   
    try {
        const response = await fetch(url + endpoint, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
            }
            
        })
        const json = await response.json();
        console.log(json, response.status)
        return response;
    } catch (err) {
        console.log(err)
    }
}