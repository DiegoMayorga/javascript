/* Al sumar 3 + '3', el resultado es el string '33'. */
// Eso sucede porque el operador + también soporta strings (para concatenación de strings)
// Este es el único operador aritmético que soporta strings. Por ejemplo, esto no funcionará: "hi" - "i". Esto resultará NaN.

// NaN se verá más adelante. La conclusión es que no se puede generar un string como el ejemplo anterior. Solo + soporta strings y números.

// Afortunadamente, JS es muy inteligente ya que es capaz de manejar este código:
// 3 * "3" = 9 -> Esto produce un número, no una cadena.

// De igual manera, estas operaciones también funcionan:
// 3 - "3" = 0
// 3 / "3" = 1

// Solamente 3 + "3" da "33" porque aquí JavaScript usa el modo "Puedo combinar texto" del operador + y genera un string en vez de un número.