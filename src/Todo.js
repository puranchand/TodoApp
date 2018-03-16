import React from 'react';

export default class Todo extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			items:[],
			text:''
		}
	}

	handleChange = (e) =>{
		this.setState({
			text:e.target.value
		})
	}

	handleSubmit = (e)=>{
		  e.preventDefault();
	    if (!this.state.text.length) {
	      return;
	    }
	    const newItem = {
	      text: this.state.text,
	      id: Date.now()
	    };
	    this.setState(prevState => ({
	      items: prevState.items.concat(newItem),
	      text: ''
	    }));
	}

	handleDelete = (index)=>{
		const items = this.state.items.filter((todo, todoIndex) => {
      	return todoIndex !== index
    	})
    	this.setState({ items })
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<h1>Todo</h1>
					<h4>Total Student ={this.state.items.length}</h4>
					<input placeholder="Enter Student Name"
					id='new-item' value={this.state.text}
					onChange={this.handleChange}
					/>
					<button >Submit</button>
					<TodoList items={this.state.items} delete={this.handleDelete}/>
				</form>
			</div>
		)
	}
}

class TodoList extends React.Component{
	render() {
		return(
			<div>
				<ul>
				{this.props.items.map((data,index) =>(
					<li key={data.id}><button onClick={(e)=> this.props.delete(index)} >X</button><span style={{color:'green',marginLeft:'10px'}}>{data.text}</span></li>
				))}
				</ul>
			</div>
		)
	}
}