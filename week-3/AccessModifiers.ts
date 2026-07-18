class DigitalWallet{
    public holderName:string;
    private bal:number;
    private pin:number;
    protected loyalityPoints:number=0;
    
    constructor(name:string,amount:number,pin:number){
        this.holderName=name;
        this.bal=amount;
        this.pin=pin;
    }
    public withDrawMoney(amount:number,enteredPin:number):void{
        if(this.verifyPin(enteredPin)){
            if(this.bal>=amount){
                this.bal=amount;
                console.log(`Transaction Successfull, Remaining Balance:${this.bal}`);
            }
            else{
                console.log(`Insufficient Balance, Current Balance:${this.bal}`);
            }
        }
        else{
            console.log(`Invalid Pin, Transaction Failed`);
        }
    }

    private verifyPin(pin:number):boolean{
        return this.pin===pin;
    }

}

class PremiumWallet extends DigitalWallet{
    public addLoyalPoints(points:number):void{
        this.loyalityPoints+=points;
        console.log(`Loyalty Points Added, Current Points:${this.loyalityPoints}`);
    }
}

const myWallet=new DigitalWallet("Neha",10000,1234);
console.log(`Wallet Holder:${myWallet.holderName}`);

//console.log(`Trying to access private property bal:${myWallet.bal}`);//error: Property 'bal' is private and only accessible within class 'DigitalWallet'.
//myWallet.verifyPin(1234);//method verifyPin is private

myWallet.withDrawMoney(4000,1234);

