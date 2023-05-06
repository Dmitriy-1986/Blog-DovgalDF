/* Scroll Down */
const mainContent = document.querySelector('#mainContent');
const btnDown = document.querySelector('#btnDown');

function handleButtonClick() {
    mainContent.scrollIntoView({ block: "start", behavior: "smooth" });
}

btnDown.addEventListener('click', handleButtonClick);

/* Blog Name */
document.title = data.blogName;
const blogName = document.querySelectorAll('.blog-name');
for (let blog of blogName) blog.innerHTML = data.blogName;

/* Nav Menu */
let menuNavHome, menuNavBlog, menuNavAbout;
menuNavHome = document.querySelector('#menuNavHome');
menuNavHome.innerHTML = data.navMenu.nameNavMenu.homePage;
menuNavHome.href =  data.navMenu.linkNavMenu.homePage;

menuNavBlog = document.querySelector('#menuNavBlog');
menuNavHome.innerHTML = data.navMenu.nameNavMenu.blogPage;
menuNavHome.href =  data.navMenu.linkNavMenu.blogPage;

menuNavAbout = document.querySelector('#menuNavAbout');
menuNavHome.innerHTML = data.navMenu.nameNavMenu.aboutPage;
menuNavHome.href =  data.navMenu.linkNavMenu.aboutPage;

/* Header Title */
const headerTitle = document.querySelector('.header-title');
headerTitle.innerHTML = data.headerTitle;

/* Fresh Article */
const freshTitle = document.querySelector('#freshTitle');
freshTitle.innerHTML = data.freshArticle;

/* Cards Fresh Article */
const contentCards = document.querySelector('#contentCards');

const numLastObjects = 4;
for (let i = data.cardsArticle.length - numLastObjects; i < data.cardsArticle.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML =    `<div>
                            <a href="${data.cardsArticle[i].linkPageInCard}">
                                <img src="${data.cardsArticle[i].linkImgCard}" alt="${data.cardsArticle[i].titleCard}">
                            </a>
                        </div>
                        <div class="desc">
                            <h4><a href="${data.cardsArticle[i].linkPageInCard}">${data.cardsArticle[i].titleCard}</a></h4>
                            <p>${data.cardsArticle[i].descriptionCard.slice(0, 60 - 3)}<a href="${data.cardsArticle[i].linkPageInCard}">[...]</a></p>
                        </div>`;
    contentCards.append(card);
}

/* Blog Article */
const blogArticle = document.querySelector('#blogArticle');
blogArticle.innerHTML = data.blogArticle;

/* Description Blog Article */
const descriptionBlogArticle = document.querySelector('#descriptionBlogArticle');
descriptionBlogArticle.innerHTML = data.blogArticleDescription;

/* FOOTER */
const fullYear = document.querySelector('#fullYear').innerHTML = new Date().getFullYear();
