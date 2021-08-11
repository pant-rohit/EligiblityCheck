export class Patient {
    constructor(
       public recordID: string,
       public name: string,
       public address: string,
       public income: number,
       public houseHoldSize: number,
       public elgibility: string, 
       public insurance: boolean
       
    ){}
}
