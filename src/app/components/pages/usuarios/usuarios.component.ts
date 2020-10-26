import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { UsuariosInterface } from '../../../interfaces/sap.interface';
import { NgForm } from '@angular/forms';
// import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Object;
  isEdit = false;
  userObj = {
    picture: '',
    name: '',
    fathersLastName: '',
    mothersLastName: '',
    email: '',
    roleId: '',
    active: '',
    id:''
  };



  constructor(private userService: UsuariosService) {

    this.getLastUser();
  }

  ngOnInit(): void {
  }

  agregarUsuarios(formdata: NgForm) {
    console.log(formdata);
    this.userService.createUsuarios(formdata)
      .subscribe((res) => {
        this.getLastUser();
        //console.log(res);
        //console.log('User was added');
      }, (err) => {
          console.log(err);
      } );
  }

  getLastUser() {
    this.userService.getUsuarios()
      .subscribe((res) => {
        this.usuarios = res;
        //@ts-checkconsole.log(res);
      }, (err) => {
          console.log(err);
      });
  }

  editarUsuario(user) {
    this.isEdit = true;
    this.userObj = user;
  }

  borrarUsuario(user) {
    this.userService.deleteUsuarios(user)
      .subscribe(() => {
        this.getLastUser();
      }, (err) => {
          console.log(err);
      });
  }
  updateUser() {
    this.isEdit = !this.isEdit;
    this.userService.updateUsuarios(this.userObj)
      .subscribe(() => {
        this.getLastUser();
      }, (err) => {
        console.log(err);
      });
  }

  // onDrop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  //   this.users.forEach((user, idx) => {
  //     user.order = idx + 1;
  //   });
  // }

}
