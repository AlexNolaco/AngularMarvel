import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  searchBarControl = new FormControl('');
  @Input() placeHolder: any;
  @Input() localStorageKey: any;
  @Output() keyWord = new EventEmitter<any>();

  ngOnInit(): void {
    var keyword = this.getKeyWordFromLocalStorage();
    if (keyword) {
      this.fillSearchBarWithExistingKeyWord(keyword);
      this.emitKeyWordEventValue()
    }
  }

  getKeyWordFromLocalStorage(): any {
    return localStorage.getItem(this.localStorageKey);
  }

  fillSearchBarWithExistingKeyWord(keyWord: any) {
    this.searchBarControl.setValue(keyWord);
  }

  emitKeyWordEventValue() {
    this.keyWord.emit(this.searchBarControl.value);
  }

  search() {
    this.grabInLocalStorage(this.searchBarControl.value);
    this.emitKeyWordEventValue();
  }

  grabInLocalStorage(keyWord: any) {
    localStorage.setItem(this.localStorageKey, keyWord);
  }

}
