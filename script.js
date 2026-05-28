    document.getElementById("year").textContent = new Date().getFullYear();

    AOS.init({
      once: true,
      duration: 800
    });

    // Typed JS
    new Typed('#typing', {

      strings: [
        'AI Engineer',
        'Automation Expert',
        'Generative AI Developer',
        'Cloud Engineer',
        'Chatbot Developer'
      ],

      typeSpeed: 60,
      backSpeed: 40,
      loop: true

    });

    // Mobile Menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');

    menuBtn.addEventListener('click', (e) => {

      e.stopPropagation();

      mobileNav.classList.toggle('open');

      if (mobileNav.classList.contains('open')) {

        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');

      } else {

        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');

      }

    });

    // Close on link click
    document.querySelectorAll('.mobile-link').forEach(link => {

      link.addEventListener('click', () => {

        mobileNav.classList.remove('open');

        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');

      });

    });

    // Close outside click
    document.addEventListener('click', (e) => {

      if (
        !mobileNav.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {

        mobileNav.classList.remove('open');

        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');

      }

    });

    // Theme Menu
    const themeBtn = document.getElementById('themeBtn');
    const themeMenu = document.getElementById('themeMenu');
    const themeIcon = document.getElementById('themeIcon');

    themeBtn.onclick = (e) => {

      e.stopPropagation();
      themeMenu.classList.toggle('hidden');

    };

    document.addEventListener('click', (e) => {

      if (!themeMenu.contains(e.target) &&
        !themeBtn.contains(e.target)) {

        themeMenu.classList.add('hidden');

      }

    });

    function updateThemeIcon(mode) {

      themeIcon.className = '';

      if (mode === 'light') {

        themeIcon.className = 'fa-solid fa-sun';

      } else if (mode === 'dark') {

        themeIcon.className = 'fa-solid fa-moon';

      } else {

        themeIcon.className = 'fa-solid fa-desktop';

      }

    }

    function setTheme(mode) {

      localStorage.setItem('theme', mode);

      if (mode === 'light') {

        document.body.classList.add('light-mode');

      }

      else if (mode === 'dark') {

        document.body.classList.remove('light-mode');

      }

      else {

        if (
          window.matchMedia('(prefers-color-scheme: light)').matches
        ) {

          document.body.classList.add('light-mode');

        }

        else {

          document.body.classList.remove('light-mode');

        }

      }

      updateThemeIcon(mode);

      themeMenu.classList.add('hidden');

    }

    // Load Theme
    const savedTheme =
      localStorage.getItem('theme') || 'dark';

    setTheme(savedTheme);

    // Cursor
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {

      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

    });

    // Click Effect
    document.addEventListener('click', (e) => {

      for (let i = 0; i < 12; i++) {

        const smoke =
          document.createElement('div');

        smoke.style.position = 'fixed';
        smoke.style.left = e.clientX + 'px';
        smoke.style.top = e.clientY + 'px';

        smoke.style.width = '18px';
        smoke.style.height = '18px';

        smoke.style.borderRadius = '50%';
        smoke.style.pointerEvents = 'none';
        smoke.style.zIndex = '99999';

        smoke.style.background =
          `hsl(${Math.random() * 360},
          100%, 60%)`;

        smoke.style.boxShadow =
          '0 0 25px currentColor';

        document.body.appendChild(smoke);

        const x =
          (Math.random() - 0.5) * 260;

        const y =
          (Math.random() - 0.5) * 260;

        smoke.animate([

          {
            transform: 'translate(0,0) scale(1)',
            opacity: 1
          },

          {
            transform:
              `translate(${x}px, ${y}px)
              scale(0)`,

            opacity: 0
          }

        ], {

          duration: 1400,
          easing: 'ease-out'

        });

        setTimeout(() => {
          smoke.remove();
        }, 1400);

      }

    });

    // Scroll Button
    const scrollTopBtn =
      document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {

      if (window.scrollY > 400) {

        scrollTopBtn.style.display = 'flex';

      } else {

        scrollTopBtn.style.display = 'none';

      }

    });

    scrollTopBtn.onclick = () => {

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    };

    // Projects
        // Projects
    const projects = [

    {
        title: "NPM/PYPI Package Name Checker",
        type: "NPM/PYPI Package",
        github: "https://github.com/Krishnatadi/package-name-checker",
        link: "https://krishnatadi.github.io/package-name-checker/#/package-name-checker",
        badges: ["HTML", "CSS", "JavaScript", "GEMINI API"],
        description: "A simple tool to check the availability of NPM and PYPI package names.",
        image:"https://krishnatadi.github.io/portfolio/images/twi-hospitals.jpg"
      },

      {
        title: "KAI AI Chatbot",
        type: "Chatbot Development",
        github: "https://github.com/Krishnatadi/KAI-AI-Chatbot",
        link: "",
        badges: ["HTML", "CSS", "JavaScript", "GEMINI API"],
        description: "KAI is a modern AI chatbot powered by the Gemini API, offering smart, interactive conversations with a sleek UI and strong NLP capabilities for accurate responses, assistance, and friendly chat.",
        image: "https://via.placeholder.com/400x300/1e293b/06b6d4?text=KAI+AI+Chatbot"
      },

      {
        title: "Simple Chatbot",
        type: "Chatbot Development",
        github: "https://github.com/Krishnatadi/chatbot-1",
        link: "",
        badges: ["HTML", "CSS", "JavaScript"],
        description: "A simple chatbot built using HTML, CSS, and JavaScript. It provides basic conversational capabilities and can be easily customized for various applications.",
        image: "https://via.placeholder.com/400x300/1e293b/06b6d4?text=Simple+Chatbot"
      },
      {
        title: "Hospital Website",
        type: "Web Development",
        github: "https://github.com/Krishnatadi",
        link: "",
        badges: ["HTML", "CSS", "JavaScript"],
        description: "A responsive hospital website designed to provide information about services, doctors, and contact details. Built using HTML, CSS, and JavaScript for a seamless user experience.",
        image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Hospital+Website"
      },
    {
        title: "Login/Signup Form",
        type: "Web Development",
        github: "https://github.com/Krishnatadi/login-signup-v1",
        link: "",
        badges: ["HTML", "CSS", "JavaScript"],
        description: "A modern login/signup form with client-side validation and interactive design. Built using HTML, CSS, and JavaScript to ensure a smooth user experience while maintaining security best practices.",
        image: "https://via.placeholder.com/400x300/1e293b/ec4899?text=Login+Form"
      },

       {
        title: "Temperature Converter",
        type: "Web Development",
        github: "https://github.com/Krishnatadi/temperature-converter",
        link: "",
        badges: ["HTML", "CSS", "JavaScript"],
        description: "A simple temperature converter that allows users to convert between Celsius, Fahrenheit, and Kelvin. Built using HTML, CSS, and JavaScript for an intuitive user interface and accurate conversions.",
        image: "https://via.placeholder.com/400x300/1e293b/f59e0b?text=Temperature+Converter"
      },
      {
        title: "Interactive Web Scrapping Tool",
        type: "Web Development",
        github: "https://github.com/Krishnatadi/Web-Scraping-and-Chat-Tool",
        link: "",
        badges: ["HTML", "CSS", "JavaScript"],
        description: "An interactive web scraping tool that lets users extract and interact with website data via chat. Built with HTML, CSS, and JavaScript, it offers a simple way to gather and use web data easily.",
        image: "https://via.placeholder.com/400x300/1e293b/06b6d4?text=Web+Scraping+Tool"
      },
      {
        title: "BMI Calculator",
        type: "Web Development",
        github: "https://github.com/Krishnatadi/bmi-calculator/",
        link: "https://krishnatadi.github.io/bmi-calculator/",
        badges: ["HTML", "CSS", "JavaScript"],
        description: "A BMI calculator that lets users enter height and weight to compute Body Mass Index. Built with HTML, CSS, and JavaScript, it provides a simple, quick way to check and understand health status.",
        image: "https://via.placeholder.com/400x300/1e293b/10b981?text=BMI+Calculator"
      },

      
      {
        title: "textifyer",
        type: "NPM Package",
        github: "https://github.com/Krishnatadi/textifyer",
        link: "https://www.npmjs.com/package/textifyer",
        badges: ["JavaScript", "NPM"],
        description: "Textifyer is a powerful text analysis package offering character, word, sentence, and paragraph counts, space tracking, reading time, readability score, keyword density, lexical diversity, syllable counting.",
        image: "https://via.placeholder.com/400x300/1e293b/06b6d4?text=Textifyer"
      },
      {
        title: "Casefyer",
        type: "NPM Package",
        github: "https://github.com/Krishnatadi/casefyer",
        link: "https://www.npmjs.com/package/casefyer",
        badges: ["JavaScript", "NPM"],
        description: "Casefyer is a simple npm package that converts text into multiple formats like uppercase, lowercase, sentence, title, alternating, and inverse case, helping developers transform text quickly..",
        image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Casefyer"
      },
      {
        title: "SaltyHash",
        type: "NPM Package",
        github: "https://github.com/krishnatadi/saltyhash",
        link: "https://www.npmjs.com/package/saltyhash",
        badges: ["JavaScript", "NPM"],
        description: "SaltyHash is a secure password hashing library that adds salting and hashing with strength validation, helping developers enforce strong authentication and protect user credentials effectively.",
        image: "https://via.placeholder.com/400x300/1e293b/ef4444?text=SaltyHash"
      },

      {
        title: "Access OTP",
        type: "NPM Package",
        github: "https://github.com/Krishnatadi/accessotp",
        link: "https://www.npmjs.com/package/accessotp",
        badges: ["JavaScript", "NPM"],
        description: "AccessOTP is a secure, scalable OTP generator and validator supporting numeric and alphanumeric codes, custom lengths, and expiry times, ideal for authentication and verification systems secure access!",
        image: "https://via.placeholder.com/400x300/1e293b/06b6d4?text=Access+OTP"
      },

      {
        title: "ALLUUID",
        type: "NPM Package",
        github: "https://github.com/krishnatadi/alluuid",
        link: "https://www.npmjs.com/package/alluuid",
        badges: ["JavaScript", "NPM"],
        description: "ALLUUID is a JavaScript library for generating UUIDs and GUIDs, supporting versions 1, 4, and 7. It helps developers create unique IDs for databases, sessions, and other critical use cases.",
        image: "https://via.placeholder.com/400x300/1e293b/f59e0b?text=ALLUUID"
      },

      {
        title: "epochToolkit",
        type: "NPM Package",
        github: "https://github.com/krishnatadi/epochtoolkit",
        link: "https://www.npmjs.com/package/epochtoolkit",
        badges: ["JavaScript", "NPM"],
        description: "epochToolkit is a JavaScript toolkit for date/time and epoch conversions. It helps convert dates to epoch, format times, validate date strings, and check leap years for easier time handling.",
        image: "https://via.placeholder.com/400x300/1e293b/ec4899?text=epochToolkit"
      },

      {
        title: "ColorCycle",
        type: "NPM Package",
        github: "https://github.com/Krishnatadi/colorcycle",
        link: "https://www.npmjs.com/package/colorcycle",
        badges: ["JavaScript", "NPM"],
        description: "ColorCycle is a JavaScript package for converting colors between Hex, RGB, and HSL formats. It helps developers and designers manage colors easily for web, app, and UI design projects.",
        image: "https://via.placeholder.com/400x300/1e293b/10b981?text=ColorCycle"
      },

      {
        title: "Random Password Toolkit",
        type: "NPM Package",
        github: "https://github.com/Krishnatadi/Random-Password-Toolkit",
        link: "https://www.npmjs.com/package/random-password-toolkit",
        badges: ["JavaScript", "NPM"],
        description: "Random Password Toolkit is a secure package for generating and managing passwords with encryption, decryption, strength checking, and customization, helping developers handle password tasks safely and easily.",
        image: "https://via.placeholder.com/400x300/1e293b/06b6d4?text=Password+Toolkit"
      },

      {
        title: "JWT PRO",
        type: "NPM Package",
        github: "https://www.npmjs.com/package/jwt-pro",
        link: "https://www.npmjs.com/package/jwt-pro",
        badges: ["JavaScript", "NPM"],
        description: "JWT PRO is a JavaScript library for handling JSON Web Tokens, enabling secure creation, signing, verification, and decoding. It simplifies token-based authentication and authorization for applications.",
        image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=JWT+PRO"
      },

      {
        title: "ALL UUID ",
        type: "PYPI Package",
        github: "https://github.com/krishnatadi/alluuid-pypi",
        link: "https://pypi.org/project/alluuid/",
        badges: ["Python", "PYPI", "Security"],
        description: "AllUUID is a Python library for generating UUIDs and GUIDs, supporting versions 1, 4, and 7. It helps developers create unique identifiers for databases, sessions, and other critical use cases.",
        image: "https://via.placeholder.com/400x300/1e293b/f59e0b?text=All+UUID"
      },

      {
        title: "EasySCrapper",
        type: "PYPI Package",
        github: "https://github.com/krishnatadi/easyscrapper",
        link: "https://pypi.org/project/easyscrapper/",
        badges: ["Python", "PYPI", "scraping"],
        description: "EasyScrapper is a Python package for simple web scraping, enabling users to fetch and extract website data easily without complex parsing, offering quick and reliable scraping for developers.",
        image: "https://via.placeholder.com/400x300/1e293b/06b6d4?text=EasyScrapper"
      },

      {
        title: "ColorCycle",
        type: "PYPI Package",
        github: "https://github.com/krishnatadi/colorcycle-python",
        link: "https://pypi.org/project/colorcycle/",
        badges: ["Python", "PYPI", "colors"],
        description: "ColorCycle is a Python package for converting colors between Hex, RGB, and HSL formats. It helps developers and designers easily manage and transform colors for web, app, and UI projects.",
        image: "https://via.placeholder.com/400x300/1e293b/10b981?text=ColorCycle"
      },

      {
        title: "Random Password Toolkit",
        type: "PYPI Package",
        github: "https://github.com/krishnatadi/random-password-toolkit-python",
        link: "https://pypi.org/project/random-password-toolkit/",
        badges: ["Python", "PYPI", "security", "passwords"],
        description: "Random Password Toolkit is a Python package for generating and managing secure passwords with encryption, decryption, strength checking, and customization, ideal for safe password handling tasks.",
        image: "https://via.placeholder.com/400x300/1e293b/ec4899?text=Password+Toolkit"
      },

      {
        title: "JWT PRO",
        type: "PYPI Package",
        github: "https://github.com/Krishnatadi/jwt-pro-python",
        link: "https://pypi.org/project/jwt-pro/",
        badges: ["Python", "PYPI", "Security"],
        description: "JWT Pro is a package for creating and verifying JSON Web Tokens with AES encryption and HMAC signatures. It enables secure authentication, customizable payloads, headers, and token validation.",
        image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=JWT+PRO"
      },

      {
        title: "Auditly",
        type: "PYPI Package",
        github: "https://github.com/krishnatadi/auditly-pypi",
        link: "https://pypi.org/project/auditly/",
        badges: ["Python", "PYPI", "security", "audit"],
        description: "Auditly is a Python package for security auditing and vulnerability assessment. It scans applications, detects security issues, and generates detailed audit reports for developers and enterprises.",
        image: "https://via.placeholder.com/400x300/1e293b/ef4444?text=Auditly"
      },


      {
        title: "SnapEdge",
        type: "Web Extension",
        github: "#",
        link: "https://microsoftedge.microsoft.com/addons/detail/snapedge/ffapgjjedncbacmhbeipdoeinlmblllc",
        badges: ["Frontend", "Extension", "productivity"],
        description: "SnapEdge is a lightweight screenshot tool for Microsoft Edge that allows you to capture your current tab and annotate instantly with arrows, rectangles, text, highlights, and blur tools - all offline.",
        image: "https://via.placeholder.com/400x300/1e293b/06b6d4?text=SnapEdge"
      },

      {
        title: "ColorLens",
        type: "Web Extension",
        github: "#",
        link: "https://microsoftedge.microsoft.com/addons/detail/hmopoebhhngahnkomegieememlkghijp",
        badges: ["Frontend", "Extension", "productivity"],
        description: "ColorLens is a simple and fast tool for converting and copying colors like HEX, RGB, and HSL. It’s designed for developers, designers, and creators who need quick color utilities directly in their browser.",
        image: "https://via.placeholder.com/400x300/1e293b/06b6d4?text=ColorLens"
      },

    ];
    const projectsData = projects;

