import {Ticket} from './Tickets';
import {Passenger} from './Passengers';
const p1:Passenger={
    name:"Neha",
    age:20,
    seatPrefference:'Window'
}
const t=new Ticket(p1,1200,12345);
t.displayTicket();