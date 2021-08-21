import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // i18nSelect
  nombre: string = 'Cristhian';
  genero: string = 'maculino';
  invitacionMapa = {
    'maculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Esteban', 'Cristhian', 'Ana', 'Jade'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    if (this.nombre == 'Cristhian') {
      this.nombre = 'Jade';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Cristhian';
      this.genero = 'maculino';
    }
  }

  borrarCliente() {
    this.clientes.shift()
  }

  // KeyValuePipe
  persona = {
    nombre: 'Cristhian',
    edad: 30,
    direccion: 'Calle 30 # 37 - 02'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(5000); //0. 2. 3.
  valorPromesa = new Promise((resolve , reject) => {
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    }, 3500)
  })

}
