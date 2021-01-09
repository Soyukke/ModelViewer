import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModelViewer';
  str: string;

  /**
   * ドラッグ&ドロップされたファイルを受け取る
   * @param {string} event  ドロップされたファイル
   */
  testOutput(event: string) {
    this.str = event;
  }
}
