import { Directive, Input,OnDestroy, HostBinding,OnInit, ElementRef, AfterViewInit, Renderer2, ViewContainerRef } from '@angular/core';
import { CommonproviderProvider } from './../../providers/commonprovider/commonprovider';
import { AuthProvider } from './../../providers/auth/auth';

@Directive({
  selector: '[can-see]' // Attribute selector
})
export class CanSeeDirective implements OnInit, AfterViewInit, OnDestroy{
 
 

  constructor(public element: ElementRef, public renderer: Renderer2,private viewContainer: ViewContainerRef,private commonProvider: CommonproviderProvider, private authProvider: AuthProvider) {
    console.log('Hello CanSeeDirective Directive');
     // element.nativeElement.style.color = 'red'
  }
  //   avoid(componente){    
  //   return this.commonProvider.avoidcomponents(componente)

  // }

    ngAfterViewInit(){
      console.log('verito',this.element.nativeElement)
    }


    ngOnInit(){
      // console.log("result",!this.avoid('other'))
      let mode = this.authProvider.kindofmode()
      // let val= !this.avoid('other')
      let user= this.authProvider.kindofuser()

      this.commonProvider.checkActions()




      if (!this.commonProvider.permitcomp('other',user)){
        //mode==val
        this.renderer.addClass(this.element.nativeElement, 'showw')
      } else{
        this.element.nativeElement.style.color = 'red'
        this.renderer.removeClass(this.element.nativeElement, 'showw'); 
      }



      




  }
 

  ngOnDestroy(): void {
   // this.permission$.unsubscribe();
  }
}
