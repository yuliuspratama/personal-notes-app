import React from "react";
import PropTypes from 'prop-types'; 

class Noteadd extends React.Component{
    constructor(props) {
        super(props);
    

    this.state = {
        title:'',
        body:'',
    }


    this.ontitleChangeEventHandler = this.ontitleChangeEventHandler.bind(this);
    this.onbodyChangeEventHandler = this.onbodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    ontitleChangeEventHandler(event){
        this.setState(()=> {
            return{
                title: event.target.value,
            }
        });
    }

    onbodyChangeEventHandler(event){
        this.setState(()=> {
            return{
                body: event.target.value,
            }
        })
    }

    onSubmitChangeEventHandler(event){
            event.preventDefault();
            this.props.AddNote(this.state);
    }

    render(){
        return(
            <form className="add-new-page__input" onSubmit={this.onSubmitChangeEventHandler}>
                <input className="add-new-page__input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.ontitleChangeEventHandler}/>
                <input className="add-new-page__input__body" type="text" placeholder="Tulisan" value={this.state.body} onChange={this.onbodyChangeEventHandler}/>
                <button className="add-new-page__action" type="submit">TAMBAH</button>
            </form>
        )
    }
}

Noteadd.propTypes = {
    AddNote: PropTypes.func.isRequired,
  };
  
export default Noteadd;