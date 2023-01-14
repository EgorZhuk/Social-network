import './index.css';
import {rerenderEntireTree} from './render';
import state from './redux/state';


// export const rerenderEntireTree = () => {
//   ReactDOM.render(
//     <App
//       state={state}
//       addPost={addPost}
//     />,
//     document.getElementById('root')
//   );
// };

rerenderEntireTree(state);