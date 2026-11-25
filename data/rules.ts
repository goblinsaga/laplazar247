export type Rule = {
  title: string;
  content: string;
};

export type RuleSection = {
  id: string;
  title: string;
  icon: string;
  rules: Rule[];
};

export const ruleSections: RuleSection[] = [
  {
    id: "general",
    title: "Reglas generales de roleplay",
    icon: "shield",
    rules: [
{
        title: "1.1. Prohibición del Meta Gaming",
        content: `Queda estrictamente prohibido el Meta Gaming, entendido como utilizar información obtenida fuera del juego para conseguir ventajas dentro del servidor.

Se consideran Meta Gaming las siguientes conductas:

• Utilizar llamadas, mensajes o conversaciones de Discord para obtener información sobre la ubicación, movimientos o acciones de otros jugadores y utilizarla dentro del rol.
• Compartir información externa para beneficiar a integrantes de una facción durante un enfrentamiento, persecución, secuestro o cualquier situación de rol.
• Utilizar el mapa, marcadores o información externa para localizar jugadores o anticiparse a sus movimientos cuando dicha información no esté disponible legítimamente dentro del rol.
• Transmitir información obtenida mediante espectadores, transmisiones o comunicaciones externas para intervenir en situaciones del juego.

La información deberá obtenerse mediante los medios permitidos dentro del propio servidor.`,
      }, 
{
        title: "1.2. Prohibición de atropellar",
        content: `Queda prohibido utilizar cualquier tipo de vehículo para atropellar intencionalmente a otros jugadores.

Esta prohibición aplica tanto en situaciones de conflicto como fuera de ellas.

Los accidentes involuntarios no serán considerados automáticamente una infracción; la administración podrá evaluar las circunstancias.`,
      }, 
{
        title: "1.3. Prohibición de Bug Abuse",
        content: `Queda prohibido aprovechar errores, fallos o vulnerabilidades del juego para obtener ventajas indebidas.

En particular:

• Está prohibido introducir o esconder personajes dentro de paredes, edificios o estructuras mediante bugs.
• Está prohibido esconder personajes amarrados en lugares inaccesibles con la intención de impedir que sean encontrados o rescatados.
• Está prohibido utilizar errores de colisión, animaciones o mecánicas para evitar enfrentamientos, arrestos o secuestros.

Cualquier abuso de bugs podrá ser sancionado por la administración.`,
      }, 
{
        title: "1.4. Prohibición de minas",
        content: `Queda estrictamente prohibido utilizar, colocar o transportar para su utilización minas antipersonales y minas antitanques dentro del servidor.

Esta prohibición aplica a todas las facciones y jugadores, sin excepciones.`,
      }, 
{
        title: "1.5. Equipamiento prohibido",
        content: `Queda prohibido utilizar las bolsas y equipamientos específicos que hayan sido identificados como prohibidos por la administración.

La lista de equipamientos prohibidos deberá estar publicada y acompañada de una referencia visual o del nombre exacto del objeto para evitar confusiones.`,
      }, 
    ],
  },

  {
    id: "armamento",
    title: "Armamento y equipamiento",
    icon: "crosshair",
    rules: [
{
        title: "2.1. Armamento estándar",
        content: `Como regla general, todos los jugadores deberán respetar las siguientes restricciones:

• Las armas podrán utilizar únicamente miras 1x.
• Los cargadores estándar permitidos serán de 30 balas reales de capacidad.
• Cada jugador podrá portar un máximo de 8 cargadores estándar de 30 balas.
• El límite de 8 cargadores incluye el cargador colocado en el arma y los 7 restantes en el inventario.

No se permitirá superar estas cantidades mediante el uso de cargadores adicionales en el inventario.`,
      }, 
{
        title: "2.2. Capacidad real de los cargadores",
        content: `La capacidad real de un cargador será la que determine su funcionamiento dentro del juego, no únicamente el nombre o descripción que aparezca en el inventario.

Por lo tanto:

• Los cargadores que indiquen 30 balas, pero tengan una capacidad real de 40, serán considerados cargadores de 40 balas.
• Estos cargadores no podrán utilizarse como si fueran cargadores estándar de 30 balas.
• La administración podrá identificar los cargadores permitidos mediante sus características y referencias visuales.

Queda prohibido distribuir cargadores de 40 balas entre jugadores que únicamente tengan autorización para utilizar cargadores de 30.`,
      }, 
{
        title: "2.3. Prohibición de balas incendiarias",
        content: `Queda prohibido utilizar munición incendiaria en cualquier arma o vehículo artillado.

Esta prohibición aplica a todas las facciones, rangos y tipos de armamento.`,
      }, 
{
        title: "2.4. Restricciones de accesorios",
        content: `La mira 1x será el accesorio estándar.

Las miras 3x, los silenciadores y balas AP únicamente podrán utilizarse por los tres primeros mandos de cada facción, respetando los límites de armamento especial y las disposiciones oficiales. 

Ningún jugador podrá justificar el uso de accesorios exclusivos alegando que el arma los permite instalar.`,
      }, 
{
        title: "2.5. Límite de armamento especial",
        content: `Cada facción podrá disponer de un máximo de:

• 1 Barrett.
• 1 ametralladora.
• 1 lanzagranadas.

Estos límites son por facción, no por jugador.

No se permitirá que varios integrantes utilicen simultáneamente el mismo tipo de armamento especial cuando se haya alcanzado el límite establecido.`,
      }, 
{
        title: "2.6. Barrett",
        content: `Como regla general, el Barrett podrá utilizar un máximo de 4 cargadores.

La cantidad incluye:

• 1 cargador colocado en el arma.
• 3 cargadores adicionales en el inventario.

EXCEPCIÓN PARA EL LÍDER DE FACCIÓN:

Únicamente el líder principal de la facción (primer mando) podrá portar hasta 7 cargadores de Barrett.

En este caso:

• 1 cargador podrá estar colocado en el arma.
• Los otros 6 deberán permanecer en el inventario.
• Deberá utilizar exclusivamente mira 1x.

Esta excepción pertenece únicamente al líder principal y no podrá transferirse al segundo o tercer mando.`,
      }, 
{
        title: "2.7. Ametralladora",
        content: `La ametralladora podrá utilizar un máximo de 2 cargadores:

• 1 cargador colocado en el arma.
• 1 cargador adicional en el inventario.

No se permitirá portar cargadores adicionales.`,
      }, 
{
        title: "2.8. Lanzagranadas",
        content: `El integrante autorizado para utilizar el lanzagranadas podrá portar un máximo de 7 granadas:

• 1 granada cargada en el arma.
• 6 granadas adicionales en el inventario.

No se permitirá superar este límite.`,
      }, 
{
        title: "2.9. Cargadores de 45 balas",
        content: `Cada facción criminal podrá tener únicamente 1 integrante autorizado para utilizar cargadores de 45 balas.

El integrante autorizado podrá portar un máximo de 4 cargadores de 45 balas.

El límite incluye:

• 1 cargador colocado en el arma.
• 3 cargadores adicionales en el inventario.

CONDICIONES:

• La autorización será individual y no podrá compartirse con otros integrantes.
• No se permitirá que dos o más miembros de la misma facción utilicen simultáneamente estos cargadores.
• Si el integrante autorizado supera el límite de 4 cargadores, podrá recibir una sanción administrativa.
• Los cargadores de 40 balas no se considerarán cargadores de 30 aunque su descripción indique lo contrario.`,
      }, 
{
        title: "2.10. Uso exclusivo",
        content: `El uso de cargadores de tambor estará limitado a los tres primeros mandos de cada facción.

Cuando uno de estos mandos decida utilizar un cargador de tambor, podrá portar como máximo:

• 1 cargador de tambor.
• 4 cargadores normales.

El límite total será de 5 cargadores, incluyendo el cargador de tambor.

No se permitirá utilizar más de un cargador de tambor ni sustituir esta restricción por cargadores adicionales.

El cargador de tambor no autoriza a otros integrantes de la facción a utilizarlo.`,
      }, 
{
        title: "2.11. Armas consideradas Minimi",
        content: `Para efectos de este reglamento, se consideran armas tipo Minimi las siguientes:

• M60.
• M249 SAW.

Ambas armas estarán sujetas a las mismas restricciones establecidas en esta sección.`,
      }, 
{
        title: "2.12. Accesorios permitidos",
        content: `Como regla general, las armas M60 y M249 SAW deberán utilizar:

• Mira 1x.
• Sin silenciador.

No se permitirá instalar accesorios que no estén expresamente autorizados.`,
      }, 
{
        title: "2.13. Excepción para los tres primeros mandos",
        content: `Los tres primeros mandos de cada facción podrán utilizar mira 3x en las armas que clasifiquen como minimi.

Esta autorización únicamente será válida cuando utilicen cargadores de 30 balas reales.

La excepción no permite utilizar silenciadores ni cargadores de mayor capacidad.`,
      }, 
{
        title: "2.14. Límite por facción",
        content: `Cada facción podrá disponer de un máximo de 1 vehículo artillado.

No se permitirá utilizar vehículos artillados adicionales, aunque pertenezcan a integrantes diferentes de la misma facción.`,
      }, 
{
        title: "2.15. Munición prohibida",
        content: `Queda prohibido utilizar balas incendiarias en cualquier vehículo artillado.

Esta restricción aplica sin importar el tipo de vehículo, su propietario o la situación de combate.`,
      }, 
    ],
  },

  {
    id: "mandos",
    title: "Líderes y mandos de facción",
    icon: "medal",
    rules: [
{
        title: "3.1. Líder de facción (primer mando)",
        content: `El líder principal podrá:

• Utilizar 1 RPG.
• Portar cargadores AP.
• Utilizar mira 3x.
• Utilizar silenciador.
• Portar un máximo de 3 granadas.

La autorización de RPG, mira 3x, silenciador y cargadores AP será exclusiva de este rango, respetando los límites de armamento especial.

EXCEPCIÓN ESPECÍFICA DEL BARRETT:

Podrá portar hasta 7 cargadores de Barrett, contando el cargador colocado en el arma, pero deberá utilizar mira 1x.`,
      }, 
{
        title: "3.2. Segundo al mando (segundo mando)",
        content: `El segundo al mando podrá:

• Utilizar mira 3x.
• Portar un máximo de 2 cargadores AP.
• Portar un máximo de 2 granadas.

No tendrá autorización automática para utilizar RPG.`,
      }, 
{
        title: "3.3. Tercero al mando (tercer mando)",
        content: `El tercer mando podrá:

• Utilizar mira 3x.
• Portar un máximo de 1 cargador AP.
• Portar un máximo de 1 granada.

No tendrá autorización automática para utilizar RPG.`,
      }, 
{
        title: "3.4. Restricciones para el resto de integrantes",
        content: `Cualquier integrante que no forme parte de los tres primeros mandos de su facción tendrá prohibido:

• Utilizar mira 3x.
• Portar granadas exclusivas de mando.
• Utilizar RPG.
• Portar cargadores AP exclusivos de mando.
• Recoger y utilizar equipamiento exclusivo de mandos cuando estos sean abatidos.

El incumplimiento podrá ser sancionado por la administración.`,
      }, 
{
        title: "3.5. Equipamiento de jugadores abatidos",
        content: `Queda prohibido recoger del suelo y utilizar equipamiento exclusivo de los tres primeros mandos de una facción cuando estos sean abatidos.

El equipamiento protegido incluye:

• RPG.
• Miras 3x.
• Cargadores AP.
• Granadas correspondientes al equipamiento exclusivo de mando.

La prohibición aplica a cualquier integrante de la facción y a jugadores de otras facciones.

El hecho de que el equipamiento se encuentre en el suelo no significa que haya dejado de ser exclusivo.`,
      }, 
    ],
  },

  {
    id: "fuerzas-especiales",
    title: "Fuerzas especiales",
    icon: "users",
    rules: [
{
        title: "4.1. Límite de integrantes",
        content: `Cada facción podrá tener un máximo de 6 integrantes en sus fuerzas especiales.

No se permitirá superar este límite mediante cambios temporales de integrantes o la utilización de jugadores no registrados.`,
      }, 
{
        title: "4.2. Registro obligatorio",
        content: `Cada facción deberá mantener una lista oficial y actualizada con los nombres de sus 6 integrantes autorizados.

Únicamente los jugadores registrados podrán utilizar los beneficios y equipamientos correspondientes a fuerzas especiales.

La administración podrá solicitar la lista en cualquier momento.

Los jugadores que no aparezcan en el registro no podrán reclamar autorización para utilizar dicho equipamiento.`,
      }, 
{
        title: "4.3. Uniforme y camuflaje",
        content: `Los integrantes de fuerzas especiales podrán utilizar el camuflaje completo correspondiente a su propia facción.

No se permitirá utilizar camuflajes de otras facciones para obtener ventajas de identificación o confundir a otros jugadores.`,
      }, 
{
        title: "4.4. Accesorios autorizados",
        content: `Los integrantes registrados de fuerzas especiales podrán utilizar:

• Silenciadores.
• Visión nocturna.

Estas autorizaciones no eliminan las restricciones generales de armamento, cargadores ni límites por facción.`,
      }, 
{
        title: "4.5. Responsables de fuerzas especiales",
        content: `La organización deberá contar con:

• Un líder de fuerzas especiales.
• Un segundo responsable de fuerzas especiales.

Las autorizaciones de armamento específicas de estos cargos deberán respetar la distribución oficial publicada por la administración.`,
      }, 
{
        title: "4.6. Armamento del líder de fuerzas especiales",
        content: `El líder de fuerzas especiales podrá portar un máximo de 4 municiones para lanzagranadas.

Deberá respetar las demás restricciones generales y las disposiciones de armamento que correspondan a su facción.`,
      }, 
{
        title: "4.7. Armamento del segundo responsable",
        content: `El segundo responsable de fuerzas especiales podrá utilizar:

• 1 Barrett.
• Mira 1x.

Esta autorización deberá respetar los límites de armamento por facción y las disposiciones oficiales aplicables.`,
      }, 
    ],
  },

  {
    id: "procedimientos",
    title: "Arrestos, secuestros y muertes",
    icon: "handcuffs",
    rules: [
{
        title: "5.1. Tiempo máximo de arresto",
        content: `El tiempo máximo permitido para mantener a un jugador arrestado será de 20 minutos.

• El tiempo comenzará a contabilizarse desde que el jugador quede efectivamente bajo arresto y custodia.
• No se permitirá prolongar el arresto mediante traslados, cambios de ubicación o interrupciones artificiales.
• Una vez cumplidos los 20 minutos, el jugador deberá ser liberado.
• Ninguna facción podrá mantener a una persona detenida por más tiempo alegando que todavía se encuentra realizando un interrogatorio o procedimiento de rol.

La administración podrá intervenir cuando se incumpla este límite.`,
      }, 
{
        title: "5.2. Prohibición de evadir un arresto",
        content: `Queda prohibido evadir un arresto mediante las siguientes acciones:

• Reiniciar el juego.
• Desconectarse intencionalmente del servidor.
• Cambiarse de facción.
• Utilizar cualquier otro procedimiento para evitar las consecuencias de un arresto en curso.

La infracción será evaluada y sancionada por la administración.`,
      }, 
{
        title: "5.3. Regla de regreso al lugar de muerte",
        content: `Cuando un jugador sea abatido, no podrá regresar inmediatamente al mismo lugar donde murió para reincorporarse al enfrentamiento.

Deberá respetar un tiempo de espera de 5 minutos antes de regresar a esa zona.

EXCEPCIÓN:

Se permitirá regresar cuando uno de los tres primeros mandos de su facción se encuentre en esa zona y esté siendo secuestrado.

Esta excepción no autoriza al jugador a utilizar información externa ni a regresar para intervenir en otros enfrentamientos ajenos al motivo de la excepción.`,
      }, 
    ],
  },

  {
    id: "persecuciones",
    title: "Persecuciones y bases",
    icon: "route",
    rules: [
{
        title: "6.1. Regla de persecución",
        content: `Si un jugador está siendo perseguido por un vehículo del Gobierno o de los Malandros y decide ingresar a su propia base para refugiarse, los perseguidores podrán ingresar a dicha base para continuar la intervención, atacarlo o realizar un secuestro.

Para que esta excepción sea válida deberán cumplirse todas las condiciones:

1. La persecución deberá haber comenzado antes de que el jugador ingrese a la base.
2. Deberá existir una persecución activa y continua.
3. Los perseguidores deberán estar participando directamente en dicha persecución.
4. El ingreso a la base deberá tener como finalidad continuar la persecución existente.

No se permitirá utilizar esta regla para justificar ataques contra bases sin una persecución previa.`,
      }, 
{
        title: "6.2. Límites de la excepción",
        content: `IMPORTANTE:

Si no existe una persecución activa, ningún jugador podrá ingresar a una base para atacar o secuestrar a sus integrantes sin un rol previo que lo justifique.

La simple presencia de un vehículo enemigo cerca de una base no constituye una persecución activa.

Esta excepción no autoriza a iniciar conflictos nuevos utilizando una persecución inexistente como justificación.`,
      }, 
    ],
  },

  {
    id: "civiles",
    title: "Protección de civiles",
    icon: "shield-check",
    rules: [
{
        title: "7.1. Condiciones para ser considerado civil",
        content: `Esta regla aplica tanto al Gobierno como a los Malandros.

Para recibir la protección de civil, el jugador deberá cumplir simultáneamente las siguientes condiciones:

• Encontrarse en estado civil.
• Utilizar vestimenta civil.
• No portar ningún tipo de arma.
• Conducir un vehículo civil normal, no blindado ni de uso militar.
• No estar participando voluntariamente en un enfrentamiento.
• No representar una amenaza para otros jugadores.

La protección no será aplicable si el jugador incumple alguna de estas condiciones.`,
      }, 
{
        title: "7.2. Prohibición de disparar contra civiles",
        content: `Un jugador que cumpla las condiciones anteriores no podrá recibir disparos por parte del Gobierno o los Malandros mientras no represente una amenaza.

Está prohibido disparar contra civiles únicamente por sospechas, apariencia, antecedentes o pertenencia anterior a una facción.`,
      }, 
{
        title: "7.3. Paradas vehiculares",
        content: `Tanto el Gobierno como los Malandros podrán realizar paradas a vehículos civiles.

Durante una parada:

• Se podrá ordenar al conductor que detenga su vehículo.
• El conductor deberá acatar la orden.
• Si el conductor no acata la orden e intenta darse a la fuga, se permitirá abrir fuego.
• Si el conductor se detiene y no representa una amenaza, deberá respetarse su protección de civil.

La negativa a detenerse deberá manifestarse mediante una acción clara de fuga y no únicamente por una demora o confusión.`,
      }, 
{
        title: "7.4. Civiles en zonas de conflicto",
        content: `Si un jugador que se encuentra como civil decide ingresar voluntariamente a una zona donde se está desarrollando un enfrentamiento, perderá la posibilidad de reclamar protección frente a las consecuencias del conflicto en el que se ha involucrado.

Esta excepción no autoriza a disparar contra civiles ajenos al enfrentamiento ni elimina la necesidad de identificar una amenaza o participación real.`,
      }, 
{
        title: "7.5. Responsabilidad de las facciones",
        content: `Tanto Gobierno como Malandros serán responsables de respetar esta protección.

El incumplimiento podrá ser sancionado por la administración.`,
      }, 
    ],
  },

  {
    id: "monstruos",
    title: "Monstruos y helicópteros",
    icon: "helicopter",
    rules: [
{
        title: "8.1. Monstruos",
        content: `Los monstruos podrán ser desplegados con un intervalo mínimo de 30 minutos.

Si una facción despliega un monstruo y este:

• Es destruido.
• Es explotado.
• Se pierde.
• Deja de estar disponible por cualquier motivo.

La facción deberá esperar 30 minutos antes de desplegar otro.

El tiempo de espera se contará desde que el monstruo anterior deje de estar disponible.

No se permitirá utilizar otro integrante de la facción para evitar el tiempo de espera.`,
      }, 
{
        title: "8.2. Helicóptero artillado del Gobierno",
        content: `Cuando exista un monstruo activo, el Gobierno tendrá permitido desplegar 1 helicóptero artillado para hacerle frente.

Esta autorización es una excepción vinculada exclusivamente a la existencia de un monstruo activo.

Si el Gobierno pierde o le destruyen el helicóptero artillado, deberá esperar 35 minutos antes de desplegar otro.

El tiempo de espera comenzará a contabilizarse desde la destrucción o pérdida del helicóptero.

No se permitirá utilizar esta autorización cuando no exista un monstruo activo.`,
      }, 
    ],
  },

  {
    id: "alianzas",
    title: "Alianzas entre carteles",
    icon: "handshake",
    rules: [
{
        title: "9.1. Prohibición de alianzas",
        content: `Los carteles tienen prohibido establecer alianzas permanentes o temporales para:

• Patrullar conjuntamente.
• Participar juntos en enfrentamientos.
• Compartir operaciones militares.
• Reforzarse mutuamente sin una excepción autorizada.

Cada cartel deberá operar de manera independiente.`,
      }, 
{
        title: "9.2. Rol previamente justificado",
        content: `Se permitirá la unión entre carteles cuando exista un rol que justifique la colaboración.

La alianza deberá responder a una situación concreta dentro del juego y no podrá utilizarse como excusa para mantener una cooperación permanente.`,
      }, 
{
        title: "9.3. Secuestro de un mando criminal",
        content: `Cuando uno de los tres primeros mandos de una facción criminal sea secuestrado, los carteles podrán unirse para intervenir en la situación.

Esta excepción deberá limitarse a la situación de secuestro que la justifica.`,
      }, 
{
        title: "9.4. Secuestro de un mando del Gobierno",
        content: `Cuando los carteles tengan secuestrado a uno de los tres primeros mandos de la facción de Gobierno, podrán unirse para enfrentarse al Gobierno.

Esta excepción deberá limitarse a la situación de secuestro que la justifica.`,
      }, 
{
        title: "9.5. Limitaciones y finalización de las excepciones",
        content: `Las alianzas autorizadas deberán limitarse a la situación que las justifica.

Una vez finalizada dicha situación, los carteles deberán volver a operar de manera independiente.

No se permitirá utilizar un secuestro como pretexto para mantener patrullajes, operaciones o enfrentamientos conjuntos ajenos al evento.`,
      }, 
    ],
  },

  {
    id: "administracion",
    title: "Sanciones y disposición final",
    icon: "scale",
    rules: [
{
        title: "10.1. Autoridad administrativa",
        content: `La administración será responsable de supervisar el cumplimiento del presente reglamento.

Podrá revisar las circunstancias de cada incidente y determinar si existió una infracción.`,
      }, 
{
        title: "10.2. Responsabilidad del jugador",
        content: `Todo jugador será responsable de conocer las reglas antes de participar en el servidor.

El desconocimiento del reglamento no será considerado una justificación automática para incumplirlo.`,
      }, 
{
        title: "10.3. Evidencias",
        content: `Cuando exista una denuncia, la administración podrá solicitar evidencias como:

• Grabaciones.
• Capturas de pantalla.
• Registros disponibles del servidor.
• Testimonios de los participantes.
• Cualquier otro elemento que permita esclarecer los hechos.`,
      }, 
{
        title: "10.4. Interpretación de las reglas",
        content: `Las excepciones deberán estar expresamente contempladas en este reglamento.

Ningún jugador podrá crear, ampliar o modificar una excepción por decisión propia.

En caso de contradicción entre una regla general y una excepción específica, prevalecerá la excepción únicamente dentro de los límites que establece.

Las modificaciones oficiales deberán ser comunicadas por la administración.`,
      }, 
{
        title: "10.5. Sanciones",
        content: `El incumplimiento de cualquiera de las disposiciones podrá derivar en una sanción administrativa.

La sanción deberá considerar:

• La gravedad de la infracción.
• Las circunstancias en las que ocurrió.
• La evidencia disponible.
• La reincidencia del jugador.

La administración determinará la medida correspondiente de acuerdo con cada caso.`,
      }, 
{
        title: "10.6. Cumplimiento obligatorio",
        content: `El presente reglamento es de cumplimiento obligatorio para todos los jugadores del servidor, independientemente de su facción, rango o antigüedad.

Ningún jugador, líder o integrante de una facción está por encima de estas disposiciones.

Solo serán válidas las excepciones expresamente establecidas en este reglamento o comunicadas oficialmente por la administración.

Todo jugador deberá conocer y respetar las normas antes de participar en el servidor.

El respeto al reglamento garantiza un entorno de roleplay justo, organizado y equilibrado para todos los participantes.`,
      }, 
    ],
  },

];
