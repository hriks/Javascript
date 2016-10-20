var getReview = function (movie){
    switch(movie) {
        case "Toy Story 2":
            return("Great story. Mean prospector.");
            break;
        case "Finding Nemo":
            return("Cool animation, and funny turtles.");
            break;
        case "The Lion King":
            return("Great songs.");
            break;
        default:
            console.log("I don't know!");
    }
}
