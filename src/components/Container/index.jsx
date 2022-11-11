import styles from './container.module.css';
import clsx from 'clsx';

// Propiedad className: para establecer estilos
// Propiedad children: contiene los elementos secundarios definidos dentro del componente.

function Container({ className, children }) {
    return (
        // Dilema para establecer 2 clases: el styles.container y la que vendrá de afuera.
        //  1. Concatenando strings
        // <div className={`${styles.container} ${className}`}>
        //  2. Usando clsx para asignar un className de forma condicional
        <div className={clsx(styles.container, className)}>
            {/* Indicar donde se van a renderizar los hijos que estamos pasando desde fuera
                Dentro de este contenedor se renderizaron todos los hijos */}
            {children}
        </div>
    );
}

export default Container;
