let mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
}

let map = new naver.maps.Map('map', mapOptions);

// let locationBtnHtml = '<a href="#" class="btn_mylct"><span class="spr_trff spr_ico_mylct">NAVER 그린팩토리</span></a>';
let streetViewButton = '<button id="street" class="btn">거리뷰</button>'

let quitButton = '<button id="quit" class="btn">X</button>'

let customControl = new naver.maps.CustomControl(streetViewButton, {
    position: naver.maps.Position.TOP_RIGHT
});

naver.maps.Event.once(map, 'init', function() {
    customControl.setMap(map);
});

// 커스텀 컨트롤러에는 별도의 돔리스너를 달아줘야 한다.
naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function() {
    viewStreet();
});

let pano = null;

    function initPanorama(){

        // 3. 파노라마 옵션 설정하기
        let panoramaOptions = {
            position: new naver.maps.LatLng(37.3599605, 127.1058814),
            //size: new naver.map.Size(800, 600),
            pov: {
                pan: -135,
                tilt: 29,
                fov: 100
            },
            minScale: 0,
            maxScale: 5
        }
        
        // 4. 파노라마 생성하기
        pano = new naver.maps.Panorama(document.getElementById("pano"), panoramaOptions);
        /** 파노라마 생성하는 다른 방법
        let pano = new naver.maps.Ponrama("pano", {
            position: new naver.maps.Lating(37.3599605, 127.1058814)
        });
        */

        // 5. 파노라마 보이기
        naver.maps.Event.addListener(pano, "init", function() {
            pano.setVisible(false);
        });
        
        
        /**
        6. 파노라마 위치와 시야(POV - Point Of View)
        1) 상태변경 알림 : pano_changed - 파노라마 id 또는 위치 변경시 발생 / pov_changed - 파노라마 시야 변경시 발생
        2) 이벤트 : init - 파노라마 초기화를 끝내면 발생 / pano_status - 파노라마 조회를 끝내면 발생
        */
        naver.maps.Event.addListener(pano, "pano_changed", function() {
            // 위치
            // console.log("PonoramaLocation", pano.getLocation());
        })

        naver.maps.Event.addListener(pano, "pov_changed", function() {
            // 시야
            // console.log("PonoramaPov", pano.getPov());
        })
    }
    
naver.maps.onJSContentLoaded = initPanorama;