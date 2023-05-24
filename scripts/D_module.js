const generalArticle = `
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
`

const projects = [
    {
      name: 'Tonic',
      company: "CANOPY",
      stack: "Back End Dev",
      year: "2015",
      image: './assets/D_cards/D_card1.svg',
        article: generalArticle,
        tech: ["html", "CSS", "JavaScript", "Ruby", "Bootstrap"],
        liveLink: '#',
        sourceLink: 'https://github.com/sagieramos/',
    },
    {
        name: "Multi-Post Stories",
        company: "FACEBOOK",
        stack: "Full Stack Dev",
        year: "2015",
        image: './assets/D_cards/D_card2.svg',
        article: generalArticle,
        tech: ["html", "Ruby on rails", "CSS", "JavaScript"],
        liveLink: '#',
        sourceLink: 'https://github.com/sagieramos/',
      },
      {
        name: "Facebook 360",
        company: "FACEBOOK",
        stack: "Full Stack Dev",
        year: "2015",
        image: './assets/D_cards/D_card3.svg',
        article: generalArticle,
        tech: ["html", "Ruby on rails", "CSS", "JavaScript"],
        liveLink: '#',
        sourceLink: 'https://github.com/sagieramos/',
      },
      {
        name: "Uber Navigation",
        company: "Uber",
        stack: "Lead Developer",
        year: "2018",
        image: './assets/D_cards/D_card4.svg',
        article: generalArticle,
        tech: ["html", "Ruby on rails", "CSS", "JavaScript"],
        liveLink: '#',
        sourceLink: 'https://github.com/sagieramos/',
      },
  ];

function D_popup(obj, index) {
    let proj = obj[index];
    let techLi = `<ul class="tech tags">
    `;
    for (let i = 0; i < proj.tech.length; i = i + 1) {
        techLi += `<li><a href="#">${proj.tech[i]}</a></li>
        `}
    techLi += `</ul>`;
    let techUL = techLi;

    str = `
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
</section>`;

return str;
}

const buttons = document.getElementsByClassName('btn-card');
const pop = document.getElementById('D-cont');
const header = document.getElementById('header');
const card = document.getElementsByClassName('c-hide');
const about = document.getElementById('about');
const contact = document.getElementsByClassName('contactme-container');

for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      pop.innerHTML = D_popup(projects, i);
      pop.style.display = 'flex';
  
      // Store the current scroll position
    const previousScrollTop = (
        window.pageYOffset || document.documentElement.scrollTop
          || document.body.scrollTop || 0); 
      for (let j = 0; j < card.length; j += 1) {
        card[j].style.display = 'none';
      }
  
      header.style.display = 'none';
      about.style.display = 'none';
      contact[0].style.display = 'none';
  
      const closeBtn = document.getElementById('D-close');
  
      closeBtn.addEventListener('click', () => {
        pop.style.display = 'none';
        window.scrollTo(0, previousScrollTop);
        for (let j = 0; j < card.length; j += 1) {
          card[j].style.display = 'block';
        }
        header.style.display = 'block';
        about.style.display = 'block';
        contact[0].style.display = 'block';

        
      });
    });
  } 
