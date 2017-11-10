class Hello extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			nombre: 'Marcelo'

		}
	}

	adios = () => {
		this.setState({
			nombre:'Andres'
		})
	};

	render(){
		return (
		<h1 onClick={this.adios} >Hola {this.state.nombre}</h1>
	)}
}

ReactDOM.render(<Hello />, document.getElementById('app'))