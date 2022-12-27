import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
// console.log(SimpleLightbox);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGaleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGaleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// gallery.on("show.simplelightbox", function () {
//   let gallery = $(".gallery a").simpleLightbox();
//   gallery.open();
// });
