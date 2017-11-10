
function Saludar(props){
	return <h1>Hola {props.name}</h1>
}

ReactDOM.render(<Saludar name="Marcelo" />,document.getElementById('app'));



class Button extends React.Component{
	state = { counter: 0};

	handleClick = () => {
		this.setState((prevState) => ({
			counter: prevState.counter + 1
		}));
	};

	render() {
		return (
		<button onClick={this.handleClick}>
		{this.state.counter}
		</button>
		);
		
	}

}

ReactDOM.render(<Button />, document.getElementById('prueba1'));


function reloj() {


	let now = new Date().toLocaleTimeString()

	const dato  = <span> {now}</span>;

	ReactDOM.render(dato,document.getElementById('reloj'));
}

setInterval(reloj,1000);


