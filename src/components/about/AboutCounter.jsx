import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 2, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 15, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 90, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 100, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of Study"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Projects done"
					counter={<span id="githubStarsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Positive feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Training and Development completed"
					counter={<span id="projectsCounter" />}
					measurement="+ hours"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
