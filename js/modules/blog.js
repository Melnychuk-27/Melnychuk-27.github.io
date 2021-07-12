const blogContent = {
  lots: [
    {
      srcimgM: 'img/blog/seo.jpg',
      title: 'SEO Quis Vestibulum',
      srcicon1: 'icons/blog/calendar.png',
      postdata: '14.07.2020',
      srcicon2: 'icons/blog/file.png',
      postFah: 'Development',
      descr: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
    {
      srcimgM: 'img/blog/macbook.jpg',
      title: 'SEO Quis Vestibulum',
      srcicon1: 'icons/blog/calendar.png',
      postdata: '14.07.2020',
      srcicon2: 'icons/blog/file.png',
      postFah: 'Development',
      descr: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
    {
      srcimgM: 'img/blog/imac.jpg',
      title: 'SEO Quis Vestibulum',
      srcicon1: 'icons/blog/calendar.png',
      postdata: '14.07.2020',
      srcicon2: 'icons/blog/file.png',
      postFah: 'Development',
      descr: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
    {
      srcimgM: 'img/blog/seo.jpg',
      title: 'SEO Quis Vestibulum',
      srcicon1: 'icons/blog/calendar.png',
      postdata: '14.07.2020',
      srcicon2: 'icons/blog/file.png',
      postFah: 'Development',
      descr: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
    {
      srcimgM: 'img/blog/macbook.jpg',
      title: 'SEO Quis Vestibulum',
      srcicon1: 'icons/blog/calendar.png',
      postdata: '14.07.2020',
      srcicon2: 'icons/blog/file.png',
      postFah: 'Development',
      descr: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
    {
      srcimgM: 'img/blog/imac.jpg',
      title: 'SEO Quis Vestibulum',
      srcicon1: 'icons/blog/calendar.png',
      postdata: '14.07.2020',
      srcicon2: 'icons/blog/file.png',
      postFah: 'Development',
      descr: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
  ],
};
const blogItems = document.querySelector('.blog__items');
const btnBlog = document.querySelector('.btn__blog-bottom');
let i = 0;
let index = 1;
let maxItemCard = 0;

// NEW web-component
function createBlogItem(i, newBlogi) {
  countItem = false;
  console.log(countItem);
  const template = document.querySelector('#Blog-Template');
  const clone = document.importNode(template.content, true);

  clone.querySelector('.blog__img img').setAttribute('src', blogContent.lots[i].srcimgM);
  clone.querySelector('.blog__item-title a').textContent = blogContent.lots[i].title;
  clone.querySelector('.blog__data img').setAttribute('src', blogContent.lots[i].srcicon1);
  clone.querySelector('.blog__data').textContent = blogContent.lots[i].postdata;
  clone.querySelector('.blog__file img').setAttribute('src', blogContent.lots[i].srcicon2);
  clone.querySelector('.blog__file').textContent = blogContent.lots[i].postFah;
  clone.querySelector('.blog__item-descr').textContent = blogContent.lots[i].descr;

  newBlogi.appendChild(clone);
}
function removeBlogItem(blogItems) {
  const blog = document.querySelectorAll('.new-blog__i');
  const senctionBlog = document.querySelector('#blog');
  senctionBlog.scrollIntoView({ behavior: 'smooth' });
  blog.forEach((element) => {
    element.style.maxHeight = '';
  });
  setTimeout(() => {
    for (let h = 0; h < 2; h++) {
      blogItems.lastChild.remove();
    }
  }, 1000);
}
function addBlogItem(blogItems, newBlogi, maxItemCard) {
  blogItems.append(newBlogi);
  for (; i < maxItemCard; i++) {
    createBlogItem(i, newBlogi);
  }
  newBlogi.style.maxHeight = `${newBlogi.scrollHeight}px`;
}
function viewMoreBlog() {
  const newBlogi = document.createElement('div');
  newBlogi.className = 'new-blog__i';
  if (maxItemCard < (blogContent.lots.length)) {
    maxItemCard = index * 3;
    index++;
    addBlogItem(blogItems, newBlogi, maxItemCard);
  } else {
    removeBlogItem(blogItems);
    i = 0;
    index = 1;
    maxItemCard = 0;
  }
  if (maxItemCard >= (blogContent.lots.length)) { btnBlog.textContent = 'View less'; } else { btnBlog.textContent = 'More view'; }
}
btnBlog.addEventListener('click', viewMoreBlog);

//

