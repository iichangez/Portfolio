import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';


const AboutClients = () => {
	const { clientsHeading } = useContext(AboutMeContext);

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			
		</div>
	);
};

export default AboutClients;
