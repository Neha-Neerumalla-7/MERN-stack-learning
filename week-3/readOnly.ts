class Railways {

    public static readonly custname: string="Neha";
    public static seatno: number;

    constructor(seat: number) {
        Railways.seatno = seat;
    }

    public static display(): void {
        console.log(`Welcome to the Railways Ms. ${Railways.custname}`);
    }
}

const a = new Railways(1);
Railways.display();