/* ============================================================
   CONFIG.JS — PUSAT KONFIGURASI PORTFOLIO ARRAIHAN
   Edit file ini untuk mengubah SEMUA konten website!
   ============================================================ */

/* ── 1. PROFIL & HERO ─────────────────────────────────────── */
const CONFIG_PROFIL = {
  nama: 'Arraihan Attamimi',
  tagline: 'pengangguran namun sibuk',
  foto_hero: 'img/profil/profil.webp',
  sosial: {
    facebook: 'https://facebook.com/',
    whatsapp: 'https://wa.me/6289636134570',
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
    twitter: 'https://x.com/',
  },
};

/* ── 2. ABOUT ME ──────────────────────────────────────────── */
const CONFIG_ABOUT = {
  eyebrow: 'About Me – Arraihan Elshanty Attamimi',
  headline: 'Kalau kamu baca ini… fix kamu kepo :)',
  foto: 'img/profil/profil.webp',
  nama_foto: 'Arraihan Attamimi',
  role_foto: 'Creator & Communicator',
  tags: ['🎤 Speaker', '🎨 Designer', '📱 Content Creator'],
  paragraphs: [
    'Yaudah, kenalan dulu aja.',
    'Aku <strong>Arraihan Elshanty Attamimi</strong>. Bukan superhero, tapi lumayan sering "menyelamatkan" ide biar nggak tenggelam.',
    'Fokusku sederhana: <strong>membuat pesan jadi jelas, menarik, dan berdampak.</strong>',
  ],
  focus: [
    { icon: '🎤', title: 'Public Speaking & Dakwah' },
    { icon: '🎨', title: 'Visual Design' },
    { icon: '📱', title: 'Digital Content & Media' },
  ],
  paragraphs2: [
    'Selebihnya, aku belajar dari proses. Nggak selalu benar, tapi selalu berkembang.',
    'Di waktu yang sama, aku juga mengembangkan sebuah platform bernama <strong class="hl-gradient">MEDIA CREATIVE SANTRI</strong> — ruang terpisah, tempat ide-ide kreatif dikembangkan lebih luas.',
    'Kadang terlihat santai, kadang juga banyak mikir. Karena Aku <strong>PNS</strong> <em>(Pengangguran Namun Sibuk?)</em>',
  ],
  closing_line1: 'Kalau kamu sampai di halaman ini, mungkin bukan kebetulan…',
  closing_line2: 'Siapa tahu, kita lagi ada di cerita yang sama.',
};

/* ── 3. SKILLS ────────────────────────────────────────────── */
const CONFIG_SKILLS = [
  {
    id: 'video',
    icon: 'video',
    nama: 'Editing Video',
    desc: 'Produksi & editing video kreatif, dari footage hingga final cut siap publikasi',
    gallery_title: 'Karya Editing Video',
    items: [
      { type: 'video', thumb: 'img/pameran/media.png', src: 'img/skills/video1.mp4', label: 'Promo Event' },
    ],
  },
  {
    id: 'design',
    icon: 'design',
    nama: 'Desain Grafis',
    desc: 'Visual design, poster, branding, dan konten kreatif untuk berbagai kebutuhan',
    gallery_title: 'Karya Desain Grafis',
    items: [
      { type: 'image', src: 'img/pameran/skill1.webp', label: 'Design Ramadhan' },
      { type: 'image', src: 'img/pameran/skill2.webp', label: 'Design Ramadhan' },
      { type: 'image', src: 'img/pameran/skill3.webp', label: 'Design Ramadhan' },
      { type: 'image', src: 'img/pameran/skill4.webp', label: 'Design Ramadhan' },
    ],
  },
];

/* ── 4. ORGANISASI UTAMA ──────────────────────────────────── */
const ORG_UTAMA = [
  { icon: '🏛️', nama: 'Himpunan Pelajar Muslim Indonesia', peran: 'Ketua Pimpinan Daerah Kota Gorontalo', tahun: '2026', desc: 'Memimpin organisasi dan mengoordinasikan kegiatan di tingkat daerah.' },
  { icon: '🎨', nama: 'Himpunan Mahasiswa Ilmu Komunikasi', peran: 'Anggota Divisi Desain Grafis', tahun: '2025 – 2026', desc: 'Pembuatan desain komunikasi visual dan publikasi kegiatan mahasiswa.' },
  { icon: '🏫', nama: 'Pondok Pesantren Wahdah Islamiyah', peran: 'Ketua Organisasi Santri', tahun: '2022 – 2023', desc: 'Memimpin dan mengatur program kegiatan santri di lingkungan pesantren.' },
  { icon: '🤝', nama: 'Keluarga Duta Santri Nasional', peran: 'Anggota Komisi 3', tahun: '2026 – 2028', desc: 'Terlibat dalam perumusan kebijakan dan program pengembangan santri.' },
];

