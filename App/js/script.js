fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk&num=100", {
	"method": "GET",
	"headers": {
		"x-user-agent": "desktop",
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "2894d80d96mshb91629339da585ep1da282jsn9fba9d22ef64"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});