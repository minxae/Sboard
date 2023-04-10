export function getDayInEnglish(day){
    switch (day) {
        case "maandag":
            return "MONDAY"

        case "dinsdag":
            return "TUESDAY"

        case "woensdag":
            return "WEDNESDAY"

        case "donderdag":
            return "THURSDAY"

        case "vrijdag":
            return "FRIDAY"
    }
}

export function calculateTodaysAvailibilty(teachers){
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', {weekday: 'long'}).toUpperCase();
    const currentTime = now.toLocaleTimeString('en-US', {hour12: false, timeZone:"Europe/berlin", hour: '2-digit', minute: '2-digit'});

    const filtered = teachers.filter(item => {
        if (item.weekDay === currentDay) {
            console.log(item.startTime, currentTime)
            if (item.startTime <= currentTime && item.endTime >= currentTime) {
                return true;
            }
        }
        return false;
    });

    console.log(filtered)

    return filtered.sort((a, b) => {
        const aTime = new Date(`${a.weekDay} ${a.startTime}`);
        const bTime = new Date(`${b.weekDay} ${b.startTime}`);
        return aTime - bTime;
    });
}

export function routeUserToLogin(){
    window.location = "/login";
}