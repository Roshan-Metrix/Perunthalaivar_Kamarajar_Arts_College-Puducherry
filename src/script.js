// Header + Nav
const header = document.getElementById("header-box").innerHTML = `<header class="bg-white shadow-md relative z-50">

       <a href="#"><img src="../images/images/banner.jpeg" class="w-full h-40 object-cover" alt="College Banner"></a>
        <!--  MARQUEE  -->
        <div class="marquee-container py-2">
            <p class="marquee-text text-stone-700">
               Welcome to Perunthalaivar Kamarajar Arts College – Pondicherry &nbsp; • &nbsp; Admissions Open 2026 &nbsp; • &nbsp;Re-Accredited by NAAC with 'B' Grade &nbsp; • &nbsp; Excellence in
                Arts & Science Education
            </p>
        </div>

        <div class="container mx-auto py-3 relative z-50">
            <div class="flex justify-between items-center">
                <div></div>
                <button id="mobile-menu-button" class="md:hidden">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <!-- DESKTOP NAV -->
            <nav class="hidden md:flex justify-center items-center pt-2 color-blue-600">
                <div class="flex items-center justify-center flex-wrap gap-x-5 gap-y-2" id="navbar">
                    <a href="./index.html" class="nav-link text-gray-600 font-medium hover:bg-amber-500 hover:px-2 hover:rounded hover:text-white">Home</a>

                    <!-- About Us Dropdown -->
                    <div class="relative group">
                        <a href="./about.html" class="nav-link text-gray-600 font-medium flex items-center">
                            <span>About us</span>
                            <svg class="w-5 h-5 ml-1 text-gray-600 transition-transform duration-300 group-hover:rotate-180"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <div
                            class="absolute z-50 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            <div class="py-1">
                                <a href="./about.html#vision-mission"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Vision
                                    & Mission</a>
                                <a href="./about.html#principal-desk"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Principal
                                    Desk</a>
                                <a href="./officeAdmin.html"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Office
                                    Administration</a>
                                <a href="./rti.html"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">RTI</a>
                            </div>
                        </div>
                    </div>

                    <!-- Departments Dropdown -->
                    <a href="./faculty.html"
                        class="nav-link text-gray-600 font-medium hover:bg-amber-500 hover:px-2 hover:rounded hover:text-white">Faculty</a>

                    <!-- Admission Dropdown -->
                    <div class="relative group">
                        <a href="./calender.html" class="nav-link text-gray-600 font-medium flex items-center">
                            <span>Admission</span>
                            <svg class="w-5 h-5 ml-1 text-gray-600 transition-transform duration-300 group-hover:rotate-180"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <div
                            class="absolute z-50 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            <div class="py-1">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Admission
                                    Process</a>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">View
                                    Prospectus</a>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">College
                                    Rules & Regulation</a>
                                <a href="./calender.html"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Calender</a>
                            </div>
                        </div>
                    </div>

                    <a href="./courses.html"
                        class="nav-link text-gray-600 font-medium hover:bg-amber-500 hover:px-2 hover:rounded hover:text-white">Courses</a>

                    <!-- Infrastructure Dropdown -->
                    <div class="relative group">
                        <a href="./infrastructure.html" class="nav-link text-gray-600 font-medium flex items-center">
                            <span>Infrastructure</span>
                            <svg class="w-5 h-5 ml-1 text-gray-600 transition-transform duration-300 group-hover:rotate-180"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <div
                            class="absolute z-50 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            <div class="py-1">
                                <a href="./infrastructure.html#library"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Library</a>
                                <a href="./infrastructure.html#computer-lab"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Computer
                                    Laboratory</a>
                                <a href="./infrastructure.html#playground"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Play
                                    Ground</a>
                                <a href="./infrastructure.html"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Auditorium</a>
                                <a href="./infrastructure.html#campus-life"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Vibrant
                                    Campus</a>
                            </div>
                        </div>
                    </div>

                    <!-- Activities Dropdown -->
                    <div class="relative group">
                        <a href="./activities.html" class="nav-link text-gray-600 font-medium flex items-center">
                            <span>Activities</span>
                            <svg class="w-5 h-5 ml-1 text-gray-600 transition-transform duration-300 group-hover:rotate-180"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <div
                            class="absolute z-50 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            <div class="py-1">
                                <a href="./activities.html#NIRF"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">NIRF</a>
                                <a href="./activities.html#ARIIA"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">ARIIA</a>
                                <a href="./activities.html#ColGuidance"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">College
                                    Guidance & Placement Cell</a>
                                <a href="./activities.html#RotaractClub"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Rotaract
                                    club</a>
                                <a href="./activities.html#NSS"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">NSS</a>
                                <a href="./activities.html#RUSA"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">RUSA</a>
                                <a href="./activities.html#RedRibbonClub"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Red
                                    Ribbon club</a>
                                <a href="./activities.html#YouthRedCross"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Youth
                                    Red Cross</a>
                            </div>
                        </div>
                    </div>

                    <!-- Report Dropdown -->
                    <div class="relative group">
                        <a href="./reports.html" class="nav-link text-gray-600 font-medium flex items-center">
                            <span>Reports</span>
                            <svg class="w-5 h-5 ml-1 text-gray-600 transition-transform duration-300 group-hover:rotate-180"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <div
                            class="absolute z-50 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            <div class="py-1">
                            <a href="./reports.html#LOA"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">AICTE</a>
                                <a href="./reports.html#NAAC"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">NAAC</a>
                                <a href="./reports.html#AISHE"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">AISHE</a>
                                <a href="./reports.html#CertificatesOfEstablishment"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-gray-900">Certificates Of Establishment</a>
                            </div>
                        </div>
                    </div>
                   <!-- <a href="./gallery.html"
                        class="nav-link text-gray-600 font-medium hover:bg-amber-500 hover:px-2 hover:rounded hover:text-white">Gallery</a> -->
                    <a href="./contact.html"
                        class="nav-link text-gray-600 font-medium hover:bg-amber-500 hover:px-2 hover:rounded hover:text-white">Contact
                        us</a>
                    <a href="https://student-registration-frontend-nine.vercel.app/login"
                        class="nav-link text-gray-600 font-medium hover:bg-amber-500 hover:px-2 hover:rounded hover:text-white" target="_blank">Login</a>
                </div>
            </nav>

        </div>

        <!-- MOBILE MENU -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t relative z-50">
            <a href="./index.html" class="block px-4 py-2 hover:bg-gray-100">Home</a>
            <a href="./about.html" class="block px-4 py-2 hover:bg-gray-100">About Us</a>
            <a href="./faculty.html" class="block px-4 py-2 hover:bg-gray-100">Faculty</a>
            <a href="./courses.html" class="block px-4 py-2 hover:bg-gray-100">Courses</a>
            <a href="../pdfs/Naac.pdf" class="block px-4 py-2 hover:bg-gray-100">NAAC</a>
            <a href="./contact.html" class="block px-4 py-2 hover:bg-gray-100">Contact</a>
        </div>
        
    </header>`

