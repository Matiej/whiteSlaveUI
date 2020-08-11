import { UserService } from './../../service/user.service';
import { UserDto } from './../../model/userDto';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger("detailExpand", [
      state(
        "void",
        style({ height: "0px", minHeight: "0", visibility: "hidden" })
      ),
      state("*", style({ height: "*", visibility: "visible" })),
      transition("void <=> *", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ]
})

export class UserListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort: MatSort;
  dataSource: MatTableDataSource<UserDto>;

  userList: Array<UserDto> = [];
  userDtoDeleted: UserDto;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty("detailRow");

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAllUsers()
      .subscribe((userList: Array<UserDto>) => {
        this.userList = userList;
        this.dataSource = new MatTableDataSource(this.userList);
      });
  }

  ngAfterViewInit(): void {
    this.userService.findAllUsers()
      .subscribe((userList: Array<UserDto>) => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.userList = userList;
      });
  }

  createDisplayedColumns(): Array<string> {
    const displayedCol: string[] = [];
    displayedCol.push('username');
    displayedCol.push('login');
    displayedCol.push('email')
    displayedCol.push('accountNonExpired')
    displayedCol.push('accountNonLocked')
    displayedCol.push('credentialsNonExpired');
    displayedCol.push('enabled');
    displayedCol.push('id');
    return displayedCol;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  deleteUser(id: string): void {
    this.userService.delete(id).subscribe((deletedUser: UserDto) => {
      this.userDtoDeleted = deletedUser;
      this.getAllUsers();
    });

  }

  private getAllUsers() {
    this.userService.findAllUsers()
      .subscribe((userList: Array<UserDto>) => {
        this.userList = userList;
        this.dataSource = new MatTableDataSource(this.userList);
      });
  }
}
