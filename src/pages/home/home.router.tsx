import Faq from '../../components/faq/faq.component';
import Footer from '../../components/footer/footer.component';
import Hero from '../../components/hero/hero.component';
import Membership from '../../components/mem/mem.component';
export default function Home() {
	return (
		<>
			<Hero />
			<Faq />
			<Membership />
			<Footer />
		</>
	);
}
