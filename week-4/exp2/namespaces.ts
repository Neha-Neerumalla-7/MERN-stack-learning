namespace GovernMentId{
    const aadharLength=12;
    export function validateAadhar(id:string):boolean{
        const isNumeric=/^\d+$/.test(id);
        if(isNumeric && id.length===aadharLength){
            return true;
        }
        else {
            return false;
        }
    }
    export function validatePan(id:string):boolean{
        const panRegex=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(id.toUpperCase());
    }

}
const MyAadhar="467834789012";
const MyPan="MLNKUR1234K";
console.log("Aadhar Validation:"+GovernMentId.validateAadhar(MyAadhar));
console.log("Pan Validation:"+GovernMentId.validatePan(MyPan));

