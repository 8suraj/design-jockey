import {
	useState,
	useEffect,
	useRef,
	// FunctionComponent,
} from 'react';
import branding1 from '../../assets/product/branding.png';
// import a from '../../assets/product/br.png'
import './work.css';

import w1 from '../../assets/work/293poster.jpg';
import w2 from '../../assets/work/294poster.jpg';
import w3 from '../../assets/work/295poster.jpg';
import w4 from '../../assets/work/296poster.jpg';
import w5 from '../../assets/work/297poster.jpg';
import w6 from '../../assets/work/299poster.jpg';
import w7 from '../../assets/work/301poster.jpg';
import w8 from '../../assets/work/302poster.jpg';
import w9 from '../../assets/work/304poster.jpg';
import w10 from '../../assets/work/305poster.jpg';
import w11 from '../../assets/work/306poster.jpg';
import w12 from '../../assets/work/307poster.jpg';
import w13 from '../../assets/work/308poster.jpg';
import w14 from '../../assets/work/310poster.jpg';
import w15 from '../../assets/work/311poster.jpg';
import w16 from '../../assets/work/312poster.jpg';
import w17 from '../../assets/work/313poster.jpg';
import w18 from '../../assets/work/314poster.jpg';
import w19 from '../../assets/work/316poster.jpg';
import w20 from '../../assets/work/317poster.jpg';
import w21 from '../../assets/work/318poster.jpg';
import w22 from '../../assets/work/319poster.jpg';
import w23 from '../../assets/work/320poster.jpg';
import w24 from '../../assets/work/321poster.jpg';
import w25 from '../../assets/work/322poster.png';
import w26 from '../../assets/work/323poster.png';
import w27 from '../../assets/work/325poster.png';
import w28 from '../../assets/work/326poster.png';
import w29 from '../../assets/work/327poster.png';
import w30 from '../../assets/work/328poster.png';
import w31 from '../../assets/work/329poster.png';
import w32 from '../../assets/work/330poster.png';
import w33 from '../../assets/work/331poster.png';
import w34 from '../../assets/work/332poster.png';
import w35 from '../../assets/work/333poster.png';
import w36 from '../../assets/work/334poster.png';
import w37 from '../../assets/work/335poster.png';
import w38 from '../../assets/work/337poster.png';
import w39 from '../../assets/work/338poster.png';
import w40 from '../../assets/work/339poster.png';
import w41 from '../../assets/work/340poster.png';
import w42 from '../../assets/work/341poster.png';
import w43 from '../../assets/work/342poster.png';
import w44 from '../../assets/work/343poster.png';
import w45 from '../../assets/work/344poster.png';
import w46 from '../../assets/work/345poster.png';
import w47 from '../../assets/work/346poster.png';
import w48 from '../../assets/work/347poster.png';
import w49 from '../../assets/work/348poster.png';
import w50 from '../../assets/work/349poster.png';
import w51 from '../../assets/work/351poster.png';
import w52 from '../../assets/work/353poster.png';
import w53 from '../../assets/work/353poster.png';
import w54 from '../../assets/work/354poster.png';
import w55 from '../../assets/work/355poster.png';
import w56 from '../../assets/work/360poster.png';
import w57 from '../../assets/work/361poster.png';
import w58 from '../../assets/work/362poster.png';
import w59 from '../../assets/work/363poster.png';
import w60 from '../../assets/work/364poster.png';
import w61 from '../../assets/work/365poster.png';

