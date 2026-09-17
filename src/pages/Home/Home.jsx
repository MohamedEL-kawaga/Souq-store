import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProuductsSection from "../../components/ProuductsSection/ProuductsSection";
import useGetCategories from "../../Hooks/useGetCategories";

export default function Home() {
    const { allCategories } = useGetCategories();
    return (
        <>
            <HeroSection />
            <CategoriesSection categories={allCategories} />
            <ProuductsSection allCategories={allCategories} />
        </>
    )
}
