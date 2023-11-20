import html from "./core.js"
import { connect } from "./store.js"

const connecter = connect()
function app({ cars }){
      return html`
            <ul>
                  ${cars.map(car => `<li>${car}</li>`)}
            </ul>
            <button onClick="dispacth('ADD','poche')">add car</button>
      `
}
export default connecter(app)