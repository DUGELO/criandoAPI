import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html'
})

export class UserPageComponent implements OnInit {
  users!: Observable<User[]>
  constructor(private service: UserService) {
    
  }
  
  ngOnInit() {
    this.users = this.service.getUser()
  }
  
  editar(user: User){
    const editado = user;
    editado.name = 'new name';
    this.service.putUser(user.id, editado);
  }

  novoUser() {
    const user: User = {
      id: 555555,
      name: 'Novo Usuário',
      email: 'novo@email.com'
    }
    this.service.postUser(user)

  }

  deletar(user: User){
    this.service.deleteUser(user.id)
  }

 
}