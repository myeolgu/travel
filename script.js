// Detailed Itinerary Data (Costs are for 2 PEOPLE)
const itineraryData = {
  1: {
    title: "Day 01: Hola Barcelona",
    subtitle: "2027년 4월 18일 - 도착 및 체크인",
    coords: [
      { name: "BCN Airport", lat: 41.2974, lon: 2.0833 },
      { name: "Plaza Urquinaona", lat: 41.38927937281525, lon: 2.172547428550298 },
      { name: "H10 Urquinaona Plaza Hotel", lat: 41.38927937281525, lon: 2.172547428550298 }
    ],
    timeline: [
      { time: "19:10", activity: "BCN 공항 도착", desc: "입국 후 시내로 이동합니다." },
      { time: "20:30", activity: "공항 -> 호텔 이동", desc: "택시 또는 차량 호출로 호텔 이동" },
      { time: "21:30", activity: "호텔 체크인", desc: "H10 Urquinaona Plaza Hotel 체크인" }
    ],
    dining: [{ name: "Vinitus", type: "Tapas", desc: "가벼운 타파스 추천" }],
    costs: [
      { item: "공항 이동", krw: "₩72,576" },
      { item: "저녁 식사", krw: "₩75,000" },
      { item: "도시세", krw: "₩32,480" }
    ]
  },
  2: {
    title: "Day 02: Shopping Therapy",
    subtitle: "2027년 4월 19일 - Passeig de Gracia",
    coords: [
      { name: "H10 Urquinaona Plaza Hotel", lat: 41.38927937281525, lon: 2.172547428550298 },
      { name: "Passeig de Gracia", lat: 41.3916, lon: 2.1649 },
      { name: "Boqueria Market", lat: 41.3817, lon: 2.1714 }
    ],
    timeline: [
      { time: "10:00", activity: "쇼핑", desc: "Passeig de Gracia 중심" },
      { time: "13:00", activity: "점심", desc: "보케리아 마켓" },
      { time: "22:00", activity: "숙소 복귀", desc: "호텔 휴식" }
    ],
    dining: [{ name: "Ciudad Condal", type: "Tapas", desc: "인기 타파스" }],
    costs: [
      { item: "식비", krw: "₩180,000" },
      { item: "도시세", krw: "₩32,480" }
    ]
  },
  3: {
    title: "Day 03: Gaudi Day",
    subtitle: "2027년 4월 20일 - Sagrada Familia & Eixample",
    coords: [
      { name: "H10 Urquinaona Plaza Hotel", lat: 41.38927937281525, lon: 2.172547428550298 },
      { name: "Sagrada Familia", lat: 41.4036, lon: 2.1744 },
      { name: "Casa Batllo", lat: 41.3916, lon: 2.1649 }
    ],
    timeline: [
      { time: "09:00", activity: "가우디 투어", desc: "사그라다 파밀리아 포함" },
      { time: "15:00", activity: "에이샴플레 산책", desc: "건축 스팟 탐방" }
    ],
    dining: [{ name: "Local Bistro", type: "Casual", desc: "투어 동선 내 식사" }],
    costs: [
      { item: "투어", krw: "₩252,834" },
      { item: "입장권", krw: "₩152,064" },
      { item: "도시세", krw: "₩32,480" }
    ]
  },
  4: {
    title: "Day 04: Montserrat & Sitges",
    subtitle: "2027년 4월 21일 - 근교 투어",
    coords: [
      { name: "H10 Urquinaona Plaza Hotel", lat: 41.38927937281525, lon: 2.172547428550298 },
      { name: "Montserrat", lat: 41.5933, lon: 1.8361 },
      { name: "Sitges", lat: 41.2333, lon: 1.8105 }
    ],
    timeline: [
      { time: "07:40", activity: "투어 출발", desc: "미팅 후 차량 이동" },
      { time: "17:30", activity: "시내 복귀", desc: "호텔 복귀" }
    ],
    dining: [{ name: "Sitges Tapas", type: "Casual", desc: "근교 식사" }],
    costs: [
      { item: "근교 투어", krw: "₩152,708" },
      { item: "식비", krw: "₩90,000" },
      { item: "도시세", krw: "₩32,480" }
    ]
  },
  5: {
    title: "Day 05: Art in the City Heart",
    subtitle: "2027년 4월 22일 - El Born & Gothic Quarter",
    coords: [
      { name: "H10 Urquinaona Plaza Hotel", lat: 41.38927937281525, lon: 2.172547428550298 },
      { name: "Picasso Museum", lat: 41.3852, lon: 2.1809 },
      { name: "Gothic Quarter", lat: 41.3833, lon: 2.1764 }
    ],
    timeline: [
      { time: "11:00", activity: "미술관 탐방", desc: "피카소 뮤지엄" },
      { time: "21:30", activity: "숙소 복귀", desc: "호텔 휴식" }
    ],
    dining: [{ name: "Can Culleretes", type: "Traditional", desc: "고딕지구 전통 레스토랑" }],
    costs: [
      { item: "뮤지엄 패스", krw: "₩128,356" },
      { item: "식비", krw: "₩207,360" },
      { item: "도시세", krw: "₩32,480" }
    ]
  },
  6: {
    title: "Day 06: Sant Jordi & Montjuic Art",
    subtitle: "2027년 4월 23일 - Montjuic",
    coords: [
      { name: "H10 Urquinaona Plaza Hotel", lat: 41.38927937281525, lon: 2.172547428550298 },
      { name: "MNAC", lat: 41.3686, lon: 2.1534 },
      { name: "Passeig de Gracia", lat: 41.3895, lon: 2.1661 }
    ],
    timeline: [
      { time: "09:30", activity: "몬주익 이동", desc: "MNAC 관람" },
      { time: "14:30", activity: "산 조르디", desc: "도심 축제 즐기기" }
    ],
    dining: [{ name: "SOLC", type: "Farm-to-table", desc: "산 조르디 디너" }],
    costs: [
      { item: "식비/활동", krw: "₩240,000" },
      { item: "도시세", krw: "₩32,480" }
    ]
  },
  7: {
    title: "Day 07: Adios BCN",
    subtitle: "2027년 4월 24일 - Barceloneta & 공항",
    coords: [
      { name: "H10 Urquinaona Plaza Hotel", lat: 41.38927937281525, lon: 2.172547428550298 },
      { name: "Barceloneta Beach", lat: 41.3784, lon: 2.1925 },
      { name: "BCN Airport", lat: 41.2974, lon: 2.0833 }
    ],
    timeline: [
      { time: "09:30", activity: "체크아웃", desc: "짐 보관 후 이동" },
      { time: "17:00", activity: "공항 이동", desc: "귀국편 탑승 준비" }
    ],
    dining: [{ name: "7 Portes", type: "Classical", desc: "마지막 점심" }],
    costs: [{ item: "식비/이동", krw: "₩222,000" }]
  }
};

