document.addEventListener('DOMContentLoaded', () => {

    // --- State & DOM Elements ---
    const categoriesContainer = document.getElementById('categoriesContainer');
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const closeModalBtn = document.getElementById('closeModal');
    const heroPlayBtn = document.getElementById('heroPlayBtn');

    // --- Configuration Data ---
    const data = {
        "categories": [
            {
                "id": "pedicure-he",
                "title": "פדיקור עברית",
                "videos": [
                    {
                        "id": "video_he_1",
                        "title": "פדיקור קלאסי - שלב אחר שלב 1",
                        "description": "הדרכה מקיפה, חלק 1",
                        "thumbnail": "assets/pedicure_tools_closeup_1772556894057.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1lwYuVloIFOID_q_5Q7dfYs_ftBzFYhC_/preview?rm=minimal"
                    },
                    {
                        "id": "video_he_2",
                        "title": "פדיקור קלאסי - שלב אחר שלב 2",
                        "description": "הדרכה מקיפה, חלק 2",
                        "thumbnail": "assets/pedicure_chair_luxury_1772556929206.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1PSropmwqSoZmG2mIuru09gB5mFvbOBfs/preview?rm=minimal"
                    },
                    {
                        "id": "video_he_3",
                        "title": "טיפול בפטריות מקיף",
                        "description": "סקירה מקצועית של תכשירים לטיפול בפטריות ויישום מעשי.",
                        "thumbnail": "assets/kart_product_closeup_1772553479307.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1DRZDblcQuxMnfNwkWbQhqKP7v9xITn-W/preview?rm=minimal"
                    },
                    {
                        "id": "video_he_4",
                        "title": "פדיקור יבש מתקדם 1",
                        "description": "טכניקות מתקדמות לפדיקור יבש ושילוב מכשור.",
                        "thumbnail": "assets/pedicure_tools_closeup_1772556894057.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1asK8_tlr7b5143iVWBQiHLOavewS7bwL/preview?rm=minimal"
                    },
                    {
                        "id": "video_he_5",
                        "title": "פדיקור יבש מתקדם 2",
                        "description": "המשך טכניקות מיוחדות להסרת עור וטיפול סדקים.",
                        "thumbnail": "assets/pedicure_chair_luxury_1772556929206.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1K9T9y-DAvjbBr87gk6a16fU0sdELy4aj/preview?rm=minimal"
                    },
                    {
                        "id": "video_he_6",
                        "title": "פרוטוקולי KART סקירה מלאה",
                        "description": "סיכום ושאלות למטפלות מתקדמות.",
                        "thumbnail": "assets/pedicure_clean_studio_1772553496144.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1ZPbYZMS79glvDvutM1w0ghhf67YH_al-/preview?rm=minimal"
                    }
                ]
            },
            {
                "id": "pedicure-ru",
                "title": "פדיקור רוסית",
                "videos": [
                    {
                        "id": "video_ru_1",
                        "title": "Учебно-методическое пособие 1",
                        "description": "הדרכה מפורטת ברוסית על שיטת פדי-קארט (חלק 1).",
                        "thumbnail": "assets/pedicure_tools_closeup_1772556894057.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1-1_W_R0xjTJaJaqZ3vzm7zqhpdwjZ7BR/preview?rm=minimal"
                    },
                    {
                        "id": "video_ru_2",
                        "title": "Учебно-методическое пособие 2",
                        "description": "הדרכה מפורטת ברוסית על שיטת פדי-קארט (חלק 2).",
                        "thumbnail": "assets/pedicure_chair_luxury_1772556929206.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1691Swix2aIiiKz8nCkGHlmkgJ6TJ4zXE/preview?rm=minimal"
                    },
                    {
                        "id": "video_ru_3",
                        "title": "Протокол лечения грибка 1",
                        "description": "פרוטוקול טיפול בפטריות ציפורניים עמוס רוסית (חלק 1).",
                        "thumbnail": "assets/kart_product_closeup_1772553479307.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1-6naIkZV_Kmxu0i_eHyJpWcxaljLGkRY/preview?rm=minimal"
                    },
                    {
                        "id": "video_ru_4",
                        "title": "Протокол лечения грибка 2",
                        "description": "פרוטוקול טיפול בפטריות ציפורניים עמוס רוסית (חלק 2).",
                        "thumbnail": "assets/pedicure_clean_studio_1772553496144.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1T4ek981jpU-JPOppNd_5pksH_omfydeG/preview?rm=minimal"
                    },
                    {
                        "id": "video_ru_5",
                        "title": "Ответы на вопросы",
                        "description": "שאלות ותשובות נפוצות על גישת KART ממומחים ברוסית.",
                        "thumbnail": "assets/pedicure_tools_closeup_1772556894057.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1Y7ZhiI6wf-nGNEo7lOrsOeEjYTc7yFy_/preview?rm=minimal"
                    }
                ]
            },
            {
                "id": "cosmetics",
                "title": "קוסמטיקה",
                "videos": [
                    {
                        "id": "video_cos_1",
                        "title": "Timeless & Innovation 1",
                        "description": "פרוטוקול אנטי-אייג'ינג מתקדם להצערת העור.",
                        "thumbnail": "assets/facial_treatment_glowing_1772556909826.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1GidfWqbZ7rSAqfgrLdfmOkQtbiJQhko-/preview?rm=minimal"
                    },
                    {
                        "id": "video_cos_2",
                        "title": "Timeless & Innovation 2",
                        "description": "המשך פרוטוקול אנטי-אייג'ינג כולל טיפול בקמטים צועקים.",
                        "thumbnail": "assets/beautician_modern_clinic_1772553460640.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1rfoTEGImZzTd2y8ana4Xt5Jo4Uq3Wftu/preview?rm=minimal"
                    },
                    {
                        "id": "video_cos_3",
                        "title": "M-Acne Masterclass 1",
                        "description": "הדרכה על התמודדות נכונה עם עור שמן ובעייתי.",
                        "thumbnail": "assets/facial_treatment_glowing_1772556909826.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1lnbSg57wtJBRdv0noZdJPy_PSwRcjg76/preview?rm=minimal"
                    },
                    {
                        "id": "video_cos_4",
                        "title": "M-Acne Masterclass 2",
                        "description": "טכניקות ניקוי ושילוב חומצות (חלק ב').",
                        "thumbnail": "assets/kart_product_closeup_1772553479307.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1nPFFozZ31-g_7kXa8V4hOFr8IZR45jPS/preview?rm=minimal"
                    },
                    {
                        "id": "video_cos_5",
                        "title": "מזותרפיה ואלקטרופורציה",
                        "description": "שילוב מכשור עם תכשירי העור של קארט לקבלת תוצאות.",
                        "thumbnail": "assets/facial_treatment_glowing_1772556909826.png",
                        "driveEmbedUrl": "https://drive.google.com/file/d/1k_mF3-Wl-G3XHSUAXNcN6o-s5YL-1Lmt/preview?rm=minimal"
                    }
                ]
            }
        ]
    };

    renderLibrary(data.categories);

    // --- Render Library ---
    function renderLibrary(categories) {
        categoriesContainer.innerHTML = ''; // clear

        categories.forEach(category => {
            // Create Category Row
            const row = document.createElement('div');
            row.className = 'category-row';

            // Title
            const title = document.createElement('h2');
            title.className = 'category-title';
            title.textContent = category.title;
            row.appendChild(title);

            // Carousel Container
            const carouselContainer = document.createElement('div');
            carouselContainer.className = 'carousel-container';

            const track = document.createElement('div');
            track.className = 'carousel-track';

            // Add Videos
            category.videos.forEach(video => {
                const card = createVideoCard(video);
                track.appendChild(card);
            });

            carouselContainer.appendChild(track);
            row.appendChild(carouselContainer);
            categoriesContainer.appendChild(row);

            // Add Click and Drag Scrolling (Optional enhancement)
            enableDragScroll(track);
        });
    }

    // --- Create Single Video Card ---
    function createVideoCard(video) {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.dataset.id = video.id;

        card.innerHTML = `
            <div class="video-thumb">
                <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                <div class="thumb-overlay">
                    <div class="play-icon"><i class="fas fa-play"></i></div>
                    <div class="card-info">
                        <h4 class="card-title">${video.title}</h4>
                        <p class="card-desc">${video.description}</p>
                    </div>
                </div>
            </div>
        `;

        // Click Event to open Modal
        card.addEventListener('click', () => {
            openModal(video);
        });

        return card;
    }

    // --- Modal Logic ---
    function openModal(videoData) {
        modalTitle.textContent = videoData.title;
        modalDesc.textContent = videoData.description;
        videoIframe.src = videoData.driveEmbedUrl;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent scrolling
    }

    function closeModal() {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            videoIframe.src = ""; // Stop video playback when closed
        }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal || e.target.classList.contains('modal-backdrop')) {
            closeModal();
        }
    });

    // Hero Play Button
    heroPlayBtn.addEventListener('click', () => {
        openModal({
            title: "Timeless & Innovation",
            description: "פרוטוקול מומלץ - הדרכה מלאה",
            driveEmbedUrl: heroPlayBtn.dataset.driveUrl
        });
    });

    // --- Drag to Scroll for Carousel ---
    function enableDragScroll(slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'pointer';
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'pointer';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed
            slider.scrollLeft = scrollLeft - walk; // Because RTL scrolling is sometimes opposite
        });
    }
});
