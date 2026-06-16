/* =========================================================
   KITH Operations Portal  ·  Arista Systems
   script.js  ·  Vanilla JavaScript (no frameworks)
   All department content lives in the DEPARTMENTS object.
   ========================================================= */

/* ---------- Inline SVG icons ---------- */
const ICON = {
  truck:'<path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/>',
  box:'<path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M4 7l8 4 8-4"/><path d="M12 11v10"/>',
  bag:'<path d="M6 8h12l-1 12H7z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
  layers:'<path d="M12 3 3 8l9 5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  receipt:'<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>',
  chev:'<path d="m6 9 6 6 6-6"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  star:'<path d="m12 3 2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>',
  wrench:'<path d="M14 7a4 4 0 0 1-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5z"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6"/>',
  shield:'<path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6z"/>',
  bolt:'<path d="M13 3 4 14h6l-1 7 9-11h-6z"/>',
  flag:'<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
  sync:'<path d="M4 12a8 8 0 0 1 13.7-5.7L20 8M20 12a8 8 0 0 1-13.7 5.7L4 16"/><path d="M20 4v4h-4M4 20v-4h4"/>',
  doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
  alert:'<path d="M12 4 2 20h20z"/><path d="M12 10v4M12 18h.01"/>'
};
function svg(name,cls){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"'+(cls?' class="'+cls+'"':'')+'>'+(ICON[name]||'')+'</svg>';}

/* ---------- Department data (verified, H1 2026) ---------- */
const DEPARTMENTS = [
  {
    id:'fulfillment', num:'01', icon:'truck',
    name:'Fulfillment Operations',
    tagline:'Order management and fulfillment across four regions, on OMLOG and Bleckmann WMS, OMAS and VRP.',
    regions:['US','EU','UK','CA'],
    systems:['OMLOG WMS','Bleckmann WMS','OMAS','VRP'],
    metrics:[{v:'428,539',l:'Orders processed'},{v:'95.6%',l:'US ship rate'},{v:'1.06%',l:'US refund rate'},{v:'21,924',l:'Messi orders managed'}],
    cardStats:[{v:'428,539',l:'Orders'},{v:'95.6%',l:'US ship rate'}],
    sections:[
      {icon:'list',title:'Scope & Responsibilities',items:[
        'End-to-end order management and fulfillment across US, EU, UK and CA',
        'US orders processed on OMLOG WMS with VRP; EU, UK and CA on OMAS with Bleckmann WMS',
        'Daily order release, exception handling, and refund and cancellation review',
        'Chargeback monitoring and resolution',
        'Upstream data-gap escalation and SKU mapping to keep orders flowing']},
      {icon:'chart',title:'Volume & Performance by Region',items:[
        '<span class="k">US:</span> 387,401 orders, 95.57% shipped, 1.06% refund rate, 1.50% cancelled in review',
        '<span class="k">EU:</span> 18,985 orders fulfilled at 90.85%',
        '<span class="k">CA:</span> 12,264 orders fulfilled at 92.0%',
        '<span class="k">UK:</span> 9,889 orders fulfilled at 91.1%',
        '<span class="k">Combined:</span> 428,539 orders across four regions, roughly 408K shipped']},
      {icon:'star',title:'The Messi Launch — Peak Performance',items:[
        '21,924 orders managed end to end',
        '19,787 shipped (90.3%), with 98.6% progressing to completion',
        'Only 87 refunds and 2 chargebacks across the entire launch',
        'Proven peak resilience with no loss of quality']},
      {icon:'doc',title:'Case Study — US OMLOG Data-Gap Recovery',items:[
        '<span class="k">Challenge:</span> orders held in OMLOG for missing HS code, country of origin and composition',
        '<span class="k">Solution:</span> structured escalation and tracking to identify affected styles and update VRP',
        '<span class="k">Impact:</span> blocked orders released, preventing aging, rework and lost sales']},
      {icon:'doc',title:'Case Study — EU/UK/CA SKU-Mismatch Recovery',items:[
        '<span class="k">Challenge:</span> orders marked failed due to SKU mismatches between OMS and WMS',
        '<span class="k">Solution:</span> identify mismatched SKUs, map them correctly and re-export',
        '<span class="k">Impact:</span> failed orders recovered and processed across three regions']},
      {icon:'bolt',title:'Automation & Efficiency',items:[
        'AI reduced report-preparation time by 60 to 70%',
        'Faster daily visibility into fulfillment status and exceptions']},
      {icon:'wrench',title:'Tools & Systems',items:['OMLOG WMS','Bleckmann WMS','OMAS','VRP']},
      {icon:'users',title:'Team',team:[
        {n:'Ronnie C.',r:'Fulfillment Operations Executive'},
        {n:'Nikita S.',r:'Fulfillment Operations Executive',bk:'Backup · EU / UK / CA'},
        {n:'Miguel',r:'Onshore Manager'}]}
    ]
  },
  {
    id:'inventory', num:'02', icon:'box',
    name:'Inventory Operations & Retail Operations',
    tagline:'Inventory control, reconciliation, transfers, exceptions and store supplies across US, UK and CA.',
    regions:['US','UK','CA'],
    systems:['VRP','WMS','Dash','ClickUp','Shopify'],
    metrics:[{v:'$527K',l:'Inventory value (MSRP)'},{v:'5,206',l:'Units managed'},{v:'599',l:'References processed'},{v:'272',l:'CC-Supplies tasks'}],
    cardStats:[{v:'$527K',l:'Inventory value'},{v:'5,206',l:'Units'}],
    sections:[
      {icon:'list',title:'Scope & Responsibilities',items:[
        'Inventory control, reconciliation, transfers and exception management across US, UK and CA',
        'Store supply operations end to end',
        'Receiving readiness and inventory movement continuity',
        'Operational support for the Retail Operations organization']},
      {icon:'doc',title:'Core Workflows',items:[
        '<span class="k">Supply PT (US, UK, CA):</span> request intake, validation, replenishment coordination, approvals and execution, via Dash',
        '<span class="k">ASN & Style Master:</span> management supporting receiving readiness and inventory movement',
        '<span class="k">Damage Processing:</span> review, governance and execution support',
        '<span class="k">Kith Reconciliation & Miss-Receiving:</span> investigation, issue resolution and closure in ClickUp',
        '<span class="k">Cycle Count:</span> supply cycle-count governance and execution support',
        '<span class="k">Aged-Transfer Reconciliation:</span> clearing and governing open transfers']},
      {icon:'chart',title:'Key Metrics (H1 2026)',items:[
        '272 CC-Supplies tasks reviewed and processed',
        '599 references: 157 damage, 217 deduction, 140 addition, 85 inventory movements',
        '5,206 units: 811 damaged, 784 added, 3,611 deducted',
        '<span class="k">$527,635</span> inventory value supported (MSRP)']},
      {icon:'sync',title:'Cadence & Governance',items:[
        'Pending Transfer Report distributed twice weekly (Monday and Friday)',
        'Continuous monitoring of supply inventory and replenishment',
        'Discrepancy investigation through to operational closure']},
      {icon:'star',title:'Highlights & Value',items:[
        '3PL cost-factor review reduces operational leakage',
        '09C Shopify exception management reduces fulfillment failures',
        'Reconciliation backlog turned into proactive, twice-weekly transfer control']},
      {icon:'flag',title:'Retail Operations Expansion',items:[
        'Leadership transition underway across the Retail Operations structure',
        'Opportunity to expand execution ownership: day-to-day continuity, recurring workflow ownership, direct store and onshore coordination',
        'Phased ownership expansion under evaluation with clear governance, boundaries and success measures']},
      {icon:'wrench',title:'Tools & Systems',items:['VRP','WMS','Dash','ClickUp','Shopify']},
      {icon:'users',title:'Team',team:[
        {n:'Satvik M.',r:'Sr. Executive, Inventory Operations'},
        {n:'Vaishnavi C.',r:'Jr. Operations Executive'},
        {n:'Michael S. / Asher',r:'Onshore Managers'}],
       note:'Figures sourced from VRP and WMS and may vary slightly from original values.'}
    ]
  },
  {
    id:'production', num:'03', icon:'bag',
    name:'Production & Buying',
    tagline:'End-to-end PO creation, style setup, pricing, LV and UPC uploads and tech packs across all buying lines and production.',
    regions:['US','EU','UK','CA'],
    systems:['Exenta','VRP','Kith utilities'],
    metrics:[{v:'3,200+',l:'Purchase orders'},{v:'10,700+',l:'Styles managed'},{v:'4,800+',l:'Validated in Exenta'},{v:'1,800',l:'Tech packs / week'}],
    cardStats:[{v:'3,200+',l:'POs'},{v:'10,700+',l:'Styles'}],
    sections:[
      {icon:'list',title:'Scope & Responsibilities',items:[
        'End-to-end PO creation and management across Footwear, Men\u2019s Buying, Women\u2019s Buying and Production',
        'Style setup, pricing updates, LV and UPC uploads',
        'Tech pack creation and validation; data governance in Exenta',
        'New-vendor onboarding support across all four regions']},
      {icon:'doc',title:'Buying Lines',items:[
        '<span class="k">Footwear:</span> 2,500+ POs, 3,000+ styles across Q1 and Q2',
        '<span class="k">Men\u2019s Buying:</span> 300+ POs, 3,500+ styles',
        '<span class="k">Women\u2019s Buying:</span> 430+ POs, 4,200+ styles',
        '<span class="k">Combined:</span> 3,230+ POs and 10,700+ styles across four regions']},
      {icon:'chart',title:'Production & Data Governance',items:[
        '4,800+ styles validated in Exenta',
        '2,800+ tech packs updated',
        '600+ pricing updates, 350+ fabric information, 200+ master POs, 300+ outstanding order margins',
        '1,000+ LVs and UPCs uploaded across all regions (May 2026)']},
      {icon:'star',title:'Speed & Throughput',items:[
        '261 styles created same-day (163 for AL43026LIFE, 98 for NK020526)',
        '182 priority styles delivered in 1.5 days',
        'Multibrand: 1,218 styles created in February 2026',
        '1,800 tech packs uploaded in a single week',
        'Priority POs turned in 24 to 48 hours']},
      {icon:'flag',title:'Forward Focus',items:[
        'Driving Q3 and Q4 PO execution',
        'Onboarding new vendors while scaling without disruption',
        'Closely monitoring pending LV uploads for upcoming buys']},
      {icon:'wrench',title:'Tools & Systems',items:['Exenta','VRP','Kith utilities']},
      {icon:'users',title:'Team',team:[
        {n:'Shimon H.',r:'Team Lead, Production & Buying'},
        {n:'Prachi L.',r:'Sr. Associate, Production & Buying'},
        {n:'Kaustubh B.',r:'Associate, Production & Buying',bk:'Backup'},
        {n:'Arnav T.',r:'Associate, Production & Buying',bk:'Backup'},
        {n:'Patrick / Justin / Shelby / Lance',r:'Onshore Managers'}]}
    ]
  },
  {
    id:'legacy', num:'04', icon:'layers',
    name:'Legacy Operations',
    tagline:'Bergen receiving, DTR processing, and Wholesale OC conversions, size breaks and kids testing.',
    regions:['Bergen','DTR','Wholesale'],
    systems:['VRP','Exenta'],
    metrics:[{v:'328',l:'Tasks delivered'},{v:'97%',l:'On-time rate'},{v:'Zero',l:'Backlog through H1'},{v:'99%',l:'ASN receipt rate'}],
    cardStats:[{v:'328',l:'Tasks'},{v:'97%',l:'On-time'}],
    sections:[
      {icon:'list',title:'Scope & Responsibilities',items:[
        'Bergen and receiving operations',
        'DTR receiving and processing',
        'Wholesale OC conversions, size breaks and kids testing',
        'Cross-channel data accuracy and timely delivery']},
      {icon:'chart',title:'Channel Performance (H1 2026)',items:[
        '328 tasks delivered, 97% on-time, under 24h average, zero backlog through H1',
        '<span class="k">Bergen:</span> 84 ASNs created, 83 received (99% receipt rate)',
        '<span class="k">DTR:</span> 53 receipts and 53 invoices processed, zero pending',
        '<span class="k">Wholesale:</span> 181 OC conversions (zero revision requests), 71 size breaks, 128 kids-testing checks']},
      {icon:'bolt',title:'Automation & Process Improvements',items:[
        'AI reduced manual review by 35% and OC report formatting time by 75%',
        'Zero data submission errors in H1 2026',
        'Standardized ASN creation checklist reduced back-and-forth by 40%',
        'Weekly OC pipeline review prevents end-of-season volume spikes']},
      {icon:'sync',title:'Resilience & Standards',items:[
        'Cross-training ensures zero single point of failure on any stream',
        'Standardized SOPs across recurring workflows',
        'DTR tracker for visibility and follow-up']},
      {icon:'alert',title:'Risks & Dependencies',items:[
        'Season-end OC spikes (April: 54 OCs, 3x the average) with no advance notice',
        'Incomplete and mismatched DTR data',
        'Delayed ASN confirmations from the Bergen 3PL',
        '<span class="k">Ask:</span> DTR submissions to include complete invoice reference numbers before handoff']},
      {icon:'wrench',title:'Tools & Systems',items:['VRP','Exenta']},
      {icon:'users',title:'Team',team:[
        {n:'Akshay A.',r:'Sr. Operations Executive'},
        {n:'Anshul N.',r:'Jr. Operations Executive'},
        {n:'Jefry',r:'Onshore Manager'}]}
    ]
  },
  {
    id:'eu-uk', num:'05', icon:'globe',
    name:'EU & UK Operations',
    tagline:'EU and UK Pre-Advice creation and receiving into VRP and Exenta, feeding the Bleckmann warehouse.',
    regions:['EU','UK'],
    systems:['VRP','Exenta','Power BI','Python'],
    metrics:[{v:'94.3%',l:'EU accuracy'},{v:'91.5%',l:'UK accuracy'},{v:'<48h',l:'Turnaround'},{v:'Feb 2026',l:'UK onboarded'}],
    cardStats:[{v:'2',l:'Regions'},{v:'<48h',l:'Turnaround'}],
    sections:[
      {icon:'list',title:'Scope & Responsibilities',items:[
        'EU and UK Pre-Advice (PA) creation and receiving',
        'PAs created for Kith, Multi-brand and Transfers',
        'Uploads of FOB, HTS, COO and EAN into VRP',
        'Receiving feeding the Bleckmann warehouse']},
      {icon:'doc',title:'Pre-Advice Workflow',items:[
        'Kith PAs received into Exenta; Multi-brand PAs received into VRP',
        'Logistic value uploads (HTS, FOB, COO, EAN and UPC) to enable PA creation',
        'Receiving Validation Report to confirm accuracy']},
      {icon:'chart',title:'Key Metrics (H1 2026)',items:[
        '<span class="k">EU:</span> 94.33% accuracy',
        '<span class="k">UK:</span> 91.53% accuracy',
        'Under 48-hour turnaround',
        'UK region onboarded February 2026, ramping every month']},
      {icon:'star',title:'Highlights & Wins',items:[
        'Bulk Wilson EAN upload (EU)',
        'Messi x Adidas PA creation (UK)',
        'EU to UK transition and onboarding',
        'Receiving Validation Report rollout']},
      {icon:'bolt',title:'Automation & Tools',items:[
        'Power BI dashboard for PA creation and receiving (in development)',
        'AI invoice simplification reduces handling to 30 to 60 minutes',
        'PA automation saves 1 to 2 hours per file (Python and AI)']},
      {icon:'wrench',title:'Tools & Systems',items:['VRP','Exenta','Power BI','Python']},
      {icon:'users',title:'Team',team:[
        {n:'Sahil P.',r:'Sr. Operations Executive'},
        {n:'Nishant P.',r:'Operations Executive'},
        {n:'Sander',r:'Onshore Manager'}]}
    ]
  },
  {
    id:'reconciliation', num:'06', icon:'receipt',
    name:'Account Reconciliation',
    tagline:'AP reconciliation across 18 locations and invoice-to-container matching for KITH and SMU.',
    regions:['18 locations'],
    systems:['Exenta','Yooz','ClickUp','Tableau'],
    metrics:[{v:'$14.6M',l:'Reconciled'},{v:'5,737',l:'Invoices'},{v:'18',l:'Locations'},{v:'100%',l:'SLA, every month'}],
    cardStats:[{v:'$14.6M',l:'Reconciled'},{v:'100%',l:'SLA'}],
    sections:[
      {icon:'list',title:'Scope & Responsibilities',items:[
        'AP reconciliation across 18 locations',
        'Invoice-to-container matching for KITH and SMU',
        'Discrepancy resolution: incorrect invoices, amount and quantity mismatches',
        'Vendor and store coordination for posting and confirmation']},
      {icon:'chart',title:'Volume & SLA Performance',items:[
        '<span class="k">$14.6M</span> reconciled across 5,737 invoices and 18 locations',
        '100% on a 48-hour SLA for five straight months',
        'April surge absorbed with no added headcount: +70.5% invoice count, +47.9% amount',
        '<span class="k">Omlog USA:</span> 53.4% of total volume, $7.79M, $4,620 average invoice value']},
      {icon:'doc',title:'Invoice-to-Container Matching',items:[
        '<span class="k">$28.4M</span> matched across 1,039 shipments and 28 vendors',
        'On Running (PO OR030126KTECH): 98 invoices, 12 styles, 7,232 received units']},
      {icon:'flag',title:'Scope Expansion from Onshore',items:[
        '<span class="k">London:</span> 584 invoices, $898K',
        '<span class="k">EU Logistic:</span> 192 invoices, $278K',
        '<span class="k">Chicago:</span> 165 invoices, $260K',
        '<span class="k">Dallas:</span> 50 invoices, $59K',
        '<span class="k">Combined:</span> 991 invoices, roughly $1.49M now handled offshore']},
      {icon:'shield',title:'Controls & Recoveries',items:[
        'Secured a $21,033 credit note from Converse (PO CN110125KITHRE)',
        'Flagged a $9,287 duplicate invoice from Continent 8',
        'Incorrect vendor discounts flagged before posting',
        'Every task carries an owner, due date and timestamp in ClickUp']},
      {icon:'alert',title:'Risks & Dependencies',items:[
        '78% of invoices (943 of 1,210) carry a PO-receiving mismatch',
        'Paris reconciliation pending as the next scope (currently onshore)',
        '<span class="k">Ask:</span> a named owner for every PO and a 24 to 48 hour posting SLA']},
      {icon:'wrench',title:'Tools & Systems',items:['Exenta','Yooz','ClickUp','Tableau']},
      {icon:'users',title:'Team',team:[
        {n:'Apeksha K.',r:'Team Lead, Accounts Reconciliation'},
        {n:'Sahil V.',r:'Accounts Reconciliation Executive'},
        {n:'Deepal T.',r:'Accounts Reconciliation Specialist'},
        {n:'Rashmi R.',r:'Sr. Accounts Reconciliation Executive'},
        {n:'Sinclair',r:'Onshore Manager'}]}
    ]
  }
];

/* ---------- helpers ---------- */
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
const strip=h=>h.replace(/<[^>]+>/g,'');

/* ---------- render top-nav dropdowns ---------- */
function renderNav(){
  const NAV_LABEL={fulfillment:'Fulfillment','inventory':'Inventory & Retail',production:'Production',legacy:'Legacy','eu-uk':'EU & UK',reconciliation:'Reconciliation'};
  const nav=$('#primaryNav');
  nav.innerHTML=DEPARTMENTS.map(d=>`
    <li class="nav-item" data-nav="${d.id}">
      <button class="nav-trigger" aria-haspopup="true" aria-expanded="false">
        ${svg(d.icon,'ix')}<span>${NAV_LABEL[d.id]||d.name}</span>${svg('chev','chev')}
      </button>
      <div class="dropdown" role="menu">
        <div class="dd-head">${d.name}</div>
        ${d.sections.map((s,i)=>`<a role="menuitem" href="#${d.id}-sec-${i}"><span class="dot"></span>${s.title}</a>`).join('')}
      </div>
    </li>`).join('');
}

/* ---------- render sidebar ---------- */
function renderSidebar(){
  const side=$('#sideNav');
  side.innerHTML=`
    <div class="side-label">Portal</div>
    <a class="side-link" href="#overview"><span class="sx">${svg('list')}</span>Overview</a>
    <div class="side-sep"></div>
    <div class="side-label">Departments</div>
    ${DEPARTMENTS.map(d=>`
      <a class="side-link" href="#${d.id}" data-spy="${d.id}">
        <span class="s-num">${d.num}</span><span class="sx">${svg(d.icon)}</span>
        ${d.name.replace(' Operations & Retail Operations',' & Retail Ops')}
      </a>`).join('')}`;
}

/* ---------- render overview cards ---------- */
function renderCards(){
  $('#deptCards').innerHTML=DEPARTMENTS.map(d=>{
    const searchText=(d.name+' '+d.tagline+' '+d.systems.join(' ')+' '+d.sections.map(s=>s.title+' '+(s.items?s.items.map(strip).join(' '):'')+' '+(s.team?s.team.map(t=>t.n+' '+t.r).join(' '):'')).join(' ')).toLowerCase();
    return `
    <article class="card" data-card="${d.id}" data-search="${searchText.replace(/"/g,'')}" tabindex="0" role="link" aria-label="${d.name}">
      <div class="card-top">
        <span class="card-icon">${svg(d.icon)}</span>
        <span class="card-num">${d.num}</span>
      </div>
      <h3>${d.name}</h3>
      <p class="tagline">${d.tagline}</p>
      <div class="card-stats">
        ${d.cardStats.map(s=>`<div class="cs"><div class="v">${s.v}</div><div class="l">${s.l}</div></div>`).join('')}
      </div>
      <span class="card-go">View department ${svg('arrow')}</span>
    </article>`;}).join('');
}

/* ---------- render department sections ---------- */
function renderSections(){
  $('#deptSections').innerHTML=DEPARTMENTS.map(d=>`
    <section class="dept" id="${d.id}" data-dept="${d.id}">
      <div class="dept-header">
        <span class="dh-ghost">${d.num}</span>
        <div class="eyebrow">Department ${d.num}</div>
        <div class="dh-row">
          <span class="dh-icon">${svg(d.icon)}</span>
          <h2>${d.name}</h2>
        </div>
        <p class="dh-tag">${d.tagline}</p>
        <div class="chips">
          ${d.regions.map(r=>`<span class="chip region">${r}</span>`).join('')}
          ${d.systems.map(s=>`<span class="chip">${s}</span>`).join('')}
        </div>
      </div>
      <div class="metric-rail">
        ${d.metrics.map(m=>`<div class="metric"><div class="v">${m.v}</div><div class="l">${m.l}</div></div>`).join('')}
      </div>
      <div class="accordions">
        ${d.sections.map((s,i)=>{
          let body;
          if(s.team){
            body=`<div class="team-grid">${s.team.map(t=>`<div class="team-card"><div class="tn">${t.n}</div><div class="tr">${t.r}</div>${t.bk?`<span class="tag-bk">${t.bk}</span>`:''}</div>`).join('')}</div>`;
          } else if(s.title==='Tools & Systems'){
            body=`<div class="chips" style="margin-top:6px">${s.items.map(x=>`<span class="chip" style="background:var(--surface-2);color:var(--text);border-color:var(--border)">${x}</span>`).join('')}</div>`;
          } else {
            body=`<ul class="acc-list">${s.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
          }
          const itemSearch=(d.name+' '+s.title+' '+(s.items?s.items.map(strip).join(' '):'')+' '+(s.team?s.team.map(t=>t.n+' '+t.r).join(' '):'')).toLowerCase().replace(/"/g,'');
          return `
          <div class="acc" data-acc data-search="${itemSearch}" aria-expanded="false">
            <button class="acc-btn" id="${d.id}-sec-${i}" aria-expanded="false">
              <span class="acc-ix">${svg(s.icon||'list')}</span>
              <span class="acc-title">${s.title}</span>
              ${svg('chev','acc-chev')}
            </button>
            <div class="acc-panel"><div class="acc-panel-inner">${body}${s.note?`<div class="note">${s.note}</div>`:''}</div></div>
          </div>`;
        }).join('')}
      </div>
    </section>`).join('');
}

/* ---------- dropdowns ---------- */
function initDropdowns(){
  $$('.nav-item .nav-trigger').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.stopPropagation();
      const item=btn.closest('.nav-item');
      const isOpen=item.classList.contains('open');
      $$('.nav-item').forEach(i=>{i.classList.remove('open');i.querySelector('.nav-trigger').setAttribute('aria-expanded','false');});
      if(!isOpen){item.classList.add('open');btn.setAttribute('aria-expanded','true');}
    });
  });
  document.addEventListener('click',()=>$$('.nav-item').forEach(i=>{i.classList.remove('open');i.querySelector('.nav-trigger').setAttribute('aria-expanded','false');}));
  $$('.dropdown a').forEach(a=>a.addEventListener('click',()=>$$('.nav-item').forEach(i=>i.classList.remove('open'))));
}

/* ---------- accordions ---------- */
function setAcc(acc,open){
  const btn=acc.querySelector('.acc-btn');
  const panel=acc.querySelector('.acc-panel');
  acc.setAttribute('aria-expanded',open);
  btn.setAttribute('aria-expanded',open);
  panel.style.maxHeight=open?panel.scrollHeight+'px':'0px';
}
function initAccordions(){
  $$('[data-acc]').forEach(acc=>{
    acc.querySelector('.acc-btn').addEventListener('click',()=>{
      setAcc(acc,acc.getAttribute('aria-expanded')!=='true');
    });
  });
}

/* ---------- cards click -> scroll to dept ---------- */
function initCards(){
  $$('.card').forEach(card=>{
    const go=()=>{location.hash='#'+card.dataset.card;};
    card.addEventListener('click',go);
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}});
  });
}

/* ---------- search ---------- */
function initSearch(){
  const input=$('#searchInput'),wrap=$('.search'),banner=$('#searchBanner'),noRes=$('#noResults');
  function run(){
    const q=input.value.trim().toLowerCase();
    wrap.classList.toggle('active',q.length>0);
    if(!q){
      $$('.card').forEach(c=>c.classList.remove('is-hidden'));
      $$('.dept').forEach(s=>s.classList.remove('is-hidden'));
      $$('[data-acc]').forEach(a=>{a.classList.remove('is-hidden');setAcc(a,false);});
      $$('.side-link[data-spy]').forEach(l=>l.classList.remove('is-hidden'));
      banner.classList.remove('show');noRes.classList.remove('show');
      return;
    }
    let deptMatches=0;
    DEPARTMENTS.forEach(d=>{
      const section=$('#'+d.id);
      const card=$('.card[data-card="'+d.id+'"]');
      const sideLink=$('.side-link[data-spy="'+d.id+'"]');
      const nameHit=d.name.toLowerCase().includes(q)||d.tagline.toLowerCase().includes(q);
      let anyItem=false;
      $$('[data-acc]',section).forEach(acc=>{
        const hit=nameHit||acc.dataset.search.includes(q);
        acc.classList.toggle('is-hidden',!hit);
        setAcc(acc,hit);
        if(hit)anyItem=true;
      });
      const show=nameHit||anyItem;
      section.classList.toggle('is-hidden',!show);
      if(card)card.classList.toggle('is-hidden',!(nameHit||(card.dataset.search||'').includes(q)));
      if(sideLink)sideLink.classList.toggle('is-hidden',!show);
      if(show)deptMatches++;
    });
    banner.querySelector('#sbCount').textContent=deptMatches;
    banner.querySelector('#sbQuery').textContent=input.value.trim();
    banner.classList.add('show');
    noRes.classList.toggle('show',deptMatches===0);
    $('#nrQuery').textContent=input.value.trim();
  }
  input.addEventListener('input',run);
  $('#searchClear').addEventListener('click',()=>{input.value='';run();input.focus();});
  input.addEventListener('keydown',e=>{if(e.key==='Escape'){input.value='';run();}});
}

/* ---------- scrollspy ---------- */
function initSpy(){
  const links=$$('.side-link[data-spy]');
  const map={};links.forEach(l=>map[l.dataset.spy]=l);
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        links.forEach(l=>l.classList.remove('active'));
        const a=map[en.target.id];if(a)a.classList.add('active');
      }
    });
  },{rootMargin:'-30% 0px -60% 0px',threshold:0});
  $$('.dept').forEach(s=>obs.observe(s));
}

/* ---------- mobile drawer ---------- */
function initMobile(){
  const side=$('#sidebar'),scrim=$('#scrim'),burger=$('#hamburger');
  const toggle=open=>{side.classList.toggle('open',open);scrim.classList.toggle('show',open);};
  burger.addEventListener('click',()=>toggle(!side.classList.contains('open')));
  scrim.addEventListener('click',()=>toggle(false));
  $('#sideNav').addEventListener('click',e=>{if(e.target.closest('a'))toggle(false);});
}

/* ---------- back to top ---------- */
function initToTop(){
  const btn=$('#toTop');if(!btn)return;
  const onScroll=()=>btn.classList.toggle('show',window.scrollY>500);
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* ---------- scroll-progress thread ---------- */
function initProgress(){
  const bar=$('#scrollBar');if(!bar)return;
  const update=()=>{
    const h=document.documentElement.scrollHeight-window.innerHeight;
    bar.style.width=(h>0?(window.scrollY/h)*100:0)+'%';
  };
  window.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);update();
}

/* ---------- scroll reveal ---------- */
function initReveal(){
  const els=$$('.card,.section-head,.dept-header,.metric-rail,.accordions');
  els.forEach(el=>el.classList.add('reveal'));
  $$('.card').forEach((c,i)=>{c.style.transitionDelay=((i%3)*80)+'ms';});
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver'in window)){els.forEach(el=>el.classList.add('in'));return;}
  const io=new IntersectionObserver(ents=>{
    ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(el=>io.observe(el));
}

/* ---------- dropdown sub-section links: open + scroll with offset ---------- */
function openAndScrollTo(id){
  const btn=document.getElementById(id);
  if(!btn)return false;
  const acc=btn.closest('[data-acc]');
  if(acc){acc.classList.remove('is-hidden');setAcc(acc,true);}
  requestAnimationFrame(()=>btn.scrollIntoView({behavior:'smooth',block:'start'}));
  return true;
}
function initSectionLinks(){
  $$('a[href*="-sec-"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href')||'';
      const id=href.charAt(0)==='#'?href.slice(1):'';
      if(!id||!document.getElementById(id))return;
      e.preventDefault();
      $$('.nav-item').forEach(i=>i.classList.remove('open'));
      const side=$('#sidebar');if(side)side.classList.remove('open');
      const scrim=$('#scrim');if(scrim)scrim.classList.remove('show');
      history.replaceState(null,'','#'+id);
      openAndScrollTo(id);
    });
  });
  const fromHash=()=>{const h=location.hash.slice(1);if(h.indexOf('-sec-')>-1)openAndScrollTo(h);};
  window.addEventListener('hashchange',fromHash);
  if(location.hash.indexOf('-sec-')>-1)setTimeout(fromHash,80);
}

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  renderNav();renderSidebar();renderCards();renderSections();
  initDropdowns();initAccordions();initCards();initSearch();initSpy();initMobile();
  initSectionLinks();initToTop();initProgress();initReveal();
  $('#year').textContent=new Date().getFullYear();
});
