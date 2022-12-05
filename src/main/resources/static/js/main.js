let mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
}

let map = new naver.maps.Map('map', mapOptions);

let locationBtnHtml = '<a href="#" class="btn_mylct"><span class="spr_trff spr_ico_mylct">NAVER 그린팩토리</span></a>';

let customControl = new naver.maps.CustomControl(locationBtnHtml, {
    position: naver.maps.Position.TOP_LEFT
});

naver.maps.Event.once(map, 'init', function() {
    customControl.setMap(map);
});