// Names for visible reviews
const visibleReviews = [
  { name: "Chethan Kumar", stars: 5, text: "Amazing design work! Every detail was perfect. Highly recommend Aura Interiors." },
  { name: "Sandeep", stars: 4, text: "Professional and creative team. Loved the final look of my space." },
  { name: "Priya", stars: 5, text: "They truly understand your vision and bring it to life beautifully!" },
  { name: "Rahul", stars: 4, text: "Quality work and timely completion. Very happy with the results." },
  { name: "Bhagya", stars: 5, text: "Aura Interiors made my home look stunning and cozy at the same time." }
];

// Generate stars for rating
function getStars(count) {
  let stars = "★★★★★".slice(0, count);
  let empty = "☆☆☆☆☆".slice(0, 5 - count);
  return stars + empty;
}

// Inject visible reviews
const reviewsContainer = document.getElementById("reviews-container");
if (reviewsContainer) {
  visibleReviews.forEach(review => {
    const card = document.createElement("div");
    card.classList.add("review-card");
    card.innerHTML = `
      <h4>${review.name}</h4>
      <div class="review-stars">${getStars(review.stars)}</div>
      <p>${review.text}</p>
    `;
    reviewsContainer.appendChild(card);
  });
}
