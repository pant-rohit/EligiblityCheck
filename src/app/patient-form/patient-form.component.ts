import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient'
import { Patients } from '../patients';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  selectedPatient?: Patient;
  model = Patients;
  onSelect(patient: Patient): void{
    this.selectedPatient = patient;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
