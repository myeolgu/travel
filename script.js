const itineraryData = {
    1: {
        title: "Day 01: Hola Barcelona",
        subtitle: "2027년 4월 18일 - 도착 및 휴식",
        coords: [
            { name: "BCN Airport", lat: 41.2974, lon: 2.0833 },
            { name: "시내 이동 중 (Placa Espanya)", lat: 41.3749, lon: 2.1487 },
            { name: "Hotel Catalonia Passeig de Gracia", lat: 41.3901, lon: 2.1706 }
        ],
        timeline: [
            { time: "19:10", activity: "BCN 공항 도착 (Asiana)", desc: "직항 항공편(OZ511) 도착 기준", link: "https://m.flyasiana.com/C/KR/KO/index" },
            { time: "20:30", activity: "공항 -> 시내 이동", desc: "우버/택시를 이용하여 숙소로 이동 (약 42유로)" },
            { time: "21:30", activity: "호텔 체크인 및 휴식", desc: "Hotel Catalonia 체크인 및 인근 테라스 바 휴식" }
        ],
        dining: [
            { name: "Vinitus (비니투스)", type: "Tapas", desc: "맛조개와 꿀대구 필수 맛집." }
        ],
        costs: [
            { item: "공항 -> 시내 이동 (Uber)", krw: "72,576원" },
            { item: "호텔 인근 석식 (2인)", krw: "75,000원" },
            { item: "현지 관광세 (City Tax/1박)", krw: "28,500원" }
        ]
    },
    2: {
        title: "Day 02: Shopping Therapy",
        subtitle: "2027년 4월 19일 - 에이샴플레 & 그라시아",
        coords: [
            { name: "Hotel Catalonia (출발)", lat: 41.3901, lon: 2.1706 },
            { name: "Passeig de Gràcia", lat: 41.3916, lon: 2.1649 },
            { name: "Boqueria Market", lat: 41.3817, lon: 2.1714 },
            { name: "Gracia District", lat: 41.4031, lon: 2.1572 },
            { name: "Ciudad Condal (저녁)", lat: 41.3887, lon: 2.1666 },
            { name: "Hotel Catalonia (복귀)", lat: 41.3901, lon: 2.1706 }
        ],
        timeline: [
            { time: "09:50", activity: "숙소 출발", desc: "도보로 명품 거리 이동" },
            { time: "10:00", activity: "파세이그 드 그라시아", desc: "명품 쇼핑 및 건축물 구경" },
            { time: "13:00", activity: "보케리아 시장 중식", desc: "신선한 식재료와 활기찬 시장 분위기" },
            { time: "15:00", activity: "그라시아 지구", desc: "힙한 카페와 소품샵 탐방" },
            { time: "20:00", activity: "저녁 및 칵테일", desc: "현지인 맛집 시우다드 콘달에서의 타파스" },
            { time: "22:30", activity: "숙소 복귀", desc: "호텔 도착 및 휴식" }
        ],
        dining: [
            { name: "Ciudad Condal (시우다드 콘달)", type: "Tapas", desc: "언제나 북적이는 바르셀로나 최고의 타파스 명소." }
        ],
        costs: [
            { item: "식비 및 간식 (2인)", krw: "180,000원" },
            { item: "현지 관광세 (City Tax/1박)", krw: "28,500원" }
        ]
    },
    3: {
        title: "Day 03: Intensive Gaudi & Night Walk",
        subtitle: "2027년 4월 20일 - 가우디 집중 투어 & 야경",
        coords: [
            { name: "Hotel Catalonia (출발)", lat: 41.3901, lon: 2.1706 },
            { name: "Meeting: El Fornet Cafe", lat: 41.3918, lon: 2.1652 },
            { name: "Casa Batllo & Milà", lat: 41.3916, lon: 2.1649 },
            { name: "Park Guell (구엘 공원)", lat: 41.4145, lon: 2.1527 },
            { name: "Local Lunch", lat: 41.3950, lon: 2.1620 },
            { name: "Sagrada Familia", lat: 41.4036, lon: 2.1744 },
            { name: "Primark (야간 투어 미팅)", lat: 41.3862, lon: 2.1705 },
            { name: "Hotel Catalonia (복귀)", lat: 41.3901, lon: 2.1706 }
        ],
        timeline: [
            { time: "08:10", activity: "숙소 출발", desc: "도보로 미팅 장소 이동" },
            { time: "08:20", activity: "미팅: El Fornet Cafe", desc: "가우디 주간 투어 시작", link: "https://experiences.myrealtrip.com/products/3860315" },
            { time: "09:30", activity: "가우디 건축 산책", desc: "카사 바트요, 카사 밀라 설명" },
            { time: "11:30", activity: "구엘 공원 입장", desc: "인기 스팟 구엘 공원 집중 관람" },
            { time: "13:30", activity: "로컬 점심 식사", desc: "가이드 추천 현지 로컬 맛집" },
            { time: "15:30", activity: "성당 내부 집중 투어", desc: "사그라다 파밀리아 내부 관람" },
            { time: "19:30", activity: "야간 산책 투어", desc: "카탈루냐 광장 Primark 앞 미팅", link: "https://experiences.myrealtrip.com/products/3860316" },
            { time: "21:30", activity: "숙소 복귀", desc: "투어 종료 및 호텔 복귀" }
        ],
        costs: [
            { item: "에두 주간/야간 투어비 (2인)", krw: "252,834원" },
            { item: "명소 입장권 (성당+구엘/2인)", krw: "152,064원" },
            { item: "식비 및 기타 (2인)", krw: "183,312원" },
            { item: "현지 관광세 (City Tax/1박)", krw: "28,500원" }
        ]
    },
    4: {
        title: "Day 04: Montserrat & Sitges",
        subtitle: "2027년 4월 21일 - 산과 바다가 함께하는 하루",
        coords: [
            { name: "Hotel Catalonia (출발)", lat: 41.3901, lon: 2.1706 },
            { name: "Meeting: Mandarin Oriental", lat: 41.3915, lon: 2.1648 },
            { name: "Montserrat 수도원", lat: 41.5933, lon: 1.8361 },
            { name: "Sitges", lat: 41.2333, lon: 1.8105 },
            { name: "Pg. de Gracia (복귀 하차)", lat: 41.3895, lon: 2.1661 },
            { name: "Hotel Catalonia (복귀)", lat: 41.3901, lon: 2.1706 }
        ],
        timeline: [
            { time: "07:30", activity: "숙소 출발", desc: "도보로 투어 미팅 장소 이동" },
            { time: "07:40", activity: "미팅: Pg. Gracia 38-40", desc: "노마드벤츠 전용 차량 탑승", link: "https://experiences.myrealtrip.com/products/3517343" },
            { time: "09:30", activity: "몬세라트 수도원", desc: "검은 성모상 및 산악 조망 관람" },
            { time: "14:30", activity: "시체스(Sitges) 탐방", desc: "해변 감상 및 도시 산책" },
            { time: "17:30", activity: "시내 복귀 및 하차", desc: "그라시아 거리 도착" },
            { time: "18:30", activity: "숙소 도착 및 휴식", desc: "호텔 복귀" }
        ],
        costs: [
            { item: "몬세라트+시체스 투어비 (2인)", krw: "152,708원" },
            { item: "수도원 입장 및 중식 (2인)", krw: "207,360원" },
            { item: "석식 및 기타 (2인)", krw: "90,000원" },
            { item: "현지 관광세 (City Tax/1박)", krw: "28,500원" }
        ]
    },
    5: {
        title: "Day 05: Art in the City Heart",
        subtitle: "2027년 4월 22일 - 도심 속 미술관 탐방",
        coords: [
            { name: "Hotel Catalonia (출발)", lat: 41.3901, lon: 2.1706 },
            { name: "Picasso Museum", lat: 41.3852, lon: 2.1809 },
            { name: "Gothic Quarter (중식)", lat: 41.3833, lon: 2.1764 },
            { name: "MACBA / CCCB", lat: 41.3831, lon: 2.1668 },
            { name: "Tapies Foundation", lat: 41.3917, lon: 2.1648 },
            { name: "Placa Catalunya (석식)", lat: 41.3871, lon: 2.1700 },
            { name: "Hotel Catalonia (복귀)", lat: 41.3901, lon: 2.1706 }
        ],
        timeline: [
            { time: "10:30", activity: "숙소 출발", desc: "미술관 투어 시작" },
            { time: "11:00", activity: "피카소 미술관", desc: "아트켓 패스포트 수령 및 관람", link: "https://experiences.myrealtrip.com/products/5820926" },
            { time: "13:00", activity: "고딕 지구 오찬", desc: "역사적인 골목 탐방 시 식사" },
            { time: "15:00", activity: "MACBA & CCCB", desc: "현대 미술과 문화 센터 관람" },
            { time: "17:30", activity: "타피에스 미술관", desc: "안토니 타피에스의 예술 세계 관람" },
            { time: "19:30", activity: "카탈루냐 광장 석식", desc: "도시 중심가 산책 및 저녁" },
            { time: "21:30", activity: "숙소 복귀", desc: "호텔 휴식" }
        ],
        costs: [
            { item: "아트켓 6대 미술관 패스 (2인)", krw: "128,356원" },
            { item: "전일 식비 및 기타 (2인)", krw: "207,360원" },
            { item: "현지 관광세 (City Tax/1박)", krw: "28,500원" }
        ]
    },
    6: {
        title: "Day 06: Sant Jordi & Montjuic Art",
        subtitle: "2027년 4월 23일 - 장미의 축제 & 몬주익",
        coords: [
            { name: "Hotel Catalonia (출발)", lat: 41.3901, lon: 2.1706 },
            { name: "MNAC (국립미술관)", lat: 41.3686, lon: 2.1534 },
            { name: "Pg. de Gracia (축제거리)", lat: 41.3895, lon: 2.1661 },
            { name: "Las Ramblas (장미시장)", lat: 41.3813, lon: 2.1732 },
            { name: "SOLC (스페셜 디너)", lat: 41.3901, lon: 2.1706 },
            { name: "Hotel Catalonia (복귀)", lat: 41.3901, lon: 2.1706 }
        ],
        timeline: [
            { time: "09:00", activity: "숙소 출발", desc: "몬주익 언덕으로 이동" },
            { time: "09:30", activity: "몬주익 MNAC 관람", desc: "아트켓 패스 활용 국립미술관 입장" },
            { time: "14:30", activity: "Sant Jordi 축제 만끽", desc: "그라시아 거리 축제 구경" },
            { time: "16:30", activity: "장미 노점 및 쇼핑", desc: "축제 분위기의 람블라스 산책" },
            { time: "20:00", activity: "축제 스페셜 디너", desc: "SOLC 레스토랑에서의 만찬" },
            { time: "22:00", activity: "숙소 복귀", desc: "마지막 밤 휴식" }
        ],
        costs: [
            { item: "산 조르디 디너 및 축제 경비 (2인)", krw: "240,000원" },
            { item: "현지 관광세 (City Tax/1박)", krw: "28,500원" }
        ]
    },
    7: {
        title: "Day 07: Adios Bcn",
        subtitle: "2027년 4월 24일 - 마지막 안녕",
        coords: [
            { name: "Hotel (체크아웃)", lat: 41.3901, lon: 2.1706 },
            { name: "Barceloneta Beach", lat: 41.3784, lon: 2.1925 },
            { name: "7 Portes (빠에야)", lat: 41.3820, lon: 2.1834 },
            { name: "Ciutadella Park", lat: 41.3887, lon: 2.1887 },
            { name: "Hotel (짐 찾기)", lat: 41.3901, lon: 2.1706 },
            { name: "BCN Airport", lat: 41.2974, lon: 2.0833 }
        ],
        timeline: [
            { time: "09:30", activity: "숙소 체크아웃", desc: "짐 보관 후 오전 산책" },
            { time: "10:30", activity: "바르셀로네타 산책", desc: "지중해 바다와 작별" },
            { time: "12:30", activity: "마지막 빠에야 오찬", desc: "7 Portes에서의 성찬" },
            { time: "14:30", activity: "시우타데야 공원", desc: "여유로운 마지막 산책" },
            { time: "16:30", activity: "호텔 짐 찾기", desc: "출국 준비 및 공항 이동" },
            { time: "17:00", activity: "공항으로 출발", desc: "BCN 공항 T1 이동" }
        ],
        costs: [
            { item: "식비 및 공항 이동 (2인)", krw: "222,000원" }
        ]
    }
};

