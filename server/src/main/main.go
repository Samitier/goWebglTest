package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type Word struct {
	ID    int    `json:"id"`
	Word  string `json:"word"`
	Font  string `json:"font"`
	Color string `json:"color"`
}

var port = 8080

func main() {
	r := mux.NewRouter()
	subrouter := r.PathPrefix("/api").Subrouter()
	subrouter.HandleFunc("/", indexHandler)
	subrouter.HandleFunc("/words", wordsHandler)
	subrouter.HandleFunc("/words/{id}", wordHandler)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("public")))
	log.Fatal(http.ListenAndServe(":"+strconv.Itoa(port), r))
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to an API made in GO")
}

func wordsHandler(w http.ResponseWriter, r *http.Request) {
	words := []Word{
		Word{ID: 1, Word: "Hello", Font: "Roboto", Color: "#333333"},
		Word{ID: 2, Word: "World", Font: "Roboto", Color: "#333333"},
		Word{ID: 3, Word: "I'm", Font: "Roboto", Color: "#333333"},
		Word{ID: 4, Word: "Blai", Font: "Roboto", Color: "#333333"},
	}
	json.NewEncoder(w).Encode(words)
}

func wordHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])
	words := []Word{
		Word{ID: 1, Word: "Hello", Font: "Roboto", Color: "#333333"},
		Word{ID: 2, Word: "World", Font: "Roboto", Color: "#333333"},
		Word{ID: 3, Word: "I'm", Font: "Roboto", Color: "#333333"},
		Word{ID: 4, Word: "Blai", Font: "Roboto", Color: "#333333"},
	}
	json.NewEncoder(w).Encode(words[id-1])
}
