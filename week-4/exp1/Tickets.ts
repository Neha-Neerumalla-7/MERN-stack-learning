import {gst,convinceFee} from './constants.js';
import {Passenger} from './Passengers.js';

export class Ticket{

    constructor(
        public passenger:Passenger,
        private baseFare:number,
        public flightNumber:number
    ){}
    public calFinalFare():number{
        const tax=this.baseFare*gst;
        return this.baseFare+tax+convinceFee;
    }
        
    public displayTicket():void{
        console.log("Passenger Name:"+this.passenger.name);
        console.log("Pasesenger Age:"+this.passenger.age);
        console.log("Seat Prefference:"+this.passenger.seatPrefference);
        console.log("TotalFare:"+this.calFinalFare());
        console.log("GST:"+gst);
        console.log("Convince Fee:"+convinceFee);
    }

}

