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
                            <div>
                                <h1 className="title MEP">MINISTERIO DE EDUCACIÓN PÚBLICA</h1>
                                <p className="subtitle MEP__subtitle">DESPACHO VICEMINISTRA ACADÉMICA DIVISION DE DESARROLLO CURRICULAR <br />
                                Oficina de Servicio Comunal Estudiantil
                                Programa de Gobiernos Estudiantiles
                            </p><br />
                                <p className="subtitle MEP__subtitle--slogan">“APRENDER PARA SERVIR, SERVIR PARA APRENDER”</p>
                            </div>
                            <br />
                            <br />
                            <div className="logo__SCE">
                                <Image
                                    src={require('../../assets/images/LogoSCE.png')}
                                    alt="Open"
                                    width={140}
                                    height={140} />
                            </div>
                        </div>
                    </header>
                    <div>
                        <div className="main__container--section">
                            <h1 className="title form__title">FORMULA O2<br />FORMULACIÓN Y EJECUCIÓN DE PROYECTOS</h1>
                            <br />
                            <br />
                            <div className="section__A">
                                <h1 className="section__A--title">A- Información General</h1>
                                <br />
                                <p className="section__A--name">Nombre del Centro Educativo <span className="section__A--nameSpan">LICEO LOS LAGOS</span></p>
                                <div className="section__A--information">
                                    <div>
                                        <p className="section__A--phone">Teléfono: <span className="section__A--phoneSpan">2260-6296</span></p>
                                    </div>
                                    <div>
                                        <p className="section__A--fax">Fax: <span className="section__A--faxSpan">2260-7657</span></p>
                                    </div>
                                    <div>
                                        <p className="section__A--email">Correo Electrónico: <span className="section__A--faxSpan">lic.loslagos@mep.go.cr</span></p>
                                    </div>
                                </div>
                                <div className="section__A--informationB">
                                    <div>
                                        <p className="section__A--direction">Dirección Regional: <span className="section__A--directionSpan">HEREDIA</span></p>
                                    </div>
                                    <div>
                                        <p className="section__A--circuit">Circuito Escolar: <span className="section__A--circuitSpan">02</span></p>
                                    </div>
                                </div>
                                <div className=".section__A--table">
                                    <br />
                                    <br />
                                    <table style={{tableLayout: "fixed"}} className=".section__A--tableTutor" border="2">
                                        <tr>
                                            <th style={{color: "black", fontSize:"12px", font: "arial", textAlign:"center"}}>Tutor(a)(s)</th>
                                            <th style={{color: "black", fontSize:"12px", font: "arial", textAlign:"center"}}>Teléfono</th>
                                            <th style={{color: "black", fontSize:"12px", font: "arial", textAlign:"center"}}>Fax</th>
                                            <th style={{color: "black", fontSize:"12px", font: "arial", textAlign:"center"}}>Correo Electrónico</th>
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
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <table style={{tableLayout: "fixed"}} className=".section__A--tableStudent" border="2">
                                        <tbody>
                                            <tr>
                                                <th style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}>Nombre Completo/<br/>Estudiantes</th>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", textAlign:"center"}}>Teléfono</th>
                                                <th style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}>Nombre Completo/<br/>Estudiantes</th>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", textAlign:"center"}}>Teléfono</th>
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="section__B">
                                <br />
                                <br />
                                <h1 className="section__B--title">B- Información del proyecto:</h1>
                                <br />
                                <div className="section__B--information">
                                    <div className="section__B--projectName">
                                        <p>Nombre del proyecto:</p>
                                        <input style={{fontSize:"11px"}} className="project_name"></input>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="section__B--location">
                                        <p>Ubicación Geográfica:</p>
                                        <input style={{fontSize:"11px"}} className="location"></input>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="section__B--population">
                                        <p>Población meta:</p>
                                        <input style={{fontSize:"11px"}} className="population"></input>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="section__B--projectDescription">
                                        <p>Breve descripción o resumen del proyecto: </p>
                                        <textarea style={{resize: "none"}} className="projectDescription" name="projectDescription" rows="35" cols="45"></textarea>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="section__B--projectType">
                                        <p>Tipo de proyecto:</p>
                                        <div className="projectType__options">
                                            <div className="projectType__options--institucional">
                                                <p>Institucional: </p>
                                                <input className="institucional"></input>
                                            </div>
                                            <div className="projectType__options--individual">
                                                <p>Individual: </p>
                                                <input className="individual"></input>
                                            </div>
                                            <div className="projectType__options--grupal ">
                                                <p>Grupal : </p>
                                                <input className="grupal"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="section__B--justification">
                                        <p>Justificación: Responde a la pregunta, ¿Porqué el proyecto? ¿Qué problema(s) se propone resolver?</p>
                                        <textarea className="justification" name="justification" rows="35" cols="45"></textarea>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="section__B--generalGoal">
                                        <p>Objetivo general: Responde a la pregunta, ¿Qué se propone resolver o lograr?</p>
                                        <textarea className="generalGoal" name="generalGoal" rows="35" cols="45"></textarea>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="section__B--specificGoal">
                                        <p>Objetivos específicos: Detalla la respuesta planteada anteriormente, es decir, que objetivos se deben plantear para lograr lo propuesto en el objetivo general.</p>
                                        <textarea className="specificGoal" name="specificGoal" rows="35" cols="45"></textarea>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="section__B--goals">
                                        <p>Metas: logros concretos que se espera alcanzar, cualitativos y cuantitativos.</p>
                                        <textarea className="goals" name="goals" rows="35" cols="45"></textarea>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="section__B--activities">
                                        <p>Actividades: Responde a las preguntas ¿Cómo y cuando?</p>
                                        <table style={{tableLayout: "fixed"}} className=".section__B--tableActivities" border="2">
                                            <tr>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Actividades de Ejecución</th>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Período</th>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Número de Horas</th>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="section__B--activitiesB">
                                        <p>Actividad de evaluación: Definir los indicadores de éxito (se derivan directamente de las metas propuestas)</p>
                                        <table style={{tableLayout: "fixed"}} className=".section__B--tableActivitiesB" border="2">
                                            <tr>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Actividad de Evaluación</th>
                                                <th style={{color: "black", fontSize:"12px", font: "arial", background: "rgba(128, 128, 128, 0.5)", textAlign:"center"}}>Fecha</th>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                                <td contentEditable='true' style={{color: "black", fontSize:"11px", font: "arial", textAlign:"center"}}></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="section__B--resources">
                                        <p>Recursos: Incluye humanos, materiales y financieros. Es importante indicar aquí posibles alianzas con empresas privadas, ya definidas o, si se solicita apoyo para gestionarlas.</p>
                                        <textarea className="resources" name="resources" rows="35" cols="45"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="section__C">
                                <h3>Muchas gracias por su información</h3>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <hr style={{border: "4px solid green"}}/>
                        <p className="footer__information">Avenida Central, Calle 6, Edificio Raventós, 7to piso, 
                        San José, Costa Rica.Telefax: 223 18 10 //  256 7011 Ext.-275/ 279 </p>
                        <p className="footer__emails"><span className="email">sercoes@mep.go.cr</span> /  <span className="email">mvillalobos@mep.go.cr</span> / <span className="email">Lcarvajalg@mep.go.cr</span> / <span className="email">msolisd@mep.go.cr</span> / <span className="email">ghidalgo@mep.go.cr</span></p>
                        <p className="direction">Apartado Postal  12340 – 1000 San José</p>
                        <p className="phrase">“AL DESARROLLO POR LA EDUCACIÓN”</p>
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