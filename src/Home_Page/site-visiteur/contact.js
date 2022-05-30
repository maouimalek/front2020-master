import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import axios from 'axios'


class contact extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
     
      to :'',
      subject : '',
      text : '',
    };
    // const [inputs, setInputs] = useState({email: '', name: '', subject: '', description: ''})
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }


  handelSubmit(){
   
     axios.post("http://localhost:3020/email/send",{
  
      to : this.state.to ,
      subject :this.state.subject,
      text:this.state.text,
        })
        .then(res => {
            console.log("respose", res.data);
            if (res.data['status'] === "error") {
              alert(" verifier votre adresse")
            }
            else {
              alert("Email Envoyer ! ");
             
            }
  
          })
      }

      
    
  
    reset()
    {
        this.setState({to:"",subject:"",text:""})
    }


    
onChange= (event) => {
  this.setState({to: event.target.value});
  this.setState({subject: event.target.value});
  this.setState({text: event.target.value});

 
}
  render() {
    return (
      <div className="animated fadeIn">
       
             
        <Row>
          
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Envoyer email</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">to</Label>
                    </Col>

                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" 
                      placeholder="" autoComplete="email"
                      defaultValue={this.state.to}
                      onChange={evenement=>this.setState({to:evenement.target.value})} />
                    </Col>

                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password">subject</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="texte" placeholder="hello"
                       value={this.state.subject} 
                     onChange={evt => this.setState({subject: evt.target.value})}/>
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Text</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." 
                             value={this.state.text} 
                     onChange={evt => this.setState({text: evt.target.value})}/>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.handelSubmit.bind(this)}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger" onClick={this.reset.bind(this)}><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default contact;
























