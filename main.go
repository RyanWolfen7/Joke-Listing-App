package main

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

/* Useful Go
strconv = converst strings to basic data types see https://golang.org/pkg/strconv/
			- Atoi = string to int
			- Itoa = int to string
*/

/* Useful Gin Fucntions
gin.c = context
gin.H = map[string]interface{} see https://gobyexample.com/json
*/

// Joke contains information about a single Joke
type Joke struct {
	ID    int    `json:"id" binding:"required"`
	Likes int    `json:"likes"`
	Joke  string `json:"joke" binding:"required"`
}

// jokes temp joke data
var jokes = []Joke{
	Joke{1, 0, "Did you hear about the restaurant on the moon? Great food, no atmosphere."},
	Joke{2, 0, "What do you call a fake noodle? An Impasta."},
	Joke{3, 0, "How many apples grow on a tree? All of them."},
	Joke{4, 0, "Want to hear a joke about paper? Nevermind it's tearable."},
	Joke{5, 0, "I just watched a program about beavers. It was the best dam program I've ever seen."},
	Joke{6, 0, "Why did the coffee file a police report? It got mugged."},
	Joke{7, 0, "How does a penguin build it's house? Igloos it together."},
}

func main() {
	// default gin router
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./views", true)))

	// Rout group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}

	api.GET("/jokes", JokeHandler)
	api.POST("/jokes/like/:jokeID", LikeJoke)

	// Start and run Server
	router.Run(":3000")
}

// JokeHandler retieves list of available jokes
func JokeHandler(context *gin.Context) {
	context.Header("Content-Type", "application/json")
	context.JSON(http.StatusOK, jokes)
}

// LikeJoke increments the likes of a particular joke Item
func LikeJoke(context *gin.Context) {
	//confirm JOKE ID is valid
	if jokeid, err := strconv.Atoi(context.Param("jokeID")); err == nil {
		// find joke, and increment likes
		for i := 0; i < len(jokes); i++ {
			if jokes[i].ID == jokeid {
				jokes[i].Likes++
			}
		}

		// return a pointer to the updated jokes list
		context.JSON(http.StatusOK, &jokes)
	} else {
		// ID invalid
		context.AbortWithStatus(http.StatusNotFound)
	}

}
