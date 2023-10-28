package api

import (
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"it1shka.com/skylight/backend-go/database"
)

func getMessages(ctx *gin.Context) {
	lng, err := strconv.ParseFloat(ctx.Query("lng"), 64)
	if err != nil {
		ctx.JSON(400, gin.H{"error": "invalid longitude"})
		return
	}
	lat, err := strconv.ParseFloat(ctx.Query("lat"), 64)
	if err != nil {
		ctx.JSON(400, gin.H{"error": "invalid latitude"})
		return
	}
	messages := database.GetMessages(lat, lng)
	ctx.JSON(200, messages)

}

func newMessage(ctx *gin.Context) {
	var data struct {
		AuthorName string  `json:"authorName"`
		AuthorId   uint    `json:"authorId"`
		Lat        float64 `json:"lat"`
		Lng        float64 `json:"lng"`
		Content    string  `json:"content"`
	}
	if err := ctx.BindJSON(&data); err != nil {
		ctx.JSON(400, gin.H{"error": "invalid json"})
		return
	}
	message := database.CreateMessage(data.AuthorName, data.AuthorId, data.Lat, data.Lng, data.Content)
	ctx.JSON(200, message)
}

func getIdentifier(ctx *gin.Context) {
	ctx.JSON(200, gin.H{"id": time.Now().UnixNano()})
}
