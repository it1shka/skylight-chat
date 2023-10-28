package database

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func SetupDatabase() {
	db, err := gorm.Open(sqlite.Open("database.db"))
	if err != nil {
		log.Fatal(err)
	}
	if err := db.AutoMigrate(&Message{}); err != nil {
		log.Fatal(err)
	}
	DB = db
}