let activeType = "All";
let visible = 6;

const projectGrid = document.getElementById("projectGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const loadMoreBtn = document.getElementById("loadMoreBtn");

function getFilteredProjects() {
  if (activeType === "All") return projectsData;
  return projectsData.filter(p => p.type === activeType);
}

function renderProjects(reset = false) {

  if (reset) {
    projectGrid.innerHTML = "";
    visible = 6;
  }

  const filtered = getFilteredProjects();
  const toShow = filtered.slice(0, visible);

  projectGrid.innerHTML = toShow.map(project => `
    <div class="project-card glass rounded-3xl overflow-hidden">

      <!-- TOP SECTION -->
      <div class="h-52 rainbow relative">

        <div class="absolute top-5 left-5">
          <span class="badge">${project.type}</span>
        </div>
          <i class="fa-solid fa-code text-7xl text-white/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
        

      </div>

      <!-- CONTENT -->
      <div class="p-8 flex flex-col h-[420px]">

        <h3 class="text-2xl font-bold mb-4 text-cyan-400">
          ${project.title}
        </h3>

        <p class="text-slate-300 leading-7 mb-6 flex-1">
          ${project.description}
        </p>

        <!-- BADGES -->
        <div class="flex flex-wrap gap-2 mb-6">
          ${(project.badges || []).map(badge => `
            <span class="badge">${badge}</span>
          `).join("")}
        </div>

        <!-- BUTTONS -->
        <div class="flex gap-4 mt-auto">

          <a href="${project.github}" target="_blank"
            class="project-btn bg-blue-900 text-white hover:bg-blue-800 transition">

            <i class="fa-brands fa-github mr-2"></i>
            GitHub
          </a>

          <a href="${project.link}" target="_blank"
            class="project-btn rainbow text-white">

            <i class="fa-solid fa-up-right-from-square mr-2"></i>
            Live
          </a>

        </div>

      </div>
    </div>
  `).join("");

  // END MESSAGE LOGIC
  if (visible >= filtered.length) {
    projectGrid.innerHTML += `
      <div class="md:col-span-3 text-center py-8">
        <div class="glass rounded-2xl p-8 border border-cyan-500/30">

          <i class="fa-solid fa-circle-check text-4xl text-cyan-400 mb-4"></i>

          <h3 class="text-xl font-bold text-cyan-400 mb-2">
            All Projects Showcased!
          </h3>

          <p class="text-slate-300 text-sm">
            You've reached the end of my work. More projects coming soon
          </p>

        </div>
      </div>
    `;

    loadMoreBtn.style.display = "none";

  } else {
    loadMoreBtn.style.display = "block";
  }
}

/* =========================
   FILTER SYSTEM
========================= */
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeType = btn.dataset.type;

    renderProjects(true);

    // Optional SweetAlert
    if (window.Swal) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "info",
        title: `Filter: ${activeType}`,
        showConfirmButton: false,
        timer: 1500,
        background: "#0f172a",
        color: "#fff"
      });
    }
  });
});

