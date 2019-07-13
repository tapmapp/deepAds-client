import fetch from "node-fetch";

export class Location {

    // VARS
    public userId: string;
    public lat: number;
    public lng: number;

    constructor(
        _id: string,
        lat: number,
        lng: number
    ) {
        this.userId = _id;
        this.lat = lat;
        this.lng = lng;
    }

    public async send() {
        await fetch("http://localhost:8080/users/location", {
            method: "POST",
            body: JSON.stringify({ _id: this.userId, lat: this.lat, lng: this.lng }),
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            console.log("response");
        }).catch((err) => {
            console.log("error");
        });

    }

}

setInterval(() => {
    const location = new Location("1234", 0, 0);
    location.send();
}, 1000);
