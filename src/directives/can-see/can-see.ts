import { Directive, Input,OnDestroy, HostBinding,OnInit, ElementRef, AfterViewInit, Renderer2, ViewContainerRef } from '@angular/core';
import { CommonproviderProvider } from './../../providers/commonprovider/commonprovider';
/**
 * Generated class for the CanSeeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[can-see]' // Attribute selector
})
export class CanSeeDirective implements OnInit, AfterViewInit, OnDestroy{
 
  // @Input() set appCanAccess(value: string | string[]) {
  //  console.log("helooooooooooooooo")
 //    this.applyPermission(value);

 //  }

  // button2:any;

  constructor(public element: ElementRef, public renderer: Renderer2,private viewContainer: ViewContainerRef,private commonProvider: CommonproviderProvider) {
    console.log('Hello CanSeeDirective Directive');
     // element.nativeElement.style.color = 'red'
  }
    avoid(componente){
    
    return this.commonProvider.avoidcomponents(componente)

  }

    ngAfterViewInit(){
      console.log('verito feliz cumple',this.element.nativeElement)
    }


    ngOnInit(){
      console.log("result",!this.avoid('other'))
      let val= !this.avoid('other')
      if (val){

        this.renderer.addClass(this.element.nativeElement, 'showw')
      } else{
        this.element.nativeElement.style.color = 'red'
        this.renderer.removeClass(this.element.nativeElement, 'showw'); 
      }



      // this.renderer.destroy();
      // this.viewContainer.clear();      
      // this.renderer.removeClass(this.element.nativeElement, 'wild');     
    //   debugger;
    //   this.element.nativeElement.remove

      // this.renderer.setProperty(this.element.nativeElement, 'value', 'Cute alligator');
      // this.renderer.removeClass(this.element.nativeElement, 'btn');


      // const div = this.renderer.createElement('div');
      // const text = this.renderer.createText('Hellowwwwwwwwwww world!');

      // this.renderer.appendChild(div, text);
      // this.renderer.appendChild(this.element.nativeElement, div);


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
