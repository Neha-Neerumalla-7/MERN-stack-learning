function greeting(name:string): string {
    return `Hello ${name}, How are you?`;
}

function getCity(city:string="Chennai"):string{
    return `City :${city}`;
}

function SendingAlertMsg(ph:number,msg?:string):void{
    console.log(`Sending alert message to ${ph}`);
    if(msg){
        console.log(`Message :${msg}`);
    }
}

function calculateSum(...scores:number[]):number{
    return scores.reduce((total,current)=>total+current,0);
}

console.log(greeting("Neha"));
console.log(getCity());
console.log(SendingAlertMsg(123457789,"BE CAREFUL"));
console.log(getCity("Banglore"));


const total=calculateSum(1,2,3,4);
console.log(`Total Sum:${total}`);