let activeMap = null;

function openDayModal(day) {
  const data = itineraryData[day];
  if (!data) return;

  const modal = document.getElementById('dayModal');
  const body = document.getElementById('modalBody');

  const totalKRW = data.costs.reduce((acc, current) => {
    const priceValue = parseInt(String(current.krw).replace(/[^0-9]/g, ''), 10) || 0;
    return acc + priceValue;
  }, 0);

  const mainHEX = ['#cb2b3e', '#2aad27', '#cb8427', '#9c2bc1', '#ffd326', '#7b7b7b'];
  const hotelHEX = '#2a81cb';

  const timelineHTML = data.timeline.map((item, idx) => {
    const hotelKeywords = ['Hotel', '숙소', '호텔', 'H10'];
    const isHotel = hotelKeywords.some((kw) => item.activity.includes(kw) || (item.desc && item.desc.includes(kw)));
    const dotColor = isHotel ? hotelHEX : mainHEX[idx % mainHEX.length];

    return `
      <div class="timeline-item" style="--dot-color: ${dotColor}">
        <span class="time">${item.time}</span>
        <div class="activity">
          <strong>${item.activity}</strong>
          <p>${item.desc}</p>
          ${item.link ? `<a href="${item.link}" target="_blank" class="reserve-link">예약 바로가기 &rarr;</a>` : ''}
        </div>
      </div>
    `;
  }).join('');

  const costsHTML = data.costs.map((cost) => `
    <tr>
      <td>${cost.item}</td>
      <td style="color: var(--secondary); font-weight: 700;">${cost.krw}</td>
    </tr>
  `).join('');

  const diningHTML = data.dining.map((d) => `
    <div class="restaurant-item">
      <strong>${d.name} <small>(${d.type})</small></strong>
      <p>${d.desc}</p>
    </div>
  `).join('');

  body.innerHTML = `
    <div class="detail-header">
      <h2>${data.title}</h2>
      <p>${data.subtitle}</p>
    </div>
    <div id="map-container"></div>
    <div class="detail-grid">
      <div class="timeline-detailed">${timelineHTML}</div>
      <div class="cost-summary">
        <h3>예상 소요 경비 (2인 합계)</h3>
        <table class="cost-table">
          <thead><tr><th>항목</th><th>KRW</th></tr></thead>
          <tbody>
            ${costsHTML}
            <tr class="total-row">
              <td>합계</td>
              <td style="color: var(--primary);">₩${totalKRW.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
        <div class="dining-section">
          <h3>추천 맛집</h3>
          ${diningHTML}
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  setTimeout(() => initMap(data.coords), 100);
}

function initMap(coords) {
  if (!coords || coords.length === 0) return;
  if (activeMap) activeMap.remove();

  activeMap = L.map('map-container').setView([coords[0].lat, coords[0].lon], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap contributors'
  }).addTo(activeMap);

  const mainColors = ['red', 'green', 'orange', 'violet', 'gold', 'grey'];
  const hotelColor = 'blue';

  const latlngs = coords.map((c, idx) => {
    const isHotel = /Hotel|숙소|호텔|H10/.test(c.name);
    const color = isHotel ? hotelColor : mainColors[idx % mainColors.length];

    const customIcon = new L.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.marker([c.lat, c.lon], { icon: customIcon }).addTo(activeMap).bindPopup(`<b>${idx + 1}.</b> ${c.name}`);
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
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  if (activeMap) {
    activeMap.remove();
    activeMap = null;
  }
}

window.onclick = function (event) {
  const modal = document.getElementById('dayModal');
  if (event.target === modal) closeModal();
};

function openFlightSearch() {
  window.open('https://www.skyscanner.co.kr/transport/flights/icn/bcn/270418/270424/', '_blank');
}

function openHotelSearch() {
  window.open('https://www.agoda.com/ko-kr/search?city=10282&checkIn=2027-04-18&checkOut=2027-04-24', '_blank');
}

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

const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, observerOptions);

document.querySelectorAll('.itinerary-day').forEach((day) => observer.observe(day));

function toggleWeather() {
  const isRaining = document.getElementById('weatherToggle').checked;
  const gaudiTitle = document.getElementById('gaudi-title');
  const gaudiDesc = document.getElementById('gaudi-desc');
  const montserratTitle = document.getElementById('montserrat-title');
  const montserratDesc = document.getElementById('montserrat-desc');

  if (gaudiTitle && gaudiDesc) {
    if (isRaining) {
      gaudiTitle.innerText = 'Modernist Indoors';
      gaudiDesc.innerText = '실내 위주로 가우디 건축을 감상하는 플랜 B입니다.';
    } else {
      gaudiTitle.innerText = 'Gaudi Day | Sagrada Familia & Eixample';
      gaudiDesc.innerText = '사그라다 파밀리아와 에이샴플레 중심으로 가우디 핵심 스팟을 둘러봅니다.';
    }
  }

  if (montserratTitle && montserratDesc) {
    if (isRaining) {
      montserratTitle.innerText = 'Shopping & Museums';
      montserratDesc.innerText = '우천 시 도심 실내 일정 중심으로 대체합니다.';
    } else {
      montserratTitle.innerText = 'Day Trip | Montserrat & Sitges';
      montserratDesc.innerHTML = '<b>몬세라트 & 시체스</b> 차량 투어. 전용 차량으로 편안하게 이동합니다.';
    }
  }
}

function initGlobalMap() {
  const mapContainer = document.getElementById('global-map-container');
  if (!mapContainer) return;

  const map = L.map('global-map-container').setView([41.3910, 2.1670], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap contributors'
  }).addTo(map);

  const locations = [
    { lat: 41.38927937281525, lon: 2.172547428550298, name: 'Base: H10 Urquinaona Plaza Hotel', color: 'blue' },
    { lat: 41.4036, lon: 2.1744, name: 'Sagrada Familia', color: 'red' },
    { lat: 41.3820, lon: 2.1834, name: '7 Portes (Dining)', color: 'green' },
    { lat: 41.3896, lon: 2.1633, name: 'Vinitus (Dining)', color: 'orange' }
  ];

  locations.forEach((loc) => {
    const customIcon = new L.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${loc.color}.png`,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.marker([loc.lat, loc.lon], { icon: customIcon }).addTo(map).bindPopup(`<b>${loc.name}</b>`);
  });
}

document.addEventListener('DOMContentLoaded', initGlobalMap);

function initHotelMap() {
  const mapContainer = document.getElementById('hotel-map-container');
  if (!mapContainer) return;

  const map = L.map('hotel-map-container').setView([41.38927937281525, 2.172547428550298], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap contributors'
  }).addTo(map);

  const marker = { lat: 41.38927937281525, lon: 2.172547428550298, name: 'H10 Urquinaona Plaza Hotel', color: 'blue' };
  const customIcon = new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${marker.color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  L.marker([marker.lat, marker.lon], { icon: customIcon }).addTo(map).bindPopup(`<b>${marker.name}</b>`);
}

document.addEventListener('DOMContentLoaded', initHotelMap);

function updateTotalBudget(checkbox) {
  const amountSpan = document.getElementById('totalAmountDisplay');
  if (!amountSpan) return;

  let currentTotal = parseInt(amountSpan.innerText.replace(/,/g, ''), 10);
  const val = parseInt(checkbox.value, 10);

  if (checkbox.checked) currentTotal += val;
  else currentTotal -= val;

  amountSpan.innerText = currentTotal.toLocaleString();
}

