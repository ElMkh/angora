import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

interface IPhoto {
  imgSrc: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  items: IPhoto[] = [
    { imgSrc: "./assets/poert1.png" },
    { imgSrc: "./assets/port2.png" },
    { imgSrc: "./assets/port3.png" },
    { imgSrc: "./assets/poert1.png" },
    { imgSrc: "./assets/port2.png" },
    { imgSrc: "./assets/port3.png" }
  ];
  currentImage: string = '';
  setCurrentImage(imgSrc: string): void {
    this.currentImage = imgSrc;
  }
}
