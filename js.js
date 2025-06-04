const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

  let ul = document.querySelector('.gallery')

  let list = []

  for (let i = 0; i < galleryItems.length; i++) {
    list.push(i + galleryItems[i].preview)

    let li = document.createElement('li');
    li.classList.add('gallery__item');

    let liLink = document.createElement('a')
    liLink.classList.add('gallery__link');
    
    let liImg = document.createElement('img');
    liImg.classList.add('gallery__image');
    liImg.src = galleryItems[i].preview;
    liImg.dataset.source = galleryItems[i].original;
    liImg.alt = galleryItems[i].description;
    

    liLink.appendChild(liImg);
    li.appendChild(liLink);
    ul.appendChild(li);
  }

  let modal = document.querySelector('.lightbox');
  let modalImg = document.querySelector('.lightbox__image');

  ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('gallery__image')) {
      const originalImg = event.target.dataset.source;
      modal.classList.add('is-open');
      modalImg.src = originalImg;
    }
    
  });

  let buttonClose = document.querySelector('[data-action]')
  buttonClose.addEventListener('click', () => {
    modal.classList.remove('is-open');
    modalImg.src = '';
  });

  let overLay = document.querySelector('.lightbox__overlay')

  overLay.addEventListener('click', () => {
    modal.classList.remove('is-open');
    modalImg.src = '';
  });

  document.addEventListener('keydown', (event) => {
    if(event.code === 'Escape') {
      modal.classList.remove('is-open');
    modalImg.src = '';
    }
  });