const a = [
	branding1,
	w1,
	w2,
	w3,
	w4,
	w5,
	w6,
	w7,
	w46,
	w8,
	w9,
	w10,
	w11,
	w12,
	w13,
	w14,
	w15,
	w16,
	w17,
	w18,
	w19,
	w20,
	w21,
	w22,
	w23,
	w24,
	w25,
	w26,
	w27,
	w28,
	w29,
	w30,
	w31,
	w32,
	w33,
	w34,
	w35,
	w36,
	w37,
	w38,
	w39,
	w40,
	w41,
	w42,
	w43,
	w44,
	w45,
	w47,
	w48,
	w49,
	w50,
	w51,
	w52,
	w53,
	w54,
	w55,
	w56,
	w57,
	w58,
	w59,
	w60,
	w61,
];
export default function Work() {
	const observerTarget = useRef(null);
	// const [imageActive, setImageActive] = useState(null);
	const [imageCount] = useState(a.length);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 100,
				behavior: 'smooth',
			});
		}, 200);
		const rows = document.getElementsByClassName(
			'gallery__items'
		) as HTMLCollectionOf<HTMLDivElement>;
		let ins = 0;
		Array.from(rows)?.forEach((element: HTMLDivElement) => {
			const q = a.slice(ins, ins + 4);
			ins += 4;
			q.forEach((e: string) => {
				const figureElement =
					document.createElement('figure');
				figureElement.className =
					'gallery__item gallery__item--14';
				const imgElement = document.createElement('img');
				imgElement.src = e;
				imgElement.alt = 'Gallery image 14';
				imgElement.setAttribute('data-id', e);
				imgElement.className = 'gallery__img';
				figureElement.appendChild(imgElement);
				element.appendChild(figureElement);
			});
		});
		localStorage.setItem('k', ins.toString());
	}, []);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (
					entries[0].isIntersecting &&
					+localStorage.getItem('k')! < imageCount
				) {
					const rows = document.getElementsByClassName(
						'gallery__items'
					) as HTMLCollectionOf<HTMLDivElement>;
					let ins = +localStorage.getItem('k')!;
					Array.from(rows)?.forEach(
						(element: HTMLDivElement) => {
							const q = a.slice(ins, ins + 2);
							ins += 2;
							q.forEach((e: string) => {
								const figureElement =
									document.createElement('figure');
								figureElement.className =
									'gallery__item gallery__item--14';
								const imgElement =
									document.createElement('img');
								imgElement.src = e;
								imgElement.alt = 'Gallery image 14';
								imgElement.className = 'gallery__img';
								figureElement.appendChild(imgElement);
								element.appendChild(figureElement);
							});
						}
					);
					localStorage.setItem('k', ins.toString());
				}
			},
			{ threshold: 1 }
		);

		if (observerTarget.current) {
			observer.observe(observerTarget.current);
		}

		return () => {
			if (observerTarget.current) {
				observer.unobserve(observerTarget.current);
			}
		};
	}, [observerTarget]);
	return (
		<>
			<div className='relative '>
				<section className='py-4 md:pt-32 pb-10 mt-8  '>
					<section className=' cursor-zoom-in'>
						<div
							className='gallery grid sm:grid-cols-3 lg:grid-cols-5 grid-flow-row-dense	grid-rows-1	gap-4	'
							onClick={(e) => console.log(e)}>
							<div className='q1 gallery__items'></div>
							<div className='q2 gallery__items'></div>
							<div className='q3 gallery__items'></div>
							{!window.matchMedia('(max-width: 1023px)')
								.matches && (
								<>
									<div className='q4 gallery__items sm:hidden lg:flex'></div>
									<div className='q5 gallery__items sm:hidden lg:flex'></div>
								</>
							)}
						</div>
					</section>
					<div ref={observerTarget} />
				</section>
			</div>
			{/* {imageActive ? (
				<section className='absolute left-0 right-0 top-0 bottom-0    h-screen z-[100] overflow-y-clip flex items-center justify-center '>
					<div className='h-full w-full backdrop-blur-md		 z-[5] absolute '>
						<div className='p-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 right-2 stroke-2 absolute '
								onClick={() => setImageActive(null)}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18 18 6M6 6l12 12'
								/>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 left-2 top-[50%] absolute stroke-[3]'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 19.5 8.25 12l7.5-7.5'
								/>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 right-2 top-[50%] absolute stroke-[3]'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m8.25 4.5 7.5 7.5-7.5 7.5'
								/>
							</svg>
						</div>
					</div>
					<div className='h-[80vh] w-[90vw] z-10 flex justify-center'>
						<img
							src={imageActive || ''}
							alt=''
							className=' h-full object-cotain '
						/>
					</div>
				</section>
			) : (
				''
			)} */}
		</>
	);
}
