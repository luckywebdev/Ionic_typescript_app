import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Settings } from './../../data/settings';
import { FormBuilder, Validators } from '@angular/forms';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
declare var cordova;
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    form: any;
    errors: any;
    status: any = {};
    disableSubmit: boolean = false;
    pushForm: any = {};
    googleStatus: any = {};
    faceBookStatus: any = {};

    googleLogingInn: boolean = false;
    appleLogingInn: boolean = false;
   // userData:any = {};
    facebookLogingInn: boolean = false;
    phoneLogingInn: boolean = false;
    userInfo: any;
    phoneVerificationError: any;
    constructor(public platform: Platform, private oneSignal: OneSignal, public api: ApiService, public settings: Settings, public loadingController: LoadingController, public router: Router, public navCtrl: NavController, private fb: FormBuilder, private googlePlus: GooglePlus, private facebook: Facebook) {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
    }
    ngOnInit() {}
    async onSubmit() {
        this.disableSubmit = true;
        await this.api.postItem('login', this.form.value).subscribe(res => {
            this.status = res;
            if (this.status.errors) {
                this.errors = this.status.errors;
                for (var key in this.errors) {
                    this.errors[key].forEach(item => item.replace('<strong>ERROR<\/strong>:', ''));
                }
            } else if (this.status.data) {
                this.settings.customer.id = this.status.ID;
                 if (this.platform.is('cordova')){
                    this.oneSignal.getIds().then((data: any) => {
                        this.form.onesignal_user_id = data.userId;
                        this.form.onesignal_push_token = data.pushToken;
                        this.api.postItem('update_user_notification', this.form).subscribe(res =>{});
                    });
                 }
                if(this.status.allcaps.dc_vendor || this.status.allcaps.seller || this.status.allcaps.wcfm_vendor){
                    this.settings.vendor = true;
                }
                if(this.status.allcaps.administrator) {
                    this.settings.administrator = true;
                }
                this.navCtrl.navigateBack('/tabs/account');
            }
            this.disableSubmit = false;
        }, err => {
            this.disableSubmit = false;
        });
    }
    forgotton() {
        this.navCtrl.navigateForward('/tabs/account/login/forgotten');
    }

    appleLogin(){
        console.log('apple signin');
        var self=this;
        cordova.plugins.SignInWithApple.signin(
            { requestedScopes: [0, 1] },
            function (succ) {
               console.log(succ);
            //    alert(JSON.stringify(succ))
                var userData= { first_name:'',last_name:'',email:'', phone:'',  password:'' };

                let user = succ;
               userData.first_name = user.fullName.givenName;
                userData.last_name = user.fullName.familyName;
                userData.email = user.email;
                userData.password = "123456";
                userData.phone = " ";


                console.log("-------- apple login user ---------: ", userData);

                self.api.postItem('create-user', userData).subscribe(res => {
                    self.status = res;
                    console.log('apple register-status-------')
                    console.log(res);
                    if (self.status.errors) {
                        self.errors = self.status.errors;
                        self.disableSubmit = false;
                        for (var key in self.errors) {
                            self.errors[key].forEach(item => item.replace('<strong>ERROR<\/strong>:', ''));
                        }
                    } else if (self.status.data != undefined) {
                        self.settings.customer.id = self.status.ID;
                        if (self.platform.is('cordova'))
                            self.oneSignal.getIds().then((data: any) => {
                                self.pushForm.onesignal_user_id = data.userId;
                                self.pushForm.onesignal_push_token = data.pushToken;
                                self.api.postItem('update_user_notification', self.pushForm).subscribe(res =>{});
                            });
                        self.navCtrl.navigateBack('/tabs/account');
                        self.disableSubmit = false;
                    }
                    else self.disableSubmit = false;
                }, err => {
                    self.disableSubmit = false;
                });


            },
            function (err) {
                console.error(err)
                console.log(JSON.stringify(err))
            }
        )
    }

    googleLogin(){
        this.googleLogingInn = true;
        this.googlePlus.login({})
        .then(res => {
            this.googleStatus = res;
            this.api.postItem('google_login', {
                    "access_token": this.googleStatus.userId,
                    "email": this.googleStatus.email,
                    "first_name": this.googleStatus.givenName,
                    "last_name": this.googleStatus.familyName,
                    "display_name": this.googleStatus.displayName,
                    "image": this.googleStatus.imageUrl
                }).subscribe(res => {
                this.status = res;
                if (this.status.errors) {
                    this.errors = this.status.errors;
                } else if (this.status.data) {
                    this.settings.customer.id = this.status.ID;
                     if (this.platform.is('cordova')){
                        this.oneSignal.getIds().then((data: any) => {
                            this.form.onesignal_user_id = data.userId;
                            this.form.onesignal_push_token = data.pushToken;
                        });
                       this.api.postItem('update_user_notification', this.form).subscribe(res =>{});
                     }
                    if(this.status.allcaps.dc_vendor || this.status.allcaps.seller || this.status.allcaps.wcfm_vendor){
                        this.settings.vendor = true;
                    }
                    if(this.status.allcaps.administrator) {
                        this.settings.administrator = true;
                    }
                    this.navCtrl.navigateBack('/tabs/account');
                }
                this.googleLogingInn = false;
            }, err => {
                this.googleLogingInn = false;
            });
            this.googleLogingInn = false;
        })
        .catch(err => {
            this.googleStatus = err;
            this.googleLogingInn = false;
        });
    }
    facebookLogin(){
        this.facebookLogingInn = true;
        this.facebook.login(['public_profile', 'email'])
        .then((res: FacebookLoginResponse) => {
            this.faceBookStatus = res;
            this.api.postItem('facebook_login', {
                    "access_token": this.faceBookStatus.authResponse.accessToken,
                }).subscribe(res => {
                this.status = res;
                if (this.status.errors) {
                    this.errors = this.status.errors;
                } else if (this.status.data) {
                    this.settings.customer.id = this.status.ID;
                     if (this.platform.is('cordova')){
                        this.oneSignal.getIds().then((data: any) => {
                            this.form.onesignal_user_id = data.userId;
                            this.form.onesignal_push_token = data.pushToken;
                        });
                       this.api.postItem('update_user_notification', this.form).subscribe(res =>{});
                     }
                    if(this.status.allcaps.dc_vendor || this.status.allcaps.seller || this.status.allcaps.wcfm_vendor){
                        this.settings.vendor = true;
                    }
                    if(this.status.allcaps.administrator) {
                        this.settings.administrator = true;
                    }
                    this.navCtrl.navigateBack('/tabs/account');
                }
                this.facebookLogingInn = false;
            }, err => {
                this.facebookLogingInn = false;
            });
            this.facebookLogingInn = false;
        })
        .catch(e => {
            this.faceBookStatus = e;
            this.facebookLogingInn = false;
        });
    }
    loginWithPhone(){
        this.phoneLogingInn = true;
        (<any>window).AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "IN",
            facebookNotificationsEnabled: true,
          }, data => {
          (<any>window).AccountKitPlugin.getAccount(
            info => this.handlePhoneLogin(info),
            err => this.handlePhoneLogin(err));
          });
    }
    handlePhoneLogin(info){
        if(info.phoneNumber) {
            this.api.postItem('phone_number_login', {
                    "phone": info.phoneNumber,
                }).subscribe(res => {
                this.status = res;
                if (this.status.errors) {
                    this.errors = this.status.errors;
                } else if (this.status.data) {
                    this.settings.customer.id = this.status.ID;
                     if (this.platform.is('cordova')){
                        this.oneSignal.getIds().then((data: any) => {
                            this.form.onesignal_user_id = data.userId;
                            this.form.onesignal_push_token = data.pushToken;
                        });
                       this.api.postItem('update_user_notification', this.form).subscribe(res =>{});
                     }
                    if(this.status.allcaps.dc_vendor || this.status.allcaps.seller || this.status.allcaps.wcfm_vendor){
                        this.settings.vendor = true;
                    }
                    if(this.status.allcaps.administrator) {
                        this.settings.administrator = true;
                    }
                    this.navCtrl.navigateBack('/tabs/account');
                }
                this.phoneLogingInn = false;
            }, err => {
                this.phoneLogingInn = false;
            });
        } else this.phoneLogingInn = false;
    }
    handlePhoneLoginError(error){
        this.phoneVerificationError = error;
        this.phoneLogingInn = false;
    }
}