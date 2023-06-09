const maxWidth = 746;
const minWidth = 747;

const MgeneralArticle = `
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text 
ever since the 1500s, when an unknown printer took a galley of type and 
scrambled it to make a type specimen book. It has survived not only five 
centuries, but also the leap into electronic typesetting, remaining essent
`

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

const introduction = `A daily selection of privately personalized reads; 
no accounts or sign-ups required.
`
const pageData = 
  [
    {
      name: 'Energy Monitor & Control',
      company: 'Imuwahen',
      stack: 'Electronics',
      year: '2020',
      image: {
        mobile: './imuwahen_logo.png',
        desktop: './imuwahen_logo.png' 
      },
      intro: introduction,
      article: {
        desktop: DgeneralArticle,
        mobile: MgeneralArticle
      },
      tech: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      liveLink: '#',
      sourceLink: 'https://github.com/sagieramos/'
    },
    {
      name: 'Tonic',
      company: 'CANOPY',
      stack: 'Back End Dev',
      year: '2015',
      image: {
        mobile: './assets/cards/card1.svg',
        desktop: './assets/D_cards/D_card1.svg' 
      },
      intro: introduction,
      article: {
        desktop: DgeneralArticle,
        mobile: MgeneralArticle
      },
      tech: ['html', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
      liveLink: '#',
      sourceLink: 'https://github.com/sagieramos/'
    },
    {
      name: 'Multi-Post Stories',
      company: 'FACEBOOK',
      stack: 'Full Stack Dev',
      year: '2015',
      image: {
        mobile: './assets/cards/card2.svg',
        desktop: './assets/D_cards/D_card2.svg' 
      },
      intro: introduction,
      article: {
        desktop: DgeneralArticle,
        mobile: MgeneralArticle
      },
      tech: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      liveLink: '#',
      sourceLink: 'https://github.com/sagieramos/'
    },
    {
      name: 'Facebook 360',
      company: 'FACEBOOK',
      stack: 'Full Stack Dev',
      year: '2015',
      image: {
        mobile: './assets/cards/card3.svg',
        desktop: './assets/D_cards/D_card3.svg' 
      },
      intro: introduction,
      article: {
        desktop: DgeneralArticle,
        mobile: MgeneralArticle
      },
      tech: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      liveLink: '#',
      sourceLink: 'https://github.com/sagieramos/'
    },
    {
      name: 'Uber Navigation',
      company: 'Uber',
      stack: 'Lead Developer',
      year: '2018',
      image: {
        mobile: './assets/cards/card4.svg',
        desktop: './assets/D_cards/D_card4.svg' 
      },
      intro: introduction,
      article: {
        mobile: DgeneralArticle,
        desktop: MgeneralArticle
      },
      tech: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      liveLink: '#',
      sourceLink: 'https://github.com/sagieramos/'
    },
    {
      name: 'Facebook 360',
      company: 'FACEBOOK',
      stack: 'Full Stack Dev',
      year: '2015',
      image: {
        mobile: './assets/cards/card3.svg',
        desktop: './assets/D_cards/D_card3.svg' 
      },
      intro: introduction,
      article: {
        desktop: DgeneralArticle,
        mobile: MgeneralArticle
      },
      tech: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      liveLink: '#',
      sourceLink: 'https://github.com/sagieramos/'
    }
  ];

function viewPage(data) {
  let techList = "";
  let str = "";

  for (let i = 0; i < data.length; i += 1) {
    techList = '';
    for (let j = 0; j < data[i].tech.length; j += 1) {
      techList += `<li><a href="#">${data[i].tech[j]}</a></li>`;
    }

    str += `
    <section class="card c-hide">
        <img class="m-img" src=${data[i].image.mobile} alt="Tonic">
        <img class="d-img" src=${data[i].image.desktop} alt="Tonic" class="d-img">
        <div class="card-container">
            <div class="card-header">
                <h2>${data[i].name}</h2>
                <ul class="copyright">
                    <li>${data[i].company}</li>
                    <li>${data[i].stack}</li>
                    <li>${data[i].year}</li>
                </ul>
            </div>   
            <p>${data[i].intro}</p>
            <ul class="tags">
                ${techList}
            </ul>
            <div class="btn btn-card" id="card-pj1">See Project</div>
    </section>`;
  }

  return str;
}

function mobilePopUp(page) {
  let proj = page;
  let techList = "";

  for (let i = 0; i < proj.tech.length; i += 1)
    techList += `<li><a href="#">${proj.tech[i]}</a></li>`;

  let str = `
    <section class="popup">
    <img class="popup-cancel" id="close" src="./assets/IconCancelGray.svg" alt="cancel-icon">
    <section class="card pop-card">
        <div class="card-header">
            <h2>${proj.name}</h2>
            <ul class="copyright">
                <li class="m-img">${proj.company}</li>
                <li>${proj.stack}</li>
                <li>${proj.year}</li>
            </ul>
        </div>
        <img class="m-img" src="${proj.image.mobile}" alt="Tonic">
        <article class="card-container">
            <p class="content">
                ${proj.article.mobile}
            </p>
            <ul class="tags">
                ${techList} 
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

function desktopPopUp(page) {
  let proj = page;
  let techList = '';
  for (let i = 0; i < proj.tech.length; i += 1)
    techList += `<li><a href="#">${proj.tech[i]}</a></li>`;

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
    <img class="D-popup-img" src="${proj.image.desktop}" alt="Tonic" class="d-img">
    <section class="D-h3and">
        <p class="article">${proj.article.desktop}</p>
        <div class="TnA">
          <ul class="tech tags">
            ${techList}
            </ul>
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
const mobileSection = document.getElementById('cont');
const desktopSection = document.getElementById('D-cont');
const header = document.getElementById('header');
const main = document.getElementById('main');
const cards = document.getElementById('cards');

// button cancel event checker. 
let eventChecker = 0;

cards.innerHTML = viewPage(pageData);


for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    const previousScrollTop = (window.pageYOffset
    || document.documentElement.scrollTop || document.body.scrollTop || 0
    );
    mobileSection.innerHTML = mobilePopUp(pageData[i]);

    mobileSection.style.display = 'flex';
    main.style.display = 'none';
    header.style.display = 'none';
    eventChecker = 0;

    window.scrollTo(0, 0);

    const closeBtn = document.getElementById('close');

    closeBtn.addEventListener('click', () => {
      eventChecker = 1;
      mobileSection.style.display = 'none';
      main.style.display = 'block';
      header.style.display = 'block';
      desktopSection.style.display = 'none';
      window.scrollTo(0, previousScrollTop);
    });
  });
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    const previousScroll = (window.pageYOffset
      || document.documentElement.scrollTop || document.body.scrollTop || 0
      );
    desktopSection.innerHTML = desktopPopUp(pageData[i]);
    if (window.innerWidth > minWidth) desktopSection.style.display = 'flex';
    main.style.display = 'none';
    header.style.display = 'none';
    eventChecker = 0;

    const closeBtnD = document.getElementById('D-close');

    closeBtnD.addEventListener('click', () => {
      eventChecker = 1;
      desktopSection.style.display = 'none';
      main.style.display = 'block';
      header.style.display = 'block';
      mobileSection.style.display = 'none';
      window.scrollTo(0, previousScroll);
    });
  });
}

function showAppropriateSection() {
  if (eventChecker === 1) {
    void(0);
  }
  else if (window.innerWidth < maxWidth) {
    // Show mobile section
    mobileSection.style.display = 'block';
    // Hide desktop section
    desktopSection.style.display = 'none';
  } else {
    // Hide mobile section
    mobileSection.style.display = 'none';
    // Show desktop section
    if (eventChecker !== 2)
    desktopSection.style.display = 'block';
  }
}

// Call the function initially to show the appropriate section on page load
showAppropriateSection();

// Listen for window resize events and update the section visibility accordingly
window.addEventListener('resize', showAppropriateSection);
