import { fetchImages } from './js/pixabay-api';
import { templateImages } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formEl: document.querySelector('.form'),
  loadEl: document.querySelector('.loader'),
  GalleryEl: document.querySelector('.gallery'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  animation: 250,
  widthRatio: 0.8,
  scaleImageToRatio: true,
});

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  showLoader();

  const query = e.target.elements.query.value.trim();
  if (!query) {
    showError();
    hideLoader();
    return;
  }

  fetchImages(query)
    .then(data => {
      hideLoader();
      if (data.hits.length === 0) {
        showErrorMessage();
        refs.GalleryEl.innerHTML = '';
      } else {
        refs.GalleryEl.innerHTML = '';
        renderHits(data.hits);
      }
    })
    .catch(error => {
      showError(error);
      hideLoader();
      refs.GalleryEl.innerHTML = '';
    })
    .finally(() => {
      e.target.reset();
    });
}

function renderHits(hits) {
  const markup = templateImages(hits);
  refs.GalleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function showError(error) {
  iziToast.error({
    message: error ? error.message : 'Please enter a search query.',
    position: 'topRight',
  });
}

function showErrorMessage() {
  iziToast.error({
    backgroundColor: '#EF4040',
    position: 'topRight',
    maxWidth: 500,
    message: 'Sorry, there are no images matching your search query. Please try again!',
  });
}

const showLoader = () => {
  refs.loadEl.classList.remove('hidden');
};

const hideLoader = () => {
  refs.loadEl.classList.add('hidden');
};
