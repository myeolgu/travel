// Detailed Itinerary Data (Costs are for 2 PEOPLE)
const itineraryData = {
    1: {
        title: "Day 01: Hola Barcelona",
        subtitle: "2027년 4월 18일 - 도착 및 휴식",
        coords: [
            { name: "BCN Airport", lat: 41.2974, lon: 2.0833 },
            { name: "H10 Casa Mimosa", lat: 41.3963, lon: 2.1614 }
        ],
        timeline: [
            { time: "19:10", activity: "BCN 공항 도착 (Asiana/T'way)", desc: "직항 항공편(OZ511/TW407) 도착 기준", link: "https://m.flyasiana.com/C/KR/KO/index" },
            { time: "20:30", activity: "공항 -> 시내 이동", desc: "도착 후 피로도를 고려하여 **마이리얼트립 공항 픽업 서비스** 이용 (한국인 기사 배정 등)", link: "https://www.myrealtrip.com/search?q=%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98%20%EA%B3%B5%ED%95%AD%20%ED%94%BD%EC%97%85" },
            { time: "21:30", activity: "호텔 체크인 및 늦은 저녁", desc: "H10 Casa Mimosa 체크인 및 호텔 인근 테라스 바에서 카바(Cava) 한 잔" }
        ],
        dining: [
            { name: "Vinitus (비니투스)", type: "Tapas", desc: "권혁수 맛집으로 유명한 타파스 성지. 맛조개와 꿀대구 필수." },
            { name: "Solraig", type: "Modern", desc: "깔끔하고 세련된 지중해식 요리." }
        ],
        costs: [
            { item: "교통비 (마이리얼트립 픽업 서비스)", krw: "85,000원" },
            { item: "호텔 인근 석식 (2인)", krw: "75,000원" }
        ]
    },
    2: {
        title: "Day 02: Gaudi's Dream",
        subtitle: "2027년 4월 19일 - 가우디 걸작 투어",
        coords: [
            { name: "Sagrada Familia", lat: 41.4036, lon: 2.1744 },
            { name: "Casa Batllo", lat: 41.3916, lon: 2.1649 },
            { name: "Park Guell", lat: 41.4145, lon: 2.1527 }
        ],
        timeline: [
            { time: "09:00", activity: "사그라다 파밀리아", desc: "예약 필수! 가우디 걸작 (마이리얼트립 인기 상품)", link: "https://experiences.myrealtrip.com/products/5846829" },
            { time: "12:30", activity: "점심 식사 (Eixample)", desc: "현지식 Menú del día 즐기기" },
            { time: "14:30", activity: "카사 바트요", desc: "그라시아 거리의 대표 모더니즘 건축 (마이리얼트립)", link: "https://experiences.myrealtrip.com/products/3410190" },
            { time: "17:00", activity: "구엘 공원", desc: "독특한 타일 장식과 바르셀로나 전경 (가우디 투어)", link: "https://experiences.myrealtrip.com/products/3410190" },
            { time: "20:00", activity: "석식 (빠에야)", desc: "바르셀로나 대표 메뉴로 하루 마무리" }
        ],
        dining: [
            { name: "Cervecería Catalana", type: "Tapas", desc: "현지인과 관광객 모두에게 사랑받는 타파스 끝판왕." },
            { name: "El Nacional", type: "Complex", desc: "바르셀로나 최대 규모의 화려한 미식 공간." }
        ],
        costs: [
            { item: "가우디 3대 명소 입장료 (2인)", krw: "234,000원" },
            { item: "식비 (중식+석식/2인)", krw: "150,000원" },
            { item: "택시 이동비 (2~3회)", krw: "45,000원" }
        ]
    },
    3: {
        title: "Day 03: Sacred Mountain & Coastal Breeze",
        subtitle: "2027년 4월 20일 - 몬세라트 & 시체스 투어",
        coords: [
            { name: "Placa de Catalunya", lat: 41.3851, lon: 2.1734 },
            { name: "Montserrat", lat: 41.5933, lon: 1.8361 },
            { name: "Sitges", lat: 41.2333, lon: 1.8105 }
        ],
        timeline: [
            { time: "08:20", activity: "미팅 및 출발", desc: "카탈루냐 광장 부근 미팅 (마이리얼트립)", link: "https://experiences.myrealtrip.com/products/3517343" },
            { time: "10:00", activity: "몬세라트 수도원", desc: "수도원 관람 및 검은 성모 마리아상 (가이드 동행)" },
            { time: "12:30", activity: "자유 시간 및 중식", desc: "산 조안 푸니쿨라 탑승 또는 하이킹 가능", link: "https://experiences.myrealtrip.com/products/3517343" },
            { time: "14:30", activity: "시체스(Sitges) 이동", desc: "아름다운 휴양지 시체스로 이동" },
            { time: "15:30", activity: "시체스 관람", desc: "해변 산책 및 드라마 '푸른 바다의 전설' 촬영지 탐방" },
            { time: "17:30", activity: "시내 복귀 및 하차", desc: "카탈루냐 광장 부근 도착 후 여정 마무리" }
        ],
        dining: [
            { name: "La Fragata", type: "Seafood", desc: "시체스 성당이 보이는 환상적인 뷰의 해산물 전문점." },
            { name: "Montserrat Cafeteria", type: "Casual", desc: "수도원 인근에서 간단하게 즐기는 현지식 식사." }
        ],
        costs: [
            { item: "몬세라트+시체스 투어비(2인)", krw: "135,000원" },
            { item: "현지 지불 비용 (푸니쿨라 등/2인)", krw: "52,500원" },
            { item: "식비 (중식+간식/2인)", krw: "75,000원" },
            { item: "석식 (2인)", krw: "90,000원" }
        ]
    },
    4: {
        title: "Day 04: Art & View",
        subtitle: "2027년 4월 21일 - 몬주익 문화 탐방",
        coords: [
            { name: "Montjuic Teleferic", lat: 41.3703, lon: 2.1670 },
            { name: "MNAC", lat: 41.3686, lon: 2.1534 },
            { name: "Miro Museum", lat: 41.3639, lon: 2.1598 }
        ],
        timeline: [
            { time: "10:00", activity: "몬주익 케이블카", desc: "바다와 시내를 동시에 내려다보는 파노라마 (마이리얼트립)", link: "https://experiences.myrealtrip.com/products/5868095" },
            { time: "12:00", activity: "카탈루냐 미술관 (MNAC)", desc: "로마네스크 벽화의 보물창고 (마이리얼트립)", link: "https://experiences.myrealtrip.com/products/5820422" },
            { time: "16:00", activity: "미로 미술관", desc: "호안 미로의 강렬한 원초적 예술 (마이리얼트립)", link: "https://www.myrealtrip.com/offers/26724" },
            { time: "20:00", activity: "매직 분수 쇼", desc: "몬주익 언덕 아래에서 펼쳐지는 빛의 공연" }
        ],
        dining: [
            { name: "Terraza Martínez", type: "Paella", desc: "몬주익 언덕 위, 환상적인 항구 전망과 빠에야로 유명." },
            { name: "Xátiva Quinto Pino", type: "Paella", desc: "스페인 광장 인근 현지인 추천 빠에야 맛집." }
        ],
        costs: [
            { item: "입장료 및 케이블카 (2인)", krw: "120,000원" },
            { item: "식비 (2인)", krw: "135,000원" },
            { item: "택시비", krw: "30,000원" }
        ]
    },
    5: {
        title: "Day 05: Shopping Therapy",
        subtitle: "2027년 4월 22일 - 에이샴플레 & 그라시아",
        coords: [
            { name: "Passeig de Gràcia", lat: 41.3916, lon: 2.1649 },
            { name: "Boqueria Market", lat: 41.3817, lon: 2.1714 },
            { name: "Gracia District", lat: 41.4031, lon: 2.1572 }
        ],
        timeline: [
            { time: "10:00", activity: "파세이그 드 그라시아", desc: "명품 쇼핑 및 윈도우 쇼핑" },
            { time: "13:00", activity: "보케리아 시장 인근 중식", desc: "다양한 신선 식재료와 활기찬 시장 분위기" },
            { time: "15:00", activity: "그라시아 지구", desc: "힙한 브런치 카페와 소품샵 탐방" },
            { time: "20:00", activity: "여유로운 칵테일 바", desc: "현지인들처럼 타파스와 cocktail 즐기기" }
        ],
        dining: [
            { name: "Ciudad Condal (시우다드 콘달)", type: "Tapas", desc: "언제나 북적이는 바르셀로나 최고의 타파스 명소." },
            { name: "Botafumeiro", type: "Seafood", desc: "그라시아 지구의 럭셔리한 해산물 전문점." }
        ],
        costs: [
            { item: "식비 (식사+간식/2인)", krw: "180,000원" },
            { item: "택시비", krw: "15,000원" }
        ]
    },
    6: {
        title: "Day 06: Sant Jordi's Day",
        subtitle: "2027년 4월 23일 - 산 조르디 축제",
        coords: [
            { name: "H10 Casa Mimosa", lat: 41.3963, lon: 2.1614 },
            { name: "Placa de Catalunya", lat: 41.3851, lon: 2.1734 },
            { name: "Majestic Hotel", lat: 41.3920, lon: 2.1645 }
        ],
        timeline: [
            { time: "10:00", activity: "체크아웃 및 이동", desc: "H10 Casa Mimosa 체크아웃 및 Majestic Hotel로 이동 (차량 호출)" },
            { time: "11:00", activity: "산 조르디 축제 만끽", desc: "카탈루냐 광장 및 람블라스 거리의 장미와 책 물결" },
            { time: "14:00", activity: "가벼운 거리 점심", desc: "축제 인파를 피해 한적한 골목 맛집 탐방" },
            { time: "20:00", activity: "Majestic Hotel 체크인 및 디너", desc: "축제 당일의 여유로운 파인 다이닝", link: "https://www.agoda.com/ko-kr/search?city=10282" }
        ],
        dining: [
            { name: "SOLC (솔크)", type: "Farm-to-table", desc: "마제스틱 호텔 내부의 고품격 다이닝. 로컬 식재료 최상급." },
            { name: "7 Portes (7포르테스)", type: "Traditional", desc: "피카소가 방문했던 1836년 전통의 빠에야 명소 (예약 필수)." }
        ],
        costs: [
            { item: "장미/책 구입비 (2인)", krw: "30,000원" },
            { item: "페스티벌 스페셜 디너 (2인)", krw: "240,000원" },
            { item: "택시 이동비", krw: "30,000원" }
        ]
    },
    7: {
        title: "Day 07: Adios Bcn",
        subtitle: "2027년 4월 24일 - 마지막 지중해",
        coords: [
            { name: "Barceloneta Beach", lat: 41.3784, lon: 2.1925 },
            { name: "7 Portes", lat: 41.3820, lon: 2.1834 },
            { name: "BCN Airport", lat: 41.2974, lon: 2.0833 }
        ],
        timeline: [
            { time: "09:00", activity: "바르셀로네타 해변", desc: "아침 바다 산책 및 마지막 여유" },
            { time: "11:00", activity: "피날레 빠에야", desc: "7포르테스 등 해변 유명 맛집에서 마지막 오찬" },
            { time: "13:30", activity: "공항 이동", desc: "BCN 공항 T1으로 향하는 마이리얼트립 프라이빗 샌딩 서비스 이용", link: "https://www.myrealtrip.com/search?q=%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98%20%EA%B3%B5%ED%95%AD%20%ED%94%BD%EC%97%85" }
        ],
        dining: [
            { name: "7 Portes", type: "Classical", desc: "바르셀로나의 마지막을 장식할 정통 빠에야 식당." },
            { name: "Can Majó", type: "Seafood", desc: "바르셀로네타 해변 바로 앞, 신선한 해산물이 가득한 곳." }
        ],
        costs: [
            { item: "마지막 만찬 (2인)", krw: "150,000원" },
            { item: "마이리얼트립 공항 샌딩비", krw: "85,000원" }
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
    
    

    const cssHEX = ['#cb2b3e', '#2a81cb', '#2aad27', '#cb8427', '#9c2bc1', '#ffd326'];
    let timelineHTML = data.timeline.map((item, idx) => `
        <div class="timeline-item" style="--dot-color: ${cssHEX[idx % cssHEX.length]}">
            <span class="time">${item.time}</span>
            <div class="activity">
                <strong>${item.activity}</strong>
                <p>${item.desc}</p>
                ${item.link ? `<a href="${item.link}" target="_blank" class="reserve-link">한국어 예매 바로가기 &rarr;</a>` : ''}
            </div>
        </div>
    `).join('');

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

    const markerColors = ['red', 'blue', 'green', 'orange', 'violet', 'gold'];
    const latlngs = coords.map((c, idx) => {
        const color = markerColors[idx % markerColors.length];
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
    
    // Day 2 Target
    const day2Title = document.getElementById('day2-title');
    const day2Desc = document.getElementById('day2-desc');
    const day2Card = document.getElementById('day2-card');
    
    if (day2Title) {
        if (isRaining) {
            day2Title.innerText = "Modernist Indoors";
            day2Desc.innerHTML = "<b>우천 대비 Plan B:</b> 가우디 건축물(사그라다 파밀리아, 카사 바트요) 내부 관람에 집중하고 주변 실내 투어로 대체합니다.";
            day2Card.querySelector('.day-content').style.borderLeft = "4px solid #3498db";
        } else {
            day2Title.innerText = "Gaudi's Dream";
            day2Desc.innerHTML = "사그라다 파밀리아와 구엘 공원 집중 투어. 가우디의 상상력이 현실이 된 공간을 탐험합니다.";
            day2Card.querySelector('.day-content').style.borderLeft = "4px solid var(--accent)";
        }
    }
    
    // Day 3 Target
    const day3Title = document.getElementById('day3-title');
    const day3Desc = document.getElementById('day3-desc');
    const day3Card = document.getElementById('day3-card');
    
    if (day3Title) {
        if (isRaining) {
            day3Title.innerText = "Shopping & Museums";
            day3Desc.innerHTML = "<b>우천 대비 Plan B:</b> 야외인 몬세라트 대신 실내 복합 문화공간 산 파우 병원과 근거리 쇼핑으로 전환합니다.";
            day3Card.querySelector('.day-content').style.borderLeft = "4px solid #3498db";
        } else {
            day3Title.innerText = "The Sacred Mountain";
            day3Desc.innerHTML = "<b>몬세라트(Montserrat)</b> 당일치기. 기괴한 암석 산과 성모 마리아상이 있는 수도원에서 영적인 평온함을 찾습니다.";
            day3Card.querySelector('.day-content').style.borderLeft = "4px solid var(--accent)";
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
        { lat: 41.3963, lon: 2.1614, name: "Hotel A: H10 Casa Mimosa", color: "blue" },
        { lat: 41.3920, lon: 2.1645, name: "Hotel B: Majestic Hotel", color: "purple" },
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
