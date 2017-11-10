const Card = (props) => {
	return(
	<div> 
		<img width="75" src ={props.avatar_url}/>

		<div>
			<div>{props.name}</div>
			<div>{props.company}</div>		
		</div>
	</div>
	);
};




const CardList = (props) => {

	return(
	<div>
		{props.cards.map(card => <Card {...card} />)}
	</div>
	);
};

class Form extends React.Component{
	state = { userName: ''}
	handleSubmit = (event) =>{
		event.preventDefault();
		console.log('Event: From Submit', this.state.userName);
		axios.get(`https://api.github.com/users/${this.state.userName}`)
			.then(resp => {
				console.log(resp);
			});

	};

	render (){
		return (
			<form onSubmit={this.handleSubmit}>
			<input type="text" 
			value = {this.state.userName}
			onChange= {(event) => this.setState({ userName : event.target.value})}
			placeholder="Github Usuario" required />
			<button type="submit" >Agregar item</button>  
			</form>
			);
	}
}


class App extends React.Component{
	state = {
		cards: [
	{
		name:"Marcelo" ,
		avatar_url:"https://avatars2.githubusercontent.com/u/4237704?v=4",
		company:"Lagash"
	},{
		name:"Marcos" ,
		avatar_url:"https://avatars2.githubusercontent.com/u/4237704?v=4",
		company:"Lagash2"},
	]

	};
	render() {
		return (
				<div>
					<Form />
					<CardList cards={this.state.cards} />
				</div>
			);
	}

}



ReactDOM.render(<App />,document.getElementById('app'));