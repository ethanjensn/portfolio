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
