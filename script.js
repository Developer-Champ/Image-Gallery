function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function uploadImage() {
    const input = document.getElementById('imageUpload');
    const gallery = document.getElementById('gallery');

    for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = `Uploaded Image ${i + 1}`;
            img.className = 'gallery-item';
            img.onclick = function() { openModal(this); };
            gallery.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
}
