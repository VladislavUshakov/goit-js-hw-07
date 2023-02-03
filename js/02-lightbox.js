import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = makeGalleryMarkup(galleryItems);

addMarkupOfElement(gallery, galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function makeGalleryMarkup(items = {}) {
  return items
    .map(
      ({ preview = "", original = "", description = "" }) => `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    )
    .join("");
}

function addMarkupOfElement(el, murkup) {
  el.innerHTML = murkup;
}
