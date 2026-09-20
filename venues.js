const VENUE_GROUPS = {
    "台北地區": {
        '台北小巨蛋': { address: '105台北市松山區南京東路四段2號', city: '台北', country: '台灣', lat: 25.050777, lng: 121.550125 },
        '台北大巨蛋': { address: '110臺北市信義區忠孝東路四段515號', city: '台北', country: '台灣', lat: 25.042622, lng: 121.559447 },
        '國家音樂廳': { address: '100台北市中正區中山南路21-1號', city: '台北', country: '台灣', lat: 25.037253, lng: 121.519225 },
        '國家戲劇院': { address: '100台北市中正區中山南路21-1號', city: '台北', country: '台灣', lat: 25.035467, lng: 121.518226 },
        '台北流行音樂中心': { address: '115台北市南港區市民大道八段99號', city: '台北', country: '台灣', lat: 25.052920, lng: 121.599074 },
        'legacy taipei': { address: '100台北市中正區八德路一段1號', city: '台北', country: '台灣', lat: 25.045186, lng: 121.529411 },
        'clapper studio': { address: '100台北市中正區市民大道三段2號5樓', city: '台北', country: '台灣', lat: 25.045704, lng: 121.531215 }
        'Ticc台北國際會議中心': { address: '110臺北市信義區西村里信義路五段1號', city: '台北', country: '台灣', lat: 25.033755, lng: 121.560902 }
        '台大綜合體育館': { address: '106臺北市大安區學府里羅斯福路四段1號', city: '台北', country: '台灣', lat: 25.021893, lng: 121.535181 }
        '城市舞台': { address: '105臺北市松山區美仁里八德路三段25號b1', city: '台北', country: '台灣', lat: 25.048610, lng: 121.551527 }
        '天母體育館': { address: '11153臺北市士林區三玉里忠誠路二段101號', city: '台北', country: '台灣', lat: 25.116273, lng: 121.535023 }
        '南港101': { address: '115臺北市南港區東新里重陽路72號', city: '台北', country: '台灣', lat: 25.056218, lng: 121.598426 }
        '新莊體育館': { address: '115臺北市南港區東新里重陽路72號', city: '台北', country: '台灣', lat: 25.040734, lng: 121.451835 }
        '台北親子劇場': { address: '110臺北市信義區西村里市府路1號2F', city: '台北', country: '台灣', lat: 25.037725, lng: 121.563975 }
        'Y17青少年育樂中心': { address: '100臺北市中正區東門里仁愛路一段17號', city: '台北', country: '台灣', lat: 25.039382, lng: 121.521998 }
        '南港展覽館': { address: '115臺北市南港區三重里經貿二路1號', city: '台北', country: '台灣', lat: 25.056690, lng: 121.618122 }
        'MOONDOG': { address: '105臺北市松山區中崙里復興南路一段39號9F', city: '台北', country: '台灣', lat: 25.056690, lng: 121.618122 }
    },
    "新北地區": {
        'zepp new taipei': { address: '242新北市新莊區新北大道四段3號8樓', city: '新北', country: '台灣', lat: 25.059882, lng: 121.449540 }
        '五股工商展覽館': { address: '248新北市五股區興珍里五權路1號', city: '新北', country: '台灣', lat: 25.064739, lng: 121.447771 }
        '台北縣政府多功能集會堂': { address: '220新北市板橋區福丘里中山路一段161號3樓', city: '新北', country: '台灣', lat: 25.012340, lng: 121.464882 }
    },
    "桃園地區": {
        '林口體育館': { address: '333桃園市龜山區文青里文化一路250號', city: '新北', country: '台灣', lat: 25.034964, lng: 121.383560 }
        '桃園高鐵站前廣場': { address: '320桃園市中壢區高鐵北路一段', city: '新北', country: '台灣', lat: 25.012143, lng: 121.216233 }
    },
    "台中地區": {
        '台中歌劇院': { address: '407025臺中市西屯區惠來里惠來路二段101號', city: '新北', country: '台灣', lat: 24.162865, lng: 120.640271 }
    },
    "高雄地區": {
        '高雄巨蛋': { address: '813高雄市左營區博愛二路757號', city: '高雄', country: '台灣', lat: 22.669068, lng: 120.302688 },
        '高雄流行音樂中心': { address: '803高雄市鹽埕區真愛路1號', city: '高雄', country: '台灣', lat: 22.617619, lng: 120.288489 }
        '高雄世運主場館': { address: '813高雄市左營區莒光里世運大道100號B1', city: '高雄', country: '台灣', lat: 22.703364, lng: 120.294502 }
    },
    "日本地區": {
        '東京巨蛋': { address: '日本東京都文京區後樂一丁目3番61號', city: '東京', country: '日本', lat: 35.705788, lng: 139.751913 },
        'tokyo dome': { address: '1-3 Koraku, Bunkyo City, Tokyo 112-0004', city: '東京', country: '日本', lat: 35.705788, lng: 139.751913 },
        '日本武道館': { address: '日本東京都千代田區北之丸公園2番3號', city: '東京', country: '日本', lat: 35.693628, lng: 139.749690 },
        'budokan': { address: '2-3 Kitanomarukoen, Chiyoda City, Tokyo 102-0091', city: '東京', country: '日本', lat: 35.693628, lng: 139.749690 }
    }
};

// 2. 自動將上方分類展開，組合成原本 HTML 需要的扁平結構
window.VENUE_DATABASE = {};
Object.values(VENUE_GROUPS).forEach(group => {
    Object.assign(window.VENUE_DATABASE, group);
});
