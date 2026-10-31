const VENUE_GROUPS = {
    "台北地區": {
        '台北小巨蛋': { address: '105台北市松山區南京東路四段2號', city: '台北', country: '台灣', lat: 25.050869143798376, lng: 121.55012694561724 },
        '台北大巨蛋': { address: '110臺北市信義區忠孝東路四段515號', city: '台北', country: '台灣', lat: 25.04258246025993, lng: 121.55947441600554 },
        '國家音樂廳': { address: '100台北市中正區中山南路21-1號', city: '台北', country: '台灣', lat: 25.037243270206083, lng: 121.51921454528697 },
        '國家戲劇院': { address: '100台北市中正區中山南路21-1號', city: '台北', country: '台灣', lat: 25.035533491072826, lng: 121.5181869066489 },
        '台北流行音樂中心': { address: '115台北市南港區市民大道八段99號', city: '台北', country: '台灣', lat: 25.051761925356043, lng: 121.59746964860086 },
        'legacy taipei': { address: '100台北市中正區八德路一段1號', city: '台北', country: '台灣', lat: 25.045075963835178, lng: 121.52947680093449 },
        'clapper studio': { address: '100台北市中正區市民大道三段2號5樓', city: '台北', country: '台灣', lat: 25.045494703436734, lng: 121.53114367886967 },
        'Ticc台北國際會議中心': { address: '110臺北市信義區西村里信義路五段1號', city: '台北', country: '台灣', lat: 25.03352715086782, lng: 121.56088925106721 },
        '台大綜合體育館': { address: '106臺北市大安區學府里羅斯福路四段1號', city: '台北', country: '台灣', lat: 25.021715411114684, lng: 121.5351168335951 },
        '城市舞台': { address: '105臺北市松山區美仁里八德路三段25號b1', city: '台北', country: '台灣', lat: 25.04844556239885, lng: 121.55149130132757 }, 
        '天母體育館': { address: '11153臺北市士林區三玉里忠誠路二段101號', city: '台北', country: '台灣', lat: 25.116040737828918, lng: 121.53509357921622 },
        '南港101': { address: '115臺北市南港區東新里重陽路72號', city: '台北', country: '台灣', lat: 25.056010425891838, lng: 121.59853301064886 },
        '台北親子劇場': { address: '110臺北市信義區西村里市府路1號2F', city: '台北', country: '台灣', lat: 25.037715648403584, lng: 121.56399690296568 }, 
        'Y17青少年育樂中心': { address: '100臺北市中正區東門里仁愛路一段17號', city: '台北', country: '台灣', lat: 25.039146693943884, lng: 121.52226513510783 },
        '南港展覽館': { address: '115臺北市南港區三重里經貿二路1號', city: '台北', country: '台灣', lat: 25.05665075007106, lng: 121.61811773411377 },
        'MOONDOG': { address: '105臺北市松山區中崙里復興南路一段39號9F', city: '台北', country: '台灣', lat: 25.046093081476776, lng: 121.54435028151323 },
    },
    "新北地區": {
        'zepp new taipei': { address: '242新北市新莊區新北大道四段3號8樓', city: '新北', country: '台灣', lat: 25.059882353045417, lng: 121.44956187444275 }, 
        '五股工商展覽館': { address: '248新北市五股區興珍里五權路1號', city: '新北', country: '台灣', lat: 25.064661189571467, lng: 121.44778124487708 }, 
        '台北縣政府多功能集會堂': { address: '220新北市板橋區福丘里中山路一段161號3樓', city: '新北', country: '台灣', lat: 25.012474477038293, lng: 121.46488063273291 }, 
        '新莊體育館': { address: '242新北市新莊區中華路一段75號', city: '新北', country: '台灣', lat: 25.040509829699275, lng: 121.45183508161843 },
    },
    "桃園地區": {
        '林口體育館': { address: '333桃園市龜山區文青里文化一路250號', city: '桃園', country: '台灣', lat: 25.03495419475436, lng: 121.38352754549365 }, 
        '桃園高鐵站前廣場': { address: '320桃園市中壢區高鐵北路一段', city: '桃園', country: '台灣', lat: 25.01212009088284, lng: 121.21624902110081 },
    },
    "台中地區": {
        '台中歌劇院': { address: '407025臺中市西屯區惠來里惠來路二段101號', city: '台中', country: '台灣', lat: 24.162874300817666, lng: 120.64030280364565 },
    },
    "高雄地區": {
        '高雄巨蛋': { address: '813高雄市左營區博愛二路757號', city: '高雄', country: '台灣', lat: 22.668964353203204, lng: 120.30272353906626 },
        '高雄流行音樂中心': { address: '803高雄市鹽埕區真愛路1號', city: '高雄', country: '台灣', lat: 22.61807018466348, lng: 120.28891687332745 },
        '高雄世運主場館': { address: '813高雄市左營區莒光里世運大道100號B1', city: '高雄', country: '台灣', lat: 22.703507250877607, lng: 120.29440002576625 },
    },
    "日本地區": {
        '東京巨蛋': { address: '日本東京都文京區後樂一丁目3番61號', city: '東京', country: '日本', lat: 35.705788, lng: 139.751913 },
        '日本武道館': { address: '日本東京都千代田區北之丸公園2番3號', city: '東京', country: '日本', lat: 35.693628, lng: 139.749690 },
    },
    "韓國地區": {
        '奧林匹克體操競技場': { address: '424 Olympic-ro, Songpa District, Seoul, 南韓', city: '首爾', country: '南韓', lat: 37.5191503, lng: 127.1273644 },
        '高尺天空巨蛋': { address: '430 Gyeongin-ro, Guro District, Seoul, 南韓', city: '首爾', country: '南韓', lat: 37.498231, lng: 126.867119 },
        '仁川亞運主體育場': { address: '379-2 Yeonhui-dong, Seo-gu, Incheon, 南韓', city: '仁川', country: '南韓', lat: 37.548232, lng: 126.666994 },
        '高陽體育館': { address: '1601 Jungang-ro, Ilsanseo-gu, Goyang-si, Gyeonggi-do, 南韓', city: '高陽', country: '南韓', lat: 37.676422, lng: 126.743056 },
    },
    "香港地區": {
        '啟德主場館': { address: '香港九龍九龍城承啟道39號', city: '香港', country: '香港', lat: 22.322383, lng: 114.197416 },
        '紅館': { address: '香港九龍紅磡灣暢運道9號', city: '香港', country: '香港', lat: 22.301453, lng: 114.182034 },
        '亞洲國際博覽館': { address: '香港新界赤鱲角航展道1號', city: '香港', country: '香港', lat: 22.321510, lng: 113.943243 },
    },
    "新加坡地區": {
        '新加坡室內體育館': { address: '2 Stadium Walk, Singapore 397691', city: '新加坡', country: '新加坡', lat: 1.300903, lng: 103.874351 },
        '星宇表演藝術中心': { address: '1 Vista Exchange Grn, #04-01新加坡 138617', city: '新加坡', country: '新加坡', lat: 1.306928, lng: 103.788438 },
        '國家體育場': { address: '1 Stadium Dr, 新加坡 397629', city: '新加坡', country: '新加坡', lat: 1.304228, lng: 103.874875 },
    },
    "泰國地區": {
        '拉加曼加拉國家體育場': { address: '286 Soi Ramkhamhaeng 24 Yaek 18, Hua Mak, Bang Kapi, Bangkok 10240泰國', city: '曼谷', country: '泰國', lat: 13.763905, lng: 100.621300 },
        'Impact Arena': { address: 'IMPACT Arena Hall, Popular Rd, Ban Mai, Amphoe Pak Kret, Nonthaburi 11120泰國', city: '曼谷', country: '泰國', lat: 13.911885, lng: 100.548386 },
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
