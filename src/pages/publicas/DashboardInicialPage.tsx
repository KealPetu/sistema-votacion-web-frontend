import LandingNav from '../../components/organisms/LandingNav';
import LandingHero from '../../components/organisms/LandingHero';
import LandingServices from '../../components/organisms/LandingServices';
import LandingAbout from '../../components/organisms/LandingAbout';
import LandingFooter from '../../components/organisms/LandingFooter';
import './DashboardInicialPage.css';

export default function DashboardInicialPage() {
  return (
    <div className="landing-container">
      <LandingNav />
      <LandingHero />
      <LandingServices />
      <LandingAbout />
      <LandingFooter />
    </div>
  );
}
