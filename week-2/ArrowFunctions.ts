//Traditional ArrowFunction
function calculateTotal(price:number,percentageTax:number):number{
    return price+(price*percentageTax);
}

//ArrowFunction concise
const calTotal =(price:number,percentageTax:number):number => {
    return price+(price*percentageTax);   
};

const getWelcomeMsg=(theatreName:string):string => `Welcome to ${theatreName} Theatre!`;

const ticketPrice:number=150;
const getPercentage:number=0.20;

console.log(getWelcomeMsg("Ganga"));

const totalPrice=calculateTotal(ticketPrice,getPercentage);
console.log(`Total(Traditional):${totalPrice}`);

const totalP=calTotal(ticketPrice,getPercentage);
console.log(`Total(concise): ${totalP}`);