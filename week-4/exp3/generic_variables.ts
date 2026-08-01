class Locker<T>{
    private contents:T;
    constructor(initialItem:T){
        this.contents=initialItem;
    }
    public getItem():T{
        console.log("Accessing locker contents ...");
        return this.contents;
    }
    public depositItem(newItem:T):void{
        this.contents=newItem;
        console.log("Locker updated with the new item...");
    }
}
const cashLocker=new Locker<number>(10000);
let cash=cashLocker.getItem();
console.log("Cash in Locker:"+cash);

const docLocker=new Locker<string>("Passport");
let passport=docLocker.getItem();
console.log("Documnet in the Locker is",passport);

interface Silver{
    wtInGrams:number;
    purity:String;
}
const silverLocker=new Locker<Silver>({wtInGrams:200,purity:"90% Pure"});
let silver=silverLocker.getItem();
console.log("Silver in the Locker is ",silver.wtInGrams,"grams and the purity of that silver is ",silver.purity);