let activeMap = null;

// Modal Functions
function openDayModal(day) {
    const data = itineraryData[day];
    if (!data) return;

    const modal = document.getElementById('dayModal');
    const body = document.getElementById('modalBody');
    
    let totalKRW = data.costs.reduce((acc, current) => {
        let priceValue = current.krw.replace('원', '').replace(/,/g, '').trim();
        return acc + (isNaN(priceValue) ? 0 : parseFloat(priceValue));
    }, 0);
    
    

    // Unified Color Palette
    const mainHEX = ['#cb2b3e', '#2aad27', '#cb8427', '#9c2bc1', '#ffd326', '#7b7b7b'];
    const hotelHEX = '#2a81cb';

    let timelineHTML = data.timeline.map((item, idx) => {
        let isHotel = item.activity.includes("Hotel") || item.activity.includes("숙소") || item.activity.includes("호텔") || (item.desc && (item.desc.includes("Hotel") || item.desc.includes("숙소") || item.desc.includes("호텔")));
        let dotColor = isHotel ? hotelHEX : mainHEX[idx % mainHEX.length];
        
        return `
        <div class="timeline-item" style="--dot-color: ${dotColor}">
            <span class="time">${item.time}</span>
            <div class="activity">
                <strong>${item.activity}</strong>
                <p>${item.desc}</p>
                ${item.link ? `<a href="${item.link}" target="_blank" class="reserve-link">한국어 예매 바로가기 &rarr;</a>` : ''}
            </div>
        </div>
    `;}).join('');

    let costsHTML = data.costs.map(cost => `
        <tr>
            <td>${cost.item}</td>
            <td style="color: var(--secondary); font-weight: 700;">${cost.krw}</td>
            
        </tr>
    `).join('');

    let diningHTML = data.dining ? data.dining.map(d => `
        <div class="restaurant-item">
            <strong>${d.name} <small>(${d.type})</small></strong>
            <p>${d.desc}</p>
        </div>
    `).join('') : '<p>추천 식당 정보가 없습니다.</p>';

    body.innerHTML = `
        <div class="detail-header">
            <h2>${data.title}</h2>
            <p>${data.subtitle}</p>
        </div>
        
        <!-- Map Container -->
        <div id="map-container"></div>

        <div class="detail-grid">
            <div class="timeline-detailed">
                ${timelineHTML}
            </div>
            <div class="cost-summary">
                <h3>예상 소요 경비 (2인 합계)</h3>
                <table class="cost-table">
                    <thead>
                        <tr><th>항목</th><th>KRW (원)</th></tr>
                    </thead>
                    <tbody>
                        ${costsHTML}
                        <tr class="total-row">
                            <td>합계 (약)</td>
                            <td style="color: var(--primary);">₩${totalKRW.toLocaleString()}</td>
                            
                        </tr>
                    </tbody>
                </table>
                <div class="dining-section">
                    <h3>🍽️ 추천 맛집</h3>
                    ${diningHTML}
                </div>
                <small style="display: block; margin-top: 15px;">* 쇼핑 및 숙박비 제외 순수 활동비 기준 (2인 합계)</small>
            </div>
        </div>
    `;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Initialize Map after modal is visible
    setTimeout(() => initMap(data.coords), 100);
}

