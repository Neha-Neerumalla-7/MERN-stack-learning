let anyValue: any=10;
anyValue="Hii";
anyValue=false;


let unknownValue: unknown="Hello";
if(typeof unknownValue==="string"){
    console.log("length of unknownValue is :"+unknownValue.length);
}

function alertFunction(msg:string):void{
    console.log("ALERT:"+msg);
}

alertFunction("This is the alert message");
