import ItemCard from "../components/ItemCard";
import { ItemsContainer } from "../components/ItemsContainer";
import HomeLayout from "../components/layouts/HomeLayout/HomeLayout";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  console.log(useUser());
  return (
    <HomeLayout>
      <ItemsContainer>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ItemsContainer>
    </HomeLayout>
  );
}
