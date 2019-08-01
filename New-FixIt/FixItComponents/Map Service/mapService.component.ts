import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MapService{
    pin : Pins
    pins: any

    constructor(private http: HttpClient){}
    url = "http://localhost:5000/pins"
    createMap(map, pos, callback){
        var tempX;
        var tempY;
        this.getPins(function(data){
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

              //search bar stuff
            //   var input = <HTMLInputElement>document.getElementById('pac-input');
            
            //   var searchBox = new google.maps.places.SearchBox(input);
            //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            //   map.addListener('bounds_changed', function(){
            //     searchBox.setBounds(map.getBounds());
            //   });

            //   searchBox.addListener('places_changed', function(){
            //     var places = searchBox.getPlaces();

            //     if (places.length == 0) {
            //       return;
            //     }
            //   })

              var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Broken Sign',
                draggable: true
              });

              var temp = data;
              for(var i = 0; i < temp.length; i++){
                console.log(temp[i].latitude + ' ' + temp[i].longitude)
                var tempMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(temp[i].latitude,temp[i].longitude),
                    title: String(temp[i].sign_type),
                    icon: {
                        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                    },
                    map: map,
                    draggable: false
                });
                tempMarker.setMap(map)
              }
              marker.setMap(map);
              marker.addListener('dragend', function(pos) {
                //map.setZoom(8);
                console.log("Marker Moved! " + marker.getPosition());
                map.setCenter(marker.getPosition());
                tempX = marker.getPosition().lat().toFixed(3);
                tempY = marker.getPosition().lng().toFixed(3);
                callback(tempX, tempY);
                });
            });
        });
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     pos = {
        //       lat: position.coords.latitude,
        //       lng: position.coords.longitude
        //     };
        //   console.log(pos);
        //   map = new google.maps.Map(document.getElementById('gmap'), {
        //     center: pos,
        //     zoom: 15
        //   });
        //   var marker = new google.maps.Marker({
        //     position: pos,
        //     map: map,
        //     title: 'Broken Sign',
        //     draggable: true
        //   });
        //   marker.setMap(map);
        //   marker.addListener('dragend', function(pos) {
        //     //map.setZoom(8);
        //     console.log("Marker Moved! " + marker.getPosition());
        //     map.setCenter(marker.getPosition());
        //     tempX = marker.getPosition().lat().toFixed(3);
        //     tempY = marker.getPosition().lng().toFixed(3);
        //     callback(tempX, tempY);
        //     });
        // });
    }

    getPins(callback){
        $.ajax({
            url: this.url,
            type:"GET",
            success: callback,
            dataType:"json"
        });
    }
    postPins(pin: Pins, callback){
        this.http.post(`${this.url}`, pin, {responseType: 'text'}).subscribe(
            res=>{
                console.log("Posted result ", res);
                callback();
            },
            err=>{
                console.log("error ", err);
            }
        );
    }

}

export class Pins{
    id: number
    sign_type: string
    sign_condition: string
    latitude: string
    longitude: string 
}