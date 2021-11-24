import React, {Component}from 'react';
import fireDb from "../../Firebase/firebase";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "./Salvada.css";
class Salvada extends Component {

    state = {
        data: [],
        modalInsertar: false,
        modalEditar: false,
        form:{
            nombre: '',
            salvador: '',
            lugar:'',
            raza:''
        },
        id: 0
    };
    
    peticionGet = () => {
        fireDb.child("Salvada").on("value", (aliado) => {
        if (aliado.val() !== null) {
            this.setState({ ...this.state.data, data: aliado.val() });
        } else {
            this.setState({ data: [] });
        }
        });
    };

    peticionPost=()=>{
        fireDb.child("Salvada").push(this.state.form,
        error=>{
            if(error)console.log(error)
        });
        this.setState({modalInsertar: false});
    }

    peticionPut=()=>{
        fireDb.child(`Salvada/${this.state.id}`).set(
        this.state.form,
        error=>{
            if(error)console.log(error)
        });
        this.setState({modalEditar: false});
    }
    
    peticionDelete=()=>{
        if(window.confirm(`Estás seguro que deseas eliminar el Aliado ${this.state.form && this.state.form.canal}?`))
        {
        fireDb.child(`Salvada/${this.state.id}`).remove(
        error=>{
            if(error)console.log(error)
        });
        }
    }

    handleChange=e=>{
        this.setState({form:{
        ...this.state.form,
        [e.target.name]: e.target.value
        }})
        console.log(this.state.form);
    }

    seleccionarAliado=async(canal, id, caso)=>{

        await this.setState({form: canal, id: id});
    
        (caso==="Editar")?this.setState({modalEditar: true}):
        this.peticionDelete()
    
    }

    componentDidMount(){
        this.peticionGet();
    }
    render() {
        return(
            
            <div className="App container" >
                <br />
                <button className="btn btn-success justify-content-center" onClick={()=>this.setState({modalInsertar: true})}>Insertar</button>
                <br />
                <br />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Heroe</th>
                        <th>lugar</th>
                        <th>Raza</th>
                        <th>Editar o Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.state.data).map(i=>{
                        console.log(i);
                        return <tr key={i}>
                            <td>{this.state.data[i].nombre}</td>
                            <td>{this.state.data[i].salvador}</td>
                            <td>{this.state.data[i].lugar}</td>
                            <td>{this.state.data[i].raza}</td>
                            <td>
                            <button className="btn btn-primary" onClick={()=>this.seleccionarAliado(this.state.data[i], i, 'Editar')}>Editar</button> {"   "}
                            <button className="btn btn-danger" onClick={()=>this.seleccionarAliado(this.state.data[i], i, 'Eliminar')}>Eliminar</button>
                            </td>

                        </tr>
                        })}
                    </tbody>
                </table>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>Insertar Registro</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label>Nombre: </label>
                                <br />
                                <input type="text" className="form-control" name="nombre" onChange={this.handleChange}/>
                                <br />
                                <label>Heroe: </label>
                                <br />
                                <input type="text" className="form-control" name="salvador" onChange={this.handleChange}/>
                                <label>lugar: </label>
                                <br />
                                <input type="text" className="form-control" name="lugar" onChange={this.handleChange}/>
                                <label>Raza: </label>
                                <br />
                                <input type="text" className="form-control" name="raza" onChange={this.handleChange}/>
                            </div>
                        </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={()=>this.peticionPost()}>Insertar</button>{"   "}
                        <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>Editar Registro</ModalHeader>
                        <ModalBody>
                        <div className="form-group">
                            <label>Nombre: </label>
                            <br />
                            <input type="text" className="form-control" name="nombre" onChange={this.handleChange}
                            value={this.state.form && this.state.form.nombre}/>
                            <br />
                            <label>Heroe: </label>
                            <br />
                            <input type="text" className="form-control" name="salvador" onChange={this.handleChange}
                            value={this.state.form && this.state.form.salvador}/>
                            <label>lugar: </label>
                            <br />
                            <input type="text" className="form-control" name="lugar" onChange={this.handleChange}
                            value={this.state.form && this.state.form.lugar}/>
                            <br />
                            <label>Raza: </label>
                            <br />
                            <input type="text" className="form-control" name="raza" onChange={this.handleChange}
                            value={this.state.form && this.state.form.raza}/>
                        </div>
                            
                        </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={()=>this.peticionPut()}>Editar</button>{"   "}
                        <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
                    </ModalFooter>
                </Modal>
            </div>
            
        )
    }
}

export default Salvada;