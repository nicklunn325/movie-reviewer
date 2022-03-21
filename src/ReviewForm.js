import { useState } from "react";

function ReviewForm({ movieId, updateReviews }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    const review = { ...formData, movieId: movieId };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(review),
    };

    fetch("http://localhost:3000/reviews", config)
      .then((res) => res.json())
      .then((review) => updateReviews(review));
  }

  function handleChange(event) {
    let input = event.target.value;
    // setFormData({ title: input });
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: input };
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        name="title"
        onChange={handleChange}
        type="text"
        value={formData.title}
      />
      <br />
      <label>Content:</label>
      <input
        name="content"
        onChange={handleChange}
        type="text"
        value={formData.content}
      />
      <input type="submit" value="Leave Review" />
    </form>
  );
}

export default ReviewForm;
