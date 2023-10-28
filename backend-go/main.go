package main

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"it1shka.com/skylight/backend-go/api"
	"it1shka.com/skylight/backend-go/database"
)

func main() {
	database.SetupDatabase()
	app := gin.Default()
	app.Use(cors.New(cors.Config{
		AllowAllOrigins: true,
		AllowHeaders:    []string{"Content-Type"},
		MaxAge:          12 * time.Hour,
	}))
	api.SetupServer(app)
	app.Run(":3005")
}
