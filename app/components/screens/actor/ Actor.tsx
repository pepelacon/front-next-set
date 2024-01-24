import { FC } from "react";
import { IActorPage } from "./actor.types";
import Catalog from "@/components/ui/catalog-movies/Catalog";

const Actor: FC<IActorPage> = ({ actor, movies }) => {
  return <Catalog movies={movies} title={actor.name} />;
};

export default Actor;
