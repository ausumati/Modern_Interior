document.addEventListener("DOMContentLoaded",()=>{

const img = {
  office:"https://www.dhakadecor.com/images/page2-img1.jpg",
  office2:"https://www.dhakadecor.com/images/page2-img2.jpg",
  living:"https://www.dhakadecor.com/images/page1-img1.jpg",
  bedroom:"https://dhakadecor.com/images/bedroom_interior_gallery-7.jpg",
  bath:"https://dhakadecor.com/images/bathroom_interior_gallery-1.jpg",
  kitchen:"https://www.dhakadecor.com/images/page2-img2.jpg",
  kids:"https://dhakadecor.com/images/page2-img1.jpg",
  event:"https://www.dhakadecor.com/images/page1-img1.jpg"
};

const data={
corporate:{
  n:"A",title:"Corporate Interiors",
  desc:"Purpose-built business environments that balance brand identity, productivity, privacy, collaboration and customer experience.",
  groups:[
    {title:"Office Interiors",tag:"01",desc:"Everything from the front door to the boardroom, including work, meeting, leadership, support and event spaces.",
      items:[
        ["Reception & Waiting","Reception desk, visitor seating, brand wall, arrival circulation and first impressions.",img.office],
        ["Open Workspaces","Team neighbourhoods, desk planning, circulation, storage and daylight-aware layouts.",img.office2],
        ["Private Cabins","Manager, department head and leadership cabins with privacy and focused work zones.",img.living],
        ["CEO / Director Office","Executive office planning with meeting corner, storage, display and premium detailing.",img.bedroom],
        ["Conference Room","Conference tables, presentation walls, AV integration, acoustics and meeting circulation.",img.office2],
        ["Boardroom","Formal leadership meeting environments with presentation, technology and hospitality support.",img.office],
        ["Focus / Phone Rooms","Quiet rooms for calls, focused work and confidential conversations.",img.living],
        ["Training Room","Flexible seating, presentation, writable surfaces and technology-ready layouts.",img.office2],
        ["Breakout & Collaboration","Informal meeting points, lounge seating, brainstorming and team interaction zones.",img.office],
        ["Cafeteria / Pantry","Employee dining, pantry, refreshment counters, storage and easy-maintenance finishes.",img.kitchen],
        ["Server / Utility / Support","Practical support rooms planned around access, maintenance and operational needs.",img.office2],
        ["Corporate Events","Launches, brand activations, stages, backdrops, temporary installations and event experience zones.",img.event]
      ]},
    {title:"Banking Interiors",tag:"02",desc:"Banking environments planned around customer flow, staff privacy, controlled access, security and operational efficiency.",
      items:[
        ["Banking Hall","Customer circulation, service counters, seating, signage and clear wayfinding.",img.office],
        ["Teller / Cash Counter","Customer-facing transaction zones with ergonomic staff layouts and controlled circulation.",img.office2],
        ["Manager Cabin","Private banking discussions, approvals and leadership workspaces.",img.living],
        ["Relationship Manager Cabin","Client consultation, account discussions and semi-private meeting areas.",img.office],
        ["Loan / Consultation Room","Confidential customer meetings with comfortable seating and document handling.",img.office2],
        ["Customer Waiting Area","Organised queue and waiting experience with accessible circulation.",img.living],
        ["ATM / Self-Service Zone","ATM lobby, self-service machines, access control and customer safety planning.",img.office2],
        ["Vault / Locker Area","Security-sensitive zones with controlled access and functional circulation planning.",img.bath],
        ["Security / Access Control","Controlled entry, surveillance support, secure staff movement and security-conscious zoning.",img.office],
        ["Back Office / Staff Area","Operations desks, records, staff workspaces, pantry and support functions.",img.office2]
      ]}
  ]
},
residential:{
  n:"B",title:"Residences Interiors",
  desc:"Residential interiors organised by property type, so every room shown under a home type actually belongs to that home.",
  groups:[
    {title:"Villa",tag:"01",desc:"A complete villa journey—from arrival and social spaces to private rooms, entertainment and service areas.",
      items:[
        ["Entrance / Foyer","Arrival, shoe/storage zone, statement wall and transition into the home.",img.office],
        ["Living Room","Main social space with seating, TV wall, feature lighting, art and circulation.",img.living],
        ["Dining Room","Formal or everyday dining with serving/storage support and connected circulation.",img.office2],
        ["Guest Room","Comfortable guest bedroom with wardrobe, bedside storage and layered lighting.",img.bedroom],
        ["Kids Room","Sleep, study, storage and play zones with flexible planning.",img.kids],
        ["Kitchen","Modular kitchen, work triangle, storage, appliances, lighting and ventilation.",img.kitchen],
        ["Master Bedroom","Private suite with bed wall, bedside units, seating, lighting and calm material palette.",img.bedroom],
        ["Wardrobe & Dressing","Built-in wardrobes, walk-in dressing, mirrors, accessories and organised storage.",img.office2],
        ["Study Room","Home office, reading, study desk, storage and focused lighting.",img.office],
        ["Home Theatre","Screen wall, AV, acoustic treatment, recliner/seating and ambient lighting.",img.living],
        ["Showroom / Display Room","Personal collection, art, display cabinetry or premium product-style room.",img.office2],
        ["Bathrooms","Guest, family and master bathrooms with fittings, storage, ventilation and lighting.",img.bath],
        ["Utility / Service Area","Laundry, utility storage and practical household support functions.",img.kitchen]
      ]},
    {title:"1RK",tag:"02",desc:"Only the spaces that naturally belong in a compact 1RK/studio plan.",
      items:[
        ["Combined Living / Sleeping Area","One flexible main room planned for living, sleeping, storage and movement.",img.living],
        ["Compact Kitchen","Efficient single-wall, L-shaped or compact modular kitchen planning.",img.kitchen],
        ["Attached Bathroom","Space-efficient bathroom with shower, WC, basin, ventilation and storage.",img.bath],
        ["Entry & Storage","Compact entrance, wardrobe/storage and clutter-control planning.",img.office2]
      ]},
    {title:"1BHK",tag:"03",desc:"A focused one-bedroom home with clear separation between living, private and service areas.",
      items:[
        ["Living / Dining","Main social zone with seating, TV, dining and efficient circulation.",img.living],
        ["Bedroom","Private sleeping space with wardrobe, bedside storage and lighting.",img.bedroom],
        ["Kitchen","Cooking, storage, appliance and work-surface planning.",img.kitchen],
        ["Bathroom","Functional bathroom with storage, ventilation, lighting and durable finishes.",img.bath],
        ["Balcony / Utility","Where provided, a practical extension for utility, plants or seating.",img.office2]
      ]},
    {title:"2BHK",tag:"04",desc:"A two-bedroom family layout with balanced public, private and service spaces.",
      items:[
        ["Living / Dining","Central family and guest zone with TV, seating and dining.",img.living],
        ["Master Bedroom","Primary bedroom with wardrobe/dressing and comfortable circulation.",img.bedroom],
        ["Bedroom 2","Secondary bedroom suitable for child, guest or flexible family use.",img.kids],
        ["Kitchen","Modular kitchen with storage, appliance planning and service movement.",img.kitchen],
        ["Bathrooms","Master/common bathroom planning with fittings, storage and ventilation.",img.bath],
        ["Balcony / Utility","Practical outdoor or utility extension where the apartment provides it.",img.office2]
      ]},
    {title:"3BHK",tag:"05",desc:"A larger family home with three bedrooms and supporting social, work and service spaces.",
      items:[
        ["Living / Dining","Larger social space for family use and guests.",img.living],
        ["Master Bedroom","Primary suite with wardrobe/dressing and private bathroom where applicable.",img.bedroom],
        ["Bedroom 2","Family bedroom with storage and flexible study/sleeping use.",img.kids],
        ["Bedroom 3","Guest, child or flexible bedroom with wardrobe and study support.",img.bedroom],
        ["Kitchen","Full modular kitchen with storage, appliance and work-zone planning.",img.kitchen],
        ["Bathrooms","Master and common bathrooms planned for daily family use.",img.bath],
        ["Utility / Balcony","Laundry, utility or balcony zones integrated into the home plan.",img.office2]
      ]},
    {title:"4BHK",tag:"06",desc:"A premium four-bedroom residence with layered family, guest, work and service zones.",
      items:[
        ["Living / Formal Lounge","Large social zone for everyday family life and formal hosting.",img.living],
        ["Dining Area","Dedicated dining with storage/display and kitchen connection.",img.office2],
        ["Master Suite","Premium private suite with bedroom, dressing/wardrobe and bathroom.",img.bedroom],
        ["Bedroom 2","Secondary family bedroom with storage and study support.",img.kids],
        ["Bedroom 3","Flexible bedroom for family or guests.",img.bedroom],
        ["Bedroom 4","Guest, child or multi-purpose bedroom.",img.bedroom],
        ["Kitchen & Utility","Full kitchen plus utility/service planning for a larger household.",img.kitchen],
        ["Study / Family Lounge","Quiet work or family zone depending on the floor plan.",img.office],
        ["Bathrooms","Master, attached and common bathroom planning.",img.bath],
        ["Balcony / Terrace","Outdoor seating, greenery and entertainment where available.",img.office2]
      ]}
  ]
},
hospitality:{
  n:"C",title:"Restaurants / Hotel Interiors",
  desc:"Two distinct hospitality tracks: restaurant spaces built around dining journeys, and hotel interiors built around the complete guest stay.",
  groups:[
    {title:"Restaurants",tag:"01",desc:"Front-of-house, dining, service and operational zones for restaurants and cafés.",
      items:[
        ["Entrance & Host Desk","Arrival, brand identity, waiting and first-impression zone.",img.living],
        ["Dining Area","Table planning, circulation, lighting, acoustics and guest comfort.",img.office2],
        ["Private Dining","Intimate dining rooms for celebrations, business meals and premium guests.",img.bedroom],
        ["Café / Lounge","Relaxed seating, counter/service zones and social atmosphere.",img.living],
        ["Bar / Beverage Counter","Beverage service, display, back counter and customer circulation.",img.office2],
        ["Restaurant Kitchen","Cooking, prep, storage, washing and service-flow planning.",img.kitchen],
        ["Service / Back-of-House","Staff circulation, storage, dishwashing and operational support.",img.office2],
        ["Washrooms","Guest washrooms with durable finishes, lighting, ventilation and wayfinding.",img.bath],
        ["Outdoor / Terrace Dining","Al fresco seating, lighting, planting and weather-aware planning.",img.office],
        ["Restaurant Events","Private parties, launches, themed evenings and temporary event layouts.",img.event]
      ]},
    {title:"Hotel Interiors",tag:"02",desc:"Guest-facing and operational hotel spaces from arrival through rooms, events, wellness and service.",
      items:[
        ["Hotel Lobby & Reception","Arrival, reception, concierge, waiting, luggage and statement feature design.",img.living],
        ["Guest Rooms","Sleep, work, storage, lighting and relaxation zones for everyday stays.",img.bedroom],
        ["Suites","Bedroom, lounge, wardrobe and bathroom integration for larger guest units.",img.office2],
        ["Corridors & Lift Lobbies","Wayfinding, lighting, wall finishes and consistent hotel identity.",img.office],
        ["Hotel Restaurant","Dining, breakfast, buffet and service circulation within the property.",img.kitchen],
        ["Banquet / Event Hall","Flexible spaces for weddings, conferences, launches and hosted functions.",img.event],
        ["Conference / Meeting Rooms","Business meeting environments with AV, acoustics and flexible seating.",img.office2],
        ["Hotel Spa / Wellness","Reception, treatment, relaxation and wellness spaces within the hotel.",img.bath],
        ["Recreation / Lounge","Guest lounges, social areas and leisure spaces.",img.living],
        ["Back-of-House","Staff areas, service corridors, storage and operational support.",img.office2]
      ]}
  ]
},
spa:{
  n:"D",title:"Hospitality & Spa Division",
  desc:"A dedicated category for hospitality environments and spa/wellness experiences where privacy, hygiene, sensory design and circulation matter.",
  groups:[
    {title:"Hospitality",tag:"01",desc:"Hospitality environments beyond the restaurant/hotel category—resorts, lounges, guest experiences and leisure spaces.",
      items:[
        ["Resort / Property Arrival","Arrival court, entrance, reception and first-touch guest experience.",img.living],
        ["Guest Lounge","Comfortable social zones with layered lighting and relaxed seating.",img.office],
        ["Guest Services","Concierge, service desk, waiting and guest assistance areas.",img.office2],
        ["Guest Rooms & Suites","Comfort-led accommodation spaces with storage, lighting and premium detailing.",img.bedroom],
        ["Banquet & Celebration","Wedding, conference and celebration environments with flexible planning.",img.event],
        ["Conference & Business Lounge","Meeting, waiting and business-support environments for guests.",img.office2],
        ["Recreation Spaces","Leisure lounges, activity areas and guest social spaces.",img.living],
        ["Wellness Areas","Yoga, meditation, fitness and quiet recovery spaces.",img.bath]
      ]},
    {title:"Spa Division",tag:"02",desc:"Purpose-built spa and wellness spaces with calming visual language and practical service flow.",
      items:[
        ["Spa Reception","Reception counter, retail display, waiting and arrival experience.",img.living],
        ["Treatment Rooms","Private rooms with treatment bed, storage, controlled lighting and calming finishes.",img.bedroom],
        ["Couple Treatment Rooms","Larger treatment suites with privacy and coordinated circulation.",img.office2],
        ["Steam & Sauna","Heat-area planning with suitable materials, ventilation and privacy.",img.bath],
        ["Wet Area / Shower","Hygienic wet zones with drainage, ventilation, fittings and durable finishes.",img.bath],
        ["Relaxation Lounge","Quiet recovery area with soft seating, low visual noise and ambient lighting.",img.office],
        ["Beauty / Salon","Service stations, mirrors, storage, lighting and customer movement.",img.living],
        ["Changing / Locker Rooms","Guest changing, lockers, vanity and circulation planning.",img.bath],
        ["Spa Retail","Product display and checkout integrated into the guest journey.",img.office2],
        ["Wellness Studio","Yoga, meditation, breathwork or movement studio with uncluttered planning.",img.living]
      ]}
  ]
},
special:{
  n:"E",title:"Specialised Spaces",
  desc:"Special project types that sit outside the four core divisions while still using the same design, detailing and project-management workflow.",
  groups:[
    {title:"Specialised Spaces",tag:"01",desc:"Showrooms, outdoor extensions, event environments and specialist commercial spaces.",
      items:[
        ["Showrooms","Product-led layouts, display systems, feature zones, customer flow and brand experience.",img.office2],
        ["Retail / Experience Zones","Merchandising, feature displays and customer journey planning.",img.living],
        ["Out House","Detached guest, leisure or utility structures designed as part of the property.",img.office],
        ["Events & Exhibitions","Stages, booths, backdrops, temporary installations and branded environments.",img.event],
        ["Medical / Professional Spaces","Reception, consultation, waiting and support spaces with clear circulation.",img.office2],
        ["Project Management","Planning, procurement, installation, supervision, quality checks and delivery coordination.",img.office]
      ]}
  ]
}
};

function cardTemplate(item){
  return `<article class="space-card">
    <div class="space-card-media"><img src="${item[2]}" alt="${item[0]} interior design by Dhaka Decor" loading="lazy"></div>
    <div class="space-card-copy"><span>EXPLORE SPACE</span><h4>${item[0]}</h4><p>${item[1]}</p></div>
  </article>`;
}

let refreshTimer;
function refreshTriggers(delay=0){
  clearTimeout(refreshTimer);
  refreshTimer=setTimeout(()=>{ if(window.ScrollTrigger && window.__stReady) ScrollTrigger.refresh(); },delay);
}

function render(cat){
  const d=data[cat], panel=document.getElementById("categoryPanel");
  panel.innerHTML=`
    <div class="cat-intro">
      <div><div class="cat-number">${d.n}</div><h3 class="cat-title">${d.title}</h3></div>
      <p class="cat-desc">${d.desc}<br><strong>Open one collection at a time.</strong></p>
    </div>
    <div class="category-accordion">
      ${d.groups.map((g,i)=>`
        <section class="category-group ${i===0?"is-open":""}">
          <button class="group-trigger" type="button" aria-expanded="${i===0}">
            <span class="group-index">${g.tag}</span>
            <span class="group-name">${g.title}</span>
            <span class="group-desc">${g.desc}</span>
            <span class="group-plus">+</span>
          </button>
          <div class="group-content">
            <div class="group-inner"><div class="space-grid">${g.items.map(cardTemplate).join("")}</div></div>
          </div>
        </section>`).join("")}
    </div>`;

  const groups=[...panel.querySelectorAll(".category-group")];
  groups.forEach(group=>{
    const trigger=group.querySelector(".group-trigger"), content=group.querySelector(".group-content");
    trigger.addEventListener("click",()=>{
      const wasOpen=group.classList.contains("is-open");
      groups.forEach(other=>{
        other.classList.remove("is-open");
        other.querySelector(".group-trigger").setAttribute("aria-expanded","false");
      });
      if(!wasOpen){
        group.classList.add("is-open");
        trigger.setAttribute("aria-expanded","true");
        if(window.gsap) gsap.fromTo(group.querySelectorAll(".space-card"),{y:28,opacity:0,rotateX:4},{y:0,opacity:1,rotateX:0,stagger:.045,duration:.55,ease:"power3.out"});
      }
      refreshTriggers(750); // after the .65s open/close transition finishes
      // keep the clicked header in view: an open group above it collapses and would otherwise drag the page past it
      setTimeout(()=>{
        const top=trigger.getBoundingClientRect().top;
        if(top<90 || top>window.innerHeight*0.6){
          const y=window.scrollY+top-100;
          if(window.__lenis) window.__lenis.scrollTo(y,{duration:.8});
          else window.scrollTo({top:y,behavior:"smooth"});
        }
      },700);
    });
  });
  if(window.gsap) gsap.fromTo(panel.querySelectorAll(".category-group"),{y:25,opacity:0},{y:0,opacity:1,stagger:.05,duration:.6,ease:"power3.out"});
  refreshTriggers(100);
}

render("corporate");

document.querySelectorAll(".cat-btn").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".cat-btn").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  render(btn.dataset.cat);
}));

