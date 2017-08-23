
firebase.initializeApp(config);

let database = firebase.database();

database.ref('users').set(
	{
		hello: "world2"
	}
);

database.ref('hello').on('value', (snapshot) => console.log(snapshot.val()));