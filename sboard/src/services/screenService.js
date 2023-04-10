import user from "../redux/user";
import { getDayInEnglish } from "../utils";

const url = "http://localhost:8080"

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
