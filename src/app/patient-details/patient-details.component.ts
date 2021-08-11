import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  @Input() patient?: Patient;
  valid?: boolean;
  result?: string = "";
  constructor() { }

  check(patient: Patient, income: number, size: number): void{
    if((patient.insurance) || (income > 1000 && size > 2)) {
      patient.elgibility = "Eligible";
    } else {
      patient.elgibility = "Not Eligible";
    }

  }

  show(): void{
    this.valid = true;
  }

  reset(patient: Patient): void{
    patient.income = 0;
    patient.houseHoldSize = 0;
    patient.insurance = false;
    patient.elgibility = "";
    this.valid = false;
  }
    

  ngOnInit(): void {
  }

}
