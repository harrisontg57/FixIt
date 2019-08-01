import { Component, OnInit, Injectable } from '@angular/core';
import { MapService, Pins } from '../Map Service/mapService.component'
import { } from 'googlemaps';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'fixit-component',
    templateUrl: './fixit.component.html',
    styleUrls: ['./fixit.component.css']
})
@Injectable()
export class FixItComponent implements OnInit{
  loc: google.maps.LatLng;
  pin : Pins

  constructor(private mapService : MapService, private http: HttpClient){}

  ngOnInit() {
    this.addMapsScript();
  }
  addMapsScript() {
    if (!document.querySelectorAll(`[src="${"https://maps.googleapis.com/maps/api/js?key=AIzaSyB7HLY5vQ782xsEQ0DYwc_uam_nLM3i1YQ"}"]`).length) { 
      document.body.appendChild(Object.assign(
        document.createElement('script'), {
          type: 'text/javascript',
          src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB7HLY5vQ782xsEQ0DYwc_uam_nLM3i1YQ",
          onload: () => this.doMapInitLogic()
        }));
    } else {
        this.doMapInitLogic();
      } 
  }
   
  doMapInitLogic() {
    console.log("Works?");
    var map;
    var pos;
    this.mapService.createMap(map, pos, function(lat, lng){
      var latLabel = document.createElement('p');
      latLabel.innerHTML = String(lat);
      latLabel.setAttribute('id', 'lat');

      var lngLabel = document.createElement('p');
      lngLabel.innerHTML = String(lng);
      lngLabel.setAttribute('id', 'lng');

      var elem = document.getElementById('coords');
      var child1 = document.getElementById('lat');
      var child2 = document.getElementById('lng');

      elem.replaceChild(latLabel, child1);
      elem.replaceChild(lngLabel, child2);
    });
    //this.mapService.addMarkers();
  }

  submitNewSign() {
    this.pin = {
      id: undefined,
      sign_type: String($("input[name=signType]:checked").val()),
      sign_condition: String($("#cond").val()),
      latitude: String($('#lat').text()),
      longitude: String($('#lng').text())
    }
    this.mapService.postPins(this.pin, function(){
      alert("Marker has been added");
    })
  }

}