function initMap(coords) {
    if (!coords || coords.length === 0) return;

    if (activeMap) {
        activeMap.remove();
    }

    activeMap = L.map('map-container').setView([coords[0].lat, coords[0].lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(activeMap);

    const mainColors = ['red', 'green', 'orange', 'violet', 'gold', 'grey'];
    const hotelColor = 'blue';

    const latlngs = coords.map((c, idx) => {
        let isHotel = c.name.includes("Hotel") || c.name.includes("숙소") || c.name.includes("호텔");
        let color = isHotel ? hotelColor : mainColors[idx % mainColors.length];

        const customIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-' + color + '.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
        });
        L.marker([c.lat, c.lon], {icon: customIcon}).addTo(activeMap).bindPopup(`<b>${idx + 1}.</b> ${c.name}`);
        return [c.lat, c.lon];
    });

    const polyline = L.polyline(latlngs, {
        color: '#d4af37', 
        weight: 4,
        opacity: 0.7,
        dashArray: '10, 10',
        lineJoin: 'round'
    }).addTo(activeMap);

    activeMap.fitBounds(polyline.getBounds(), { padding: [50, 50] });
}

function closeModal() {
    const modal = document.getElementById('dayModal');
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    if (activeMap) {
        activeMap.remove();
        activeMap = null;
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('dayModal');
    if (event.target == modal) {
        closeModal();
    }
}

function openFlightSearch() {
    window.open('https://www.skyscanner.co.kr/transport/flights/icn/bcn/270418/270424/', '_blank');
}

function openHotelSearch() {
    window.open('https://www.agoda.com/ko-kr/search?city=10282&checkIn=2027-04-18&checkOut=2027-04-24', '_blank');
}

// Countdown Timer to April 18, 2027
function updateCountdown() {
    const targetDate = new Date('April 18, 2027 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const dEl = document.getElementById('days');
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');

        if (dEl) dEl.innerText = String(d).padStart(3, '0');
        if (hEl) hEl.innerText = String(h).padStart(2, '0');
        if (mEl) mEl.innerText = String(m).padStart(2, '0');
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Itinerary Scroll Animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.itinerary-day').forEach(day => {
    observer.observe(day);
});

// Weather Toggle Plan B
function toggleWeather() {
    const isRaining = document.getElementById('weatherToggle').checked;
    
    // Gaudi Day Target (Now Day 3)
    const gaudiTitle = document.getElementById('gaudi-title');
    const gaudiDesc = document.getElementById('gaudi-desc');
    const gaudiCard = document.getElementById('gaudi-card');
    
    if (gaudiTitle) {
        if (isRaining) {
            gaudiTitle.innerText = "Modernist Indoors";
            gaudiDesc.innerHTML = "<b>우천 대비 Plan B:</b> 가우디 건축물(사그라다 파밀리아, 카사 바트요) 내부 관람에 집중하고 주변 실내 투어로 대체합니다.";
            gaudiCard.querySelector('.day-content').style.borderLeft = "4px solid #3498db";
        } else {
            gaudiTitle.innerText = "Gaudi's Dream";
            gaudiDesc.innerHTML = "사그라다 파밀리아와 구엘 공원 집중 투어. 가우디의 상상력이 현실이 된 공간을 탐험합니다.";
            gaudiCard.querySelector('.day-content').style.borderLeft = "4px solid var(--accent)";
        }
    }
    
    // Montserrat Day Target (Now Day 4)
    const montserratTitle = document.getElementById('montserrat-title');
    const montserratDesc = document.getElementById('montserrat-desc');
    const montserratCard = document.getElementById('montserrat-card');
    
    if (montserratTitle) {
        if (isRaining) {
            montserratTitle.innerText = "Shopping & Museums";
            montserratDesc.innerHTML = "<b>우천 대비 Plan B:</b> 야외인 몬세라트 대신 실내 복합 문화공간 산 파우 병원과 근거리 쇼핑으로 전환합니다.";
            montserratCard.querySelector('.day-content').style.borderLeft = "4px solid #3498db";
        } else {
            montserratTitle.innerText = "The Sacred Mountain";
            montserratDesc.innerHTML = "<b>몬세라트(Montserrat)</b> 당일치기. 기괴한 암석 산과 성모 마리아상이 있는 수도원에서 영적인 평온함을 찾습니다.";
            montserratCard.querySelector('.day-content').style.borderLeft = "4px solid var(--accent)";
        }
    }
}

// Global Map Init
function initGlobalMap() {
    const mapContainer = document.getElementById('global-map-container');
    if (!mapContainer) return;
    
    const map = L.map('global-map-container').setView([41.3910, 2.1670], 14); // Central Barcelona
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const locations = [
        { lat: 41.3901, lon: 2.1706, name: "Base: Hotel Catalonia Passeig de Gracia", color: "blue" },
        { lat: 41.4036, lon: 2.1744, name: "Sagrada Familia", color: "red" },
        { lat: 41.3820, lon: 2.1834, name: "7 Portes (Dining)", color: "green" },
        { lat: 41.3896, lon: 2.1633, name: "Vinitus (Dining)", color: "orange" }
    ];

    locations.forEach(loc => {
        const customIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-' + (loc.color || 'blue') + '.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
        });
        L.marker([loc.lat, loc.lon], {icon: customIcon}).addTo(map).bindPopup(`<b>${loc.name}</b>`);
    });
}
document.addEventListener('DOMContentLoaded', initGlobalMap);

