import fetch from "node-fetch";

export class Location {

    constructor(
        _id: string,
        lat: number,
        lng: number
    ) {}

    public async send() {
        const locationReq = await fetch("http://localhost:8080/users/location", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this)
        });

        const response = await locationReq.json();
    }

}

setInterval(() => {
    const location = new Location("1234", 0, 0);
    location.send();
}, 5000);
