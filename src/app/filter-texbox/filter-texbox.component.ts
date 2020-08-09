import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-texbox',
  template: `
    Filtrar: <input type="text" [(ngModel)]="filter" />
  `
})
export class FilterTexboxComponent implements OnInit {

  private _filter: string;

  @Input() get filter(){
    return this._filter;
  }

  set filter(value : string){
    this._filter = value;
    this.changed.emit(this.filter);
  }

  @Output() changed = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
