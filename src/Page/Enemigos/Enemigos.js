import React, {Component}from 'react';
import fireDb from "../../Firebase/firebase";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "./Enemigos.css";
class Enemigos extends Component {

    state = {
        data: [],
        modalInsertar: false,
        modalEditar: false,
        form:{
            nombre: '',
            superpoder: '',
            nivel:'',
            raza:''
        },
        id: 0
    };
    
    peticionGet = () => {
        fireDb.child("Enemigos").on("value", (aliado) => {
        if (aliado.val() !== null) {
            this.setState({ ...this.state.data, data: aliado.val() });
        } else {
            this.setState({ data: [] });
        }
        });
    };

    peticionPost=()=>{
        fireDb.child("Enemigos").push(this.state.form,
        error=>{
            if(error)console.log(error)
        });
        this.setState({modalInsertar: false});
    }

    peticionPut=()=>{
        fireDb.child(`Enemigos/${this.state.id}`).set(
        this.state.form,
        error=>{
            if(error)console.log(error)
        });
        this.setState({modalEditar: false});
    }
    
    peticionDelete=()=>{
        if(window.confirm(`Estás seguro que deseas eliminar el Aliado ${this.state.form && this.state.form.canal}?`))
        {
        fireDb.child(`Enemigos/${this.state.id}`).remove(
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
                        <th>Superpoder</th>
                        <th>Edad</th>
                        <th>Nivel de Poder</th>
                        <th>Raza</th>
                        <th>Editar o Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.state.data).map(i=>{
                        console.log(i);
                        return <tr key={i}>
                            <td>{this.state.data[i].nombre}</td>
                            <td>{this.state.data[i].superpoder}</td>
                            <td>{this.state.data[i].edad}</td>
                            <td>{this.state.data[i].nivel}</td>
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
                                <label>Superpoder: </label>
                                <br />
                                <input type="text" className="form-control" name="superpoder" onChange={this.handleChange}/>
                                <label>Edad: </label>
                                <br />
                                <input type="text" className="form-control" name="edad" onChange={this.handleChange}/>
                                <label>Nivel de Poder: </label>
                                <br />
                                <input type="text" className="form-control" name="nivel" onChange={this.handleChange}/>
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
                            <label>Superpoder: </label>
                            <br />
                            <input type="text" className="form-control" name="superpoder" onChange={this.handleChange}
                            value={this.state.form && this.state.form.superpoder}/>
                            <label>Edad: </label>
                            <br />
                            <input type="text" className="form-control" name="edad" onChange={this.handleChange}
                            value={this.state.form && this.state.form.edad}/>
                            <label>Nivel de Poder: </label>
                            <br />
                            <input type="text" className="form-control" name="nivel" onChange={this.handleChange}
                            value={this.state.form && this.state.form.nivel}/>
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

export default Enemigos;