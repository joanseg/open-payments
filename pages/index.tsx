import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeatureCards />
    </div>
  );
}
