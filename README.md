# movie reviewer

## user stories

- A user can view a list of movie titles and their images
- A user can click on the title/image to display more information about the movie
- When a user is viewing more info about a movie there is a list of reviews
- When a user is viewing more info about a movie there is a form to leave a review

## components

- MovieList -> Purpose of displaying MovieCards(title and image)
- MovieCard -> One rendered for each movie in the MovieList

- MovieDisplay -> Displays info for one particular movie - also renders a ReviewsList component and a ReviewForm component
- ReviewsList -> Displays a list of all reviews for a particular movie by rendering Review components
- Review -> Displays info for one particular review

- ReviewForm -> Form for creating new review
