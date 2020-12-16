// Use fetch and then .text()

class DenoSoup {
    url: string;
    body: string;
    title: string;
    constructor(url: string) {
        this.url = url;
        this.body = "";
        this.title = "";
    }
    async fetch(): Promise<void> {
        let res = await fetch(this.url);
        this.body = await res.text();
        let title = this.body.match(new RegExp("<title>" + "(.*)" + "</title>"))
        if (title) this.title = title[1];
    }
    findById(id: string): string {
        return "";
    }
    prettify(): void {
        let line: string = "";
        for (let i = 0; i < this.body.length; i++) {
            line += this.body[i];
            if (this.body[i] === ">") {
                console.log(line);
                line = "";
            }
        }
    }
}

let soup = new DenoSoup("https://everyonetalks-react.herokuapp.com/");
await soup.fetch();
console.log(soup.title);