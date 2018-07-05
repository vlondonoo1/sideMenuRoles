import { Directive, Input,OnDestroy, OnInit, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';

/**
 * Generated class for the CanSeeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[can-see]' // Attribute selector
})
export class CanSeeDirective implements OnInit, OnDestroy{
  // @Input() set appCanAccess(value: string | string[]) {
  //  console.log("helooooooooooooooo")
 //    this.applyPermission(value);

 //  }

  // button2:any;

  constructor(public element: ElementRef, public renderer: Renderer2,
              private viewContainer: ViewContainerRef) {
    console.log('Hello CanSeeDirective Directive');
  }
    ngOnInit(){
      console.log("porfa")

      // this.renderer.setProperty(this.element.nativeElement, 'value', 'Cute alligator');
      this.renderer.removeClass(this.element.nativeElement, 'wild');


      const div = this.renderer.createElement('div');
      const text = this.renderer.createText('Hellowwwwwwwwwww world!');

      this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.element.nativeElement, div);


      // this.applyPermission("value");
 //      const text = this.renderer.createText('Hello world!');
 //    //this.button2 =this.element.nativeElement.getElementsByid("boton2")
  }
  // private applyPermission(value: string | string[]): void {
  //  let authorized = true
  //   console.log('authorized', authorized);
  //   if (authorized) {
 //          this.viewContainer.createEmbeddedView(thi);
 //          this.button2 =this.element.nativeElement.getElementsByid("boton2")

 //        } else {
 //          this.viewContainer.clear();
 //        }

  // }

  ngOnDestroy(): void {
 //    // this.permission$.unsubscribe();
  }
}
