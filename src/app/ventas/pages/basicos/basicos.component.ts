import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreLower: string = 'cristhian';
  nombreUpper: string = 'CRISTHIAN';
  nombreCompleto: string = 'cRiStHian MoNtaÑo';
  fecha: Date = new Date(); // Siempre va hacer la fecha actual

}
