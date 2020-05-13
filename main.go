package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

// Useful Gin Fucntions
// gin.c = context
// gin.H = map[string]interface{} see https://gobyexample.com/json

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
	context.JSON(http.StatusOK, gin.H{
		"message": "Jokes handler not implemented yet",
	})
}

// LikeJoke increments the likes of a particular joke Item
func LikeJoke(context *gin.Context) {
	context.Header("Content-Type", "application/json")
	context.JSON(http.StatusOK, gin.H{
		"message": "LikeJoke handler not implemented yet",
	})
}
