const Person = props => {
	return React.createElement('div', {key:'a1'}, [
		React.createElement('h1', {key: props.id}, props.name),
		React.createElement('p', {key: props.name}, props.occupation)
		])

};

const App = () => {
	return React.createElement('div', {key: 0}, [
		React.createElement('h1', {className: 'title', key: 99}, ["React is rendered"]),
		React.createElement(Person, {name: 'Ama', occupation: 'Developer', id: 1, key: 1}, null),
		React.createElement(Person, {name: 'Ama2', occupation: 'Dev2', id: 2,  key: 2}, null),
		React.createElement(Person, {name: 'Ama3', occupation: 'Dev2', id: 3, key: 3}, null)
		]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'))

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));