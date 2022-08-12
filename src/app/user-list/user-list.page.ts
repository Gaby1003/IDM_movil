import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  users: any[] = [
    {'FullName':'aaaaaaaa',
     'DocumentType':'CC',
     'DocumentNumber':'152574',
      'DepartamentName':'AAAA',
     'ContractEndDate':'10-03-2022',
     'Email': 'asw@gmail.com',
     'Position':'cccc',
     'State':'aaaa',
     'TerminationDate':'10-03-2022'},
     {'FullName':'aaaaaaaa',
     'DocumentType':'CC',
     'DocumentNumber':'152574',
      'DepartamentName':'AAAA',
     'ContractEndDate':'10-03-2022',
     'Email': 'asw@gmail.com',
     'Position':'cccc',
     'State':'aaaa',
     'TerminationDate':'10-03-2022'},
     {'FullName':'aaaaaaaa',
     'DocumentType':'CC',
     'DocumentNumber':'152574',
      'DepartamentName':'AAAA',
     'ContractEndDate':'10-03-2022',
     'Email': 'asw@gmail.com',
     'Position':'cccc',
     'State':'aaaa',
     'TerminationDate':'10-03-2022'},
     {'FullName':'aaaaaaaa',
     'DocumentType':'CC',
     'DocumentNumber':'152574',
      'DepartamentName':'AAAA',
     'ContractEndDate':'10-03-2022',
     'Email': 'asw@gmail.com',
     'Position':'cccc',
     'State':'aaaa',
     'TerminationDate':'10-03-2022'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEdit(){

  }

  onDelete(){

  }

  onAdd(){
    this.router.navigateByUrl('/register');
  }

}
