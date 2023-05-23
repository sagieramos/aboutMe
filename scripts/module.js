function popup (img, content) {
let str = `<section class="popup">
<img class="popup-cancel" src="./assets/IconCancelGray.svg" alt="cancel-icon">
<section class="card pop-card">
    <div class="card-header">
        <h2>Tonic</h2>
        <ul class="copyright">
            <li class="m-img">CANOPY</li>
            <li>Back End Dev</li>
            <li>2015</li>
        </ul>
    </div>
    <img class="m-img" src="./assets/cards/${img}" alt="Tonic">
    <article class="card-container">
        <p class="content">
            ${content}
        </p>
        <ul class="tags">
            <li><a href="#">HTML</a></li>
            <li class="d-img"><a href="#">Ruby on rails</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>     
        </ul>
        <div class="line">
            <div></div>
        </div>
        <ul class="action">
            <li>
                <a class="action-btn btn" href="#">
                    <p>See live</p>
                    <img class="action-img" src="./assets/live.svg" alt="live">
                </a>
            </li>
            <li>
                <a class="action-btn btn" href="#">
                    <p>See source</p>
                    <img class="action-img" src="./assets/social/githubBlue.svg" alt="source">
                </a>
            </li>
        </ul>
    </article>
</section>    
</section>`

return str;
}

module.exports = popup;