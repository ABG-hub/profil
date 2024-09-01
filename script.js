var barlist = document.querySelector("#bar");
var navitem = document.querySelector(".nav-bar");
var closest =document.querySelector(".close")

if (barlist) {
    barlist.addEventListener("click", function() {
        navitem.classList.add("app"); // Toggle the 'app' class
        console.log(navitem.classList); // Log the updated list of classes
    });
}
if (closest) {
    closest.addEventListener("click", function() {
        navitem.classList.remove("app"); // Toggle the 'app' class
        console.log(navitem.classList); // Log the updated list of classes
    });
}
// script.js

const images = [
    { src: "../Assets/Anime/a1.jpg", download: "a1.jpg" },
    { src: "../Assets/Anime/a2.jpg", download: "a2.jpg" },
    { src: "../Assets/Anime/a3.jpg", download: "a3.jpg" },
    { src: "../Assets/Anime/a4.jpg", download: "a4.jpg" },
    { src: "../Assets/Anime/a5.webp", download: "a5.webp" },
    { src: "../Assets/Anime/a6.webp", download: "a6.webp" },
    { src: "../Assets/Anime/a6.webp", download: "a7.webp" },
    { src: "../Assets/Anime/a7.webp", download: "a8.webp" },
    { src: "../Assets/Anime/a8.webp", download: "a9.webp" },
    { src: "../Assets/Anime/a9.webp", download: "a10.webp" },
    { src: "../Assets/Anime/a10.webp", download: "a11.webp" },
    { src: "../Assets/Anime/a11.webp", download: "a12.webp" },
    { src: "../Assets/Anime/a12.webp", download: "a13.webp" },
    { src: "../Assets/Anime/a13.webp", download: "a14.webp" },
    { src: "../Assets/Anime/a14.webp", download: "a15.webp" },
    { src: "../Assets/Anime/a15.webp", download: "a16.webp" },
    { src: "../Assets/Anime/a16.webp", download: "a17.webp" },
    { src: "../Assets/Anime/a17.webp", download: "a18.webp" },
    { src: "../Assets/Anime/a18.webp", download: "a19.webp" },
    { src: "../Assets/Anime/a19.webp", download: "a20.webp" },
    { src: "../Assets/Anime/a20.webp", download: "a21.webp" },
    { src: "../Assets/Anime/a21.webp", download: "a22.webp" },
    { src: "../Assets/Anime/a22.webp", download: "a23.webp" },
    { src: "../Assets/Anime/a23.webp", download: "a24.webp" },
    { src: "../Assets/Anime/a24.webp", download: "a25.webp" },
    { src: "../Assets/Anime/a25.webp", download: "a26.webp" },
    { src: "../Assets/Anime/a26.webp", download: "a27.webp" },
    { src: "../Assets/Anime/a27.webp", download: "a28.webp" },
    { src: "../Assets/Anime/a28.webp", download: "a29.webp" },
    { src: "../Assets/Anime/a29.webp", download: "a30.webp" },
    { src: "../Assets/Anime/a30.webp", download: "a31.webp" },
    { src: "../Assets/Anime/a31.webp", download: "a32.webp" },
    { src: "../Assets/Anime/a32.webp", download: "a33.webp" },
    { src: "../Assets/Anime/a33.webp", download: "a34.webp" },
    { src: "../Assets/Anime/a34.webp", download: "a35.webp" },
    { src: "../Assets/Anime/a35.webp", download: "a36.webp" },
    { src: "../Assets/Anime/a36.webp", download: "a37.webp" },
    { src: "../Assets/Anime/a37.webp", download: "a38.webp" },
    { src: "../Assets/Anime/a39.webp", download: "a39.webp" },
    { src: "../Assets/Anime/a40.webp", download: "a40.webp" },
    { src: "../Assets/Anime/a41.webp", download: "a41.webp" },
    { src: "../Assets/Anime/a42.webp", download: "a42.webp" },
    { src: "../Assets/Anime/a43.webp", download: "a43.webp" },
    { src: "../Assets/Anime/a44.webp", download: "a44.webp" },
    { src: "../Assets/Anime/a45.webp", download: "a45.webp" },
    { src: "../Assets/Anime/a46.webp", download: "a46.webp" },
    
    // Add more images as needed
];

// If you have multiple copies of the same image, you can add them like this:
for (let i = 0; i < 6; i++) { // Adjust the number as needed
    images.push({ src: "../Assets/Anime/a5.webp", download: "a5.webp" });
}

document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById('imageContainer');

    images.forEach(image => {
        // Create the container div
        const icontainer = document.createElement('div');
        icontainer.className = 'icontainer';

        // Create the image element
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = "Anime Image";
        img.className = 'images';

        // Create the download link
        const a = document.createElement('a');
        a.href = image.src;
        a.download = image.download;
        a.className = 'download-btn';

        // Create the download icon
        const icon = document.createElement('i');
        icon.className = 'fa fa-download fa-3x';
        icon.setAttribute('aria-hidden', 'true');

        // Assemble the elements
        a.appendChild(icon);
        icontainer.appendChild(img);
        icontainer.appendChild(a);
        imageContainer.appendChild(icontainer);
    });
});
