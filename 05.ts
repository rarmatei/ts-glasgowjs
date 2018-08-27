class Dog {
  name: string = "Sparky";
  bark(): string {
    return "woof woof!";
  }
  isCatFriendly: boolean = false;
}

class Fish {
  name: string = "Jaws";
  swim(): void {
    console.log("bloop..");
  }
  swimSpeed: number;
}

let pet: Dog | Fish;

export {};
