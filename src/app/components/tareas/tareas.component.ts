import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  listaTareas: Tarea[] = [];
  nombreTarea: string = '';

  constructor() {}

  agregarTarea(){
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    this.listaTareas.push(tarea);
    this.nombreTarea = '';
  }

  eliminarTarea(index: number){
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number){
    this.listaTareas[index].estado = !tarea.estado;
  }
}
