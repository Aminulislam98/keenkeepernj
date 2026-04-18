import Banner from "@/components/Banner";
import BannerStatusbar from "@/components/BannerStatusbar";
import Profile from "@/components/Profile";
export const metadata = {
  title: "Home - KeenKeeper",
  description:
    "Welcome to KeenKeeper, your private ledger for the people who matter. Our app helps you track and celebrate your relationship milestones, growth, and shared history. With our interactive timeline, you can visualize your journey together, cherish key moments, and gain insights into your relationship's evolution. Start building your relationship almanac today and create a lasting record of your unique bond.",
};

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BannerStatusbar></BannerStatusbar>
      <Profile></Profile>
    </div>
  );
}
