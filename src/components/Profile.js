import React from 'react';

function Profile(props) {
	
	return (
		<section className='userProfile'>
			<h3>{props.user_name}</h3><img src={props.userImg} alt='oops'/>
		</section>
	)
}


export default Profile;