import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

/**
 * 描画部分のコンポーネント
 * 描画するためのデータを受け取って描画する
 */

class View {
  private canvas:HTMLCanvasElement;
  private renderer:THREE.WebGLRenderer;
  private scene:THREE.Scene;
  private camera:THREE.Camera;
  private light = new THREE.DirectionalLight(0xFFFFFF);

  constructor(canvas:HTMLCanvasElement) {
    if (canvas == null) {
      const e = new Error('#canvasが見つからない');
      throw e;
    }
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
    const width = window.innerWidth*0.8;
    const height = window.innerHeight*0.8;
    this.renderer.setSize(width, height);

    // 視野角
    // const width = window.innerWidth;
    const fov = 60;
    const theta = Math.PI * fov / 180;
    // カメラから平面までの距離
    const d = (height / 2) / Math.tan(theta / 2);

    this.scene = new THREE.Scene();
    const A = 10;
    const geometry = new THREE.BoxGeometry(A, A, A);
    const material = new THREE.MeshLambertMaterial({color: 0x00FF00});
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
    this.light.position.set(1000, 1000, 1000);
    this.scene.add(this.light);
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(60, aspect, 1, d*2);
    this.camera.position.z = d;
    // render
    this.render();
  }

  /**
   * 画面をrenderする関数
   */
  public render() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  // DOMのcanvas
  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef<HTMLCanvasElement>;

  private view:View;
  constructor() {
  }

  /**
   * canvasの初期化
   */
  ngAfterViewInit(): void {
    this.view = new View(this.myCanvas.nativeElement);
  }

  ngOnInit(): void {
  }

}
