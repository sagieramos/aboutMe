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

const buttons = document.getElementsByClassName('btn-card');
const pop = document.getElementById('cont');
const main = document.getElementById('main');
const header = document.getElementById('header');

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    pop.innerHTML = popup(projects, i);
    pop.style.display = 'block';
    main.style.display = 'none';
    header.style.display = 'none';

    const closeBtn = document.getElementById('close');

    closeBtn.addEventListener('click', () => {
      pop.style.display = 'none';
      main.style.display = 'block';
      header.style.display = 'block';
    });
  });
}
