class User {
    constructor(nem, nev, szulDatum, email, ismerosokSzama, profilkepUrl) {
        this.nem = nem;
        this.nev = nev;
        this.szulDatum = szulDatum;
        this.email = email;
        this.ismerosokSzama = ismerosokSzama;
        this.profilkepUrl = profilkepUrl || "../img/static/default-profile.png";
    }
}

const users = [
    new User(0, "Nagy Béla", "1964/05/25", "nagy.bela@example.com", 456, "../img/static/users/user-1.png"),
    new User(1, "Kovács Anna", "1998/02/14", "kanna98@example.com", 102, "../img/static/default-profile.png"),
    new User(0, "Szabó Peti", "2001/11/08", "szapeter@example.com", 34, "../img/static/users/user-2.png"),
    new User(0, "Arató András", "1945/05/11", "arato.andras@example.com", 789, "../img/static/users/user-4.png"),
    new User(0, "Kovács Gábor", "1995/12/01", "gabor@example.com", 65, "../img/static/users/user-5.png"),
    new User(0, "Kertész Kolompár", "2002/03/27", "kkolomp@example.com", 432, "../img/static/users/user-6.png"),
    new User(1, "Varga Boglárka", "2000/08/10", "boglarka@example.com", 987, "../img/static/default-profile.png"),
    new User(1, "Balázs Judit", "1994/06/17", "bjudit@example.com", 23, "../img/static/default-profile.png"),
    new User(0, "Kovács József", "2000/10/02", "kjozsi2000@example.com", 347, "../img/static/users/user-9.png"),
    new User(0, "Juhász Erzsébet", "1953/01/09", "juhasz.erzsi@example.com", 156, "../img/static/users/user-10.png")
];




