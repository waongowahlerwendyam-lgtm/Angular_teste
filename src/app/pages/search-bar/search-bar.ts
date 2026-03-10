import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {


  searchboutonclick= output ()

  @Output() searChange= new EventEmitter() 
  
  search_click() {
    this.searchboutonclick.emit()
  }

  updateSearch(value:string){
    this.searChange.emit(value)

  }

}
