let movie: string="Seeta Ramam";
let rating: number=5;
let isBlockBuster:boolean=true;

function movieDetails(movie:string,rating:number,isBlockBuster:boolean):string{
    return `${movie} has rating ${rating} and it is BlockBuster movie.`;
}

let MainActors:string[]=["Dulquer Salman","Mrunal Thakur"];

const movieInfo=movieDetails(movie,rating,isBlockBuster);
console.log(movieInfo);
console.log(`Main actors of the ${movie} are : ${MainActors.join(",")}`);

