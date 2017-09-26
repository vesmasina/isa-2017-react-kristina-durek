
import {observable} from 'mobx';

class AppState {
	@observable userEmail = '';
	@observable token = '';
	@observable pokemonList = [];
	@observable upvoteList = [];
	@observable downvoteList = [];

	setUserEmail(userEmail) {
		this.userEmail = userEmail;
	}

	setToken(token) {
		this.token = token;
	}

	getAuthData() {
	  const email = this.userEmail;
	  const token = this.token;
	  return `Token token=${token}, email=${email}`
	}

	initVoteLists() {
		const pokemonCount = this.pokemonList.length;
		this.upvoteList = Array(pokemonCount).fill(false);
		this.downvoteList = Array(pokemonCount).fill(false);
	}
}

export default AppState;