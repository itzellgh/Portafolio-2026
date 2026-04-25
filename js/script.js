function toggleGallery(id) {
  const el = document.getElementById(id);
  el.classList.toggle('show');
}

const images = document.querySelectorAll(".extra-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show");
    lightboxImg.src = img.src;
  });
});

function closeLightbox() {
  lightbox.classList.remove("show");
}

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    closeLightbox();
  }
});

const serviceID = 'service_5lwfcg8';
const templateID = 'template_zdwrqjr';
const userID = 'T5dpphxYzcgF6kUGr';

emailjs.init(userID);

document.getElementById('form-contact').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm(serviceID, templateID, this)
    .then(function() {
        alert('Mensaje enviado con éxito!');
    }, function(error) {
        alert('Error: ' + JSON.stringify(error));
    });
});
