#### ES:

# Como crear tablas HTML con react

El contenido de toda tabla html está encerrado entre los elementos **\<table>** y **\</table>**.

El contenedor más pequeño que existe dentro de una tabla html es la celda. Una celda se crea con el elemento **\<td>**.

Con react, al hacer los pasos arriba mencionados el navegador nos da un error (\<td> cannot appear as a child of \<table>). Para solucionarlo hay que agregar los elementos **\<tr>** y **\<tbody>**. Tras haber añadido primero \<tr>, react nos señala en el error que añadamos \<tbody>. El código debe de quedar de la siguiente manera:

```
<table>
  <tbody>
    <tr>
      <td>
        texto en la celda
      </td>
    </tr>
  </tbody>
</table>
```

Como \<td> es una celda, cuando se agregan celdas se colocan una al lado de la otra, formando un fila. Para crear una columna utilizamos el elemento **\<tr>**.

Cuando creamos columnas, separamos el valor de su par clave, haciendo que el formato renderizado sea más legible, alineando todos los valores en una misma columna.

---

#### EN:

# How to create HTML tables with react

The content of any html table is enclosed between the **table>** and **table>** elements.

The smallest container that exists within an html table is the cell. A cell is created with the element **<td>**.

With react, when doing the above steps the browser gives us an error (\<td> cannot appear as a child of \<table>). To solve it, we have to add the elements **\<tr>** and **\<tbody>**. After first adding \<tr>, react tells us in the error to add \<tbody>. The code should look like this:

```
<table>
  <tbody>
    <tr>
      <td>
        texto en la celda
      </td>
    </tr>
  </tbody>
</table>
```

Since \<td> is a cell, when cells are added they are placed next to each other, forming a row. To create a column, we use the element **<tr>**.

When we create columns, we separate the value from its key pair, making the rendered format more readable, by aligning all values in the same column.

---

#### DE:

# Wie man HTML-Tabellen mit react erstellt

Der Inhalt einer html-Tabelle wird zwischen den Elementen **table>** und **table>** eingeschlossen.

Der kleinste Container in einer html-Tabelle ist die Zelle. Eine Zelle wird mit dem Element **<td>** erstellt.

Mit react gibt der Browser bei den obigen Schritten einen Fehler aus (\<td> kann nicht als Kind von \<table> erscheinen). Um dieses Problem zu lösen, müssen wir die Elemente **<tr>** und **<tbody>** hinzufügen. Nachdem wir zunächst \<tr> hinzugefügt haben, weist uns react in der Fehlermeldung darauf hin, \<tbody> hinzuzufügen. Der Code sollte wie folgt aussehen:

```
<table>
  <tbody>
    <tr>
      <td>
        texto en la celda
      </td>
    </tr>
  </tbody>
</table>
```

Da es sich bei \<td> um eine Zelle handelt, werden die Zellen beim Hinzufügen nebeneinander platziert und bilden eine Reihe. Um eine Spalte zu erstellen, verwenden wir das Element **tr>**.

Bei der Erstellung von Spalten wird der Wert von seinem Schlüsselpaar getrennt, um das gerenderte Format lesbarer zu machen, indem alle Werte in derselben Spalte angeordnet werden.
