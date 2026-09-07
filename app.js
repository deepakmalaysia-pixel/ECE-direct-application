// PAN India ECE Industrial MSME Directory Dataset
const companies = [
    {
        name: "Epitome Components Limited",
        category: "pcb",
        cluster: "Ahmednagar & Pune, Maharashtra",
        products: "Single-sided, Double-sided, and Multi-layered bare PCBs for automotive and telecom applications.",
        website: "https://www.epitomecomponents.com",
        contactPerson: "Plant Operations Desk / General Manager Desk",
        phone: "+91-241-2777754",
        email: "bgm@epitomecomponents.com"
    },
    {
        name: "Shogini Technoarts Pvt. Ltd.",
        category: "pcb",
        cluster: "Pune (Khed City & Ranjangaon), Maharashtra",
        products: "Precision single, double, and up to 8-layer rigid PCBs. Cleanroom floor environments.",
        website: "https://www.shogini.com",
        contactPerson: "Plant Head / Factory HR Liaison",
        phone: "+91-2114-661100",
        email: "pcb@shogini.com"
    },
    {
        name: "Permanent Magnets Limited",
        category: "passive",
        cluster: "Thane (Wagle Estate), MH & Damantal, HP",
        products: "Shunt resistors, current transformers, nano-crystalline cores, and smart meter modules.",
        website: "https://www.pmlindia.com",
        contactPerson: "Technical Operations & Procurement Desk",
        phone: "+91-22-66285400",
        email: "pml@pmlindia.com"
    },
    {
        name: "Ascent Circuits Pvt. Ltd.",
        category: "pcb",
        cluster: "Hosur Industrial Belt, Tamil Nadu",
        products: "High-density interconnect (HDI) PCBs, flexible circuits, and RF/microwave backplanes.",
        website: "https://www.ascentcircuits.com",
        contactPerson: "Production Head / Works Manager",
        phone: "+91-4344-276701",
        email: "sales@ascentcircuits.com"
    },
    {
        name: "O/E/N India Limited",
        category: "sensor",
        cluster: "Kochi & Bengaluru Nodes, South India",
        products: "Electromechanical relays, miniature switches, potentiometer assemblies, and automotive sensors.",
        website: "https://www.oenindia.com",
        contactPerson: "Operations Coordinator / Plant Executive",
        phone: "+91-484-2301353",
        email: "md@oenindia.com"
    },
    {
        name: "Sahasra Electronic Solutions Ltd.",
        category: "ems",
        cluster: "Noida (Sector 85 / Phase-II Elcina Cluster), UP",
        products: "Memory packaging (MicroSD, USB drives), SMT electronic assembly, LED driver cards.",
        website: "https://www.sahasraelectronics.com",
        contactPerson: "Plant Lead / Engineering Trainee Coordinator",
        phone: "+91-120-4204814",
        email: "info@sahasragroup.com"
    },
    {
        name: "India Circuits Pvt. Ltd.",
        category: "pcb",
        cluster: "Panchkula Node, Haryana",
        products: "Mass volume bare rigid multi-layer PCB pressing, wet processing, and drilling workflows.",
        website: "https://www.indiacircuits.com",
        contactPerson: "Works Manager Desk",
        phone: "+91-172-2566710",
        email: "contact@indiacircuits.com"
    },
    {
        name: "Vital Electronics & Manufacturing Node",
        category: "passive",
        cluster: "Vasai-Virar Industrial Region, Maharashtra",
        products: "Aluminium electrolytic capacitors, radial/axial components, power inductors.",
        website: "https://www.vitalelectronics.com",
        contactPerson: "Plant Supervisor / Operations Head",
        phone: "+91-250-2391285",
        email: "ops@vitalelectronics.com"
    }
];

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
    renderCompanies(companies);
    setupFilters();
});

// Render Company Cards
function renderCompanies(data) {
    const grid = document.getElementById("companyGrid");
    const countEl = document.getElementById("resultsCount");
    grid.innerHTML = "";
    
    countEl.textContent = `Found ${data.length} Direct Manufacturing Unit(s)`;

    if(data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #718096; padding: 2rem;">No units match your search parameters. Try searching for a broader cluster like "Pune" or "Noida".</p>`;
        return;
    }

    data.forEach(comp => {
        const card = document.createElement("div");
        card.className = "company-card";
        card.setAttribute("data-cat", comp.category);

        card.innerHTML = `
            <span class="card-tag">${comp.category}</span>
            <h3>${comp.name}</h3>
            <div class="cluster-tag">📍 Cluster: ${comp.cluster}</div>
            <div class="product-info">
                <strong>Components Built:</strong> ${comp.products}
            </div>
            <div class="contact-details">
                <div class="contact-row"><strong>Desk Contact:</strong> ${comp.contactPerson}</div>
                <div class="contact-row"><strong>Plant Phone:</strong> ${comp.phone}</div>
                <div class="contact-row"><strong>Direct Email:</strong> <span style="color:#0056b3;">${comp.email}</span></div>
            </div>
            <div class="card-actions">
                <a href="${comp.website}" target="_blank" class="btn btn-secondary">🌐 Website</a>
                <a href="mailto:${comp.email}?subject=ECE Intern Application - Available for Break Tracks" class="btn">✉️ Apply Direct</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter and Search Logic
function setupFilters() {
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");

    let currentCategory = "all";
    let currentSearchTerm = "";

    function filterData() {
        const filtered = companies.filter(comp => {
            const matchesCat = (currentCategory === "all" || comp.category === currentCategory);
            const matchesSearch = comp.name.toLowerCase().includes(currentSearchTerm) ||
                                  comp.cluster.toLowerCase().includes(currentSearchTerm) ||
                                  comp.products.toLowerCase().includes(currentSearchTerm);
            return matchesCat && matchesSearch;
        });
        renderCompanies(filtered);
    }

    searchInput.addEventListener("input", (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        filterData();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            filterData();
        });
    });
}

// Clipboard Action
function copyTemplate() {
    const templateText = `Subject: ECE Intern Application: [Your Name] - Available for Internship Tracks\n\nDear Plant Operations Team,\n\nI am a final/pre-final year Electronics & Communication Engineering student. Unlike traditional software layouts, I am looking to bring hands-on hardware assistance to your plant floors during upcoming institutional breaks.\n\nMy core competencies are aligned with direct component manufacturing:\n- EDA/Layout Skills: Proficient in board setups via KiCad/Altium.\n- Lab Work: Experienced in operational signal diagnostics using Digital Storage Oscilloscopes (DSOs).\n- Assemblies: Familiarity with basic structural rules under IPC-A-610 guidelines.\n\nI have hosted my schematics, custom Gerber files, and functional component BOMs in a digital folder here: [Insert Link]. I am prepared to sit for immediate physical evaluation or practical shop floor debugging tests at your node.\n\nSincerely,\n[Your Name]\n[Phone Number]`;
    
    navigator.clipboard.writeText(templateText).then(() => {
        alert("Cold outreach script copied to clipboard successfully!");
    }).catch(err => {
        alert("Unable to copy text automatically. Please highlight the script text and copy manually.");
    });
}
