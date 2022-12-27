import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);
const galleryMarkup = createGaleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGaleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join("");
}

galleryContainer.addEventListener("click", (eve) => {
  eve.preventDefault();

  if (eve.target.nodeName !== "IMG") {
    return;
  }

  const urlLargeImage = eve.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
  <img src = "${urlLargeImage}">
`);

  instance.show();

  galleryContainer.addEventListener("keydown", onClose);

  function onClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
});
