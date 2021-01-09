import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

/**
 * ドロップされたデータを読み取る
 * Output: 読み取ったデータのstring
 */

@Component({
  selector: 'app-dropdata',
  templateUrl: './dropdata.component.html',
  styleUrls: ['./dropdata.component.css']
})
export class DropdataComponent implements OnInit {

  // ドロップされたファイル
  @Output() fileEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    alert('貴様，見ているな');
  }

  onDrop(ev: DragEvent) {
    const f = ev.dataTransfer.files[0];
    const fr = new FileReader();
    const fileEvent = this.fileEvent;
    fr.onload = function () {
      const result = fr.result;
      if (typeof result === 'string') {
        fileEvent.emit(result);
      }
    }
    fr.readAsText(f);
  }
}
