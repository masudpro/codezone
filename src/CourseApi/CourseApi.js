var personsApi = [
	{  
		course: 'The Complete JavaScript Course 2020: Build Real Projects!',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/851712_fc61_5.jpg',
		author: 'Marianne R. Charles',
		email: 'MarianneRCharles@teleworm.us',
		phone: '0492 75 93 33',
		price: '60',
		authorImage: 'https://images.pexels.com/photos/4065241/pexels-photo-4065241.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Bachelor of Science (B.Sc)',
		country: 'US'
	},
	{	
		course: 'Modern JavaScript From The Beginning',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/1463348_52a4_2.jpg',
		author: 'Francis E. Youngs',
		email: 'YoungsYoung@Youngs.us',
		phone: '0481 64 98 58',
		price: '94',
		authorImage: 'https://images.pexels.com/photos/3760917/pexels-photo-3760917.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Associate of Applied Science (AAS)',
		country: 'German'
	},
	{
		course: 'Bootstrap 4 From Scratch With 5 Projects',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/1313502_b57f_2.jpg',
		author: 'Patricia M. Bryan',
		email: 'PatriciaMBryan@teleworm.us',
		phone: '0492 64 98 54',
		price: '85',
		authorImage: 'https://images.pexels.com/photos/1707034/pexels-photo-1707034.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Undergraduate',
		country: 'UK'
	},
	{
		course: 'WordPress Theme Development with Bootstrap',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/271228_ce5b_9.jpg',
		author: 'Sherita E. Sharp',
		email: 'SheritaESharp@jourrapide.com',
		phone: '0492 75 34 98',
		price: '74',
		authorImage: 'https://images.pexels.com/photos/3764152/pexels-photo-3764152.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		education: 'Associate of Science (A.S.)',
		country: 'Dutch'
	},
	{
		course: 'Wordpress for Beginners - Master Wordpress Quickly',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/355212_948a_10.jpg',
		author: 'Amanda T. Jones',
		email: 'AmandaTJones@dayrep.com',
		phone: '0492 75 45 67',
		price: '78',
		authorImage: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Doctor of Dental Surgery (DDS)',
		country: 'India'
	},
	{
		course: 'The Complete WordPress Website Business Course',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/520116_edf5_2.jpg',
		author: 'Lance H. Brzozowski',
		email: 'LanceHBrzozowski@dayrep.com',
		phone: '0492 75 33 93',
		price: '23',
		authorImage: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Doctor of Medicine (M.D.)',
		country: 'Bangladesh'
	},
	{
		course: 'The full WordPress Website Design',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/2018828_41a9_3.jpg',
		author: 'Oscar M. Vandenberg',
		email: 'OscarMVandenberg@teleworm.us',
		phone: '0492 93 33 75',
		price: '56',
		authorImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260s',
		education: 'Juris Doctor (J.D.)',
		country: 'Nepal'
	},
	{
		course: 'Complete React Hooks Course 2020: A - Z ( Scratch to React )',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/2385972_55ec.jpg',
		author: 'Clyde J. Ruffin',
		email: 'ClydeJRuffin@jourrapide.com',
		phone: '0493 75 33 92',
		price: '76',
		authorImage: 'https://images.pexels.com/photos/4668739/pexels-photo-4668739.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Doctor of Philosophy (Ph.D.)',
		country: 'Pakistan'
	},
	{
		course: 'React From The Ground Up',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/836044_c960_4.jpg',
		author: 'John D. Armstrong',
		email: 'JohnDArmstrong@rhyta.com',
		phone: '0492 75 34 56',
		price: '43',
		authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Undergraduate',
		country: 'US'
	},
	{
		course: 'Angular - The Complete Guide (2020 Edition)',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/1247828_32bb.jpg',
		author: 'Rhonda A. Hoag',
		email: 'RhondaAHoag@teleworm.us',
		phone: '0492 98 76 54',
		price: '54',
		authorImage: 'https://images.pexels.com/photos/2772098/pexels-photo-2772098.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Graduate',
		country: 'China'
	},
	{
		course: 'Angular Front To Back',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/1277924_4422_3.jpg',
		author: 'Erin E. Colella',
		email: 'ErinEColella@armyspy.com',
		phone: '0492 76 32 89',
		price: '35',
		authorImage: 'https://images.pexels.com/photos/1146504/pexels-photo-1146504.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Master of Fine Arts (MFA)',
		country: 'US'
	},
	{
		course: 'Complete Vuejs Course: Vue.js + Nuxt.js + PHP + Express.js',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/1165096_e5af_3.jpg',
		author: 'Donald J. Tokarz',
		email: 'DonaldJTokarz@dayrep.com',
		phone: '0492 87 65 43',
		price: '42',
		authorImage: 'https://images.pexels.com/photos/3779432/pexels-photo-3779432.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Master of Business Administration (MBA)',
		country: 'Italy'
	},
	{
		course: 'Vue JS - The Complete Guide (incl. Vue Router & Vuex)',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/987064_5183_5.jpg',
		author: 'Karla W. Phillips',
		email: 'KarlaWPhillips@jourrapide.com',
		phone: '0433 23 23 69',
		price: '45',
		authorImage: 'https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Undergraduate',
		country: 'Arab'
	},
	{
		course: 'Learn Python Programming Masterclass',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/629302_8a2d_2.jpg',
		author: 'Christine R. Johnson',
		email: 'ChristineRJohnson@teleworm.us',
		phone: '0567 89 35 97',
		price: '34',
		authorImage: 'https://images.pexels.com/photos/4665740/pexels-photo-4665740.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		education: 'Master of Science (M.S.)',
		country: 'Dubai'
	},
	{
		course: 'The Python Bible™ | Everything You Need to Program in Python',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/1035472_23ce_5.jpg',
		author: 'Cruz B. Wilson',
		email: 'CruzBWilson@jourrapide.com',
		phone: '0492 87 65 28',
		price: '24',
		authorImage: 'https://images.pexels.com/photos/2884433/pexels-photo-2884433.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Undergraduate',
		country: 'Algeria.'
	},
	{
		course: 'The Complete Shopify Dropshipping Masterclass',
		courseImage: 'https://img-a.udemycdn.com/course/240x135/1869286_61fe_5.jpg',
		author: 'Nathan C. Williams',
		email: 'NathanCWilliams@dayrep.com',
		phone: '0567 78 45 89',
		price: '32',
		authorImage: 'https://images.pexels.com/photos/2869083/pexels-photo-2869083.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		education: 'Graduate',
		country: 'Armenia'
	}


]
export default personsApi;