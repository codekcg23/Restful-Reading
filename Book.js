export class Book {
    
    constructor(title,author,pages,description,currentPage,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description =description;
        this.currentPage = currentPage;
        this.read = read;
    }

    readBook(page){
        if(page < 1 || page > this.pages){
            return 0;
        }
        else if(page >=1 && page < this.pages){
            this.currentPage = page;
            return 1;
        }
        else if(page == this.pages){
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }
}
let book1 = new Book("Abandon","Meg Cabot",240,"A fallen Angle from underworld",100);
//book1.readBook(129);
let book2 = new Book("Mini Shopaholic","Sophie Kinsella",458,"Becky Brandon thinks that having a daughter is a dream come true: a shopping friend for life! But two-year-old Minnie has a quite different approach to shopping. The toddler creates havoc everywhere she goes, from Harrods to her own christening. On top of everything else, Becky and Luke are still living with her parents (the deal on house #4 has fallen through), when suddenly there’s a huge nationwide financial crisis",300);
//book2.readBook(145);
let book3 = new Book("Harry Potter and the cursed child","J.K.Rowling",350,"It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband and father of three school-age childrenWhile Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.",350);
//book3.readBook(200);
export const books = [book1,book2,book3];
