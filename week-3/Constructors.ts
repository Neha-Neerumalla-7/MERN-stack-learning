class FixedDeposit{
    public customerName:string;
    public principalAmount:number;
    public Rate:number;
    public TimeInYears:number;

    constructor(name:string,amount:number);
    constructor(name:string,amount:number,rate:number,time:number);
    constructor(name:string,amount:number,rate?:number,time?:number){
        this.customerName=name;
        this.principalAmount=amount;
        this.Rate=rate??0.2;
        this.TimeInYears=time??1;
    }

    public calMaturity(): number{
        const interest=(this.principalAmount*this.Rate*this.TimeInYears)/100;
        return this.principalAmount+interest;
    }

    public displayDetails():void{
        console.log(`Fixed Deposit Receipt`);
        console.log(`Customer:${this.customerName}`);
        console.log(`Principal:${this.principalAmount}`);
        console.log(`Rate:${this.Rate}`);
        console.log(`Time:${this.TimeInYears}`);
        console.log(`Maturity Amount:${this.calMaturity()}`);
    }
}


const standardFD=new FixedDeposit("Neha",10000);
const seniorFD=new FixedDeposit("Aruna Kumari",100000,6.5,2);

standardFD.displayDetails();
seniorFD.displayDetails();


seniorFD.principalAmount=120000;
console.log(`Updated Maturity for Neha:${seniorFD.calMaturity()}`);