/* ── 5. PRESTASI ──────────────────────────────────────────── */
const PRESTASI_LIST = [
  { icon: '🎤', judul: 'Juara 2 Lomba Pidato Bahasa Indonesia', tahun: '2022', inst: 'POSPEDA Kab. Bone Bolango' },
  { icon: '🕌', judul: 'Juara 2 Lomba Tausiyah', tahun: '2024', inst: 'PTQ-RRI Gorontalo' },
  { icon: '🎙️', judul: 'Juara 2 Lomba Dakwah', tahun: '2024', inst: 'PESONA Bank Indonesia' },
  { icon: '💻', judul: 'Runner Up', tahun: '2024', inst: 'Santri Digital Preneur Indonesia' },
  { icon: '🏆', judul: 'Juara 1 Lomba Kultum', tahun: '2025', inst: 'Moporameya Ramadhan GENBI Gorontalo' },
  { icon: '🥇', judul: 'Juara 1 Lomba Dakwah', tahun: '2025', inst: 'PESONA Bank Indonesia' },
  { icon: '🎨', judul: 'Poster Terbaik', tahun: '2026', inst: 'Connextion HIMAKOM' },
];

/* ── 6. ORGANISASI LAIN ───────────────────────────────────── */
const ORG_LAIN = [
  { icon: '📸', nama: 'Media Pondok Pesantren Wahdah Islamiyah', peran: 'Anggota / Tim', tahun: '2025', desc: 'Melakukan peliputan, dokumentasi, dan publikasi media di pesantren.' },
  { icon: '📋', nama: 'Meeting Class Ponpes Wahdah Islamiyah', peran: 'Ketua Panitia', tahun: '2023', desc: 'Mengoordinasikan acara pertemuan tahunan kepengurusan antar kelas.' },
  { icon: '🎓', nama: 'Wisuda Santri', peran: 'PIC Acara', tahun: '2025', desc: 'Bertanggung jawab penuh atas keberlangsungan acara wisuda santri.' },
  { icon: '🎨', nama: 'Syawirnas Dan Rakernas Duta Santri Nasional', peran: 'PJ Divisi PDD', tahun: '2026 – 2028', desc: 'Penanggung Jawab Divisi Publikasi, Dekorasi, dan Dokumentasi (PDD).' },
];

/* ── 7. PENDIDIKAN ────────────────────────────────────────── */
const PENDIDIKAN = [
  { jenjang: 'TK', icon: '🎒', nama: 'Raudhatul Athfal Awwal Fathul Mubin' },
  { jenjang: 'SD', icon: '📚', nama: 'SDIT Harapan Bunda Manado' },
  { jenjang: 'SMP', icon: '🏫', nama: 'MTsS Wahdah Islamiyah Bone Bolango' },
  { jenjang: 'SMA', icon: '🎓', nama: 'MAS Wahdah Islamiyah Tilongkabila' },
  { jenjang: 'S1', icon: '🏛️', nama: 'Ilmu Komunikasi — Universitas Negeri Gorontalo' },
];

