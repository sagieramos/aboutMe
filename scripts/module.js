const generalArticle = `
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text 
ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it to make a type specimen book. It has survived not 
only five centuries, but also the leap into electronic typesetting, 
remaining essent
`;

const projects = [
  {
    name: 'Tonic',
    article: generalArticle,
    image: './assets/cards/card1.svg',
    liveLink: '#',
    sourceLink: 'https://github.com/sagieramos/',
  },
  {
    name: 'Multi-Post<br>Stories',
    article: generalArticle,
    image: './assets/cards/card2.svg',
    liveLink: '#',
    sourceLink: 'https://github.com/sagieramos/',
  },
  {
    name: 'Tonic',
    article: generalArticle,
    image: './assets/cards/card3.svg',
    liveLink: '#',
    sourceLink: 'https://github.com/sagieramos/',
  },
  {
    name: 'Multi-Post<br>Stories',
    article: generalArticle,
    image: './assets/cards/card4.svg',
    liveLink: '#',
    sourceLink: 'https://github.com/sagieramos/',
  },
];

function popup(project, index) {
  const proj = project[index];
  const str = `
    <section class="popup">
    <img class="popup-cancel" id="close" src="./assets/IconCancelGray.svg" alt="cancel-icon">
    <section class="card pop-card">
        <div class="card-header">
            <h2>${proj.name}</h2>
            <ul class="copyright">
                <li class="m-img">CANOPY</li>
                <li>Back End Dev</li>
                <li>2015</li>
            </ul>
        </div>
        <img class="m-img" src="${proj.image}" alt="Tonic">
        <article class="card-container">
            <p class="content">
                ${proj.article}
            </p>
            <ul class="tags">
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>     
            </ul>
            <div class="line">
                <div></div>
            </div>
            <ul class="action">
                <li>
                    <a class="action-btn btn" href="${proj.liveLink}">
                        <p>See live</p>
                        <img class="action-img" src="./assets/live.svg" alt="live">
                    </a>
                </li>
                <li>
                    <a class="action-btn btn" href="${proj.sourceLink}">
                        <p>See source</p>
                        <img class="action-img" src="./assets/social/githubBlue.svg" alt="source">
                    </a>
                </li>
            </ul>
        </article>
    </section>    
    </section>
`;

  return str;
}

const DgeneralArticle = `
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text 
ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it 1960s. Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. 
<br> <br>
Lorem Ipsum has been the industry's standard dummy text ever since 
the 1500s, when an unknown printer took a galley of type and scrambled 
it 1960s with the releorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum han printer took a galley of type 
and scrambled it 1960s with the releawn printer took a galley of type 
and scrambled it 1960s.
`;

const Dprojects = [
  {
    name: 'Tonic',
    company: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: './assets/D_cards/D_card1.svg',
    article: DgeneralArticle,
    tech: ['html', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: '#',
    sourceLink: 'https://github.com/sagieramos/',
  },
  {
    name: 'Multi-Post Stories',
    company: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
    image: './assets/D_cards/D_card2.svg',
    article: DgeneralArticle,
    tech: ['html', 'Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: 'https://github.com/sagieramos/',
  },
  {
    name: 'Facebook 360',
    company: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
    image: './assets/D_cards/D_card3.svg',
    article: DgeneralArticle,
    tech: ['html', 'Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: 'https://github.com/sagieramos/',
  },
  {
    name: 'Uber Navigation',
    company: 'Uber',
    stack: 'Lead Developer',
    year: '2018',
    image: './assets/D_cards/D_card4.svg',
    article: DgeneralArticle,
    tech: ['html', 'Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: 'https://github.com/sagieramos/',
  },
];

function Dpopup(obj, index) {
  const proj = obj[index];
  let techLi = `<ul class="tech tags">
    `;
  for (let i = 0; i < proj.tech.length; i += 1) {
    techLi += `<li><a href="#">${proj.tech[i]}</a></li>
        `;
  }
  techLi += '</ul>';
  const techUL = techLi;

  const str = `
    <section class="D-pop-card">
    <section class="D-popup">
   
        <div class="D-X">
        <div class="card-header">
            <h2>${proj.name}</h2>
            <ul class="copyright">
                <li class="d-img">${proj.company}</li>
                <li>${proj.stack}</li>
                <li>${proj.year}</li>
            </ul>
        </div> 
        <img class="D-popup-cancel" id="D-close" src="./assets/IconCancelGray.svg" alt="cancel-icon">
        </div>
    <img class="D-popup-img" src="${proj.image}" alt="Tonic" class="d-img">
    <section class="D-h3and">
        <article class="article">${proj.article}</article>
        <div class="TnA">
            ${techUL}
            <div class="line">
                <div></div>
            </div>
            <ul class="D-action">
                <li>
                    <a class="action-btn btn" href="${proj.liveLink}">
                        <p>See live</p>
                        <img class="action-img" src="./assets/live.svg" alt="live">
                    </a>
                </li>
                <li>
                    <a class="action-btn btn" href="${proj.sourceLink}">
                        <p>See source</p>
                        <img class="action-img" src="./assets/social/githubBlue.svg" alt="source">
                    </a>
                </li>
            </ul>

        </div>
    </section>
    </section>
</section>`;

  return str;
}

const buttons = document.getElementsByClassName('btn-card');
const pop = document.getElementById('cont');
const Dpop = document.getElementById('D-cont');
const header = document.getElementById('header');
const main = document.getElementById('main');

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    pop.innerHTML = popup(projects, i);
    pop.style.display = 'flex';

    // Store the current scroll position
    const previousScrollTop = (
      window.pageYOffset || document.documentElement.scrollTop
        || document.body.scrollTop || 0);

    main.style.display = 'none';
    header.style.display = 'none';

    const closeBtn = document.getElementById('close');

    closeBtn.addEventListener('click', () => {
      pop.style.display = 'none';
      window.scrollTo(0, previousScrollTop);
      main.style.display = 'block';
      header.style.display = 'block';
      Dpop.style.display = 'none';
    });
  });
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    Dpop.innerHTML = Dpopup(Dprojects, i);
    Dpop.style.display = 'flex';
    main.style.display = 'none';
    header.style.display = 'none';

    const closeBtn = document.getElementById('D-close');

    closeBtn.addEventListener('click', () => {
      Dpop.style.display = 'none';
      main.style.display = 'block';
      header.style.display = 'block';
      pop.style.display = 'none';
    });
  });
}
