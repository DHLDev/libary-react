import { CreateStore } from "./core.js";
import reducer from "./reducer.js"

const {attach,connect,dispacth} = CreateStore(reducer)

window.dispacth = dispacth()
export {
      attach,
      connect
}