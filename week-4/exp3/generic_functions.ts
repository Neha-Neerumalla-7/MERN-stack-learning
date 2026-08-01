function getFirstItem<T>(items:T[]):T{
    return items[0];
}
function wrapInBox<T>(item:T):{obj:T,dateAndTime:Date}{
    return {
        obj:item,
        dateAndTime:new Date()
    };
}
const countries=["India","USA","UK"];
const firstCountry=getFirstItem(countries);
console.log("Sending First box to the country:",firstCountry);

const pincodes=[123453,875343,836473];
const firstPincode=getFirstItem(pincodes);
console.log("Sending First box to the pincode:",firstPincode);

interface Electronic{
    company:string;
    model:string;
}

const tv:Electronic={company:"Samsung",model:"QLED"};
const packTV=wrapInBox<Electronic>(tv);
console.log("The Item packed is ",packTV.obj.company,"at",packTV.dateAndTime);


