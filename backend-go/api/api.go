package api

import "github.com/gin-gonic/gin"

func SetupServer(server *gin.Engine) {
	server.GET("/get-messages", getMessages)
	server.POST("/new-message", newMessage)
	server.GET("/get-id", getIdentifier)
}
