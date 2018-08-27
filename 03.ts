import { times } from "lodash";

const names = ["Max", "Sarah"];

names.splice(0, 1);

names.map((index, name) => {
  return name.toUpperCase();
});

times();
