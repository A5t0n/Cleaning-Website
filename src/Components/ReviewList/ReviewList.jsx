import "./ReviewList.css";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "They left my house spotless! Highly recommend.",
  },
  {
    id: 2,
    name: "David R.",
    rating: 4,
    comment: "Very professional and efficient service.",
  },
  {
    id: 3,
    name: "Lisa K.",
    rating: 5,
    comment: "Great experience from start to finish!",
  },
  {
    id: 4,
    name: "John D.",
    rating: 5,
    comment: "Prompt, reliable, and friendly staff.",
  },
  {
    id: 5,
    name: "Emily W.",
    rating: 4,
    comment: "My apartment has never been cleaner.",
  },
  {
    id: 6,
    name: "Michael S.",
    rating: 5,
    comment: "They exceeded my expectations in every way.",
  },
  {
    id: 7,
    name: "Rachel T.",
    rating: 5,
    comment: "Excellent cleaning service. Highly recommended.",
  },
  {
    id: 8,
    name: "Tom G.",
    rating: 4,
    comment: "Professional and thorough job every time.",
  },
  {
    id: 9,
    name: "Olivia B.",
    rating: 5,
    comment: "Super friendly team and great results.",
  },
  {
    id: 10,
    name: "Alex N.",
    rating: 5,
    comment: "Very pleased with the service. Will use again.",
  },
];

function ReviewList() {
  return (
    <section className="reviews-section">
      <h2>What Our Clients Say</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-rating">
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </div>
            <p className="review-comment">"{review.comment}"</p>
            <p className="review-name">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewList;
