import e1 from '../../assets/svgs/Ellipse1.svg';
import e2 from '../../assets/svgs/Ellipse2.svg';
import e3 from '../../assets/svgs/Ellipse3.svg';
import e4 from '../../assets/svgs/Ellipse4.svg';
export default function Hero2() {
	return (
		<section className='w-full px-2 h-[25rem] border '>
			<div className='w-full h-full  m-auto bg-color-secondary rounded-md flex flex-col md:flex-row   md:justify-around  py-10'>
				<div className='text-center w-full md:w-2/5'>
					<h1 className='text-color-primary capitalize text-2xl md:text-[3.5rem]'>
						what our friends has to say
					</h1>
				</div>
				<div className='w-full md:w-2/5 md:px-12 px-3 flex flex-col gap-10 items-center '>
					<p className=' text-center font-SFPro md:text-base  m1:text-[.6rem] text-[.6rem]   md:text-[.7rem]'>
						Designjockey replaces unreliable freelancers and
						expensive agencies for one flat monthly fee,
						with designs delivered so fast that it will blow
						your mind.
					</p>
					<div className='relative  w-10/12  '>
						<img
							src={e4}
							alt=''
							className='absolute left-[10.5rem] '
						/>
						<img
							src={e3}
							alt=''
							className='absolute left-28'
						/>
						<img
							src={e2}
							alt=''
							className='absolute left-14'
						/>
						<img src={e1} alt='' className='absolute ' />
					</div>
				</div>
			</div>
			<div></div>
			<div></div>
		</section>
	);
}