// Footer
const footer = document.getElementById("footer-box").innerHTML = `<footer class="bg-slate-900 text-gray-300 py-4 border-t-4 border-amber-700">
        <div class="container mx-auto px-6 text-center flex flex-col items-center space-y-4">
            <img src="../images/images/logo.jpg" alt="Perunthalaivar Kamarajar Arts College Logo"
                class="h-16 w-16 object-contain bg-white p-1 rounded-full">
            <h3 class="text-lg font-semibold tracking-wide">
                Perunthalaivar Kamarajar Arts College
            </h3>
            <p class="text-sm text-gray-400">Pondicherry, India</p>
            <div class="flex space-x-6 pt-2">
                <a href="https://www.facebook.com" target="_blank" aria-label="Facebook"
                    class="text-gray-400 hover:text-blue-500 transition">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.716-1.796 1.764v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.676V1.325C24 .6 23.4 0 22.675 0z" />
                    </svg>
                </a>
                <a href="https://twitter.com" target="_blank" aria-label="Twitter"
                    class="text-gray-400 hover:text-sky-400 transition">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .39.045.765.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.016-.637.961-.689 1.8-1.56 2.46-2.548z" />
                    </svg>
                </a>
                <a href="mailto:info@pkartscollege.edu.in" aria-label="Email"
                    class="text-gray-400 hover:text-amber-400 transition">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                </a>

            </div>
            <p class="text-sm text-gray-400">
                Email:
                <a href="mailto:info@pkartscollege.edu.in" class="hover:text-amber-400 transition">
                    info@pkartscollege.edu.in
                </a>
            </p>
            <p class="text-xs text-gray-500 pt-4">
                © 2026 Perunthalaivar Kamarajar Arts College. All Rights Reserved.
            </p>

        </div>
    </footer>`
