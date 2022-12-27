import {Component, OnInit} from '@angular/core';
import {PersonList} from "../../../interfaces/person-list";
import {PersonService} from "../../../services/person.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  persons: PersonList | undefined;
  index = 1;

  constructor(private peopleService: PersonService) {
  }

  ngOnInit(): void {
    this.peopleService.getPopularPeoples(this.index).subscribe((data) => {
      this.persons = data;
      console.log(this.persons);
    });
  }


}