// Hotel Map Init
function initHotelMap() {
    const mapContainer = document.getElementById('hotel-map-container');
    if (!mapContainer) return;
    
    // Zoom slightly out to cover both central properties nicely
    const map = L.map('hotel-map-container').setView([41.3901, 2.1706], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const locations = [
        { lat: 41.3901, lon: 2.1706, name: "Hotel Catalonia Passeig de Gracia", color: "blue" }
    ];

    locations.forEach(loc => {
        const customIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-' + loc.color + '.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
        });
        L.marker([loc.lat, loc.lon], {icon: customIcon}).addTo(map).bindPopup(`<b>${loc.name}</b>`);
    });
}
document.addEventListener('DOMContentLoaded', initHotelMap);

// Budget Customization Toggle
function updateTotalBudget(checkbox) {
    const amountSpan = document.getElementById('totalAmountDisplay');
    if (!amountSpan) return;
    
    let currentTotal = parseInt(amountSpan.innerText.replace(/,/g, ''));
    let val = parseInt(checkbox.value);
    
    if (checkbox.checked) {
        currentTotal += val;
    } else {
        currentTotal -= val;
    }
    
    // Animate Number logic (simple version)
    let finalStr = currentTotal.toLocaleString();
    amountSpan.innerText = finalStr;
}
