// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


// TODO 1: give this constant an appropriate type
const FLOP_BAR:number = 50000000;

// TODO 2: give the gross parameter an appropriate type 
function isFlop(gross:number):boolean {
  return gross < FLOP_BAR;
}

let movieReleaseYears:number[] = [1964, 1945, 2019];

// calculate the total timespan from an array of years
// TODO 3: give this function's parameter the correct type
function totalTimespan(years:number[]):number {
  return years[years.length-1] - years[0]
}

// TODO 4: give this class the following construction parameters with types: title, year, and numStars and capture those parameters into properties with the same names

class Movie {
  constructor(public title:string){}
}

// TODO 5: Find and fix all problems with the following  code by applying types - review the solution video for my implementation

let userId:number = 5
function checkoutMovie(movie: Movie, inventory:Inventory, checkoutLog:CheckoutLog, userId: number) {
  if(inventory.isInStock(movie.title)) {
    inventory.reduceQuantity(movie.title, 1)
    checkoutLog.add(movie.title, userId)
    return true;
  } else {
    return false;
  }
}

class Inventory {
   movieInventory = new Map<string,number>();

  constructor(){}

  isInStock(title: string):boolean {
    // implementation
    if(this.movieInventory.has(title)){
      let amount = this.movieInventory.get(title)
      return amount > 0 ? true: false;
    }
    return false;
  }

  reduceQuantity(title: string, quantity:number) {
    // implementation
  }
}

class CheckoutLog {
  add(movieTitle: string, userId: number) {
    // implementation
  }
}
