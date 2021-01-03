import { Component, OnInit } from '@angular/core';

/**
 * ドロップされたデータを読み取る
 */

@Component({
  selector: 'app-dropdata',
  templateUrl: './dropdata.component.html',
  styleUrls: ['./dropdata.component.css']
})
export class DropdataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    alert('貴様，見ているな');
  }

  onDrop(ev: DragEvent) {
    const f = ev.dataTransfer.files[0];
    console.log(f);
    const fr = new FileReader();
    fr.onload = function () {
      console.log(fr.result);
    }
    fr.readAsText(f);
  }
}
