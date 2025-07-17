/* 

1. Ubicación por defecto y comportamiento estándar:

Cuando se incluye un <script> sin async ni defer, el navegador descarga y ejecuta el script inmediatamente cuando lo encuentra en el HTML.
Esto bloquea el parseo del resto del documento hasta que el script se haya descargado y ejecutado, lo cual puede afectar negativamente
al rendimiento y la experiencia del usuario.

defer:

* Este atributo permite descargar el script en segundo plano mientras se sigue cargando el HTML.
* La ejecución del script se retrasa hasta que todo el HTML ha sido completamente parseado, pero antes del evento DOMContentLoaded.
* Es ideal para scripts que dependen del DOM, ya que garantiza que todo el DOM esté disponible cuando se ejecute.
* Si hay múltiples scripts con defer, se ejecutan en el orden en que aparecen en el documento.

async:

* También descarga el script en paralelo, pero lo ejecuta tan pronto como esté disponible, sin esperar a que el HTML termine de cargarse.
* Esto puede mejorar la velocidad, pero tiene una desventaja: los scripts async se ejecutan en orden aleatorio, dependiendo de cuál se
descargue primero.
* Por esta razón, no es recomendable usar async con scripts que dependen entre sí (por ejemplo, bibliotecas y plugins que requieren un
orden de carga específico).

Comparación async vs defer:

Característica                             async	                                   defer
Descarga paralela	                        ✅	                                       ✅
Bloquea el HTML	                            ❌	                                       ❌
Espera al parseo del DOM	                ❌	                                       ✅
Orden de ejecución	                    No garantizado	                    Garantizado (según el orden)
Uso recomendado	            Scripts independientes (ej. analytics)	    Scripts dependientes del DOM o entre sí

Inline scripts y atributos async/defer:

Si un <script> contiene código inline (es decir, código dentro de la etiqueta), los atributos async y defer no tienen efecto.
Si el <script> tiene tanto contenido inline como un atributo src, el navegador ignora el contenido inline y carga el archivo
externo indicado por src. */