import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  @Input() Valid?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
