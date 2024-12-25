import React from "react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Alicent Hightower",
      date: "20 January 2023",
      content:
        "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.",
    },
    {
      name: "Alicent Hightower",
      date: "20 January 2023",
      content:
        "Consulted for Pregnancy. Might be bit early to confirm but yes I can see noticeable difference.",
    },
  ];

  return (
    <div className="reviews-section my-4">
      <h5 className="fw-bold">Featured Reviews (102)</h5>
      {reviews.map((review, index) => (
        <div key={index} className="card mb-3 p-3">
          <div className="card-body">
            <h6 className="card-title fw-bold">{review.name}</h6>
            <p className="card-subtitle text-muted">{review.date}</p>
            <p className="card-text mt-2">{review.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
