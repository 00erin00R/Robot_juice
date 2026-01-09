// reviews.js

const reviewsContainer = document.getElementById("reviews-list");

// Example API URL (replace with your real one if required)
const API_URL = "https://mocki.io/v1/8f5a8f3a-5e4c-4a9a-9c3f-0c8e1d3f4c5b";

// Load reviews when page loads
fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(reviews => {
        renderReviews(reviews);
    })
    .catch(error => {
        reviewsContainer.innerHTML =
            "<p>Unable to load reviews at this time.</p>";
        console.error(error);
    });

// Render reviews into the page
function renderReviews(reviews) {
    reviewsContainer.innerHTML = "";

    reviews.forEach(review => {
        const reviewEl = document.createElement("article");
        reviewEl.classList.add("review");

        reviewEl.innerHTML = `
            <h4>${review.name}</h4>
            <p class="rating">Rating: ${review.rating} / 5</p>
            <p>${review.comment}</p>
        `;

        reviewsContainer.appendChild(reviewEl);
    });
}
