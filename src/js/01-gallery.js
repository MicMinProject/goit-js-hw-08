import { galleryItems } from "./gallery-items";
import 'simplelightbox/dist/simple-lightbox.min.css';
import _default from "../../node_modules/simplelightbox/dist/simple-lightbox.js";

const gallery=document.querySelector('.gallery');

for(const item of galleryItems) {
  const setGallery=`<a href=${item.original}><img src=${item.preview} alt=${item.description}></a>`
  gallery.insertAdjacentHTML("afterbegin",setGallery);
}

const displayImage=e=>{
e.preventDefault();
const image=e.target;
}

var lightbox = new SimpleLightbox('.gallery a');
gallery.addEventListener('click',displayImage);