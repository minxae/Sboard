import user from "../redux/user";
import { getDayInEnglish } from "../utils";

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

export async function getAvailabilityByUserId(userId) {
    const endpoint = "/availabilities/" + userId;
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

export async function updateAvailability(availability) {
    const endpoint = "/availabilities/" + availability.id;
    console.log(availability)
    try {
        const response = await fetch(url + endpoint,   {
            method : "PUT",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                "endTime": availability.end,
                "startTime": availability.start,
                "userId": availability.userId,
                "weekDay": getDayInEnglish(availability.day)
            })
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}

export async function createAvailability(availability) {
    const endpoint = "/availabilities";
    try {
        const response = await fetch(url + endpoint,   {
            method : "POST",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                "endTime": availability.end,
                "startTime": availability.start,
                "userId": availability.userId,
                "weekDay": getDayInEnglish(availability.day)
            })
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}

export async function deleteAvailability(id) {
    const endpoint = "/availabilities/" + id;
    try {
        const response = await fetch(url + endpoint,   {
            method : "DELETE",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token")
            },
        })
        console.log(response.status)
        return response;
    } catch (err) {
        console.log(err)
    }
}

