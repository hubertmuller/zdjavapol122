0.0.0
class Auto {
    public paliwo: number;
    constructor(iloscPaliwa: number) {
        this.paliwo = iloscPaliwa;
    }
    doPrzodu(dystans: number) {
        this.paliwo -= dystans * 0.2;
    }
    stanPaliwa() {
        console.log(this.paliwo);
    }
}
0.1.0
class Auto {
    public paliwo: number;
    constructor(iloscPaliwa: number) {
        this.paliwo = iloscPaliwa;
    }
    doPrzodu(dystans: number) {
        this.paliwo -= dystans * 0.2;
    }
    stanPaliwa() {
        console.log(this.paliwo);
    }
    stanPaliwaWMilitrach() {
        console.log(this.paliwo*1000);
    }
}

1.0.0
class Auto {
    public paliwo: number;
    constructor(iloscPaliwa: number) {
        this.paliwo = iloscPaliwa;
    }
    doPrzodu(dystans: number) {
        this.paliwo -= dystans * 0.2;
    }
    stanPaliwa() {
        console.log(this.paliwo/1000);
    }
    stanPaliwaWMilitrach() {
        console.log(this.paliwo*1000);
    }
}

