package database

import (
	"fmt"

	"gorm.io/gorm"
)

type Message struct {
	gorm.Model
	AuthorName string  `json:"authorName"`
	AuthorId   uint    `json:"authorId"`
	Lng        float64 `json:"lng" gorm:"index" column:"lng"`
	Lat        float64 `json:"lat" gorm:"index" column:"lat"`
	Content    string  `json:"content"`
}

func (Message) TableName() string {
	return "messages"
}

type WeightedMessage struct {
	Message
	Distance float64
}

func GetMessages(lat, long float64) []WeightedMessage {
	var messages []WeightedMessage

	err := DB.
		Select("*").
		Where("lat BETWEEN ? AND ?", lat-0.01, lat+0.01).
		Where("lng BETWEEN ? AND ?", long-0.01, long+0.01).
		Order("created_at desc").
		Limit(100).
		Find(&messages).
		Error

	if err != nil {
		fmt.Println(err)
		return nil
	}

	return messages
}

func CreateMessage(authorName string, authorId uint, lat, long float64, content string) Message {
	message := Message{
		AuthorName: authorName,
		AuthorId:   authorId,
		Lng:        long,
		Lat:        lat,
		Content:    content,
	}
	DB.Create(&message)
	return message
}
