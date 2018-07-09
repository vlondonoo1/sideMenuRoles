  import { Directive, Input,OnDestroy, HostBinding,OnInit, ElementRef, AfterViewInit, Renderer2, ViewContainerRef, TemplateRef } from '@angular/core';
  import { CommonproviderProvider } from './../../providers/commonprovider/commonprovider';
  import { TYPE_OF_APP } from './../../providers/choose_provider';
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

    @Input('can-see') set component(val) {
      this.show(val);
    };

    // button2:any;

    constructor(public element: ElementRef, public renderer: Renderer2,private viewContainer: ViewContainerRef,private commonProvider: CommonproviderProvider, private templateRef: TemplateRef<any>) {
      console.log('Hello CanSeeDirective Directive');
       // element.nativeElement.style.color = 'red'
    }

    avoid(roles){
      return roles.includes(TYPE_OF_APP);
    }

    ngAfterViewInit(){
      console.log('verito feliz cumple',this.element.nativeElement)
    }

    show(roles){
      console.log(roles,"roles___");
      let val= !this.avoid(roles)
       if(val) {
        this.viewContainer.clear();
      } else {
        this.viewContainer.createEmbeddedView(this.templateRef);

      }
    }

    ngOnInit(){
      // console.log("xxxxx",this.component);
      // console.log("result",!this.avoid(this.component));
      // let val= !this.avoid('other')
      // if (val){

      //   this.renderer.addClass(this.element.nativeElement, 'showw')
      // } else{
      //   this.element.nativeElement.style.color = 'red'
      //   this.renderer.removeClass(this.element.nativeElement, 'showw');
      // }



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
