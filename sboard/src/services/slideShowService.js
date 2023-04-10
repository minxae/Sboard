const url = "http://localhost:8080"

export async function createSlideshow(slideshow) {
    console.log(slideshow)
    const endpoint = "/slideshows";
    try {
        const response = await fetch(url + endpoint,   {
            method : "POST",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                "name": slideshow.newSlideShowName,
            })
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}

export async function getSlideshows(slideshow) {
    console.log(slideshow)
    const endpoint = "/slideshows";
    try {
        const response = await fetch(url + endpoint,   {
            method : "GET",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
                "Content-type" : "application/json"
            },
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}

export async function getSlidesBySlideshow(slideshow) {
    console.log(slideshow)
    const endpoint = "/slideshows/" + slideshow.id + "/slides";
    try {
        const response = await fetch(url + endpoint,   {
            method : "GET",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
                "Content-type" : "application/json"
            },
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}