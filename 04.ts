interface IDog {
  name: string;
  bark(): string;
  toy: string;
}

type IReadonlyDog = { readonly [K in keyof IDog]: IDog[K] };

const number = 100_000;
type DogToy = IDog["toy"];

const dog: IDog = {
  name: "Sparky",
  bark: () => "woof",
  toy: "ball"
};

const readonlyDog: IReadonlyDog = {
  name: "Sparky",
  bark: () => "woof",
  toy: "ball"
};

dog.name = "Rover";
readonlyDog.name = "Rover";

export default {};
