import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Config } from './config';
import { HTTP } from '@ionic-native/http/ngx';
import { Headers } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  options: any = {};
  constructor(private http: HttpClient, private config: Config, private ionicHttp: HTTP) {
  	this.options.withCredentials = true;
    this.options.headers = headers;
  }

	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	    // Let the app keep running by returning an empty result.
	    return of(result as T);
	  };
	}

	getBlocks() {
	  const url = `${this.config.url}/wp-admin/admin-ajax.php?action=mstoreapp-keys`;
	  return this.http.get(url, this.config.options).pipe(
	    tap(_ => {}),
	    catchError(this.handleError(`getBlocks`))
	  );
	}

	getItem(endPoint, filter = {}) {
		const url = this.config.setUrl('GET', '/wp-json/wc/v3/' + endPoint + '?', filter);
		return this.http.get(url).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	deleteItem(endPoint, id){
		const url = this.config.setUrl('DELETE', '/wp-json/wc/v3/' + endPoint + "/" + id + '?',{});
		return this.http.delete(url).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	postFlutterItem(endPoint, data = {}){
		var params = new HttpParams();
		for (var key in data) { if('object' !== typeof(data[key])) params = params.set(key, data[key]) }
		params = params.set('lang', this.config.lang);
		const url = this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-' + endPoint;
		return this.http.post(url, params, this.config.options).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	postItem(endPoint, data = {}){
		var params = new HttpParams();
		for (var key in data) { if('object' !== typeof(data[key])) params = params.set(key, data[key]) }
		params = params.set('lang', this.config.lang);
		const url = this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-' + endPoint;
		return this.http.post(url, params, this.config.options).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	updateOrderReview(endPoint, data = {}){
		delete data['terms_content'];
		delete data['logout_url'];
		delete data['terms'];
		delete data['terms_url'];
		var params = new HttpParams();
		for (var key in data) { if('object' !== typeof(data[key])) params = params.set(key, data[key]) }
		params = params.set('lang', this.config.lang);
		params = params.set('post_data', params.toString());
		const url = this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-' + endPoint;
		return this.http.post(url, params, this.config.options).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	updateCart(endPoint, params){
		const url = this.config.url + endPoint;
		params = params.set('lang', this.config.lang);
		return this.http.post(url, params, this.config.options).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	getItemMstore(endPoint, filter = {}){
		const url = this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-' + endPoint;
		return this.http.get(url, this.config.options).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	ajaxCall(endPoint, data = {}){
		var params = new HttpParams();
		for (var key in data) { if('object' !== typeof(data[key])) params = params.set(key, data[key]) }
		const url = this.config.url + endPoint;
		return this.http.post(url, params, this.config.options).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	getPosts(endPoint){
		return this.http.get(this.config.url + endPoint).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	WCMPVendor(endPoint, params = {}){
		const url = this.config.setUrl('GET', '/wp-json/wcmp/v1/' + endPoint + '?', params);
		return this.http.get(url).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	put(endPoint, data, params = {}){
		const url = this.config.setUrl('PUT', '/wp-json/wc/v3/' + endPoint + '?', params);
		return this.http.put(url, data).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}
	
	wcpost(endPoint, data, params = {}){
		const url = this.config.setUrl('POST', '/wp-json/wc/v3/' + endPoint + '?', params);
		return this.http.post(url, data).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	getReviews(endPoint, filter = {}){
		const url = this.config.setUrl('GET', '/wp-json/wc/v2/' + endPoint + '?', filter);
		return this.http.get(url).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	getExternalData(url, data = {}){
		var params = new HttpParams();
		for (var key in data) { if('object' !== typeof(data[key])) params = params.set(key, data[key]) }
		return this.http.post(url, params, this.config.options);
	}

	getAddonsList(endPoint, filter = {}){
		const url = this.config.setUrl('GET', '/wp-json/wc-product-add-ons/v1/' + endPoint + '?', filter);
		return this.http.get(url).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	getWCFM(endPoint, params = {}){
		const url = this.config.setUrl('GET', '/wp-json/wcfmmp/v1/' + endPoint + '?', params);
		return this.http.get(url).pipe(
		    tap(_ => {}),
		    catchError(this.handleError(endPoint))
		);
	}

	getWCFMIonic(endPoint, params = {}){
		const url = this.config.setUrl('GET', '/wp-json/wcfmmp/v1/' + endPoint + '?', params);
		return new Promise(resolve => {
            this.ionicHttp.get(url, {}, {})
			  .then(data => {
            	resolve(JSON.parse(data.data));
			  })
			  .catch(error => {
			  	resolve(JSON.parse(error.error));
		  	});
        });
	}

	getItemIonic(endPoint, filter = {}) {
		const url = this.config.setUrl('GET', '/wp-json/wc/v3/' + endPoint + '?', filter);
		return new Promise(resolve => {
            this.ionicHttp.get(url, {}, {})
			  .then(data => {
            	resolve(JSON.parse(data.data));
			  })
			  .catch(error => {
			    resolve(JSON.parse(error.error));
		  	});
        });
	}

	deleteItemIonic(endPoint, id) {
		const url = this.config.setUrl('DELETE', '/wp-json/wc/v3/' + endPoint + "/" + id + '?',{});
		return new Promise(resolve => {
            this.ionicHttp.delete(url, {}, {})
			  .then(data => {
            	resolve(JSON.parse(data.data));
			  })
			  .catch(error => {
			    resolve(JSON.parse(error.error));
		  	});
        });
	}

	putItemIonic(endPoint, data, params = {}){
	    this.ionicHttp.setHeader(this.options, 'Content-Type', 'application/json; charset=UTF-8');
		this.ionicHttp.setDataSerializer('json');
		const url = this.config.setUrl('PUT', '/wp-json/wc/v3/' + endPoint + '?', params);
		return new Promise(resolve => {
            this.ionicHttp.put(url, data, {})
			  .then(data => {
            	resolve(JSON.parse(data.data));
			  })
			  .catch(error => {
			    resolve(JSON.parse(error.error));
		  	});
        });
	}

	postItemIonic(endPoint, data, params = {}){
	    this.ionicHttp.setHeader(this.options, 'Content-Type', 'application/json; charset=UTF-8');
		this.ionicHttp.setDataSerializer('json');
		const url = this.config.setUrl('POST', '/wp-json/wc/v3/' + endPoint + '?', params);
		return new Promise(resolve => {
            this.ionicHttp.post(url, data, {})
			  .then(data => {
			  	console.log(JSON.parse(data.data));
            	resolve(JSON.parse(data.data));
			  })
			  .catch(error => {
			  	console.log(JSON.parse(error.error));
			  	resolve(JSON.parse(error.error));
		  	});
        });
	}

	WCMPVendorIonic(endPoint, params = {}){
		const url = this.config.setUrl('GET', '/wp-json/wcmp/v1/' + endPoint + '?', params);
		return new Promise(resolve => {
            this.ionicHttp.get(url, {}, {})
			  .then(data => {
            	resolve(JSON.parse(data.data));
			  })
			  .catch(error => {
			  	resolve(JSON.parse(error.error));
		  	});
        });
	}
}
