## PASARELA DE PAGO

De cara a la posibilidad de añadir nuevos métodos de pago se ha creado una **clase abstracta (PGateway)** con los parámetros y métodos generales para todas las distintas pasarelas de pago.

Adicionalmente se han añadido dos pasarelas de pago de ejemplo, que implementan los métodos abstractos de la clase padre y en el caso de PGateway2, también un método propio suyo.

Se han generado los modelos propios para el **importe** y para el **método de pago**.
