import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Settings } from './../../data/settings';

@Component({
    selector: 'app-order-summary',
    templateUrl: './order-summary.page.html',
    styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {
    id: any;
    order: any;
    filter: any = {};
    constructor(public api: ApiService, public settings: Settings, public router: Router, public loadingController: LoadingController, public navCtrl: NavController, public route: ActivatedRoute) {}
    async getOrder() {
        const loading = await this.loadingController.create({
            message: 'Loading...',
            translucent: true,
            animated: true,
            backdropDismiss: true
        });
        await loading.present();
        await this.api.postFlutterItem('order', this.filter).subscribe(res => {
            this.order = res;
            loading.dismiss();
        }, err => {
            console.log(err);
            loading.dismiss();
        });
    }
    ngOnInit() {
        this.filter.id = this.route.snapshot.paramMap.get('id');
        this.getOrder();
    }
    continue () {
        //Clear Cart
        this.api.postItem('emptyCart').subscribe(res => {}, err => {});
        this.navCtrl.navigateRoot('/tabs/home');
    }
}