/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
const priceCardNewline = {
  FreeTrail: `
    <span>Free Trail</span>
    <span>Free Projects</span>
    <span>Enabled</span>
    <span>Suports</span>
  `,
  Basic: `
    <span>Free</span>
    <span>Free</span>
    <span>Enabled</span>
    <span>Enabled</span>
  `,
  Ultimates: `
    <span>Free</span>
    <span>Projects</span>
    <span>Enabled</span>
    <span>Suports</span>
  `,
};
const btnsPrice = document.querySelectorAll('.btn__price');
if (btnsPrice.length > 0) {
  btnsPrice.forEach((btnPrice) => {
    let isOpen = false;
    btnPrice.addEventListener('click', () => {
      const priceCard = btnPrice.parentElement.parentElement;
      let priceCardBody = null;
      let titleCard = null;
      for (let i = 0; i < priceCard.childNodes.length; i++) {
        if (priceCard.childNodes[i].className === 'price__card-body') {
          priceCardBody = priceCard.childNodes[i];
        }
        if (priceCard.childNodes[i].className === 'price__card-top') {
          const priceCardTop = priceCard.childNodes[i];
          for (let j = 0; j < priceCardTop.childNodes.length; j++) {
            if (priceCardTop.childNodes[j].className === 'price__card-title') {
              titleCard = priceCardTop.childNodes[j].textContent;
            }
          }
        }
      }
      titleCard = titleCard.replace(/ /g, '');

      if (!isOpen) {
        for (const key in priceCardNewline) {
          if (key === titleCard) {
            const ViewMore = `
            <div class="View-more">
              ${priceCardNewline[key]}
            </div>
            `;
            priceCardBody.innerHTML += ViewMore;
          }
        }
        let ViewMoreDiv = null;
        for (let i = 0; i < priceCardBody.childNodes.length; i++) {
          if (priceCardBody.childNodes[i].className === 'View-more') {
            ViewMoreDiv = priceCardBody.childNodes[i];
            break;
          }
        }
        ViewMoreDiv.style.maxHeight = `${ViewMoreDiv.scrollHeight}px`;
        isOpen = true;
        btnPrice.textContent = 'VIEW LESS';
      } else {
        let ViewMoreDiv = null;
        for (let i = 0; i < priceCardBody.childNodes.length; i++) {
          if (priceCardBody.childNodes[i].className === 'View-more') {
            ViewMoreDiv = priceCardBody.childNodes[i];
            break;
          }
        }
        ViewMoreDiv.style.maxHeight = '';
        setTimeout(() => { ViewMoreDiv.remove(); }, 1000);
        isOpen = false;
        btnPrice.textContent = 'VIEW ALL';
      }
    });
  });
}
