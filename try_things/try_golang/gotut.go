package main

import (
	"fmt"
	"math/rand"
)

func foo() {
	fmt.Println("A random int number:", rand.Intn(100))
}

func main() {
	fmt.Println("fuck world!")
	foo()
}
