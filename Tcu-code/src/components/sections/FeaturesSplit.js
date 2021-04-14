import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';

import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Paso 1
                </div>
                <h3 className="mt-0 mb-12">Ingresar al formulario</h3>
                <p className="m-0">
                  Primeramente, para ingresar a la aplicación debe ingresar al
                  sitio web{' '}
                  <a href="https://sce-lagos.web.app ">
                    https://sce-lagos.web.app{' '}
                  </a>
                  , este es accesible tanto en computadoras (Recomendado) como
                  en dispositivos móviles.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/Ingresar.gif')}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Paso 2
                </div>
                <h3 className="mt-0 mb-12">
                  Completar la información del formulario
                </h3>
                <p className="m-0">
                  Posteriormente en la sección de “Reportar Servicio Comunal
                  Estudiantil” se le trasladara al un formulario el cual incluye
                  todos los aspectos necesarios para formalizar su proceso de
                  SCE
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/Rellenar.gif')}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Paso 3
                </div>
                <h3 className="mt-0 mb-12">Guardar el formulario</h3>
                <p className="m-0">
                  Una vez finalizada la redacción de todos los aspectos del
                  formulario puede guardar en su dispositivo o computadora el
                  formulario para ser enviado.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/Guardar.gif')}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Paso 4
                </div>
                <h3 className="mt-0 mb-12">
                  Enviar la información necesaria del SCE y formulario guardado
                </h3>
                <p className="m-0">
                  Finalmente, en la sección de “Enviar Archivos”, se le
                  redireccionará a su correo de preferencia de su dispositivo en
                  el cual podrá agregar el formulario generado y cualquier otro
                  archivo o imagen necesaria, siendo enviado al encargado de
                  SCE.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/Enviar.gif')}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
