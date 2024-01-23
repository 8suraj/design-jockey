import Faq from '../../components/faq/faq.component';
import Footer from '../../components/footer/footer.component';
import Membership from '../../components/mem/mem.component';
import MembershipBenefits from '../../components/hero/membershipBenefits.component';
import Bis from '../../components/b/b';
export default function Home() {
	return (
		<>
			<Bis />
			<MembershipBenefits />
			<Faq />
			<Membership />
			<Footer />
		</>
	);
}
