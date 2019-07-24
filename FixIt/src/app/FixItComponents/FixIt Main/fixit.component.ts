import { Component, OnInit, Injectable } from '@angular/core';
import { } from 'googlemaps';

@Component({
    selector: 'fixit-component',
    templateUrl: './fixit.component.html',
    styleUrls: ['./fixit.component.css']
})
@Injectable()
export class FixItComponent implements OnInit{
    loc: google.maps.LatLng;
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
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      
      console.log(pos);
      map = new google.maps.Map(document.getElementById('gmap'), {
        center: pos,
        zoom: 15
      });
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Hello World!',
        draggable: true
      });
      marker.addListener('dragend', function() {
        //map.setZoom(8);
        console.log("Marker Moved!"+marker.getPosition());
        map.setCenter(marker.getPosition());
        });
    });    
    }
    submitNewSign() {
      //redirect to map
    }
}