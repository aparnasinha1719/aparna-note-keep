import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
@Input() notes:NoteListComponent[];
  constructor() { }

  ngOnInit(): void {
  }

}
