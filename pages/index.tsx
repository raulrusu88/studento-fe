import ItemCard from "../components/ItemCard";
import { ItemsContainer } from "../components/ItemsContainer";
import HomeLayout from "../components/layouts/HomeLayout/HomeLayout";

export default function Home() {
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