const menuButton=document.querySelector(".menu");
const mainNav=document.getElementById("mainNav");
menuButton?.addEventListener("click",()=>{
  const open=document.querySelector(".nav").classList.toggle("is-menu-open");
  menuButton.setAttribute("aria-expanded",open?"true":"false");
});
mainNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav")?.classList.remove("is-menu-open")));

function init(){
  const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if(window.Lenis && !reduceMotion){
    const lenis=new Lenis({duration:1.15,smoothWheel:true});
    window.__lenis=lenis;
    if(window.gsap && window.ScrollTrigger){
      // one shared clock: Lenis drives ScrollTrigger, GSAP ticker drives Lenis
      lenis.on("scroll",ScrollTrigger.update);
      gsap.ticker.add(t=>lenis.raf(t*1000));
      gsap.ticker.lagSmoothing(0);
    }else{
      function raf(t){lenis.raf(t);requestAnimationFrame(raf)}
      requestAnimationFrame(raf);
    }
  }
  if(window.gsap && window.ScrollTrigger && !reduceMotion){
    gsap.utils.toArray(".display").forEach(el=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 86%"},y:70,opacity:0,duration:1,ease:"power3.out"}));
    gsap.utils.toArray(".section-kicker").forEach(el=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 88%"},x:-25,opacity:0,duration:.7}));
    gsap.to(".hero-media img",{yPercent:12,scale:1.08,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
    gsap.to(".hero-copy",{yPercent:-14,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
    gsap.to(".hero-orbit",{rotation:70,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
    gsap.to(".visual-break-bg img",{scale:1.12,yPercent:7,scrollTrigger:{trigger:".visual-break",start:"top bottom",end:"bottom top",scrub:true}});
    gsap.utils.toArray(".step").forEach((el,i)=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 88%"},x:35,opacity:0,duration:.7,delay:i*.03}));
    gsap.utils.toArray(".service-grid article").forEach((el,i)=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 92%"},y:25,opacity:0,duration:.55,delay:(i%4)*.06}));
    gsap.utils.toArray(".gallery-card").forEach((el,i)=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 90%"},y:60,opacity:0,rotation:i%2?-1.5:1.5,duration:.9,delay:i*.08,ease:"power3.out"}));
    window.__stReady=true;
    // images load late and change heights: re-measure once everything is in, and on resize/rotate
    window.addEventListener("load",()=>refreshTriggers(300));
    refreshTriggers(1500);
    let rt;window.addEventListener("resize",()=>{clearTimeout(rt);rt=setTimeout(()=>ScrollTrigger.refresh(),250)});
  }
  // Hover tilt: desktop (real hover) only, driven by GSAP so it never fights the scroll-in animation
  if(window.gsap && !reduceMotion && window.matchMedia("(hover:hover) and (pointer:fine)").matches){
    document.querySelectorAll(".gallery-card").forEach(el=>{
      el.addEventListener("mousemove",e=>{
        const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        gsap.to(el,{rotationY:x*4,rotationX:y*-4,transformPerspective:900,duration:.4,ease:"power2.out",overwrite:"auto"});
      });
      el.addEventListener("mouseleave",()=>gsap.to(el,{rotationY:0,rotationX:0,duration:.6,ease:"power3.out",overwrite:"auto"}));
    });
  }
}

let siteStarted=false;
function startSite(){
  if(siteStarted) return;
  siteStarted=true;
  const loader=document.getElementById("loader"), line=loader.querySelector("i");
  if(window.gsap) gsap.to(line,{width:"100%",duration:.6,ease:"power2.inOut",onComplete:()=>gsap.to(loader,{autoAlpha:0,duration:.5,pointerEvents:"none"})});
  else{line.style.width="100%";setTimeout(()=>loader.style.display="none",700)}
  init();
}
window.addEventListener("load",startSite);
// Failsafe: never keep visitors on the loader if a slow image delays the load event
setTimeout(()=>{ if(!siteStarted && window.gsap) startSite(); },2500);

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f=e.currentTarget;
  const subject=encodeURIComponent("New interior project enquiry — "+f.project.value);
  const body=encodeURIComponent(`Name: ${f.name.value}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\nProject: ${f.project.value}\n\nMessage:\n${f.message.value}`);
  window.location.href=`mailto:info@dhakadecor.com?subject=${subject}&body=${body}`;
});
});
// Site-wide light / dark colour mode. Preference is remembered locally.
const themeButtons=[document.getElementById("themeToggle"),document.getElementById("themeToggleMobile")].filter(Boolean);
let savedTheme=null;
try{savedTheme=localStorage.getItem("dhakaDecorTheme")}catch(e){}
if(savedTheme) document.body.dataset.theme=savedTheme;
function syncThemeButtons(){
  const dark=document.body.dataset.theme==="dark";
  themeButtons.forEach(btn=>{
    btn.setAttribute("aria-pressed",dark?"true":"false");
    btn.querySelector(".theme-icon").textContent=dark?"☀":"☾";
    btn.querySelector(".theme-label").textContent=dark?"Light":"Dark";
  });
}
syncThemeButtons();
themeButtons.forEach(btn=>btn.addEventListener("click",()=>{
  const next=document.body.dataset.theme==="dark"?"light":"dark";
  document.body.dataset.theme=next;
  try{localStorage.setItem("dhakaDecorTheme",next)}catch(e){}
  syncThemeButtons();
}));
