import { Component, ContentChild, ElementRef, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit, AfterContentInit {

  ngOnInit(): void {
    console.log(this.paragraphEl);
  }

  ngAfterContentInit(): void {
    this.paragraphEl.nativeElement.textContent = 'This is new paragraph value.';
    console.log(this.paragraphEl.nativeElement.textContent);
  }

  @ContentChild('paragraph')
  paragraphEl!: ElementRef;
}