/* =========================
   LOAD MORE
========================= */
loadMoreBtn.addEventListener("click", () => {
  visible += 6;
  renderProjects();

  // Optional SweetAlert
  if (window.Swal) {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "More Projects Loaded",
      showConfirmButton: false,
      timer: 1500,
      background: "#0f172a",
      color: "#fff"
    });
  }
});

/* =========================
   INIT
========================= */
renderProjects(true);


    // Contact Validation
    const form =
      document.getElementById('contactForm');

    ['name', 'email', 'message']
      .forEach(id => {

        const field =
          document.getElementById(id);

        field.addEventListener('input', () => {

          if (field.value.trim() !== '') {

            field.classList.add('valid');
            field.classList.remove('invalid');

          }

          else {

            field.classList.add('invalid');
            field.classList.remove('valid');

          }

        });

      });

    form.addEventListener('submit', (e) => {

      e.preventDefault();

      const name =
        document.getElementById('name');

      const email =
        document.getElementById('email');

      const message =
        document.getElementById('message');

      if (
        !name.value ||
        !email.value ||
        !message.value
      ) {

        Swal.fire({

          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Please fill all fields',
          showConfirmButton: false,
          timer: 2500,
          background: '#0f172a',
          color: '#fff'

        });

        return;
      }

      Swal.fire({

        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Opening Mail Client',
        showConfirmButton: false,
        timer: 2500,
        background: '#0f172a',
        color: '#fff'

      });

      const subject =
        encodeURIComponent(
          `Portfolio Contact from ${name.value}`
        );

      const body =
        encodeURIComponent(
          `Name: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`
        );

      window.location.href =
        `mailto:er.krishnatadi@gmail.com?subject=${subject}&body=${body}`;

    });

    // Full Screen Modals
    const certOne = `
      <div class="full-modal-content text-center">

        <i class="fa-brands fa-google text-7xl text-cyan-400 mb-8"></i>

        <h2 class="text-4xl font-black mb-6">
          Google Certifications
        </h2>

        <p>
          Google Generative AI Leader
        </p>

        <p>
          Professional ML Engineer Certification
        </p>
        <p>Google Analytics Certified</p>
        <p>Campaign Manager 360 Certified</p>
        <p>Conversion Optimization Certified</p>
        <p>Display &amp; Video 360 Certified</p>
        <p>Google Ads Search Certified</p>

      </div>
    `;

    const certTwo = `
      <div class="full-modal-content text-center">

        <i class="fa-brands fa-aws text-7xl text-orange-400 mb-8"></i>

        <h2 class="text-4xl font-black mb-6">
          AWS Certifications
        </h2>

        <p>
          AWS Cloud Practitioner
        </p>

      </div>
    `;

    const certThree = `
      <div class="full-modal-content text-center">

        <i class="fa-brands fa-microsoft text-7xl text-blue-400 mb-8"></i>

        <h2 class="text-4xl font-black mb-6">
          Microsoft Azure Certifications
        </h2>

        <p>
          Azure AI Engineer Associate
        </p>

        <p>
          Azure Administrator
        </p>

      </div>
    `;

    const certFour = `
      <div class="full-modal-content text-center">

        <i class="fa fa-certificate text-7xl text-blue-400 mb-8"></i>

        <h2 class="text-4xl font-black mb-6">
          Other Certifications
        </h2>
<hr/>
        <h2>Kore.ai Certifications:</h2>
<hr/>
        <p>Automation AI/Platform Developer Certified</p>

        <p>Contact Center/Smart Assist Certified</p>

        <p>Search Assist</p>

        <p>Agent AI</p>
<hr/>
      </div>
    `;


    

    function openFullModal(title, content) {

      Swal.fire({

        width: '100%',
        padding: '2rem',
        background: '#020617',
        color: '#fff',

        html: `

        <div class="min-h-screen overflow-y-auto px-4 md:px-16 py-10">

          <div class="flex justify-between items-center mb-10">

            <h2 class="text-3xl md:text-5xl font-black gradient-text">
              ${title}
            </h2>

          </div>

          ${content}

        </div>

        `,

        showConfirmButton: false,

        showCloseButton: true,

        customClass: {
          popup: 'rounded-none'
        }

      });

    }

    // AI Particle System
    // function createAIParticles() {
    //   const particleCount = 20;
    //   const profileSection = document.querySelector('.avatar-glow-container');
    //   if (!profileSection) return;
    //   const rect = profileSection.getBoundingClientRect();
    //   const centerX = rect.left + rect.width / 2;
    //   const centerY = rect.top + rect.height / 2;
    //   for (let i = 0; i < particleCount; i++) {
    //     const particle = document.createElement('div');
    //     particle.className = 'ai-particle';
    //     const angle = (i / particleCount) * Math.PI * 2;
    //     const distance = 200 + Math.random() * 100;
    //     const tx = Math.cos(angle) * distance;
    //     const ty = Math.sin(angle) * distance;
    //     particle.style.setProperty('--tx', `${tx}px`);
    //     particle.style.setProperty('--ty', `${ty}px`);
    //     particle.style.left = centerX + 'px';
    //     particle.style.top = centerY + 'px';
    //     particle.style.animationDelay = (i * 0.4) + 's';
    //     document.body.appendChild(particle);
    //     setTimeout(() => { particle.remove(); }, 8000);
    //   }
    // }
    // setInterval(createAIParticles, 3000);

    // Matrix Background Effect
    function createMatrixBackground() {
      const canvas = document.createElement('canvas');
      canvas.className = 'matrix-bg';
      document.body.insertBefore(canvas, document.body.firstChild);
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const chars = '01αβγδε∂∫∑∏λμνξρστφψω∆∇';
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops = Array(columns).fill(0).map(() => Math.random() * canvas.height);
      function drawMatrix() {
        ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.1)';
        ctx.font = fontSize + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(char, i * fontSize, drops[i]);
          if (drops[i] * Math.random() > 0.975) drops[i] = 0;
          else drops[i] += fontSize;
        }
      }
      function animate() { drawMatrix(); requestAnimationFrame(animate); }
      animate();
    }
    setTimeout(createMatrixBackground, 100);

    // Avatar Parallax Effect
    const avatarContainer = document.querySelector('.avatar-glow-container');
    if (avatarContainer) {
      document.addEventListener('mousemove', (e) => {
        const rect = avatarContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angleX = (e.clientY - centerY) / 20;
        const angleY = (e.clientX - centerX) / 20;
        const glow = avatarContainer.querySelector('.avatar-inner-glow');
        if (glow) glow.style.transform = `translate(-50%, -50%) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });
    }

    // Card Glow Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('card-with-glow');
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.project-card, .skill-card, .experience-card').forEach(card => {
      observer.observe(card);
    });

    // Code Snippets Animation
    const codeSnippets = ['{ AI: true }', 'await innovation()', 'const magic = AI()', 'neural.train()', 'model.deploy()'];
    let codeIndex = 0;
    setInterval(() => {
      document.querySelectorAll('.floating-code').forEach((el, i) => {
        el.textContent = codeSnippets[(codeIndex + i) % codeSnippets.length];
      });
      codeIndex = (codeIndex + 1) % codeSnippets.length;
    }, 4000);

    // Avatar Hover Effects
    const avatarImage = document.querySelector('.avatar-glow-container img');
    if (avatarImage) {
      avatarImage.addEventListener('mouseenter', () => {
        document.querySelectorAll('.ai-particle').forEach(p => p.style.animationPlayState = 'paused');
      });
      avatarImage.addEventListener('mouseleave', () => {
        document.querySelectorAll('.ai-particle').forEach(p => p.style.animationPlayState = 'running');
      });
    }
