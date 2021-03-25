import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Proposito del Servicio Comunal Estudiantil (SCE)',

    paragraph:
      'La finalidad del Servicio Comunal Estudiantil es proporcionar el desarrollo de destrezas y habilidades de los estudiantes para la vida en comunidad y para la construcion de una nueva ciudadania. ',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <center>
            <h2 className="mt-1 mb-3 ">Paso a Paso del SCE </h2>
          </center>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Paso 1 - El comité del SCE</h4>
                  <p className="m-1 text-sm">
                    El Director(a) nombra en el mes de Marzo un comite integrado
                    por:
                  </p>
                  <br />
                  <p className="m-1 text-sm">
                    <b> · </b> Director(a) o su representante
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Profesor(a)coordinador(a) de nivel
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> 2 representantes del Gobierno Estudiantil (Hombre
                    y Mujer)
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> 1 representante del Departamento de Orientacion
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Paso 2 - Definicion del tema del proyecto
                  </h4>
                  <p className="m-1 text-sm">
                    En la cuarta semana del mes de Marzo el Comité del SCE del
                    colegio, tomando en cuenta las necesidades del colegio y la
                    comunidad definen los temas de los proyectos
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Paso 3 - Divulgacion del SCE</h4>
                  <p className="m-0 text-sm">
                    EL profesor(a) que coordina el Comité de SCE es la persona
                    responbable de brindar a los y las estudiantes, padres,
                    madres y/o encargados(as) toda la información necesaria para
                    realizar el SCE
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Paso 4 - Presentacion de Proyectos de SCE{' '}
                  </h4>
                  <p className="m-0 text-sm">
                    Los proyectos pueden ser realizados individualmente o en
                    grupo con el apoyo de uno o más profesores(as) tutores.
                  </p>
                  <br />
                  <p className="m-1 text-sm">
                    <b> · </b> Debe presentarse antes de la ultima semana de
                    Abril el contenido del formulario junto a los cronogramas,
                    firmados por los encargados de la institución.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Paso 5 - Aprobacion de los Proyectos
                  </h4>
                  <p className="m-1 text-sm">El comité de SCE debe revisar:</p>
                  <p className="m-1 text-sm">
                    <b> · </b> Si es posible realizar el proyecto.
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Si está dentro de los temas definidos.
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Si no implica costos para los(as)estudiantes.
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Si el lugar y las condiciones donde se va a
                    relizar no ponen en riesgo su seguridad.
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Si es de interés y tiene impacto en el colegio o
                    la comunidad.
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Si el SCE se coordina con una organizacion
                    externa al centro educativo, el Comité debe hacer un
                    acuerdo.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Paso 6 - Ejecución de los proyectos aprobados
                  </h4>
                  <p className="m-1 text-sm">
                    El tiempo disponible es de Abril a Octubre y este es
                    realizado en decimo año en colegios academicos y undecimo
                    año en colegios tecnicos cumpliendo con un minimo de 30
                    horas en el horario fuera de clases.
                  </p>

                  <p className="m-1 text-sm">
                    <b> · </b> En caso de que se necesiten dias y horas
                    diferentes (por ejemplo fines de semana) debe contarse con
                    el acompañamiento de profesores(es) responsable (s) entre
                    otras condiciones.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Paso 7 - Evaluación y Cierre</h4>
                  <p className="m-0 text-sm">
                    Al terminar el SCE, cada estudiante debe:
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Haber cumplido con un proyecto aprobado de 30
                    horas como minimo.
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Presentar un informe de la experiencia que
                    contendra.
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Resultados alcanzados segun los objetivos, metas
                    y actividades propuestas
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Problemas y limitaciones encontrados.
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Recursos y facilidades aprovechadas.
                  </p>
                  <p className="m-1 text-sm">
                    <b> · </b> Sugerencias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
