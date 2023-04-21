const Person = props => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, props.name),
		React.createElement('p', {}, props.occupation)
		])

};

const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', {class: 'title'}, ["React is rendered"]),
		React.createElement(Person, {name: 'Ama', occupation: 'Developer'}, null),
		React.createElement(Person, {name: 'Ama2', occupation: 'Dev2'}, null),
		React.createElement(Person, {name: 'Ama3', occupation: 'Dev2'}, null)
		]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'))

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));