// Ours
import Cursor from '../../../cursor'
import Code from '../../../code'

const Api = () => (
  <section id="api" className="x:pad-bt-20 s:pad-bt-40 bg-grey-50">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Consumiendo el AP<Cursor>I</Cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <p>
            La lógica para calcular la distancia entre la ubicación del usuario
            a los scooters más cercanos ya fue implementada en nuestro servicio
            web. Sólo necesita conocer el par de coordenadas que representan
            dónde está el usuario al momento de abrir la app.
          </p>
        </div>
        <div className="x:scol-12">
          <h3>
            Ejemplo de petició<Cursor>n</Cursor>
          </h3>
          <Code>
            curl -X GET \
            'https://beta.econduce.mx/api/estaciones/get_nearest_map_features.json?latitude=19.403403&longitude=-99.181533'
            \ -H 'Content-Type: application/json' \ -H 'apiKey:
            a5fcd0fa781a793183dcb66c12978a47’
          </Code>
        </div>
        <div className="x:scol-12">
          <h3>
            Respuest<Cursor>a</Cursor>
          </h3>
          <Code>
            {`[
    {
      "type": “parked",
      "geometry": {
        "coordinates": [
          19.402396,
          -99.18082
        ]
      },
      "properties": {
        "id": 10651,
        "parent_feature_id": 25,
        "number": 401,
        "power": 0,
        "power_calculated": true,
        "range": 0,
        "distance": 134,
        "charging_enabled": true
      }
    },
    {
      "type": "free_float",
      "geometry": {
        "coordinates": [
          19.406399,
          -99.177223
        ]
      },
      "properties": {
        "id": 633,
        "parent_feature_id": 166,
        "number": 324,
        "power": 80,
        "power_calculated": true,
        "range": 23,
        "distance": 561,
        "charging_enabled": true
      }
    }
]`}
          </Code>
        </div>
        <div className="x:scol-12">
          <h3>
            Ordenar por relevanci<Cursor>a</Cursor>
          </h3>
          <br />
          <p>
            Cuando un usuario quiere tomar un scooter, generalmente busca el más
            cercano que tenga el rango de kilómetros de rendimiento necesario
            para llegar a su destino. En la respuesta de ejemplo, estos valores
            están indicados en los parámetros range y distance:
          </p>
          <Code>
            {`"properties": {
  "id": 633,
  "parent_feature_id": 166,
  "number": 324,
  "power": 80, // 80% de batería
  "power_calculated": true,
  "range": 23, // 23 km de rendimiento
  "distance": 561, // distancia en metros
  "charging_enabled": true
}`}
          </Code>
        </div>
      </div>
    </div>
  </section>
)

export default Api
