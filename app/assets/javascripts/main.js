// GoogleMap生成(経度と緯度はあとから挿入)
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    
    zoom: 14,
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

function search() {
  // 住所取得
  var address = document.getElementById("address").value;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({"address" : address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
       
      var lat = results[0].geometry.location.lat();//緯度を取得
      var lng = results[0].geometry.location.lng();//経度を取得
    　
      var mark = {
        lat, // 緯度
        lng // 経度
      };
      marker = new google.maps.Marker({ // マーカーの追加
        position: mark, // マーカーを立てる位置を指定
        map: map // マーカーを立てる地図を指定
      });
       
      map.setCenter(results[0].geometry.location); // 地図の中心を移動
    }
  });
}
// 渋滞情報のレイヤー作成(TrafficLayerという関数を使用する) 参考サイト:https://www.yoheim.net/blog.php?q=20111209
// 入力した住所の緯度と経度を取得(Geocoderという関数を使用する)
// 参考サイト①:https://www.geekpage.jp/web/google-maps-api/v3/geocoder-0.php
// 参考サイト②:https://sites.google.com/site/gmapsapi3/Home/services
// 参考サイト③:https://www.nanchatte.com/map/getLatLngByAddress.html
// 経度と緯度をもとにピンドメ(Marker()という関数使用)及びピン留めした部分を中央に表示(setCenter()という関数使用)
