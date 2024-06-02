import ApiService from '../framework/api-service.js';
import {Method} from '../consts.js';
import { adaptToServer } from '../utils.js';

export default class PointsApiService extends ApiService {
  getDestinations() {
    return this._load({url: 'destinations'}).then(ApiService.parseResponse);
  }

  getOffers() {
    return this._load({url: 'offers'}).then(ApiService.parseResponse);
  }

  getPoints() {
    return this._load({url: 'points'}).then(ApiService.parseResponse);
  }

  // get points() {
  //   return this._load({url: 'points'}).then(ApiService.parseResponse);
  // }

  // async updatePoint(point) {
  //   const response = await this._load({
  //     url: `points/${point.id}`,
  //     method: 'PUT',
  //     body: JSON.stringify(adaptToServer(point)),
  //     headers: new Headers({'Content-Type': 'application/json'}),
  //   });
  //   console.log(response);

  //   const parsedResponse = await ApiService.parseResponse(response);

  //   return parsedResponse;
  // }

  async updatePoint(update) {
    const response = await this._load({
      url: `points/${update.id}`,
      method: Method.PUT,
      body: JSON.stringify(adaptToServer(update)),
      headers: new Headers({'Content-Type': 'application/json'})
    });

    const parsedResponse = await ApiService.parseResponse(response);
    return parsedResponse;
  }

  // async addPoint(point) {
  //   const response = await this._load({
  //     url: 'points',
  //     method: 'POST',
  //     body: JSON.stringify(adaptToServer(point)),
  //     headers: new Headers({'Content-Type': 'application/json'}),
  //   });

  //   const parsedResponse = await ApiService.parseResponse(response);
  //   return parsedResponse;
  // }

  // async deletePoint(point) {
  //   await this._load({
  //     url: `points/${point.id}`,
  //     method: Method.DELETE,
  //   });
  // }
  addPoint = (data) => ({...data, id: crypto.randomUUID()});
  deletePoint = () => {};
}
