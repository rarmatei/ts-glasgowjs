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

function trainPet(pet: Dog | Fish) {
  if ("isCatFriendly" in pet) {
    pet.bark();
    return;
  }
  pet.swim();
  pet.swimSpeed;
}

export default {};