/* ── 8. DISPLAY / PAMERAN ─────────────────────────────────── */
const PAMERAN = {
  mcs: {
    title: 'MEDIA CREATIVE SANTRI 📹',
    description: 'Platform kreatif dokumentasi dan konten santri',
    thumb: 'img/pameran/media.webp',
    meta: '2023 • Arraihan',
    media: { type: 'image', images: ['img/pameran/media.webp'] },
    paragraphs: [
      'Media Creative Santri adalah platform yang saya bangun sebagai ruang eksplorasi dan aktualisasi bagi santri di era digital.',
      'Berangkat dari pengalaman enam tahun di pesantren, saya melihat bahwa santri memiliki potensi besar—bukan hanya dalam ilmu, tapi juga dalam kreativitas, cara berpikir, dan kemampuan menyampaikan pesan. Namun, tidak semua memiliki ruang untuk mengembangkan itu secara maksimal.',
      'Dari situlah Media Creative Santri lahir.',
      'Platform ini tidak dibangun sebagai ruang yang terbuka secara luas, tetapi sebagai ruang yang terkurasi. Saya memilih 6 santri—bukan hanya karena kemampuan mereka, tetapi karena kesiapan mereka untuk berkontribusi dan dedikasi yang mereka bawa.',
      'Kami bukan sekadar tim.',
      'Kami adalah lingkar kecil yang dibangun atas dasar kepercayaan, komitmen, dan visi yang sama.',
      'Perjalanan ini tentu tidak selalu mulus. Ada pandangan yang meremehkan, ada yang mempertanyakan pilihan saya. Tapi saya memilih untuk tetap konsisten.',
      'Karena bagi saya, yang terpenting bukan bagaimana orang lain melihat, tapi bagaimana kami bertumbuh bersama.',
      'Mereka yang saya pilih bukan untuk menjadi yang paling terlihat, tapi untuk menjadi yang paling siap bekerja. Mereka tidak dibentuk untuk meremehkan atau merasa lebih tinggi dari orang lain, tapi justru untuk tetap rendah hati, sambil terus meningkatkan kualitas diri.',
      'Di dalam Media Creative Santri, kami fokus pada pengembangan konten kreatif, desain, serta komunikasi digital yang kuat dan relevan. Setiap karya yang kami hasilkan membawa nilai—bukan sekadar estetika, tapi juga makna.',
      'Dan saya percaya, ini bukan akhir dari ruang kecil yang kami bangun hari ini.',
      'Saya ingin Media Creative Santri tidak berhenti hanya di lingkungan pesantren Wahdah Islamiyah. Saya ingin platform ini tumbuh, meluas, dan hadir di berbagai pesantren di seluruh Indonesia—menjadi ruang bagi lebih banyak santri untuk berkembang, berkarya, dan memberikan dampak.',
    ],
    quote: 'Kreativitas santri tidak berhenti di pesantren — ia menyebar ke seluruh penjuru digital.',
  },
  dakwah: {
    title: 'Santri Digital Preneur Indonesia 2024',
    description: 'Perjalanan santri digital preneur indonesia',
    thumb: 'img/pameran/sagal.webp',
    meta: '2021–2024 • Arraihan',
    media: { type: 'image', images: ['img/pameran/sagal.webp'] },
    paragraphs: [
      'Saya berkesempatan mengikuti Santri Digital Preneur Indonesia 2024 sebagai salah satu ajang untuk mengembangkan diri.',
      'Dalam perjalanan ini, saya tidak hanya mengikuti sebuah kompetisi, tetapi juga masuk ke ruang belajar yang mempertemukan saya dengan banyak orang hebat. Saya berkesempatan belajar langsung dari Kang Ei, Kang Anjar, dan Kang Syarif—yang membuka cara pandang saya tentang dunia digital, kreativitas, dan bagaimana membangun sesuatu dengan arah yang jelas.',
      'Bersama tim, kami melalui berbagai tahap—mulai dari merancang ide, menyusun konsep, hingga mempresentasikan gagasan dengan penuh keyakinan. Setiap proses bukan hanya tentang penilaian, tapi tentang bagaimana kami belajar berpikir lebih matang, bekerja sama, dan saling melengkapi.',
      'Tidak selalu mudah. Ada proses revisi, ada perbedaan pendapat, dan ada momen di mana kami harus mengulang dari awal. Tapi justru di situlah kami belajar—bahwa ide yang baik tidak lahir secara instan, melainkan melalui proses yang terus diperbaiki.',
      'Hingga akhirnya, kami berhasil meraih Juara 2.',
      'Namun bagi saya, yang paling berharga bukan hanya hasil tersebut, melainkan proses yang membentuk cara saya melihat dunia digital. Saya mulai memahami bahwa kekuatan sebuah ide tidak hanya terletak pada kreativitas, tetapi juga pada bagaimana ide itu dikomunikasikan dengan jelas dan tepat sasaran.',
      'Pengalaman ini juga memperluas cara pandang saya—bahwa dunia digital bukan hanya tentang teknologi, tetapi tentang peluang. Peluang untuk berkarya, menyampaikan pesan, dan memberikan dampak yang lebih luas.',
      'Dari sini, saya semakin yakin bahwa santri memiliki tempat di era digital. Bukan hanya sebagai pengguna, tetapi sebagai kreator yang mampu membawa nilai, identitas, dan pesan yang bermakna.',
      'Public speaking adalah salah satu passion terbesarku. Dari lomba pidato bahasa Arab hingga dakwah di tingkat provinsi, setiap penampilan mengajarkan keberanian dan komunikasi efektif.',
      'Dan perjalanan ini, bagi saya, bukan akhir.',
    ],
    quote: 'Tapi awal dari langkah yang lebih panjang.',
  },
  lomba: {
    title: 'Lomba Dakwah , Kultum Dan Tausiyah🎤',
    description: 'Prestasi besar dalam lomba',
    thumb: 'img/pameran/lomwah.webp',
    meta: '2025 • Arraihan',
    media: { type: 'image', images: ['img/pameran/lomwah.webp'] },
    paragraphs: [
      'Semua dimulai dari hal yang sederhana—berdiri di depan teman-teman sendiri, menyampaikan kultum singkat, dengan rasa gugup yang tidak bisa disembunyikan.',
      'Tidak ada yang langsung terlihat luar biasa. Tapi dari situ, saya mulai belajar—tentang bagaimana menyusun kata, mengatur suara, dan yang paling penting, menyampaikan pesan agar benar-benar sampai.',
      'Perjalanan itu perlahan membawa saya ke panggung yang lebih besar.',
      'Tahun 2022 menjadi salah satu langkah awal yang berarti, ketika saya meraih Juara 2 dalam Lomba Pidato pada Pekan Olahraga dan Seni Pesantren Daerah tingkat Kabupaten Bone Bolango. Bukan tentang posisi juaranya, tapi tentang kesadaran bahwa saya mampu melangkah lebih jauh dari zona nyaman.',
      'Langkah itu berlanjut ketika saya mengikuti Lomba Tausiyah dalam Pekan Tilawatil Qur’an yang diselenggarakan oleh Radio Republik Indonesia Gorontalo. Di sana, saya belajar bahwa dakwah bukan hanya soal berbicara, tapi tentang bagaimana menyentuh hati orang yang mendengar. Saya kembali meraih Juara 2, tapi yang saya bawa pulang lebih dari sekadar penghargaan—itu adalah pengalaman.Saya terus melangkah.',
      'Di Pekan Ekonomi Syariah 2024 yang diselenggarakan oleh Bank Indonesia, saya kembali diuji dalam Lomba Dakwah. Saya meraih Juara 2, dan di titik itu saya mulai memahami bahwa proses ini bukan tentang cepat sampai, tapi tentang terus bertumbuh.',
      'Sampai akhirnya, di tahun 2025, di panggung yang sama, saya kembali berdiri—dengan versi diri yang lebih siap. Bukan hanya membawa materi, tapi juga membawa pengalaman, kegagalan, dan pelajaran dari perjalanan sebelumnya.',
      'Dan kali ini, saya meraih Juara 1.',
      'Di waktu yang berbeda, saya juga merasakan momen berharga ketika meraih Juara 1 dalam Lomba Kultum pada kegiatan Moporameya Ramadhan yang diselenggarakan oleh GENBI Gorontalo. Sebuah pengingat bahwa setiap proses kecil yang dijalani dengan konsisten, pada akhirnya akan menemukan hasilnya.',
      'Perjalanan ini mengajarkan saya satu hal penting—bahwa dakwah bukan tentang siapa yang paling sering berbicara, tapi siapa yang terus belajar untuk menyampaikan dengan lebih baik.',

    ],
    quote: 'Dari mimbar kecil hingga panggung yang lebih luas, saya terus berjalan.Dan saya tahu, ini belum selesai.',
  },
  enamtahun: {
    title: '6 Tahun Menjadi Santri🎈',
    description: 'Perjalanan menjadi santri',
    thumb: 'img/pameran/6tahun.webp',
    meta: '2025 • Arraihan',
    media: { type: 'image', images: ['img/pameran/6tahun.webp'] },
    paragraphs: [
      'Enam tahun menjadi santri bukan hanya soal waktu, tapi tentang proses panjang yang perlahan membentuk cara saya berpikir, bersikap, dan melihat dunia.',
      'Perjalanan itu saya mulai sejak tahun 2018 di Pondok Pesantren Wahdah Islamiyah Bone Bolango. Di tempat inilah saya ditempa—bukan hanya sebagai pelajar, tapi sebagai pribadi yang belajar memahami arti hidup dengan lebih dalam.',
      'Saya tumbuh dalam lingkungan yang mengajarkan kedisiplinan sejak hal-hal kecil—bangun sebelum fajar, menjaga waktu, hingga menghargai setiap proses belajar. Rutinitas yang dijalani setiap hari mungkin terlihat sederhana, namun di situlah karakter dibentuk.',
      'Pada tanggal 13 Januari 2021, saya menyelesaikan salah satu fase penting dalam perjalanan itu—khatam Al-Qur’an. Bagi saya, itu bukan sekadar pencapaian, tetapi sebuah titik yang mengingatkan bahwa setiap proses yang dijalani dengan kesabaran akan sampai pada hasilnya.',
      'Selama di pesantren, saya dididik oleh para asatidz yang luar biasa—yang tidak hanya mengajarkan ilmu, tetapi juga memberikan teladan dalam sikap dan kehidupan. Dari mereka, saya belajar bahwa ilmu bukan hanya untuk diketahui, tetapi untuk diamalkan dan dijaga dengan penuh tanggung jawab.',
      'Lebih dari itu, saya ditempa untuk kuat dalam keadaan terbatas. Jauh dari keluarga, hidup dengan aturan yang ketat, dan menjalani rutinitas yang padat—semua itu bukan menjadi beban, tapi justru melatih ketahanan diri dan kemandirian.',
      'Di sana, saya tidak hanya belajar agama. Saya belajar tentang tanggung jawab, tentang arti kebersamaan, dan tentang bagaimana menghargai perbedaan. Saya bertemu dengan banyak karakter dan latar belakang, yang kemudian mengajarkan saya untuk memahami orang lain dengan lebih bijak.',
      'Enam tahun itu juga menjadi awal perjalanan saya di dunia dakwah. Saya belajar menyampaikan pesan, berdiri di depan banyak orang, dan merangkai kata agar bisa memberi makna. Dari situ, saya mulai memahami bahwa komunikasi adalah jembatan—antara ilmu dan masyarakat.',
      'Pengalaman sebagai santri juga menjadi fondasi dalam perjalanan saya di dunia media dan kreatif. Nilai-nilai yang saya dapatkan di pesantren menjadi arah dalam setiap karya yang saya buat—bahwa setiap konten bukan hanya untuk dilihat, tapi juga harus memiliki nilai dan dampak.',
      'Pada tahun 2024, saya menyelesaikan fase pendidikan tersebut. Namun bagi saya, perjalanan sebagai santri tidak pernah benar-benar selesai.',
      'Hari ini, saya mungkin sudah melangkah keluar dari lingkungan pesantren, tapi enam tahun itu tetap hidup dalam diri saya—dalam cara saya berpikir, dalam keputusan yang saya ambil, dan dalam setiap langkah yang saya jalani.',
      'Karena bagi saya, menjadi santri bukan hanya fase.',

    ],
    quote: 'Tapi identitas yang akan terus saya bawa, ke mana pun saya pergi.',
  },
  dutas: {
    title: 'Duta santri nasional 2025🎀',
    description: 'Menjadi duta santri tingkat nasional',
    thumb: 'img/pameran/dutas.webp',
    meta: '2025 • Arraihan',
    media: { type: 'image', images: ['img/pameran/dutas.webp'] },
    paragraphs: [
      'Dari sekitar 5.900 pendaftar di seluruh Indonesia, hanya 30 orang yang terpilih untuk melangkah ke tahap akhir Duta Santri Nasional. Ketika nama saya diumumkan, ada rasa syukur yang besar—tapi di saat yang sama, saya tahu ini bukan garis akhir. Justru ini adalah awal dari tanggung jawab yang lebih besar.',
      'Perjalanan saya ke sana tidak dimulai dengan kemewahan. Saya berangkat dengan kondisi yang sederhana—bahkan bisa dibilang nekat, tanpa kesiapan dana yang cukup. Tapi saya memilih untuk tidak menjadikan itu sebagai alasan untuk berhenti.',
      'Saya percaya, selama niat kita baik, jalan akan terbuka.',
      'Dan benar saja, di tengah perjalanan itu, bantuan datang dari orang-orang yang luar biasa. Mereka bukan sekadar membantu secara materi, tapi juga menguatkan secara batin. Ada doa, ada dukungan, ada kepercayaan—yang semuanya terasa seperti datang dari keluarga sendiri.',
      'Perjalanan ini akhirnya membawa saya bertemu dengan 29 santri terbaik lainnya dari berbagai daerah di Indonesia. Kami datang dengan cerita yang berbeda, logat yang berbeda, dan latar belakang yang berbeda.',
      'Tapi anehnya, kami cepat sekali merasa dekat.',
      'Hari-hari yang kami lalui bersama bukan hanya diisi dengan kegiatan formal seperti pembekalan, presentasi, dan penilaian. Lebih dari itu, ada momen-momen sederhana yang justru paling berkesan—diskusi panjang di malam hari, saling berbagi cerita perjuangan, sampai saling menguatkan ketika ada yang mulai lelah.',
      'Kami tidak lagi merasa sebagai kompetitor.',
      'Kami menjadi keluarga.',
      'Di ajang ini, saya mendapatkan banyak hal yang tidak bisa diukur hanya dengan sertifikat atau gelar.',
      'Saya belajar bagaimana menyampaikan ide dengan lebih terstruktur dan berdampak. Saya belajar membangun kepercayaan diri di depan publik. Saya belajar bahwa komunikasi bukan hanya soal berbicara, tapi juga tentang memahami dan menyentuh hati orang lain.',
      'Sebagai seseorang yang berkecimpung di dunia media dan kreatif, pengalaman ini juga membuka perspektif baru bagi saya—bagaimana narasi bisa dibangun dengan lebih kuat, bagaimana pesan dakwah bisa dikemas lebih relevan, dan bagaimana santri bisa hadir di ruang digital dengan cara yang lebih strategis.',
      'Benefit terbesar dari perjalanan ini bukan hanya jaringan nasional yang saya dapatkan, tapi juga cara pandang yang berubah.',
      'Saya sekarang memahami bahwa menjadi santri di era hari ini berarti siap untuk beradaptasi, berkolaborasi, dan memberi kontribusi nyata di tengah masyarakat.',
      'Saya juga mendapatkan relasi yang luar biasa—teman-teman dari berbagai daerah yang sampai hari ini masih saling terhubung, saling mendukung, dan saling mengingatkan.',
      'Duta Santri Nasional bukan hanya tentang siapa yang menang di malam final.',
      'Tapi tentang siapa yang terus berjalan setelah lampu panggung dimatikan.',
      'Dan bagi saya, perjalanan ini adalah pengingat bahwa keterbatasan bukanlah penghalang. Justru dari keterbatasan itulah, lahir keberanian, keikhlasan, dan keyakinan.',
      'Karena pada akhirnya, yang membawa kita sampai bukan hanya kemampuan.',
      'Tapi juga doa, dukungan, dan keberanian untuk melangkah, meski belum sepenuhnya siap',
    ],
    quote: 'Dari mimbar kecil hingga panggung yang lebih luas, saya terus berjalan.Dan saya tahu, ini belum selesai.',
  },
  kedutas: {
    title: 'Keluarga Duta Santri Nasional🌅',
    description: 'Perjalanan menjadi santri',
    thumb: 'img/pameran/kedutas.webp',
    meta: '2025 • Arraihan',
    media: { type: 'image', images: ['img/pameran/kedutas.webp'] },
    paragraphs: [
      'Menjadi bagian dari Duta Santri Nasional bukan hanya tentang satu ajang, tapi tentang bergabung dalam sebuah keluarga yang lebih besar.',
      'Keluarga yang dipertemukan oleh visi yang sama—untuk bertumbuh, berkontribusi, dan memberi dampak bagi masyarakat.',
      'Kepercayaan itu berlanjut ketika saya diberikan amanah sebagai pengurus Keluarga Duta Santri Nasional masa khidmat 2026–2028. Sebuah peran yang tidak hanya membawa tanggung jawab, tetapi juga kesempatan untuk terus berkembang bersama orang-orang hebat dari seluruh Indonesia.',
      'Dalam kepengurusan ini, saya tergabung dalam Komisi 3 yang berfokus pada ekonomi kreatif, lingkungan, dan media. Ruang ini menjadi tempat saya menggabungkan pengalaman, minat, dan kemampuan yang selama ini saya bangun—terutama di bidang kreatif dan komunikasi.',
      'Secara khusus, saya dipercaya sebagai Koordinator Bidang Multimedia.',
      'Peran ini bukan hanya tentang mengelola visual atau konten, tetapi tentang bagaimana membangun identitas, menyampaikan pesan, dan menghidupkan gerakan melalui media yang tepat. Saya belajar bagaimana sebuah organisasi bisa dikenal, dipahami, dan memberi pengaruh melalui strategi komunikasi yang kuat.',
      'Bagi saya, ini bukan sekadar jabatan.',
      'Ini adalah ruang untuk berkontribusi lebih luas—membawa semangat santri ke tingkat nasional, dan memastikan bahwa setiap gerakan yang dibangun tidak hanya berjalan, tetapi juga terasa dan berdampak.',
      'Keluarga Duta Santri Nasional bukan hanya tempat saya bertumbuh.',
    ],
    quote: 'Tapi juga tempat saya melanjutkan perjalanan—dari belajar, menjadi bagian, hingga mengambil peran untuk memberi arah.',
  },
  himakom: {
    title: 'Himpunan Mahasiswa Ilmu Komunikasi',
    description: 'Himakom, Sebuah Rumah untuk Bertumbuh',
    thumb: 'img/pameran/himakom.webp',
    meta: '2025 • Arraihan',
    media: { type: 'image', images: ['img/pameran/himakom.webp'] },
    paragraphs: [
      'Bagi saya, Himpunan Mahasiswa Komunikasi bukan sekadar organisasi kampus.',
      'Ia adalah rumah.',
      'Rumah yang tidak dibangun dari dinding, tapi dari proses, kebersamaan, dan orang-orang yang saling menguatkan dalam perjalanan yang sama.',
      'Perjalanan saya di Himakom dimulai pada tahun 2024, saat saya pertama kali dikader oleh Kabinet Abipraya. Di fase ini, saya belajar banyak hal dari dasar—memahami bagaimana organisasi berjalan, bagaimana beradaptasi, dan bagaimana menemukan peran saya di tengah banyaknya dinamika.',
      'Memasuki tahun 2025, saya mulai terlibat lebih dalam bersama Kabinet Sinergi. Di sini, saya tidak hanya hadir sebagai anggota, tapi mulai belajar untuk benar-benar berkontribusi. Saya memahami bahwa dalam sebuah rumah, setiap orang memiliki perannya masing-masing, dan setiap peran itu penting.',
      'Hingga akhirnya, di tahun 2026, angkatan saya dipercaya menjadi bagian inti dalam Kabinet Resonansi. Sebuah titik di mana kami tidak lagi hanya belajar, tapi juga memegang tanggung jawab—menjaga, melanjutkan, dan mengembangkan rumah yang telah dibangun bersama.',
      'Di dalam Himakom, saya berperan sebagai anggota di bidang Multimedia Kreatif, tepatnya di divisi desain grafis. Di sinilah saya menuangkan ide menjadi visual, mengolah pesan menjadi karya, dan belajar bahwa desain bukan hanya soal estetika, tapi juga tentang bagaimana sebuah pesan bisa dirasakan.',
      'Himakom bagi saya bukan hanya tempat berproses.',
      'Ia adalah rumah yang mengajarkan arti kebersamaan, tanggung jawab, dan pertumbuhan. Tempat di mana saya belajar bahwa perjalanan tidak harus selalu mudah, tapi akan selalu berarti jika dijalani bersama.',
    ],
    quote: 'Dan dari rumah ini, saya belajar untuk melangkah lebih jauh—dengan bekal pengalaman, nilai, dan orang-orang yang akan selalu menjadi bagian dari cerita saya.',
  },
};

/* ── 9. JASA ──────────────────────────────────────────────── */
const CONFIG_JASA = {
  whatsapp: 'https://wa.me/6289636134570',
  services: [
    { icon: '🎬', nama: 'Edit Video', desc: 'Editing profesional untuk konten medsos, dokumentasi, promo, reels, dan lainnya' },
    { icon: '🎨', nama: 'Desain Grafis', desc: 'Poster, banner, konten feed, flyer, thumbnail, dan berbagai kebutuhan visual' },
  ],
  cta_text: 'Tertarik? Langsung hubungi aku lewat WhatsApp!',
  cta_label: 'Chat via WhatsApp',
};


