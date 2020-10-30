class Document {
    id;
    name;
    author;
    price;
    publishDate;
    data = []


    constructor(id, name, author, price, publishDate) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;

    };

    get info() {
        return `
        Document's is: ${this.id}
        Document's name: ${this.name}
        Document's author: ${this.author}
        Document's price: ${this.price}
        Document's publishDate: ${this.publishDate}
        `
    };

    set infor(data) {
        this.id = data.id;
        this.name = data.name;
        this.author = data.author;
        this.price = data.price;
        this.publishDate = data.publishDate;
    }
}


class Ebook extends Document {
    discount;
    constructor(id, name, author, price, publishDate, discount) {
        super(id, name, author, price, publishDate);
        this.discount = discount;
        this.cost = price - discount;

    }

    get info() {
        return `
        Document's id: ${this.id}
        Document's name: ${this.name}
        Document's author: ${this.author}
        Document's price: ${this.cost}
        Document's publishDate: ${this.publishDate}
        `
    }

}

class HardCopy extends Document {
    source;
    constructor(id, name, author, price, publishDate, source) {
        super(id, name, author, price, publishDate);
        this.source = source;
    }

    get info() {
        return `
        HardCopy from ${this.source}
        `
    }


}

class DocumentCase {
    id;
    name;
    books;
    owner;
    dateModified;

    constructor(id, name, books, owner, dateModified) {
        this.id = id;
        this.name = name;
        this.books = books;
        this.owner = owner;
        this.dateModified = dateModified;
    }

    addDocument(document) {
        this.id = document.id;
        this.name = document.name;
        this.author = document.author;
        this.price = document.price;
        this.publishDate = document.publishDate;
    }



}

let doc = new Document('1', '2', '3', '4', '5', '6');
console.log(doc);

let english = new Ebook('1', 'sgk', 'bacsihai', 100, '30/10/2020', 50);
console.log(english);

let nazutobaco = new HardCopy('2', 'sasuketamin', 'masimoto', 22, '2/11', 'Japan');
console.log(nazutobaco);