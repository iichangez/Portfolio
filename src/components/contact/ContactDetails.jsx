import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { IoLogoDiscord } from 'react-icons/io5';

const contacts = [
	{
		id: 1,
		name: 'I dont want to share my location :/',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'hunowsmyname@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+6 013 725 4670',
		icon: <FiPhone />,
	},
	{
		id: 4,
		name: '@hunows_',
		icon: <IoLogoDiscord />,

	}
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
