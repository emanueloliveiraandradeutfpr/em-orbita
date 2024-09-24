import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, BtnPrimaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
