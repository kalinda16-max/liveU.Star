const VENUE_GROUPS = {
    "台北地區": {
        '台北小巨蛋': { address: '105台北市松山區南京東路四段2號', city: '台北', country: '台灣', lat: 25.050777, lng: 121.550125 },
        '台北大巨蛋': { address: '110臺北市信義區忠孝東路四段515號', city: '台北', country: '台灣', lat: 25.042622, lng: 121.559447 },
        '國家音樂廳': { address: '100台北市中正區中山南路21-1號', city: '台北', country: '台灣', lat: 25.037253, lng: 121.519225 },
        '國家戲劇院': { address: '100台北市中正區中山南路21-1號', city: '台北', country: '台灣', lat: 25.035467, lng: 121.518226 },
        '台北流行音樂中心': { address: '115台北市南港區市民大道八段99號', city: '台北', country: '台灣', lat: 25.052920, lng: 121.599074 },
        'legacy taipei': { address: '100台北市中正區八德路一段1號', city: '台北', country: '台灣', lat: 25.045186, lng: 121.529411 },
        'clapper studio': { address: '100台北市中正區市民大道三段2號5樓', city: '台北', country: '台灣', lat: 25.045704, lng: 121.531215 }
        'Ticc台北國際會議中心': { address: '110臺北市信義區西村里信義路五段1號', city: '台北', country: '台灣', lat: 25.032898, lng: 121.561059 }
        '台大綜合體育館': { address: '106臺北市大安區學府里羅斯福路四段1號', city: '台北', country: '台灣', lat: 25.021720, lng: 121.535122 }
        '城市舞台': { address: '105臺北市松山區美仁里八德路三段25號b1', city: '台北', country: '台灣', lat: 25.048610, lng: 121.551527 }
        '天母體育館': { address: '11153臺北市士林區三玉里忠誠路二段101號', city: '台北', country: '台灣', lat: 25.116273, lng: 121.535023 }
        '南港101': { address: '115臺北市南港區東新里重陽路72號', city: '台北', country: '台灣', lat: 25.056218, lng: 121.598426 }
        '台北親子劇場': { address: '110臺北市信義區西村里市府路1號2F', city: '台北', country: '台灣', lat: 25.037725, lng: 121.563975 }
        'Y17青少年育樂中心': { address: '100臺北市中正區東門里仁愛路一段17號', city: '台北', country: '台灣', lat: 25.039382, lng: 121.521998 }
        '南港展覽館': { address: '115臺北市南港區三重里經貿二路1號', city: '台北', country: '台灣', lat: 25.056690, lng: 121.618122 }
        'MOONDOG': { address: '105臺北市松山區中崙里復興南路一段39號9F', city: '台北', country: '台灣', lat: 25.056690, lng: 121.618122 }
    },
    "新北地區": {
        'zepp new taipei': { address: '242新北市新莊區新北大道四段3號8樓', city: '新北', country: '台灣', lat: 25.059882, lng: 121.449540 }
        '五股工商展覽館': { address: '248新北市五股區興珍里五權路1號', city: '新北', country: '台灣', lat: 25.064739, lng: 121.447771 }
        '台北縣政府多功能集會堂': { address: '220新北市板橋區福丘里中山路一段161號3樓', city: '新北', country: '台灣', lat: 25.012340, lng: 121.464882 }
        '新莊體育館': { address: '115臺北市南港區東新里重陽路72號', city: '新北', country: '台灣', lat: 25.040734, lng: 121.451835 }
    },
    "桃園地區": {
        '林口體育館': { address: '333桃園市龜山區文青里文化一路250號', city: '桃園', country: '台灣', lat: 25.034964, lng: 121.383560 }
        '桃園高鐵站前廣場': { address: '320桃園市中壢區高鐵北路一段', city: '桃園', country: '台灣', lat: 25.012143, lng: 121.216233 }
    },
    "台中地區": {
        '台中歌劇院': { address: '407025臺中市西屯區惠來里惠來路二段101號', city: '台中', country: '台灣', lat: 24.162865, lng: 120.640271 }
    },
    "高雄地區": {
        '高雄巨蛋': { address: '813高雄市左營區博愛二路757號', city: '高雄', country: '台灣', lat: 22.669068, lng: 120.302688 },
        '高雄流行音樂中心': { address: '803高雄市鹽埕區真愛路1號', city: '高雄', country: '台灣', lat: 22.617619, lng: 120.288489 }
        '高雄世運主場館': { address: '813高雄市左營區莒光里世運大道100號B1', city: '高雄', country: '台灣', lat: 22.703364, lng: 120.294502 }
    },
    "日本地區": {
        '東京巨蛋': { address: '日本東京都文京區後樂一丁目3番61號', city: '東京', country: '日本', lat: 35.705788, lng: 139.751913 },
        '日本武道館': { address: '日本東京都千代田區北之丸公園2番3號', city: '東京', country: '日本', lat: 35.693628, lng: 139.749690 },
    },
    "韓國地區": {
        '奧林匹克體操競技場': { address: '424 Olympic-ro, Songpa District, Seoul, 南韓', city: '首爾', country: '南韓', lat: 37.5193, lng: 127.1274 },
        '高尺天空巨蛋': { address: '430 Gyeongin-ro, Guro District, Seoul, 南韓', city: '首爾', country: '南韓', lat: 37.4982, lng: 127.6873 },
        '仁川亞運主體育場': { address: '379-2 Yeonhui-dong, Seo-gu, Incheon, 南韓', city: '仁川', country: '南韓', lat: 37.5474, lng: 126.6658 },
        '高陽體育館': { address: '1601 Jungang-ro, Ilsanseo-gu, Goyang-si, Gyeonggi-do, 南韓', city: '高陽', country: '南韓', lat: 37.6763, lng: 127.7432 }
    },
    "香港地區": {
        '啟德主場館': { address: '香港九龍九龍城承啟道39號', city: '香港', country: '中國', lat: 22.322383, lng: 114.197416 },
        '紅館': { address: '香港九龍紅磡灣暢運道9號', city: '香港', country: '中國', lat: 22.301453, lng: 114.182034 },
        '亞洲國際博覽館': { address: '香港新界赤鱲角航展道1號', city: '香港', country: '中國', lat: 22.321510, lng: 114.943243 },
    },
    "新加坡地區": {
        '新加坡室內體育館': { address: '2 Stadium Walk, Singapore 397691', city: '新加坡', country: '新加坡', lat: 1.300903, lng: 103.874351 },
        '星宇表演藝術中心': { address: '1 Vista Exchange Grn, #04-01新加坡 138617', city: '新加坡', country: '新加坡', lat: 1.306928, lng: 103.788438 },
        '國家體育場': { address: '1 Stadium Dr, 新加坡 397629', city: '新加坡', country: '新加坡', lat: 1.304228, lng: 103.874875 },
    },
    "泰國地區": {
        '拉加曼加拉國家體育場': { address: '286 Soi Ramkhamhaeng 24 Yaek 18, Hua Mak, Bang Kapi, Bangkok 10240泰國', city: '曼谷', country: '泰國', lat: 13.763905, lng: 100.621300 },
        'Impact Arena': { address: 'IMPACT Arena Hall, Popular Rd, Ban Mai, Amphoe Pak Kret, Nonthaburi 11120泰國', city: '曼谷', country: '泰國', lat: 13.911885, lng: 100.548386 }
    },
    "馬來西亞地區": {
        '亞通體育館': { address: 'Sports City, Level 2, Unifi Arena, Sri Petaling, 57700 Kuala Lumpur, Selangor, 馬來西亞', city: '吉隆坡', country: '馬來西亞', lat: 3.054093, lng: 101.693391 },
        '武吉加里爾國家體育場': { address: 'Bukit Jalil, 57000 Kuala Lumpur, Malaysia馬來西亞', city: '吉隆坡', country: '馬來西亞', lat: 3.054823, lng: 101.691320 },
    }
};

// 2. 自動將上方分類展開，組合成原本 HTML 需要的扁平結構
window.VENUE_DATABASE = {};
Object.values(VENUE_GROUPS).forEach(group => {
    Object.assign(window.VENUE_DATABASE, group);
});
