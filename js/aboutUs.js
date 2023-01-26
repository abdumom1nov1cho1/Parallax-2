export const aboutUsCard = () => {
  const aboutFreelance = [
    {
      id: 1,
      img: "./images/aboutUs/card1.jpg",
      title: "Возможность",
      info: `Работа фрилансером – это возможность заниматься любимым делом, интересным человеку.`,
    },
    {
      id: 2,
      img: "./images/aboutUs/card2.jpg",
      title: "Самостоятельность",
      info: `Можно самостоятельно планировать свой рабочий день. Вы сами устанавливаете график работы. Определяете для себя когда работать, а когда отдыхать.`,
    },
    {
      id: 3,
      img: "./images/aboutUs/card3.jpg",
      title: "Свобода",
      info: `Есть возможность работать удалённо через интернет, что очень удобно для многих. Фриланс позволяет даже работать с иностранными заказчиками.`,
    },
    {
      id: 4,
      img: "./images/aboutUs/card4.jpg",
      title: "Деньги",
      info: `Есть возможность не платить налоги. Хотя доход от фриланса согласно закону должен облагаться налогом на доходы физ. лиц, большая часть фрилансеров работают неофициально, а отследить деятельность в сети практически невозможно`,
    },
  ];

  const cardParent = document.querySelector(".about__articles");

  createAboutCard(cardParent, aboutFreelance);
};

const createAboutCard = (cardParent, aboutFreelance) => {
  const newCard = aboutFreelance
    .map(({ img, title, info }) => {
      return `
        <article class="about__article">
          <div class="about__article-header">
            <img src="${img}" alt="${title}" />
            <p class="about__article-title">${title}</p>
          </div>

          <div class="about__article-body">
            <p class="about__article-text regular-text">${info}</p>
          </div>
        </article>
      `;
    })
    .join("");

  cardParent.innerHTML = newCard;
};
