import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MapService{
    pin : Pins
    pins: any

    constructor(private http: HttpClient){}
    url = "http://localhost:5000/pins"
    //Instantiates map and loads it with pins representing previously added markers
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

              var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Broken Sign',
                icon: {
                    url: 'http://maps.google.com/mapfiles/kml/shapes/road_shield1.png'
                },
                draggable: true
              });
        
              var temp = data;
              for(var i = 0; i < temp.length; i++){
                console.log(temp[i].latitude + ' ' + temp[i].longitude)
                var tempMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(temp[i].latitude,temp[i].longitude),
                    title: String("Sign: " + temp[i].sign_type + "\nCondition: " + temp[i].sign_condition),
                    icon: {
                        url: 'http://maps.google.com/mapfiles/kml/shapes/caution.png'
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