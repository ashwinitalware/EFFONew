import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, IonSlides, ModalController } from '@ionic/angular';
import { ProductsellPage } from '../productsell/productsell.page';

@Component({
  selector: 'app-oldexdashboard',
  templateUrl: './oldexdashboard.page.html',
  styleUrls: ['./oldexdashboard.page.scss'],
})
export class OldexdashboardPage implements OnInit {

  slideOptions1 = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 500,
  };

  // categories = [
  //   {
  //     name: 'Mobiles',
  //     image: '',
  //     icon: 'phone-portrait',
  //     link: 'subservices',
  //     available: true,
  //   },
  //   {
  //     name: 'Bikes',
  //     image: '',
  //     icon: 'bicycle',
  //     link: '',
  //     available: true,
  //   },
  //   {
  //     name: 'Furniture',
  //     image: '',
  //     icon: 'construct',
  //     link: 'contractorservices',
  //   },
  //   {
  //     name: 'Fashion',
  //     image: '',
  //     icon: 'bag-handle',
  //     link: '',
  //   },
  //   {
  //     name: 'Book & Sports',
  //     image: '',
  //     icon: 'desktop',
  //     link: '',
  //   },
  //   {
  //     name: 'Pets',
  //     image: '',
  //     icon: 'school',
  //     link: '',
  //   },
  //   {
  //     name: 'Services',
  //     image: '',
  //     link: '',
  //     icon: 'home',
  //   },
  //   {
  //     name: 'Job',
  //     image: '',
  //     link: '',
  //     icon: 'people',
  //   },
  //   {
  //     name: 'Cars',
  //     image: '',
  //     link: '',
  //     icon: 'car-sport',
  //   },
  // ]
  // router: any;

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) { }

  slidesDidLoad1(slides: IonSlides): void {
    slides.startAutoplay();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ProductsellPage,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      cssClass: 'half-modal',
    });
    return await modal.present();
  }

  ngOnInit() {
  }

  // navigate(category) {

  //   this.router.navigate(['/' + category.link])
  // }

}
