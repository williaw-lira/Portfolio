// JavaScript para o contador de idade
        document.addEventListener('DOMContentLoaded', function() {
            const dataNascimento = new Date(2004, 9, 23); 
            const hoje = new Date();
            let idade = hoje.getFullYear() - dataNascimento.getFullYear();
            const m = hoje.getMonth() - dataNascimento.getMonth();

            if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
                idade--;
            }
            document.getElementById('idade-contador').textContent = idade;

            // Script para alternar o tema da navbar
            const themeToggleBtn = document.getElementById('theme-toggle');
            const body = document.body;
            const iconLight = themeToggleBtn.querySelector('.icon-light');
            const iconDark = themeToggleBtn.querySelector('.icon-dark');

            // Verifica o tema salvo no localStorage ou define um padrão
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'dark') {
                body.classList.add('dark-theme');
                iconLight.style.display = 'none';
                iconDark.style.display = 'inline';
            } else {
                iconLight.style.display = 'inline';
                iconDark.style.display = 'none';
            }

            themeToggleBtn.addEventListener('click', function() {
                body.classList.toggle('dark-theme');
                const isDark = body.classList.contains('dark-theme');

                if (isDark) {
                    iconLight.style.display = 'none';
                    iconDark.style.display = 'inline';
                    localStorage.setItem('theme', 'dark');
                } else {
                    iconLight.style.display = 'inline';
                    iconDark.style.display = 'none';
                    localStorage.setItem('theme', 'light');
                }
            });
        });

        // animação do titulo de icons
        const cvImg = document.querySelector('.CV');
        const cvH2 = document.querySelector('.CV-H2');

        cvImg.addEventListener('mouseenter', () => {
            cvH2.classList.add('ativo');
        });
        cvImg.addEventListener('mouseleave', () => {
            cvH2.classList.remove('ativo');
        });

        const linkedinImg = document.querySelector('.linkedinLink');
        const linkedinH2 = document.querySelector('.linkedin-H2');
        linkedinImg.addEventListener('mouseenter', () => {
            linkedinH2.classList.add('ativo');
        });
        linkedinImg.addEventListener('mouseleave', () => {
            linkedinH2.classList.remove('ativo');
        });

        const githubImg = document.querySelector('.GithubLink');
        const githubH2 = document.querySelector('.github-H2');
        githubImg.addEventListener('mouseenter', () => {
            githubH2.classList.add('ativo');
        });
        githubImg.addEventListener('mouseleave', () => {
            githubH2.classList.remove('ativo');
        });
