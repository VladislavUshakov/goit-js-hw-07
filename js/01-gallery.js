import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = makeGalleryMarkup(galleryItems);

addMarkupOfElement(gallery, galleryMarkup);

let currentModalMarkup = "";

gallery.addEventListener("click", showModal);

function makeGalleryMarkup(items = {}) {
  return items
    .map(
      ({ preview = "", original = "", description = "" }) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img
            class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
         />
         </a>
      </div>`
    )
    .join("");
}

function addMarkupOfElement(el, murkup) {
  el.innerHTML = murkup;
}

function showModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  currentModalMarkup = makeModalMarkup(event);
  currentModalMarkup.show();
}

function makeModalMarkup(event) {
  event.preventDefault();

  const link = event.target.dataset.source;
  const closeModalForEsc = (event) => {
    if (event.key === "Escape") {
      currentModalMarkup.close();
    }
  };

  return basicLightbox.create(`<img src="${link}" width="800" height="600">`, {
    onShow: () => window.addEventListener("keydown", closeModalForEsc),
    onClose: () => window.removeEventListener("keydown", closeModalForEsc),
  });
}
