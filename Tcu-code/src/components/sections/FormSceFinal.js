/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Image from '../elements/Image';
import "../../assets/scss/FormSce.scss"

class FormSce extends React.PureComponent {
    render() {
        return (
            <div className="background">
                <meta name="viewport" content="width=1024"></meta>
                <div className="main__container">
                    <header>
                        <div className="main__container--header">
                            <div className="logo__MEP">
                                <Image
                                    src={require('../../assets/images/LogoMEP.jpg')}
                                    alt="Open"
                                    width={140}
                                    height={140} />
                            </div>
                            <div class="vl"></div> 
                            <div>
                         
                                <h1 className="title MEP">Dirección Regional de Heredia</h1>
                                <p className="subtitle MEP__subtitle">Supervisión Educativa Circuito 02<br />
                                Liceo Los Lagos
                            </p><br />
                                <p className="subtitle MEP__subtitle">Transformación curricular, una apuesta por la calidad educativa.</p>
                            </div>
                            <br />
                            <br />
                            <div className="logo__SCE">
                                <Image
                                    src={require('../../assets/images/LogoColegio.jpg')}
                                    alt="Open"
                                    width={100}
                                    height={100} />
                            </div>
                        </div>
                        <hr style={{border: "5px solid #1B8898"}}/>
                    </header>
                    <div>
                        <div className="main__container--section">
                            <h1 className="title form__title">Informe diario de labores</h1>
                            <div className="section__B">
                                <br />
                                <br />
                                <br />
                                <div className="section__B--information">
                                    <div className="section__B--projectName">
                                        <p>Alumno(a): </p>
                                        <input style={{fontSize:"11px"}} className="project_name"></input>
                                        <p>Sección:</p>
                                        <input style={{fontSize:"11px"}} className="project_name"></input>
                                    </div>
                                    <div className="section__B--activities">
                                        <table style={{tableLayout: "fixed"}} className=".section__B--tableActivities" border="2">
                                            <tr>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Día</th>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Actividad</th>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Nº Horas</th>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Firma Prof. Tutor (a) o Encargado (a)</th>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                                    <br />
                                    <hr style={{border: "5px solid #1B8898"}}/>
                                    <br />
                                    <br />
                    <div>
                        <div className="main__container--section">
                            <h1 className="title form__title">Proyecto Servicio Comunal Estudiantil</h1>
                                    <br />
                                    <br />
                            <div className="section__B">
                                <div className="section__B--information">
                                <div className="section__B--projectName">
                                        <p>Curso Lectivo: </p>
                                        <input style={{fontSize:"11px"}} className="project_name"></input>
                                        <div className="logo__SCE">
                                <Image
                                    src={require('../../assets/images/LogoColegio.jpg')}
                                    alt="Open"
                                    width={200}
                                    height={200} />
                            </div>
                                    </div>
                                <br />
                                <br />
                                <br />
                                    <div className="section__B--projectName">
                                        <p>Nombre del Estudiante: </p>
                                        <input style={{fontSize:"11px"}} className="project_name"></input>
                                        <p>Sección:</p>
                                        <input style={{fontSize:"11px"}} className="project_name"></input>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="section__B--location">
                                        <p>Nombre Institución donde realiza el proyecto: </p>
                                        <input style={{fontSize:"11px"}} className="location"></input>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="section__B--location">
                                        <p>Nombre del Proyecto: </p>
                                        <input style={{fontSize:"11px"}} className="location"></input>
                                    </div>
                                    <div className="section__B--activities">
                                        <table style={{tableLayout: "auto" }} className=".section__B--tableActivities" border="2">
                                            <tr>
                                                <th style={{color: "black", height: "50px", width: "150px",fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Fecha</th>
                                                <th style={{color: "black", height: "50px", width: "150px",fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Hora Entrada</th>
                                                <th style={{color: "black", height: "50px", width: "150px",fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Hora Salida</th>
                                                <th style={{color: "black", height: "50px", width: "150px",fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Firma de persona responsable donde se realiza</th>
                                                <th style={{color: "black", height: "50px", width: "150px",fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Firma del alumno (a)</th>
                                                <th style={{color: "black", height: "50px", width: "150px",fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Firma del Tutor (a) Institucional</th>
                                                <th style={{color: "black", height: "50px", width: "150px",fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Observaciones</th>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", height: "50px", width: "150px",fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", height: "50px", width: "150px",fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", height: "50px", width: "150px",fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", height: "50px", width: "150px",fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", height: "50px", width: "150px",fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", height: "50px", width: "150px",fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", height: "50px", width: "150px",fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                    <footer className="footer">
                        <p className="footer__information">Teléfonos:(506) 2260-6296     Heredia, Los Lagos, costado Este Iglesia Católica. </p>
                        <p className="footer__emails"><span className="email">lic.loslagos@mep.go.cr</span></p>
                    </footer>
                </div>
            </div>
        );
    }
};

const ComponentToPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    const sendMail = () => {
        const PLATFORM = navigator.platform;
        const mailtoPhone = "mailto:lic.loslagos@mep.go.cr?subject=Reporte%20de%20Servicio%20Comunal%20Estudiantil&body=Correo%20generado%20autom%C3%A1ticamente%20por%20la%20plataforma%20digital%20del%20Servicio%20Comunal%20Estudiantil%20del%20Liceo%20los%20Lagos";
        const mailtoPC = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lic.loslagos@mep.go.cr&su=Reporte%20de%20Servicio%20Comunal%20Estudiantil&body=Correo%20generado%20autom%C3%A1ticamente%20por%20la%20plataforma%20digital%20del%20Servicio%20Comunal%20Estudiantil%20del%20Liceo%20los%20Lagos";

        (PLATFORM.includes("Win") || PLATFORM.includes("Mac")) 
        ? window.location.href = mailtoPC 
        : window.location.href = mailtoPhone
      }
  
    return (
      <div className="buttons_container">
        <meta name="viewport" content="width=1024"></meta>
        <FormSce ref={componentRef} />
        <button className="button_send" onClick={handlePrint}>Descargar formulario en PDF</button>
        <button className="button_attach" onClick={sendMail}>Enviar Archivos</button>
      </div>
    );
};

export default ComponentToPrint ;