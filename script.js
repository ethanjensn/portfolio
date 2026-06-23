// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // NSFW reveal toggles
        document.querySelectorAll('.nsfw-cover').forEach(cover => {
            const wrapper = cover.closest('.nsfw-wrapper');
            const reveal = () => {
                wrapper.classList.add('active');
                const content = wrapper.querySelector('.nsfw-content');
                if (content) {
                    content.setAttribute('aria-hidden', 'false');
                }
            };
            cover.addEventListener('click', reveal);
            cover.addEventListener('keypress', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    reveal();
                }
            });
        });

        // Lightbox for images and GIFs
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        const lightboxClose = lightbox.querySelector('.lightbox-close');

        const openLightbox = (src, alt) => {
            lightboxImg.src = src;
            lightboxImg.alt = alt;
            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        };

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            lightboxImg.src = '';
            document.body.style.overflow = '';
        };

        document.querySelectorAll('.highlight-media img, .image-grid img').forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => openLightbox(img.src, img.alt));
        });

        lightbox.addEventListener('click', e => {
            if (e.target === lightbox || e.target === lightboxClose || e.target.closest('.lightbox-close')) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
