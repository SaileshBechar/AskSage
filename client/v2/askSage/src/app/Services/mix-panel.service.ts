import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';

@Injectable({
  providedIn: 'root'
})
export class MixPanelService {
  constructor() { }

  /**
  * Initialize mixpanel.
  *
  * @param {string} userId
  * @memberof MixpanelService
  */
  init(userId: string =""): void {
    mixpanel.init('fa268afdf77e936a3280b21b1f55391a');
    // mixpanel.track("Success");
    mixpanel.identify(userId);
  }
  
  setUser(obj: any): void {
    mixpanel.people.set(obj);
  }


  /**
 * Push new action to mixpanel.
 *
 * @param {string} id Name of the action to track.
 * @param {*} [action={}] Actions object with custom properties.
 * @memberof MixpanelService
 */
  track(id: string, action: any={}): void {
    mixpanel.track(id, action);
  }







}
